import { MapPin, Phone, Mail, Clock } from "lucide-react"

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
)

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-xl font-bold text-[#dc2626]">OG</span>
              <span className="text-lg font-semibold text-white">Customs</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#a3a3a3]">
              Premium custom car modifications and detailing services. Excellence in every detail.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/rebel.ayu/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] text-[#a3a3a3] transition-all duration-150 hover:border-[#dc2626] hover:text-[#dc2626]">
                <InstagramIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] text-[#a3a3a3] transition-all duration-150 hover:border-[#dc2626] hover:text-[#dc2626]">
                <FacebookIcon />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2a2a2a] text-[#a3a3a3] transition-all duration-150 hover:border-[#dc2626] hover:text-[#dc2626]">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About"].map((link) => (
                <li key={link}>
                  <a href={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="text-sm text-[#a3a3a3] transition-colors duration-150 hover:text-[#dc2626]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {["PPF & Ceramic Coating", "Denting & Painting", "Detailing & Restoration", "Custom Modifications", "Car Accessories"].map((s) => (
                <li key={s}>
                  <a href="/services" className="text-sm text-[#a3a3a3] transition-colors duration-150 hover:text-[#dc2626]">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-[#a3a3a3]">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#dc2626]" />
                <span>Golden Jubilee Rd, Owabari,<br />Habrubari, Assam 783370</span>
              </div>
              <a href="tel:+919394300933" className="flex items-center gap-3 text-sm text-[#a3a3a3] transition-colors hover:text-[#dc2626]">
                <Phone size={15} className="shrink-0 text-[#dc2626]" />
                <span>+91 93943 00933</span>
              </a>
              <a href="mailto:ogcustoms@gmail.com" className="flex items-center gap-3 text-sm text-[#a3a3a3] transition-colors hover:text-[#dc2626]">
                <Mail size={15} className="shrink-0 text-[#dc2626]" />
                <span>ogcustoms@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <Clock size={15} className="shrink-0 text-[#dc2626]" />
                <span>Mon - Sun: 10 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a] px-6 py-5">
        <p className="text-center text-xs text-[#a3a3a3]">&copy; 2026 OG Customs. All rights reserved.</p>
        <p className="mt-1 text-center text-xs text-[#606060]">Made with Enthusiasm by Ayushman B.</p>
      </div>
    </footer>
  )
}
