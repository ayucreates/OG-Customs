"use client"

import { ShieldCheck, Wrench, Users, Mail, Plus } from "lucide-react"

const pillars = [
  { icon: ShieldCheck, title: "Quality", desc: "We use only premium-grade materials and industry-leading techniques to deliver flawless, long-lasting results on every vehicle." },
  { icon: Wrench, title: "Service", desc: "From consultation to completion, our team provides white-glove service with transparent communication and on-time delivery." },
  { icon: Users, title: "Team", desc: "Our certified technicians bring years of specialized experience in paint protection, restoration, and custom fabrication." },
  { icon: Mail, title: "Equipment", desc: "We invest in state-of-the-art tools and technology to ensure precision, consistency, and superior craftsmanship." },
  { icon: ShieldCheck, title: "Trust", desc: "Thousands of satisfied customers and a reputation built on honesty, integrity, and unmatched attention to detail." },
  { icon: Plus, title: "Commitment", desc: "We stand behind every job with a satisfaction guarantee, ensuring your vehicle leaves our shop looking its absolute best." },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-white text-center mb-14">
          Why Choose <span className="text-[#dc2626]">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 transition-all duration-150 hover:border-[#dc2626]/40"
              >
                <Icon size={28} className="text-[#dc2626] mb-5" />
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-3">{p.title}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
