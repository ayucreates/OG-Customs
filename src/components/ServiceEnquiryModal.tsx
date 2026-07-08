"use client"

import { X } from "lucide-react"

type ServiceEnquiryModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ServiceEnquiryModal({ isOpen, onClose }: ServiceEnquiryModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Enquiry submitted! We'll get back to you shortly.")
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Service Enquiry</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-[#a3a3a3] transition-colors hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-[#a3a3a3]">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder-[#525252] outline-none transition-colors focus:border-[#dc2626]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[#a3a3a3]">Phone</label>
            <input
              type="tel"
              required
              className="w-full rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder-[#525252] outline-none transition-colors focus:border-[#dc2626]"
              placeholder="+91 93943 00933"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[#a3a3a3]">Service</label>
            <select
              required
              className="w-full rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white outline-none transition-colors focus:border-[#dc2626]"
            >
              <option value="">Select a service</option>
              <option value="wrap">Vinyl Wrap</option>
              <option value="ppf">PPF</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="detailing">Detailing</option>
              <option value="tint">Window Tint</option>
              <option value="custom">Custom Paint</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-[#a3a3a3]">Message</label>
            <textarea
              rows={3}
              className="w-full rounded-md border border-[#2a2a2a] bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder-[#525252] outline-none transition-colors focus:border-[#dc2626] resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-[#dc2626] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#b91c1c]"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  )
}
