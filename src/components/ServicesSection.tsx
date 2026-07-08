"use client"

import { Shield, Sparkles, Settings, Compass, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Paint Protection Film",
    desc: "Premium self-healing film that shields your paint from chips, scratches, and environmental damage while preserving showroom shine.",
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    desc: "Advanced nano-ceramic coating that bonds to your paint, providing extreme hydrophobic protection and unmatched gloss for years.",
  },
  {
    icon: Settings,
    title: "Facelift Studio",
    desc: "Complete exterior transformation including custom body kits, lighting upgrades, and bespoke styling modifications.",
  },
  {
    icon: Compass,
    title: "4x4 Off-Roading",
    desc: "Purpose-built off-road builds with suspension lifts, bumper upgrades, and all-terrain packages for serious adventures.",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#a3a3a3] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white">
            What We <span className="text-[#dc2626]">Do</span>
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl mx-auto">
            From precision paint protection to complete custom builds, we deliver automotive excellence at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 transition-all duration-150 hover:border-[#dc2626]/40"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#dc2626]/10 mb-5">
                  <Icon size={24} className="text-[#dc2626]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-lg transition-all duration-150 cursor-pointer">
            View All Services
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
