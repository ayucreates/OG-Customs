"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const filters = ["All", "PPF", "Ceramic Coating", "Body Paint", "Off-Roading", "Detailing"]

const projects = [
  { title: "Hyundai Creta Full PPF", category: "PPF" },
  { title: "Toyota Fortuner Ceramic Coating", category: "Ceramic Coating" },
  { title: "BMW 3 Series Wide Body Kit", category: "Body Paint" },
  { title: "Thar Off-Road Build", category: "Off-Roading" },
  { title: "Mercedes GLC Paint Correction", category: "Detailing" },
  { title: "Mahindra Scorpio Custom Paint", category: "Body Paint" },
  { title: "Honda City Full PPF", category: "PPF" },
  { title: "Ford Endeavour Overlander", category: "Off-Roading" },
  { title: "Audi A4 Ceramic Coating", category: "Ceramic Coating" },
  { title: "Jaguar F-Type Full Restoration", category: "Detailing" },
  { title: "Hyundai Verna Facelift", category: "Body Paint" },
  { title: "Suzuki Jimny Off-Road Build", category: "Off-Roading" },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            Our Work
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Portfolio</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
            Every project tells a story. Browse through our work and see the
            transformations that make OG Customs the name you can trust.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-md px-5 py-2 text-sm font-medium transition-all duration-150 ${
                  activeFilter === filter
                    ? "bg-[#dc2626] text-white"
                    : "bg-[#1a1a1a] text-[#a3a3a3] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a1a1a]"
              >
                <div className="flex h-full items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Search size={32} className="text-[#404040]" />
                    <span className="text-xs text-[#404040]">Image Placeholder</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-100 md:opacity-0 transition-opacity duration-150 md:group-hover:opacity-100">
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-[#dc2626]">{project.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
