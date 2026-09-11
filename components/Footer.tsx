'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2D2A32]/8 bg-white/60 backdrop-blur-xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          {/* Brand and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-heading font-extrabold text-sm text-[#2D2A32] tracking-tight">
              Tejas Kumarley
            </span>
            <span className="hidden sm:inline text-[#2D2A32]/20">•</span>
            <p className="text-xs sm:text-sm text-[#6B6570] flex items-center gap-1.5 font-medium">
              <span>Crafted with</span>
              <Heart size={13} className="text-[#DB2777] fill-[#FFC8DD]" />
              <span>using React, Next.js & Tailwind</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="https://linkedin.com/in/tejas-kumarley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6570] hover:text-[#7C5CFF] transition-colors text-xs sm:text-sm font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tejaskumarley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6570] hover:text-[#7C5CFF] transition-colors text-xs sm:text-sm font-semibold"
            >
              GitHub
            </a>
            <a
              href="mailto:kumarley.tejas7@gmail.com"
              className="text-[#6B6570] hover:text-[#7C5CFF] transition-colors text-xs sm:text-sm font-semibold"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#2D2A32]/5 text-center text-xs text-[#6B6570]/70">
          © {currentYear} Tejas Kumarley. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
