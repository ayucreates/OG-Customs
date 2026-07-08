import HeroSlider from "@/components/HeroSlider"
import BrandMarquee from "@/components/BrandMarquee"
import ServicesSection from "@/components/ServicesSection"
import StatsSection from "@/components/StatsSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import TestimonialsCTA from "@/components/TestimonialsCTA"
import ProjectsGrid from "@/components/ProjectsGrid"
import CommunitySection from "@/components/CommunitySection"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BrandMarquee />

      <ServicesSection />

      <section className="border-b border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#dc2626]">
                Our Philosophy
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                WE DON'T JUST FIX CARS,{" "}
                <span className="text-[#dc2626]">WE BUILD TRUST</span>
              </h2>
              <p className="mb-6 leading-relaxed text-[#a3a3a3]">
                Since 2026, OG Customs has been Kokrajhar&apos;s most trusted name in
                automotive customization. Every car that rolls into our workshop
                leaves with a piece of our passion. We don&apos;t just modify
                vehicles — we craft experiences, build relationships, and fuel
                the automotive culture of Northeast India.
              </p>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-[#dc2626] transition-colors hover:text-white"
              >
                Read Our Story
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-full items-center justify-center rounded-xl bg-[#1a1a1a] lg:h-96">
                <span className="text-sm text-[#404040]">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <WhyChooseUs />
      <TestimonialsCTA />
      <ProjectsGrid />
      <CommunitySection />
    </>
  )
}
