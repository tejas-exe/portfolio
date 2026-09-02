'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
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
      setMessage("Message sent successfully! I'll get back to you soon.")
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (err) {
      setStatus('error')
      setMessage('Failed to send message. Please try again or email me directly.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <p className="section-kicker justify-center before:hidden">Start a conversation</p>
        <h2 className="section-heading text-center">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:mb-12 sm:text-lg">
          Have a project in mind? Let&apos;s collaborate and build something amazing together.
          Fill out the form below or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-secondary mb-2">Email</h3>
              <a
                href="mailto:kumarley.tejas7@gmail.com"
                className="break-all text-white/70 hover:text-secondary transition-colors sm:break-normal"
              >
                kumarley.tejas7@gmail.com
              </a>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-secondary mb-2">Phone</h3>
              <a
                href="tel:+916354352713"
                className="text-white/70 hover:text-secondary transition-colors"
              >
                +91 63543 52713
              </a>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-secondary mb-2">Location</h3>
              <p className="text-white/70">Vadodara, Gujarat, India</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-secondary mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/tejas-kumarley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors font-semibold text-sm"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/tejaskumarley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors font-semibold text-sm"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="card space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Project idea"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tell me more..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              {status !== 'loading' && <Send size={20} />}
            </button>

            {message && (
              <div
                className={`p-4 rounded-lg flex gap-3 ${
                  status === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm">{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
