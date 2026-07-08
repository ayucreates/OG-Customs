"use client"

import { ArrowRight } from "lucide-react"

const projects = [
  { title: "Fortuner Legender Makeover", category: "Full Custom" },
  { title: "Thar in Beast Mode", category: "Off-Road Build" },
  { title: "Mini Cooper Full Body Paint", category: "Paint" },
  { title: "Hyundai Creta Custom Graphics", category: "Graphics" },
  { title: "Premium Detail Work 1", category: "Detailing" },
  { title: "Premium Detail Work 2", category: "Detailing" },
]

const placeholderGradient = (i: number) => {
  const colors = [
    ["#1a1a2e", "#16213e"],
    ["#2d1b1b", "#1a1a1a"],
    ["#1b2d1b", "#1a1a1a"],
    ["#1b1b2d", "#1a1a1a"],
    ["#2e1a1a", "#16213e"],
    ["#1a2e2e", "#1a1a1a"],
  ]
  return colors[i % colors.length]
}

export default function ProjectsGrid() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-white text-center mb-14">
          Latest <span className="text-[#dc2626]">Projects</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const [c1, c2] = placeholderGradient(i)
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] transition-all duration-150 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 400 280" className="w-full h-64">
                  <defs>
                    <linearGradient id={`pg-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={c1} />
                      <stop offset="100%" stopColor={c2} />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="280" fill={`url(#pg-${i})`} rx="0" />
                  <circle cx="200" cy="140" r="40" fill="none" stroke="#2a2a2a" strokeWidth="1" />
                  <circle cx="200" cy="140" r="20" fill="none" stroke="#2a2a2a" strokeWidth="1" />
                  <line x1="60" y1="200" x2="340" y2="200" stroke="#2a2a2a" strokeWidth="1" />
                  <rect x="100" y="215" width="80" height="8" rx="4" fill="#2a2a2a" />
                  <rect x="195" y="215" width="120" height="8" rx="4" fill="#2a2a2a" />
                  <rect x="100" y="230" width="160" height="8" rx="4" fill="#2a2a2a" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#dc2626]">{p.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{p.title}</h3>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-lg transition-all duration-150 cursor-pointer">
            View Portfolio
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
