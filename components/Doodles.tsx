'use client'

import React from 'react'

interface SparkleProps {
  className?: string
  color?: string
}

export function Sparkle({ className, color = 'var(--accent-rose)' }: SparkleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ color }}
    >
      <path
        d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface CornerTapeProps {
  className?: string
  color?: string
}

export function CornerTape({ className, color = 'var(--accent-mustard)' }: CornerTapeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      aria-hidden="true"
      style={{ color, transform: 'rotate(0deg)' }}
    >
      <path
        d="M4 56 C 18 58, 42 58, 56 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      <path
        d="M4 56 C 12 52, 40 12, 56 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface BracketMarkProps {
  className?: string
  style?: React.CSSProperties
}

export function BracketMark({ className, style }: BracketMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      width="40"
      height="40"
      aria-hidden="true"
      style={{ transform: 'rotate(3deg)', ...style }}
    >
      <path
        d="M4 6 h11 a3 3 0 0 1 3 3 v22 a3 3 0 0 1 -3 3 H4 Z"
        fill="rgba(144, 124, 177, 0.22)"
        stroke="var(--accent-lavender)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M36 34 h-11 a3 3 0 0 1 -3 -3 V9 a3 3 0 0 1 3 -3 h11"
        fill="rgba(110, 157, 181, 0.20)"
        stroke="var(--accent-blue)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface CurlyArrowProps {
  className?: string
  direction?: 'right' | 'left'
  color?: string
}

export function CurlyArrow({
  className,
  direction = 'right',
  color = 'var(--accent-coral)',
}: CurlyArrowProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      aria-hidden="true"
      style={{ transform: direction === 'right' ? 'rotate(0deg)' : 'rotate(180deg)', color }}
    >
      <path
        d="M2 20 C 8 4, 22 4, 30 14 C 38 24, 46 12, 58 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 2 L60 6 L54 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TinyFlower({
  className,
  color = 'var(--accent-lavender)',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      {[
        [16, 7],
        [22, 12],
        [22, 20],
        [16, 25],
        [10, 20],
        [10, 12],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3.2"
          fill="currentColor"
          opacity={0.85}
        />
      ))}
      <circle cx="16" cy="16" r="3.4" fill="var(--surface-yellow)" stroke={color} strokeWidth="1.2" />
    </svg>
  )
}

export function PencilStripe({
  className,
  color = 'var(--text-muted)',
}: {
  className?: string
  color?: string
}) {
  return (
    <div
      className={className}
      style={{
        height: 4,
        background: `linear-gradient(90deg, transparent 0%, ${color} 22%, ${color} 78%, transparent 100%)`,
        borderRadius: 999,
        transform: 'rotate(-2deg)',
        boxShadow: '1px 1px 0 rgba(73, 63, 71, 0.18)',
      }}
      aria-hidden="true"
    />
  )
}

export function SketchButtonUnderline({
  className,
  color = 'var(--accent-coral)',
}: {
  className?: string
  color?: string
}) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: 10,
        bottom: -3,
        width: 34,
        height: 5,
        borderRadius: 999,
        background: `radial-gradient(circle at 30% 50%, ${color}, ${color})`,
        boxShadow: '1px 2px 0 rgba(73, 63, 71, 0.2)',
        transform: 'rotate(4deg)',
        opacity: 0.85,
      }}
    />
  )
}

interface HandwrittenLogoProps {
  style?: React.CSSProperties
}

export function HandwrittenLogo({ style }: HandwrittenLogoProps) {
  return (
    <span
      className="inline-flex items-center gap-2"
      style={{
        fontFamily: '"Caveat", cursive',
        fontSize: 'clamp(2rem, 5vw, 3.1rem)',
        fontWeight: 700,
        letterSpacing: '0.02em',
        color: 'var(--text-primary)',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        aria-hidden="true"
        style={{ transform: 'rotate(-8deg)', marginRight: 2 }}
      >
        <path
          d="M4 20 C 8 18, 16 14, 20 4 C 22 0, 22 2, 18 4"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="5" cy="5.5" r="1.1" fill="var(--accent-mustard)" stroke="var(--accent-mustard)" strokeWidth="0.6" />
        <circle cx="19" cy="17" r="0.9" fill="var(--accent-rose)" stroke="var(--accent-rose)" strokeWidth="0.6" />
      </svg>
      TK
      <svg
        viewBox="0 0 60 12"
        width="90"
        height="15"
        style={{ marginLeft: 2 }}
        aria-hidden="true"
      >
        <path
          d="M1 8 C 16 9, 40 4, 58 7"
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ filter: 'blur(0.2px)' }}
        />
      </svg>
    </span>
  )
}

interface BlobBlobProps {
  className?: string
  color?: string
  offset?: { x?: number; y?: number }
}

export function BlobBlob({ className, color = 'var(--surface-blue)', offset }: BlobBlobProps) {
  return (
    <div
      className={`absolute pointer-events-none blur-xl ${className || ''}`}
      aria-hidden="true"
      style={{
        width: 220,
        height: 220,
        background: color,
        borderRadius: '70% 30% 60% 40% / 40% 60% 30% 70%',
        opacity: 0.45,
        transform: `translate(${offset?.x ?? 0}px, ${offset?.y ?? 0}px)`,
      }}
    />
  )
}
