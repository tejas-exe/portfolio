'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-sea-300/15 bg-night-950/80 backdrop-blur-xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          {/* Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-heading font-bold text-sm text-ink tracking-tight">
              Tejas Kumarley
            </span>
            <span className="hidden sm:inline text-lantern-500">✦</span>
            <p className="text-xs sm:text-sm text-mist-400 flex items-center gap-1.5 font-medium">
              <span>Crafted with</span>
              <Heart size={13} className="text-sakura-400 fill-sakura-300/50" />
              <span>under a starlit sky</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="https://www.linkedin.com/in/tejas-kumarley-324475220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist-400 hover:text-lantern-300 transition-colors text-xs sm:text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tejas-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist-400 hover:text-lantern-300 transition-colors text-xs sm:text-sm font-semibold"
            >
              GitHub
            </a>
            <a
              href="mailto:kumarley.tejas7@gmail.com"
              className="text-mist-400 hover:text-lantern-300 transition-colors text-xs sm:text-sm font-semibold"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-sea-300/10 text-center text-xs text-mist-400/70">
          © {currentYear} Tejas Kumarley. All rights reserved. · Inspired by the worlds of Studio Ghibli
        </div>
      </div>
    </footer>
  )
}
