"use client"

import { X, MapPin, Phone, Mail, Clock } from "lucide-react"

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
)

const navLinks = ["Home", "Services", "Portfolio", "About Us", "Contact"]

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
  onNavClick: (section: string) => void
}

export default function Sidebar({ isOpen, onClose, onNavClick }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-150 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col overflow-y-auto border-l border-[#2a2a2a] bg-[#0a0a0a] p-6 transition-transform duration-150 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#dc2626]">OG</span>
            <span className="text-xl font-semibold text-white">Customs</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-[#a3a3a3] transition-colors hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mb-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                onNavClick(link)
                onClose()
              }}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-[#a3a3a3] transition-all duration-150 hover:bg-[#1a1a1a] hover:text-white"
            >
              {link}
            </button>
          ))}
        </nav>

        <button className="mb-8 rounded-md bg-[#dc2626] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#b91c1c]">
          Service Enquiry
        </button>

        <div className="mb-8 space-y-3 border-t border-[#2a2a2a] pt-6">
          <div className="flex items-start gap-3 text-sm text-[#a3a3a3]">
            <MapPin size={16} className="mt-0.5 shrink-0 text-[#dc2626]" />
            <span>Golden Jubilee Rd, Owabari,<br />Habrubari, Assam 783370</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
            <Phone size={16} className="shrink-0 text-[#dc2626]" />
            <span>+91 93943 00933</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
            <Mail size={16} className="shrink-0 text-[#dc2626]" />
            <span>ogcustoms@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
            <Clock size={16} className="shrink-0 text-[#dc2626]" />
            <span>Mon-Sun 10AM-8PM</span>
          </div>
        </div>

        <div className="mt-auto flex gap-4">
          <a href="https://www.instagram.com/rebel.ayu/" target="_blank" rel="noopener noreferrer" className="rounded-md p-2 text-[#a3a3a3] transition-colors hover:text-white">
            <InstagramIcon />
          </a>
          <a href="#" className="rounded-md p-2 text-[#a3a3a3] transition-colors hover:text-white">
            <FacebookIcon />
          </a>
          <a href="#" className="rounded-md p-2 text-[#a3a3a3] transition-colors hover:text-white">
            <YoutubeIcon />
          </a>
        </div>
      </aside>
    </>
  )
}
