'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ''
)

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
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) throw error

      setStatus('success')
      setMessage("Message sent successfully! I'll get back to you within 24 hours.")
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 6000)
    } catch (err) {
      setStatus('error')
      setMessage('Failed to send message. Please try again or email me directly.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 6000)
    }
  }

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 overflow-hidden">
      {/* Background ambient pastel glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#C9B8FF]/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-kicker justify-center">Start a conversation</p>
          <h2 className="section-heading">
            Let&apos;s <span className="gradient-pastel-text">Connect</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-base sm:text-lg leading-relaxed text-[#6B6570]">
            Have an exciting project, full-time role, or contract in mind? Let&apos;s collaborate and build something remarkable together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="rounded-[24px] bg-white/90 p-5 sm:p-6 border border-[#C9B8FF]/60 shadow-soft backdrop-blur-xl hover:shadow-pastel-lavender transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#C9B8FF]/35 text-[#7C5CFF] flex items-center justify-center shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#2D2A32]">Email Me</h3>
                  <p className="text-[11px] text-[#6B6570] font-medium">Direct inbox access</p>
                </div>
              </div>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                className="text-xs sm:text-sm font-semibold text-[#7C5CFF] hover:text-[#DB2777] transition-colors break-all block mt-2"
              >
                kumarley.tejas7@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-[24px] bg-white/90 p-5 sm:p-6 border border-[#B8F2E6]/60 shadow-soft backdrop-blur-xl hover:shadow-pastel-mint transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#B8F2E6]/40 text-[#0D9488] flex items-center justify-center shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#2D2A32]">Call / WhatsApp</h3>
                  <p className="text-[11px] text-[#6B6570] font-medium">Mon - Fri, 9am - 7pm IST</p>
                </div>
              </div>
              <a
                href="tel:+916354352713"
                className="text-xs sm:text-sm font-semibold text-[#0D9488] hover:text-[#047857] transition-colors block mt-2"
              >
                +91 63543 52713
              </a>
            </div>

            {/* Location Card */}
            <div className="rounded-[24px] bg-white/90 p-5 sm:p-6 border border-[#FFD6BA]/60 shadow-soft backdrop-blur-xl hover:shadow-pastel-peach transition-all">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFD6BA]/40 text-[#EA580C] flex items-center justify-center shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-extrabold text-[#2D2A32]">Location</h3>
                  <p className="text-[11px] text-[#6B6570] font-medium">Open to remote & relocation</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#2D2A32] mt-2">
                Vadodara, Gujarat, India
              </p>
            </div>

            {/* Social Links Card */}
            <div className="rounded-[24px] bg-white/90 p-5 sm:p-6 border border-[#FFC8DD]/60 shadow-soft backdrop-blur-xl hover:shadow-pastel-pink transition-all">
              <h3 className="font-heading text-sm font-extrabold text-[#2D2A32] mb-3">Online Profiles</h3>
              <div className="flex gap-2.5">
                <a
                  href="https://linkedin.com/in/tejas-kumarley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#BDE0FE]/30 hover:bg-[#BDE0FE]/50 text-[#2563EB] text-xs font-bold border border-[#BDE0FE] shadow-sm transition-all"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://github.com/tejaskumarley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#C9B8FF]/30 hover:bg-[#C9B8FF]/50 text-[#7C5CFF] text-xs font-bold border border-[#C9B8FF] shadow-sm transition-all"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (3 cols) */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-[32px] bg-white/95 p-6 sm:p-8 border border-white shadow-soft-lg backdrop-blur-2xl space-y-4">
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-[#2D2A32]/8">
                <MessageSquare className="w-4 h-4 text-[#7C5CFF]" />
                <h3 className="font-heading text-base font-extrabold text-[#2D2A32]">
                  Send a Direct Message
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A32] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field-pastel"
                  placeholder="e.g. Alex Johnson"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A32] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field-pastel"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A32] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field-pastel"
                  placeholder="Project Collaboration / Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2A32] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field-pastel resize-none"
                  placeholder="Tell me about your project, timeline, and tech stack..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary-pastel w-full text-sm font-bold gap-2 py-4 disabled:opacity-50 mt-2"
              >
                {status === 'loading' ? (
                  <span>Sending message...</span>
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
                      ? 'bg-[#B8F2E6]/30 text-[#0D9488] border border-[#B8F2E6]'
                      : 'bg-[#FFC8DD]/30 text-[#DB2777] border border-[#FFC8DD]'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5 text-[#0D9488]" />
                  ) : (
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5 text-[#DB2777]" />
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
