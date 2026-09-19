import { Sprout, ArrowUp } from 'lucide-react'
export default function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><div><a className="footer-brand" href="#home"><Sprout size={21} /> Tejas Kumarley</a><p>© {new Date().getFullYear()} Tejas Kumarley. All rights reserved.</p></div><div className="footer-links"><a href="https://www.linkedin.com/in/tejas-kumarley-324475220/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/tejas-exe" target="_blank" rel="noopener noreferrer">GitHub</a><a href="mailto:kumarley.tejas7@gmail.com">Email</a><a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a></div></div></footer>
}
