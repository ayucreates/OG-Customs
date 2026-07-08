'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'Contact Page' }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', phone: '', message: '' })
      }
    } catch { /* ignore */ }
  }

  if (sent) return (
    <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 text-center">
      <p className="text-lg font-semibold text-white">Thank you!</p>
      <p className="mt-2 text-sm text-[#a3a3a3]">We'll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-[#a3a3a3] outline-none transition-colors focus:border-[#dc2626]" required />
        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-[#a3a3a3] outline-none transition-colors focus:border-[#dc2626]" required />
      </div>
      <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-[#a3a3a3] outline-none transition-colors focus:border-[#dc2626]" required />
      <textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} className="w-full rounded-lg border border-[#2a2a2a] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder-[#a3a3a3] outline-none transition-colors focus:border-[#dc2626] resize-none" required />
      <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#dc2626] px-6 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#ef4444]">
        Send Message
      </button>
    </form>
  )
}
