'use client'

import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles, Code2 } from 'lucide-react'
import SplitFlapText from './SplitFlapText'
import GhostFibers from './GhostFibers'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-28 sm:px-6 sm:py-32 lg:min-h-screen"
    >
      {/* Background GhostFibers WebGL field */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-50 mix-blend-screen overflow-hidden">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          lightMode={false}
          dpr={1}
          fps={60}
          paused={false}
        />
      </div>

      <div className="grid-fade absolute inset-0 opacity-80 pointer-events-none"></div>
      <div className="absolute -top-24 right-[8%] h-96 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-[5%] h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
      {/* Extra ambient glow behind avatar */}
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[90px] pointer-events-none hidden lg:block"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Two-column layout on lg, stacked on mobile */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          {/* LEFT — Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            {/* Status badge row */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {/* Available badge */}
              <div className="mono inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[.16em] text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-300 shadow-[0_0_14px_#fb923c] animate-pulse"></span>
                Available for work
              </div>
              {/* Vibe Coded badge */}
              <div className="mono inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.14em] text-purple-300">
                <Sparkles size={12} className="text-purple-400" />
                Vibe Coded
                <Code2 size={12} className="text-purple-400" />
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
                fontSize="clamp(11px, 1.8vw, 26px)"
                gap="clamp(2px, 0.4vw, 5px)"
                padTo={24}
              />
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-5xl font-extrabold leading-[.94] tracking-tight sm:text-6xl md:text-7xl">
              <span className="gradient-text">Bold Ideas,</span>
              <br />
              <span>Real Solutions</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/65 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Engineer building scalable web applications with React, Next.js, and Node.js.
              4+ years crafting production systems that drive business impact.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Stats bar */}
            <div className="mx-auto max-w-sm grid grid-cols-3 rounded-2xl border border-white/10 bg-white/[.035] p-4 text-left backdrop-blur-sm lg:mx-0 lg:max-w-md">
              <div>
                <p className="mono text-xs text-orange-200">04+ years</p>
                <p className="mt-1 text-xs text-white/45">experience</p>
              </div>
              <div className="border-x border-white/10 px-5">
                <p className="mono text-xs text-orange-200">50+ builds</p>
                <p className="mt-1 text-xs text-white/45">shipped</p>
              </div>
              <div className="pl-5">
                <p className="mono text-xs text-orange-200">React → Node</p>
                <p className="mt-1 text-xs text-white/45">full-stack</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-3 mt-8 lg:justify-start">
              <a
                href="https://github.com/tejaskumarley"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-full border border-white/15 bg-white/[.03] hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
              >
                <Github size={22} className="text-secondary" />
              </a>
              <a
                href="https://linkedin.com/in/tejas-kumarley"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-full border border-white/15 bg-white/[.03] hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
              >
                <Linkedin size={22} className="text-secondary" />
              </a>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                aria-label="Email Tejas"
                className="p-3 rounded-full border border-white/15 bg-white/[.03] hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
              >
                <Mail size={22} className="text-secondary" />
              </a>
            </div>
          </div>

          {/* RIGHT — Profile Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-5 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {/* Outer glow ring container */}
            <div className="relative">
              {/* Spinning gradient ring */}
              <div
                className="absolute -inset-[3px] rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #fb923c, #f97316, #ea580c, #fbbf24, #fb923c)',
                  filter: 'blur(1px)',
                }}
              />
              {/* Outer soft glow */}
              <div className="absolute -inset-6 rounded-full bg-orange-500/20 blur-2xl pointer-events-none" />

              {/* White gap ring */}
              <div className="relative rounded-full p-[3px] bg-zinc-950">
                {/* Photo circle */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-orange-400/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Tejas Kumarley – Full-Stack Engineer"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                  {/* Subtle inner gradient overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-2 -right-3 flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-zinc-950/90 px-3 py-1.5 text-[11px] font-bold text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/20">
                <Sparkles size={11} className="text-purple-400" />
                Vibe Coded
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-2 -left-4 flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-zinc-950/90 px-3 py-1.5 text-[11px] font-bold text-orange-300 backdrop-blur-md shadow-lg shadow-orange-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work
              </div>
            </div>

            {/* Name + title under photo (visible on all sizes) */}
            <div className="text-center">
              <p className="text-lg font-bold text-white">Tejas Kumarley</p>
              <p className="text-sm text-orange-300/80 font-medium">Full-Stack Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="mono text-white/40 text-[10px] uppercase tracking-[.18em]">Scroll to explore</p>
          <ArrowDown size={16} className="text-secondary" />
        </div>
      </div>
    </section>
  )
}
