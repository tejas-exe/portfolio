'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react'

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

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Background ambient lantern glow + star dust */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-lantern-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="starfield-dust pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-kicker justify-center">Start a conversation</p>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-lantern-text font-display">Connect</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-base sm:text-lg leading-relaxed text-mist">
            Have an exciting project, full-time role, or contract in mind? Let&apos;s collaborate and build something remarkable together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="rounded-[24px] bg-night-900/55 p-5 sm:p-6 border border-lantern-500/30 shadow-soft backdrop-blur-xl hover:shadow-lantern transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-lantern-500/20 text-lantern-300 flex items-center justify-center shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink">Email Me</h3>
                  <p className="text-[11px] text-mist-400 font-medium">Direct inbox access</p>
                </div>
              </div>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                className="text-xs sm:text-sm font-bold text-lantern-300 hover:text-lantern-200 transition-colors break-all block mt-2"
              >
                kumarley.tejas7@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-[24px] bg-night-900/55 p-5 sm:p-6 border border-spirit-400/30 shadow-soft backdrop-blur-xl hover:shadow-spirit-glow transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-spirit-500/20 text-spirit-300 flex items-center justify-center shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink">Call / WhatsApp</h3>
                  <p className="text-[11px] text-mist-400 font-medium">Mon - Fri, 9am - 7pm IST</p>
                </div>
              </div>
              <a
                href="tel:+916354352713"
                className="text-xs sm:text-sm font-bold text-spirit-300 hover:text-spirit-200 transition-colors block mt-2"
              >
                +91 63543 52713
              </a>
            </div>

            {/* Location Card */}
            <div className="rounded-[24px] bg-night-900/55 p-5 sm:p-6 border border-sea-300/30 shadow-soft backdrop-blur-xl hover:shadow-sea-glow transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-sea-500/25 text-sea-200 flex items-center justify-center shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink">Location</h3>
                  <p className="text-[11px] text-mist-400 font-medium">Open to remote &amp; relocation</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-ink mt-2">
                Vadodara, Gujarat, India
              </p>
            </div>

            {/* Social Links Card */}
            <div className="rounded-[24px] bg-night-900/55 p-5 sm:p-6 border border-sakura-400/30 shadow-soft backdrop-blur-xl hover:shadow-lantern transition-all">
              <h3 className="font-heading text-sm font-bold text-ink mb-3">Online Profiles</h3>
              <div className="flex gap-2.5">
                <a
                  href="https://www.linkedin.com/in/tejas-kumarley-324475220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-sea-500/20 hover:bg-sea-500/35 text-sea-200 text-xs font-bold border border-sea-300/30 shadow-sm transition-all"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/tejas-exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-lantern-500/15 hover:bg-lantern-500/30 text-lantern-300 text-xs font-bold border border-lantern-500/30 shadow-sm transition-all"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (3 cols) */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-[32px] bg-night-950/65 p-6 sm:p-8 border border-sea-300/25 shadow-soft-lg backdrop-blur-2xl space-y-4">
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-sea-300/15">
                <MessageSquare className="w-4 h-4 text-lantern-300" />
                <h3 className="font-heading text-base font-bold text-ink">
                  Send a Direct Message
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-mist mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field-sea"
                  placeholder="e.g. Chihiro Ogino"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-mist mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field-sea"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-mist mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field-sea"
                  placeholder="Project Collaboration / Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-mist mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field-sea resize-none"
                  placeholder="Tell me about your project, timeline, and tech stack..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary-lantern w-full text-sm font-bold gap-2 py-4 disabled:opacity-50 mt-2"
              >
                {status === 'loading' ? (
                  <span>Sending message via Nodemailer...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {message && (
                <div
                  className={`p-4 rounded-2xl flex gap-3 ${
                    status === 'success'
                      ? 'bg-spirit-500/15 text-spirit-300 border border-spirit-400/40'
                      : 'bg-sakura-500/15 text-sakura-300 border border-sakura-400/40'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5 text-spirit-300" />
                  ) : (
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5 text-sakura-300" />
                  )}
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">{message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
