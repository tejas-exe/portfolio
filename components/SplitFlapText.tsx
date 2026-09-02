'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties, type HTMLAttributes } from 'react'
import styles from './SplitFlapText.module.css'

type SplitFlapTextProps = HTMLAttributes<HTMLDivElement> & {
  words?: string[]
  text?: string
  flipDuration?: number
  stagger?: number
  cycleDelay?: number
  charset?: 'alpha' | 'alphanumeric' | 'numeric' | string
  flipsPerChar?: number
  tileColor?: string
  textColor?: string
  tileRadius?: number | string
  gap?: number | string
  fontSize?: number | string
  loop?: boolean
  padTo?: number
}

type Tile = { current: string; next: string; flipping: boolean; tick: number }
const charsets = { alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', numeric: '0123456789' }
const defaultWords = ['BUILDING WEB APPS', 'SHIPPING IMPACT', 'OPEN TO COLLAB']
const cssUnit = (value: number | string) => typeof value === 'number' ? `${value}px` : value
const normalize = (value: string, width: number) => String(value ?? '').padEnd(width, ' ').slice(0, width)
const createTiles = (phrase: string): Tile[] => phrase.split('').map(current => ({ current, next: current, flipping: false, tick: 0 }))

export default function SplitFlapText({
  words = defaultWords, text, flipDuration = .12, stagger = .055,
  cycleDelay = 2600, charset = 'alphanumeric', flipsPerChar = 7, tileColor = '#18120f', textColor = '#fed7aa',
  tileRadius = 8, gap = 5, fontSize = 32, loop = true, padTo = 18, className = '', style, ...props
}: SplitFlapTextProps) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [tiles, setTiles] = useState<Tile[]>([])
  const frame = useRef<number>()
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const current = useRef('')
  const phrases = useMemo(() => text ? [text] : words.length ? words : ['BUILDING WEB APPS'], [text, words])
  const width = useMemo(() => Math.max(1, padTo, ...phrases.map(phrase => phrase.length)), [padTo, phrases])
  const normalized = useMemo(() => phrases.map(phrase => normalize(phrase, width)), [phrases, width])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update(); media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (frame.current) cancelAnimationFrame(frame.current)
    if (timer.current) clearTimeout(timer.current)
    const initial = normalized[0] ?? ''
    current.current = initial
    setTiles(createTiles(initial))
    if (normalized.length < 2) return

    const glyphs = charsets[charset as keyof typeof charsets] ?? (charset || charsets.alphanumeric)
    const flipMs = Math.max(40, flipDuration * 1000)
    const staggerMs = Math.max(0, stagger * 1000)
    let index = 0
    let cancelled = false

    const animateTo = (target: string) => {
      if (reducedMotion) { current.current = target; setTiles(createTiles(target)); return 0 }
      const plans = target.split('').map((targetChar, tileIndex) => {
        const from = current.current[tileIndex] || ' '
        if (from === targetChar) return null
        const sequence = Array.from({ length: Math.max(0, Math.floor(flipsPerChar)) }, () => glyphs[Math.floor(Math.random() * glyphs.length)] || ' ').concat(targetChar)
        return { tileIndex, from, targetChar, sequence, start: tileIndex * staggerMs, step: -1, done: false }
      }).filter(Boolean) as { tileIndex: number; from: string; targetChar: string; sequence: string[]; start: number; step: number; done: boolean }[]
      if (!plans.length) return 0
      const total = Math.max(...plans.map(plan => plan.start + plan.sequence.length * flipMs))
      const startedAt = performance.now()
      const tick = (now: number) => {
        if (cancelled) return
        const updates: { index: number; current: string; next: string; done: boolean }[] = []
        let pending = false
        plans.forEach(plan => {
          const step = Math.floor((now - startedAt - plan.start) / flipMs)
          if (step < 0) { pending = true; return }
          if (step < plan.sequence.length) { pending = true; if (step !== plan.step) { plan.step = step; updates.push({ index: plan.tileIndex, current: step ? plan.sequence[step - 1] : plan.from, next: plan.sequence[step], done: false }) } }
          else if (!plan.done) { plan.done = true; updates.push({ index: plan.tileIndex, current: plan.targetChar, next: plan.targetChar, done: true }) }
        })
        if (updates.length) setTiles(previous => previous.map((tile, index) => { const update = updates.find(item => item.index === index); return update ? { current: update.current, next: update.next, flipping: !update.done, tick: tile.tick + 1 } : tile }))
        if (pending) frame.current = requestAnimationFrame(tick)
        else current.current = target
      }
      frame.current = requestAnimationFrame(tick)
      return total
    }
    const schedule = (delay: number) => { timer.current = setTimeout(() => { if (cancelled) return; index += 1; if (index >= normalized.length && !loop) return; const duration = animateTo(normalized[index % normalized.length]); schedule(Math.max(400, cycleDelay) + duration) }, delay) }
    schedule(Math.max(400, cycleDelay))
    return () => { cancelled = true; if (frame.current) cancelAnimationFrame(frame.current); if (timer.current) clearTimeout(timer.current) }
  }, [normalized, width, charset, flipDuration, stagger, flipsPerChar, cycleDelay, loop, reducedMotion])

  const componentStyle = { '--tile-color': tileColor, '--text-color': textColor, '--tile-radius': cssUnit(tileRadius), '--tile-gap': cssUnit(gap), '--tile-font-size': cssUnit(fontSize), '--flip-duration': `${Math.max(.04, flipDuration)}s`, ...style } as CSSProperties
  return <div className={`${styles.root} ${className}`.trim()} style={componentStyle} role="text" aria-label={tiles.map(tile => tile.current).join('').trimEnd()} {...props}>
    {tiles.map((tile, index) => <span className={styles.tile} aria-hidden="true" key={index}>
      <span className={`${styles.half} ${styles.top}`}><span className={styles.char}>{tile.current === ' ' ? '\u00a0' : tile.current}</span></span>
      <span className={`${styles.half} ${styles.bottom}`}><span className={styles.char}>{tile.flipping ? tile.next : tile.current}</span></span>
      {tile.flipping && <><span className={`${styles.flap} ${styles.front}`} key={`front-${tile.tick}`}><span className={styles.char}>{tile.current === ' ' ? '\u00a0' : tile.current}</span></span><span className={`${styles.flap} ${styles.back}`} key={`back-${tile.tick}`}><span className={styles.char}>{tile.next === ' ' ? '\u00a0' : tile.next}</span></span></>}
    </span>)}
  </div>
}
