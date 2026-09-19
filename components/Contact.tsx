'use client'
import { useState } from 'react'
import { ArrowUpRight, Send, Mail, MapPin, Phone, Flower2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return
    setMessage('')
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setMessage("Message sent successfully! I'll get back to you within 24 hours.")
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 6000)
    } catch (err: any) {
      setStatus('error')
      setMessage(err?.message || 'Failed to send message. Please try again or email me directly.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 6000)
    }
  }

  return <section id="contact" className="contact-section section-space"><div className="shell contact-layout">
    <div className="contact-intro" data-reveal="up"><p className="eyebrow">04 / A new beginning</p><h2>Let’s make<br /><em>something<br /> wonderful.</em></h2><p>Have an exciting project, full-time role, or contract in mind? Let’s collaborate and build something remarkable together.</p><div className="contact-links"><a href="mailto:kumarley.tejas7@gmail.com"><Mail size={17} /><span>kumarley.tejas7@gmail.com</span><ArrowUpRight size={15} /></a><a href="tel:+916354352713"><Phone size={17} /><span>+91 63543 52713<small>Mon – Fri, 9am – 7pm IST</small></span></a><p><MapPin size={17} /><span>Vadodara, Gujarat, India<small>Open to remote &amp; relocation</small></span></p></div><div className="contact-socials"><a href="https://www.linkedin.com/in/tejas-kumarley-324475220/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/tejas-exe" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div>
    <div className="letter-wrap" data-reveal="right"><form onSubmit={handleSubmit} className="contact-letter" aria-label="Contact Tejas"><div className="letter-heading"><div><span className="eyebrow">A note for Tejas</span><p className="handwritten">Every good story starts with hello.</p></div><span className="postage" aria-hidden="true"><Flower2 size={31} strokeWidth={1} /><span>HELLO</span></span></div>
      <div className="form-row"><div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required placeholder="Your name" /></div><div><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" /></div></div>
      <label htmlFor="contact-subject">What’s on your mind?</label><input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="A project, an opportunity, a hello…" />
      <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me a little about what you’re dreaming up…" />
      <button type="submit" disabled={status === 'loading'} className="button button-primary">{status === 'loading' ? 'Sending your note…' : 'Send your note'}<Send size={16} /></button>
      <div aria-live="polite" aria-atomic="true">{message && <p className={`form-message ${status}`}>{message}</p>}</div>
    </form><span className="letter-caption handwritten">From your corner of the world to mine.</span></div>
  </div></section>
}
