import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {[0, 1, 2, 3, 4, 5].map(i => <span key={i} className={`floating-leaf leaf-${i}`} aria-hidden="true" />)}
      <div className="hero-copy shell">
        <div className="hero-writing">
        <p className="eyebrow"><span className="status-dot" /> Available for work · Full-Stack Engineer</p>
        <p className="handwritten hero-intro">A little curiosity. A world of possibilities.</p>
        <h1>Hi, I’m Tejas.<br />I build things<br /><em>that come alive.</em></h1>
        <p className="hero-description">I’m Tejas Kumarley, a Full-Stack Engineer building scalable web applications with React, Next.js, and Node.js. 4+ years crafting production systems that drive business impact.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="button button-outline" href="/Tejas_Kumarley_Resume_2026.pdf" download><Download size={16} /> Download CV</a>
        </div>
        <div className="hero-socials"><a href="https://github.com/tejas-exe" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/tejas-kumarley-324475220/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a><span>Based in Vadodara, India</span></div>
        </div>
        <figure className="portrait-figure">
          <div className="portrait-frame">
            <Image src="/media/tejas-portrait.png" alt="Illustrated portrait of Tejas Kumarley at his desk with a sketchbook, coffee, and books" width={1086} height={1448} sizes="(max-width: 760px) 280px, (max-width: 1100px) 32vw, 350px" priority className="hero-portrait" />
          </div>
          <figcaption><span className="handwritten">The person behind the pixels.</span><span>TEJAS KUMARLEY · FULL-STACK ENGINEER</span></figcaption>
        </figure>
      </div>
      <a className="scroll-note" href="#projects"><ArrowDown size={16} /> Take the scenic route</a>
      <span className="hero-coordinate" aria-hidden="true">THE PORTFOLIO OF TEJAS KUMARLEY / VOL. 01</span>
    </section>
  )
}
