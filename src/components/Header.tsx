"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"
import ServiceEnquiryModal from "./ServiceEnquiryModal"

const navLinks = ["Home", "Services", "Portfolio", "About Us", "Contact"]

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#dc2626]">OG</span>
            <span className="text-xl font-semibold text-white">Customs</span>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveSection(link)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-150 ${
                  activeSection === link
                    ? "text-white"
                    : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden rounded-md bg-[#dc2626] px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#b91c1c] md:block"
            >
              Service Enquiry
            </button>
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-md p-2 text-[#a3a3a3] transition-colors hover:text-white md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavClick={handleNavClick}
      />
      <ServiceEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
