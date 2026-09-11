'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles, Send, Download } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night-950/70 backdrop-blur-xl border-b border-sea-300/15 shadow-[0_4px_24px_rgba(3,10,24,0.5)] py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo — lantern mark */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lantern-300 via-lantern-400 to-lantern-600 p-[1.5px] shadow-lantern group-hover:shadow-lantern-lg transition-all duration-300">
            <div className="w-full h-full rounded-[14px] bg-night-900 flex items-center justify-center font-heading font-bold text-sm text-lantern-300 group-hover:bg-night-800 transition-colors">
              TK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-ink leading-tight tracking-tight">
              Tejas Kumarley
            </span>
            <span className="text-[11px] text-mist-400 font-semibold leading-none">
              Full-Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-night-800/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-sea-300/20 shadow-soft">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-mist hover:text-ink hover:bg-lantern-500/15 hover:text-lantern-300 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/Tejas_Kumarley_Resume_2026.pdf"
            download="Tejas_Kumarley_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-sea-300/30 bg-night-800/70 hover:bg-sea-600/30 hover:border-sea-300/50 px-4 py-2 text-xs font-bold text-sea-200 shadow-soft transition-all duration-200"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="btn-primary-lantern !px-4 !py-2 text-xs font-bold gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-2xl bg-night-800/80 border border-sea-300/20 shadow-soft flex items-center justify-center text-ink hover:bg-sea-600/30 transition-colors"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-night-950/90 backdrop-blur-2xl border border-sea-300/20 rounded-3xl p-5 shadow-soft-lg md:hidden animate-fadeIn">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink hover:bg-lantern-500/15 hover:text-lantern-300 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-sea-300/15 flex flex-col gap-2">
                <a
                  href="/Tejas_Kumarley_Resume_2026.pdf"
                  download="Tejas_Kumarley_Resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-sea-300/30 bg-sea-600/20 px-4 py-3 text-xs font-bold text-sea-200 shadow-soft"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={14} />
                  <span>Download Resume / CV</span>
                </a>
                <a
                  href="#contact"
                  className="btn-primary-lantern w-full text-center text-xs font-bold gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
