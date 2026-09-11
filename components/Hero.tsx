'use client'

import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Download } from 'lucide-react'
import SplitFlapText from './SplitFlapText'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-28 sm:px-6 sm:py-32 lg:min-h-screen pastel-mesh-bg"
    >
      {/* Soft animated pastel mesh-gradient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Lavender Blob */}
        <div
          className="absolute -top-12 -left-20 h-[480px] w-[480px] rounded-full bg-[#C9B8FF]/40 blur-[100px] animate-float-slow"
        />
        {/* Mint Blob */}
        <div
          className="absolute top-1/4 -right-20 h-[520px] w-[520px] rounded-full bg-[#B8F2E6]/45 blur-[110px] animate-float-reverse"
        />
        {/* Peach Blob */}
        <div
          className="absolute -bottom-20 left-1/4 h-[440px] w-[440px] rounded-full bg-[#FFD6BA]/45 blur-[100px] animate-pulse-soft"
        />
        {/* Blush Pink Blob */}
        <div
          className="absolute bottom-10 -right-10 h-[460px] w-[460px] rounded-full bg-[#FFC8DD]/40 blur-[100px] animate-float-slow"
        />
        {/* Baby Blue Center Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#BDE0FE]/25 blur-[130px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Two-column layout on lg, stacked on mobile */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          {/* LEFT — Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            {/* Status badge row */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {/* Available badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8F2E6]/80 bg-[#B8F2E6]/40 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#0D9488] shadow-soft backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#0D9488] animate-pulse"></span>
                Available for work
              </div>
              {/* Full-Stack badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C9B8FF]/80 bg-[#C9B8FF]/30 px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#7C5CFF] shadow-soft backdrop-blur-md">
                <Sparkles size={13} className="text-[#7C5CFF]" />
                Full-Stack Specialist
                <Code2 size={13} className="text-[#7C5CFF]" />
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
                tileColor="#F2ECFE"
                textColor="#2D2A32"
                fontSize="clamp(11px, 1.8vw, 24px)"
                gap="clamp(2px, 0.4vw, 5px)"
                padTo={24}
              />
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-heading text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl text-[#2D2A32]">
              <span className="gradient-pastel-text">Bold Ideas,</span>
              <br />
              <span className="text-[#2D2A32]">Real Solutions</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B6570] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Full-Stack Engineer building scalable web applications with <strong className="text-[#2D2A32] font-semibold">React</strong>, <strong className="text-[#2D2A32] font-semibold">Next.js</strong>, and <strong className="text-[#2D2A32] font-semibold">Node.js</strong>.
              4+ years crafting production systems that drive business impact.
            </p>

            {/* CTA buttons with Download CV */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="btn-primary-pastel flex items-center justify-center gap-2 group text-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
              </a>

              <a
                href="/Tejas_Kumarley_Resume_2026.pdf"
                download="Tejas_Kumarley_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9B8FF]/80 bg-[#C9B8FF]/20 hover:bg-[#C9B8FF]/35 px-6 py-3.5 text-sm font-bold text-[#7C5CFF] hover:text-[#5833EA] shadow-soft hover:shadow-pastel-lavender transition-all duration-300"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              <a href="#contact" className="btn-outline-pastel text-sm">
                Get In Touch
              </a>
            </div>

            {/* Stats bar */}
            <div className="mx-auto max-w-sm sm:max-w-md grid grid-cols-3 rounded-3xl border border-white/90 bg-white/80 p-4 text-left backdrop-blur-xl lg:mx-0 shadow-soft">
              <div className="px-2">
                <p className="font-heading text-sm sm:text-base font-extrabold text-[#7C5CFF]">04+ Years</p>
                <p className="text-[11px] font-medium text-[#6B6570] uppercase tracking-wider mt-0.5">Experience</p>
              </div>
              <div className="border-x border-[#2D2A32]/10 px-4">
                <p className="font-heading text-sm sm:text-base font-extrabold text-[#0D9488]">50+ Builds</p>
                <p className="text-[11px] font-medium text-[#6B6570] uppercase tracking-wider mt-0.5">Shipped</p>
              </div>
              <div className="px-3">
                <p className="font-heading text-sm sm:text-base font-extrabold text-[#EA580C]">React → Node</p>
                <p className="text-[11px] font-medium text-[#6B6570] uppercase tracking-wider mt-0.5">Full-Stack</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-3 mt-8 lg:justify-start">
              <a
                href="https://github.com/tejas-exe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-2xl border border-white/80 bg-white/70 hover:bg-[#C9B8FF]/30 hover:border-[#C9B8FF] text-[#2D2A32] shadow-soft hover:shadow-pastel-lavender hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={20} className="text-[#2D2A32]" />
              </a>
              <a
                href="https://www.linkedin.com/in/tejas-kumarley-324475220/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-2xl border border-white/80 bg-white/70 hover:bg-[#BDE0FE]/30 hover:border-[#BDE0FE] text-[#2D2A32] shadow-soft hover:shadow-pastel-blue hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={20} className="text-[#2563EB]" />
              </a>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                aria-label="Email Tejas"
                className="p-3 rounded-2xl border border-white/80 bg-white/70 hover:bg-[#FFC8DD]/30 hover:border-[#FFC8DD] text-[#2D2A32] shadow-soft hover:shadow-pastel-pink hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={20} className="text-[#DB2777]" />
              </a>
            </div>
          </div>

          {/* RIGHT — Profile Photo with Glassmorphic Card */}
          <div className="flex-shrink-0 flex flex-col items-center gap-5 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {/* Frosted Glass Container Card */}
            <div className="relative rounded-[36px] bg-white/60 p-4 sm:p-5 backdrop-blur-2xl border border-white/90 shadow-soft-lg">
              {/* Outer soft glow ring */}
              <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-tr from-[#C9B8FF]/30 via-[#FFD6BA]/30 to-[#FFC8DD]/30 blur-xl -z-10" />

              {/* Photo circular wrapper */}
              <div className="relative">
                {/* Photo ring border */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-[28px] overflow-hidden border-2 border-white/90 shadow-soft bg-[#FFF9F5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Tejas Kumarley – Full-Stack Engineer"
                    className="w-full h-full object-cover object-top scale-105 transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A32]/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge — top right (Senior Engineer) */}
                <div className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full border border-white/90 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#7C5CFF] backdrop-blur-md shadow-soft">
                  <Sparkles size={13} className="text-[#7C5CFF]" />
                  <span>Senior Engineer</span>
                </div>

                {/* Floating badge — bottom left (Open to Work) */}
                <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-full border border-white/90 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#0D9488] backdrop-blur-md shadow-soft">
                  <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  <span>Open to Work</span>
                </div>
              </div>

              {/* Name + title under photo */}
              <div className="text-center mt-5 pt-3 border-t border-[#2D2A32]/8">
                <p className="font-heading text-lg font-extrabold text-[#2D2A32]">Tejas Kumarley</p>
                <p className="text-xs font-semibold text-[#7C5CFF]">Full-Stack Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block z-10">
        <a href="#projects" className="flex flex-col items-center gap-1.5 group cursor-pointer">
          <p className="mono text-[#6B6570] text-[10px] uppercase tracking-[.2em] font-semibold group-hover:text-[#7C5CFF] transition-colors">
            Scroll to explore
          </p>
          <div className="w-6 h-6 rounded-full bg-white/80 border border-white flex items-center justify-center shadow-soft group-hover:bg-[#C9B8FF]/30 transition-all">
            <ArrowDown size={13} className="text-[#7C5CFF] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
