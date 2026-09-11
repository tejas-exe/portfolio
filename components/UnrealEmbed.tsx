'use client'

import { useRef, useState, useEffect } from 'react'

interface UnrealEmbedProps {
  className?: string
}

export default function UnrealEmbed({ className }: UnrealEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="unreal"
      className={`relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden ${className || ''}`}
      style={{ background: 'var(--background)' }}
    >
      {/* Soft paper blobs */}
      <div className="absolute top-1/3 right-[12%] h-72 w-72 rounded-full bg-[var(--surface-lavender)] opacity-55 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-6 h-64 w-64 rounded-full bg-[var(--surface-mint)] opacity-60 blur-[80px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-4xl">
        <p className="section-kicker justify-center">3D Showcase</p>
        <h2 className="section-heading text-center mb-2">
          Bringing Ideas Into{' '}
          <span className="marker-blue">3D Space</span>
        </h2>
        <p className="mx-auto mb-10 text-center text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
          A small rotating collection of Unreal-style models — part of the creative work I explore
          alongside web engineering. Scroll down and the viewer fades in as it enters the page.
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sketch overflow-hidden transition-all duration-500">
            {/* Tape row */}
            <div className="absolute -top-2 left-4 right-4 flex justify-between px-2 pt-2" aria-hidden="true">
              <div className="h-4 w-10 rounded-sm bg-[var(--surface-yellow)] border border-[var(--accent-mustard)]/70 opacity-80" style={{ boxShadow: '1px 1px 0 rgba(130, 105, 120, 0.15)' }} />
              <div className="h-4 w-10 rounded-sm bg-[var(--surface-yellow)] border border-[var(--accent-mustard)]/70 opacity-80 rotate-12" style={{ boxShadow: '1px 1px 0 rgba(130, 105, 120, 0.15)' }} />
            </div>

            {/* Embed only renders once the component is mounted and visible */}
            {mounted && inView ? (
              <iframe
                className="w-full aspect-video border-0"
                src="https://sketchfab.com/playlists/embed?collection=c4687c0819564f9ca881952bdc7f2a26&autostart=0"
                title="Unreal"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
              />
            ) : (
              <div className="w-full aspect-video rounded-2xl bg-[var(--surface-mint)] flex items-center justify-center text-[var(--text-muted)] text-center px-6">
                <div className="flex flex-col items-center gap-2 animate-pulse">
                  <svg className="h-10 w-10 text-[var(--accent-blue)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.08c0-.36-.15-.7-.45-.85C12.35 5 11.25 5.25 10.5 5.25c-.75 0-1.25.2-.8.95 1.1.45 2.05.8 2.05 2.25 0 1.05-.6 1.75-1.5 1.75-.35 0-.6-.13-.8-.38-.25.27-.6.45-1.05.45-.6 0-1-.3-1.15-.75-.35.18-.7.57-.7 1.05 0 .75.65 1.2 1.5 1.2.9 0 1.5-.55 1.5-1.45 0-1-.7-1.6-1.75-1.6-.7 0-1.3.4-1.55.95-.25-.4-.5-.6-1-.6-.5 0-1 .2-1 .75 0 .4.3.7.75.7.2 0 .4-.07.55-.2.15.13.35.2.55.2.45 0 .7-.3.7-.75 0-.55-.4-1-.9-1.05-.5.05-.85.2-1.05.5-.2-.3-.45-.45-.8-.45-.45 0-.8.3-1 .75-.2-.4-.5-.6-1-.6-.5 0-1 .2-1 .75 0 .4.3.7.75.7.5 0 1-.3 1.25-.85.15.1.35.2.5.2.2 0 .35-.1.45-.25.1.15.3.22.5.22.35 0 .65-.2.65-.65 0-.45-.35-1-.9-1.15-.6.1-1.1.45-1.35.95-.25-.4-.6-.6-1.1-.6-.35 0-.7.1-1 .35 1.15.45 2.1.9 2.65 1.45.65-.55 1.1-1.25 1.1-2.1 0-.85-.4-1.6-1.25-2.05C7.7 4.8 7.1 4.5 6.3 4.5c-.75 0-1.5 2.25-1.5 2.25 0 .6.25 1 .75 1.25.25.05.4.07.6.07.5 0 .9-.2 1.15-.5l.2-.3z" />
                  </svg>
                  <p className="text-sm font-medium">3D viewer loading…</p>
                  <p className="text-xs opacity-60">Give it a moment to appear.</p>
                </div>
              </div>
            )}

            {/* Attribution / credit footer */}
            <div className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <p className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <a
                  href="https://sketchfab.com/yongchen.gao/collections/unreal-c4687c0819564f9ca881952bdc7f2a26"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[var(--accent-blue)] underline underline-offset-2 decoration-2 decoration-[var(--accent-blue)]/50 hover:text-[var(--accent-coral)] transition-colors"
                >
                  Unreal
                </a>
                {' '}by{' '}
                <a
                  href="https://sketchfab.com/yongchen.gao"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[var(--accent-blue)] underline underline-offset-2 decoration-2 decoration-[var(--accent-blue)]/50 hover:text-[var(--accent-coral)] transition-colors"
                >
                  yongchen.gao
                </a>
                {' '}on{' '}
                <a
                  href="https://sketchfab.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="font-semibold text-[var(--accent-blue)] underline underline-offset-2 decoration-2 decoration-[var(--accent-blue)]/50 hover:text-[var(--accent-coral)] transition-colors"
                >
                  Sketchfab
                </a>
              </p>

              <span className="text-[var(--text-muted)] mono">collection · c4687c08</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
