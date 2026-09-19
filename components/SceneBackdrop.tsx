'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEO = '/media/nature-scroll.mp4'
const POSTER = '/media/nature-poster.jpg'
const FRAME_INTERVAL = 1000 / 30
const TIME_EPSILON = 1 / 24

export default function SceneBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [simplified, setSimplified] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
    let stopped = true
    let broken = false
    let disposed = false
    let target = 0
    let measureFrame = 0
    let seekFrame = 0
    let lastSeek = 0

    const canSeek = () => !disposed && !stopped && !broken &&
      !document.hidden && video.readyState >= 2 && Number.isFinite(video.duration)

    // There is no playback clock. Only a changed scroll target schedules seeks,
    // and waiting for seeked prevents overlapping decoder work on slower phones.
    const scheduleSeek = () => {
      if (!seekFrame && canSeek() && !video.seeking &&
          Math.abs(target - video.currentTime) >= TIME_EPSILON) {
        seekFrame = requestAnimationFrame(seek)
      }
    }
    const seek = (now: number) => {
      seekFrame = 0
      if (!canSeek() || video.seeking) return
      if (now - lastSeek < FRAME_INTERVAL) {
        seekFrame = requestAnimationFrame(seek)
        return
      }
      const delta = target - video.currentTime
      if (Math.abs(delta) < TIME_EPSILON) return
      lastSeek = now
      const nextTime = Math.abs(delta) < .12 ? target : video.currentTime + delta * .4
      try {
        video.currentTime = Math.max(0, Math.min(video.duration - TIME_EPSILON, nextTime))
      } catch {
        fail()
      }
    }
    const measure = () => {
      measureFrame = 0
      if (stopped || document.hidden || broken) return
      const doc = document.documentElement
      const travel = Math.max(1, doc.scrollHeight - doc.clientHeight)
      const progress = Math.max(0, Math.min(1, doc.scrollTop / travel))
      if (Number.isFinite(video.duration)) {
        target = progress * Math.max(0, video.duration - TIME_EPSILON)
        scheduleSeek()
      }
    }
    const scheduleMeasure = () => {
      if (!measureFrame && !stopped && !document.hidden) {
        measureFrame = requestAnimationFrame(measure)
      }
    }
    const cancelFrames = () => {
      cancelAnimationFrame(measureFrame)
      cancelAnimationFrame(seekFrame)
      measureFrame = 0
      seekFrame = 0
    }
    const loadIfNeeded = () => {
      if (!stopped && !broken && !video.getAttribute('src')) {
        video.preload = 'auto'
        video.src = VIDEO
        video.load()
      }
    }
    const syncMotion = () => {
      stopped = reducedMotion.matches || document.documentElement.dataset.motion === 'paused'
      setSimplified(reducedMotion.matches)
      if (stopped) {
        cancelFrames()
        video.pause()
      } else {
        loadIfNeeded()
        scheduleMeasure()
      }
    }
    const loaded = () => {
      setReady(true)
      scheduleMeasure()
    }
    const fail = () => {
      broken = true
      cancelFrames()
      setFailed(true)
      video.pause()
    }
    const visibilityChanged = () => {
      if (document.hidden) cancelFrames()
      else scheduleMeasure()
    }
    // Guard against browser or extension initiated playback, too.
    const keepPaused = () => video.pause()
    video.muted = true
    video.addEventListener('play', keepPaused)
    video.addEventListener('loadedmetadata', scheduleMeasure)
    video.addEventListener('loadeddata', loaded)
    video.addEventListener('canplay', loaded)
    video.addEventListener('seeked', scheduleSeek)
    video.addEventListener('error', fail)
    window.addEventListener('scroll', scheduleMeasure, { passive: true })
    window.addEventListener('resize', scheduleMeasure)
    document.addEventListener('visibilitychange', visibilityChanged)
    reducedMotion.addEventListener('change', syncMotion)

    const motionObserver = new MutationObserver(syncMotion)
    motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion'] })

    syncMotion()
    if (video.readyState >= 2) loaded()

    return () => {
      disposed = true
      cancelFrames()
      video.pause()
      motionObserver.disconnect()
      window.removeEventListener('scroll', scheduleMeasure)
      window.removeEventListener('resize', scheduleMeasure)
      document.removeEventListener('visibilitychange', visibilityChanged)
      reducedMotion.removeEventListener('change', syncMotion)
      video.removeEventListener('play', keepPaused)
      video.removeEventListener('loadedmetadata', scheduleMeasure)
      video.removeEventListener('loadeddata', loaded)
      video.removeEventListener('canplay', loaded)
      video.removeEventListener('seeked', scheduleSeek)
      video.removeEventListener('error', fail)
    }
  }, [])

  return (
    <div className="scene-backdrop" aria-hidden="true" data-ready={ready && !failed && !simplified}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={POSTER} alt="" className="scene-poster" />
      <video ref={videoRef} className="scene-video" muted playsInline preload="none" disablePictureInPicture disableRemotePlayback tabIndex={-1} />
      <div className="scene-wash" />
    </div>
  )
}
