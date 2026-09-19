'use client'

import { useEffect, useState } from 'react'
import { Pause, Play } from 'lucide-react'

export default function StoryMotion() {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined
    const sync = () => {
      const stopped = paused || preference.matches
      root.dataset.motion = stopped ? 'paused' : 'running'
    }
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true')
          observer?.unobserve(entry.target)
        }
      }), { threshold: .08 })
    }
    const observe = () => document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-observed])').forEach(element => {
      if (!observer) return
      element.dataset.observed = 'true'
      observer.observe(element)
    })
    observe()
    const mutations = new MutationObserver(observe)
    mutations.observe(document.body, { childList: true, subtree: true })
    sync()
    preference.addEventListener('change', sync)
    return () => {
      observer?.disconnect()
      mutations.disconnect()
      preference.removeEventListener('change', sync)
      document.querySelectorAll('[data-observed]').forEach(element => element.removeAttribute('data-observed'))
      delete root.dataset.motion
    }
  }, [paused])
  return <button className="motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Resume ambient motion' : 'Pause ambient motion'}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{paused ? 'Motion paused' : 'Pause motion'}</span></button>
}
