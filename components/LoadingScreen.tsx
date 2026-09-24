'use client'

import { useEffect, useRef, useState } from 'react'

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let disposed = false
    let anim: { destroy: () => void } | undefined
    let fallback = 0

    const dismiss = () => {
      if (disposed) return
      disposed = true
      window.clearTimeout(fallback)
      window.removeEventListener('scene-ready', dismiss)
      setFading(true)
      window.setTimeout(() => setHidden(true), 550)
    }

    // A brief, functional loading indicator is fine even with reduced motion;
    // an animated one is not, so it's skipped in favor of the static message below.
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches && containerRef.current) {
      import('lottie-web').then(({ default: lottie }) => {
        if (disposed || !containerRef.current) return
        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/loading.json',
        })
      })
    }

    window.addEventListener('scene-ready', dismiss)
    // Safety net: never block the page for more than a few seconds, even if
    // the video fails silently or the event never arrives for some reason.
    fallback = window.setTimeout(dismiss, 6000)

    return () => {
      disposed = true
      window.clearTimeout(fallback)
      window.removeEventListener('scene-ready', dismiss)
      anim?.destroy()
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen${fading ? ' loading-screen-fade' : ''}`} role="status" aria-live="polite">
      <svg className="loading-bg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="loading-sky" x2="0" y2="1">
            <stop stopColor="#f6ecd4" />
            <stop offset="1" stopColor="#e6ecd2" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#loading-sky)" />
        <circle cx="1160" cy="190" r="70" fill="#f2d9a6" opacity=".55" />
        <path d="M0 560Q220 500 460 545T900 520 1440 560V900H0Z" fill="#d9e2bb" opacity=".8" />
        <path d="M0 660Q260 600 540 645T1080 615 1440 650V900H0Z" fill="#c6d5a3" opacity=".85" />
        <path d="M0 760Q300 705 640 745T1440 735V900H0Z" fill="#aec488" />
        {[[120, 250, 1], [1310, 320, .8], [90, 720, .9], [1360, 680, 1.1], [700, 210, .7]].map(([x, y, s], i) => (
          <path key={i} transform={`translate(${x} ${y}) scale(${s})`} d="M0 20Q-3 4 8 0Q3 12 0 20Z" fill="#8fa26a" opacity=".65" />
        ))}
      </svg>
      <div ref={containerRef} className="loading-anim" aria-hidden="true" />
      <p className="handwritten loading-text">Setting the scene<span className="loading-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span></p>
    </div>
  )
}
