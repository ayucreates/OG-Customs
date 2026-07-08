import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import ContactForm from "@/components/ContactForm"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Golden Jubilee Rd, Owabari, Habrubari, Assam 783370",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93943 00933",
    href: "tel:+919394300933",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ogcustoms@gmail.com",
    href: "mailto:ogcustoms@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sun: 10:00 AM - 8:00 PM",
  },
]

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/rebel.ayu/" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
            Have a question or ready to start your project? Reach out — we're always
            happy to talk cars.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 text-center transition-all duration-150 hover:border-[#dc2626]/50">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#dc2626]/10 text-[#dc2626]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#a3a3a3]">
                    {item.label}
                  </h3>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Send Us a Message</h2>
              <p className="mb-8 text-[#a3a3a3]">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold">Find Us Here</h2>
              <iframe src="https://maps.google.com/maps?q=26.4023669,90.2879829&z=17&output=embed&iwloc=near" width="100%" height="100%" className="rounded-xl" style={{ border: 0, minHeight: '300px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
                <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-2 rounded-md bg-[#2a2a2a] px-4 py-2 text-sm text-[#a3a3a3] transition-all duration-150 hover:bg-[#dc2626] hover:text-white"
                    >
                      {link.label}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
