"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    heading: "EXPERIENCE THE ART",
    subheading: "OF DETAILING",
    description:
      "Transform your vehicle with precision craftsmanship and premium protection. Every detail matters at OG Customs.",
    cta: "Explore Services",
  },
  {
    heading: "MASTERPIECE",
    subheading: "RESTORATION",
    description:
      "Bringing your vision to life with flawless finishes and unparalleled expertise. Your ride deserves nothing less.",
    cta: "View Portfolio",
  },
]

const beforeAfterSVG = (
  <svg viewBox="0 0 400 320" className="w-full h-full">
    <defs>
      <clipPath id="halfClip">
        <rect x="0" y="0" width="200" height="320" />
      </clipPath>
    </defs>
    <rect x="0" y="0" width="400" height="320" fill="#1a1a1a" rx="10" />
    <rect x="200" y="0" width="200" height="320" fill="#222" rx="10" />
    <line x1="200" y1="0" x2="200" y2="320" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 4" />
    <circle cx="200" cy="160" r="14" fill="#dc2626" />
    <circle cx="200" cy="160" r="8" fill="#fff" />
    <text x="100" y="160" textAnchor="middle" dominantBaseline="middle" fill="#dc2626" fontSize="20" fontWeight="700" fontFamily="Exo 2, sans-serif">BEFORE</text>
    <text x="300" y="160" textAnchor="middle" dominantBaseline="middle" fill="#dc2626" fontSize="20" fontWeight="700" fontFamily="Exo 2, sans-serif">AFTER</text>
    <path d="M60 220 Q100 200 140 220" stroke="#a3a3a3" strokeWidth="1.5" fill="none" />
    <path d="M260 210 Q300 190 340 210" stroke="#a3a3a3" strokeWidth="1.5" fill="none" />
    <text x="100" y="260" textAnchor="middle" fill="#a3a3a3" fontSize="11" fontFamily="Exo 2, sans-serif">Original Finish</text>
    <text x="300" y="250" textAnchor="middle" fill="#a3a3a3" fontSize="11" fontFamily="Exo 2, sans-serif">OG Finish</text>
  </svg>
)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative w-full h-[90vh] min-h-[500px] md:min-h-[600px] bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/60 md:via-[#0a0a0a]/90 md:to-transparent z-10" />

      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-full flex">{beforeAfterSVG}</div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold font-sans leading-tight text-white">
            {slides[current].heading}
            <br />
            <span className="bg-gradient-to-r from-[#dc2626] to-[#991b1b] bg-clip-text text-transparent">
              {slides[current].subheading}
            </span>
          </h1>
          <p className="mt-6 text-lg text-[#a3a3a3] max-w-lg leading-relaxed">{slides[current].description}</p>
          <button className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold rounded-lg transition-all duration-150 cursor-pointer">
            {slides[current].cta}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-150 cursor-pointer ${
              i === current ? "w-8 bg-[#dc2626]" : "w-2 bg-[#2a2a2a] hover:bg-[#a3a3a3]"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
