export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/50 px-4 py-7 sm:px-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/60">
            © {currentYear} Tejas Kumarley. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="https://linkedin.com/in/tejas-kumarley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-secondary transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tejaskumarley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-secondary transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:kumarley.tejas7@gmail.com"
              className="text-white/60 hover:text-secondary transition-colors text-sm font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
