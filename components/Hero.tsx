'use client'

import { useMemo } from 'react'
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Download } from 'lucide-react'
import SplitFlapText from './SplitFlapText'

/* Drifting star particles over the wallpaper */
function StarParticles() {
  const stars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        delay: Math.random() * 14,
        duration: 11 + Math.random() * 10,
        gold: Math.random() > 0.6,
      })),
    []
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full animate-rise"
          style={{
            left: `${s.left}%`,
            bottom: '-6px',
            width: s.size,
            height: s.size,
            background: s.gold ? '#FFE9A8' : '#D3E8F5',
            boxShadow: s.gold
              ? '0 0 8px 2px rgba(255, 233, 168, 0.7)'
              : '0 0 8px 2px rgba(211, 232, 245, 0.6)',
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-28 sm:px-6 sm:py-32 lg:min-h-screen"
    >
      {/* The wallpaper shines through here — add a soft vignette + ambient spirit mists */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Gentle vignette — keeps the art visible while focusing the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,13,31,0.28)_100%)]" />
        {/* River-spirit teal mist */}
        <div className="absolute -bottom-24 -left-24 h-[480px] w-[480px] rounded-full bg-spirit-500/15 blur-[120px] animate-float-slow" />
        {/* Lantern warm glow from the center-left (echoing the lamp in the art) */}
        <div className="absolute top-[38%] left-[30%] h-[360px] w-[360px] rounded-full bg-lantern-500/15 blur-[110px] animate-pulse-soft" />
        {/* Cool sea mist */}
        <div className="absolute top-1/4 -right-24 h-[420px] w-[420px] rounded-full bg-sea-500/10 blur-[130px] animate-float-reverse" />
      </div>

      <StarParticles />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Two-column layout on lg, stacked on mobile */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          {/* LEFT — Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            {/* Status badge row */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {/* Available badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-spirit-400/40 bg-night-900/70 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-spirit-300 shadow-soft backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-spirit-400 animate-pulse"></span>
                Available for work
              </div>
              {/* Full-Stack badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-lantern-500/40 bg-night-900/70 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-lantern-300 shadow-soft backdrop-blur-md">
                <Sparkles size={13} />
                Full-Stack Specialist
                <Code2 size={13} />
              </div>
            </div>

            {/* Split flap ticker */}
            <div className="mb-6 flex w-full justify-center px-2 lg:justify-start lg:px-0">
              <SplitFlapText
                className="origin-left"
                words={[
                  'BUILDING MODERN WEB APPS',
                  'SEAMLESS API INTEGRATION',
                  'DEVELOPING BACKEND APIS!',
                  'CRAFTING WEB INTERFACES!',
                  'DESIGNING RELIABLE APIS!',
                  'BUILDING REAL TIME APPS!',
                  'MODELING APP DATA LAYERS',
                  'AUTOMATING APP WORKFLOWS',
                  'BOOSTING APP PERFORMANCE',
                  'DEPLOYING CLOUD SYSTEMS!',
                  'SHIPPING PRODUCTS FASTER',
                  'DESIGNING STRONG SYSTEMS',
                  'SOLVING COMPLEX PROBLEMS',
                  'REACT WITH NEXT JS STACK',
                  'NODE WITH POSTGRES STACK',
                  'OPEN TO NEW PROJECTS NOW',
                ]}
                cycleDelay={2200}
                tileColor="#132A4A"
                textColor="#FFE9A8"
                fontSize="clamp(11px, 1.8vw, 24px)"
                gap="clamp(2px, 0.4vw, 5px)"
                padTo={24}
              />
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-ink drop-shadow-[0_2px_18px_rgba(5,13,31,0.9)]">
              <span className="gradient-lantern-text font-display text-6xl sm:text-7xl md:text-8xl">Bold Ideas,</span>
              <br />
              <span className="text-ink">Real Solutions</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-mist mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Full-Stack Engineer building scalable web applications with <strong className="text-ink font-bold">React</strong>, <strong className="text-ink font-bold">Next.js</strong>, and <strong className="text-ink font-bold">Node.js</strong>.
              4+ years crafting production systems that drive business impact.
            </p>

            {/* CTA buttons with Download CV */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="btn-primary-lantern flex items-center justify-center gap-2 group text-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
              </a>

              <a
                href="/Tejas_Kumarley_Resume_2026.pdf"
                download="Tejas_Kumarley_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-spirit-400/40 bg-night-900/70 hover:bg-spirit-500/20 hover:border-spirit-300/60 px-6 py-3.5 text-sm font-bold text-spirit-300 hover:text-spirit-200 shadow-soft hover:shadow-spirit-glow transition-all duration-300 backdrop-blur-md"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              <a href="#contact" className="btn-outline-sea text-sm">
                Get In Touch
              </a>
            </div>

            {/* Stats bar */}
            <div className="mx-auto max-w-sm sm:max-w-md grid grid-cols-3 rounded-3xl border border-sea-300/20 bg-night-950/70 p-4 text-left backdrop-blur-xl lg:mx-0 shadow-soft">
              <div className="px-2">
                <p className="font-heading text-sm sm:text-base font-bold text-lantern-300">04+ Years</p>
                <p className="text-[11px] font-semibold text-mist-400 uppercase tracking-wider mt-0.5">Experience</p>
              </div>
              <div className="border-x border-sea-300/15 px-4">
                <p className="font-heading text-sm sm:text-base font-bold text-spirit-300">50+ Builds</p>
                <p className="text-[11px] font-semibold text-mist-400 uppercase tracking-wider mt-0.5">Shipped</p>
              </div>
              <div className="px-3">
                <p className="font-heading text-sm sm:text-base font-bold text-sea-200">React → Node</p>
                <p className="text-[11px] font-semibold text-mist-400 uppercase tracking-wider mt-0.5">Full-Stack</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-3 mt-8 lg:justify-start">
              <a
                href="https://github.com/tejas-exe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-2xl border border-sea-300/20 bg-night-900/70 hover:bg-lantern-500/20 hover:border-lantern-500/50 text-ink shadow-soft hover:shadow-lantern hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
              >
                <Github size={20} className="text-ink" />
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-kumarley-324475220/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-2xl border border-sea-300/20 bg-night-900/70 hover:bg-sea-500/25 hover:border-sea-300/50 text-ink shadow-soft hover:shadow-sea-glow hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
              >
                <Linkedin size={20} className="text-sea-200" />
              </a>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                aria-label="Email Tejas"
                className="p-3 rounded-2xl border border-sea-300/20 bg-night-900/70 hover:bg-spirit-500/20 hover:border-spirit-400/50 text-ink shadow-soft hover:shadow-spirit-glow hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
              >
                <Mail size={20} className="text-spirit-300" />
              </a>
            </div>
          </div>

          {/* RIGHT — Ghibli-style portrait cutout, floating over the night sky */}
          <div className="flex-shrink-0 flex flex-col items-center gap-5 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-bob">
              {/* Soft lantern aura behind the figure */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_55%_45%,rgba(245,197,66,0.22),rgba(74,141,190,0.12)_55%,transparent_75%)] blur-2xl scale-110" />

              {/* The portrait itself — transparent PNG cutout, no card, no frame */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/tejas-ghibli.webp"
                alt="Tejas Kumarley in Studio Ghibli style, resting his chin on his hand beside a No-Face mug and a stack of Build, Create, Improve, Repeat books"
                className="w-64 sm:w-80 lg:w-[380px] h-auto drop-shadow-[0_18px_36px_rgba(3,10,24,0.65)]"
                loading="eager"
              />

            </div>

            {/* Name + title floating under the cutout */}
            <div className="text-center -mt-1">
              <p className="font-display text-2xl text-lantern-200 drop-shadow-[0_2px_12px_rgba(5,13,31,0.9)]">
                Tejas Kumarley
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sea-200 mt-1">
                Full-Stack Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block z-10">
        <a href="#projects" className="flex flex-col items-center gap-1.5 group cursor-pointer">
          <p className="mono text-mist-400 text-[10px] uppercase tracking-[.2em] font-semibold group-hover:text-lantern-300 transition-colors">
            Scroll to explore
          </p>
          <div className="w-6 h-6 rounded-full bg-night-900/80 border border-sea-300/30 flex items-center justify-center shadow-soft group-hover:bg-lantern-500/20 group-hover:border-lantern-500/50 transition-all">
            <ArrowDown size={13} className="text-lantern-300 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
