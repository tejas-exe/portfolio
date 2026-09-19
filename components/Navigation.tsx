'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, Sprout, X } from 'lucide-react'
const links = ['Projects', 'Skills', 'Experience', 'Contact']
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header"><nav className="nav-shell shell" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark"><Sprout size={22} /></span><span>Tejas Kumarley<span className="brand-caption">ENGINEER &amp; CURIOUS BUILDER</span></span></a>
    <div className="desktop-links">{links.map((link, i) => <a href={`#${link.toLowerCase()}`} key={link}><span>0{i + 1}</span> {link}</a>)}</div>
    <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <div id="mobile-navigation" className="mobile-links"><a href="#home" onClick={() => setOpen(false)}>Home</a>{links.map(link => <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setOpen(false)}>{link}</a>)}<a href="/Tejas_Kumarley_Resume_2026.pdf" download>Download CV</a></div>}
  </nav></header>
}
