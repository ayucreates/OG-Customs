import { Shield, Users, Target, Award } from "lucide-react"
import StatsSection from "@/components/StatsSection"

const values = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "Every vehicle that leaves our workshop meets the highest standards of precision and craftsmanship. We never cut corners.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your vision drives everything we do. We listen, advise, and deliver exactly what you need — no more, no less.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description:
      "From the smallest trim clip to a full-body respray, we obsess over the details that make the difference between good and great.",
  },
  {
    icon: Award,
    title: "Innovation & Expertise",
    description:
      "Our team stays ahead of the curve with the latest techniques, tools, and technologies in automotive customization.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            Who We Are
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
            OG Customs was born from a passion for cars and a vision to bring
            world-class customization to Kokrajhar, Assam.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#dc2626]">
                Our Philosophy
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
                More Than Just A <span className="text-[#dc2626]">Garage</span>
              </h2>
              <p className="mb-4 leading-relaxed text-[#a3a3a3]">
                At OG Customs, we believe a car is more than a machine — it's an
                extension of your personality. Since opening our doors in 2026, we've
                dedicated ourselves to transforming ordinary vehicles into extraordinary
                expressions of individuality.
              </p>
              <p className="leading-relaxed text-[#a3a3a3]">
                Located in the heart of Kokrajhar, Assam, our state-of-the-art workshop
                is equipped with the latest tools and staffed by a team of certified
                technicians who share one common goal: delivering automotive perfection.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-full items-center justify-center rounded-xl bg-[#1a1a1a] lg:h-96">
                <span className="text-sm text-[#404040]">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#dc2626]">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 text-center transition-all duration-150 hover:border-[#dc2626]/50"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#dc2626]/10 text-[#dc2626]">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#a3a3a3]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className="flex animate-[marquee_30s_linear_infinite] gap-12">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0 items-center gap-12">
                  {["3M", "CERAMIC PRO", "STEK", "XPEL", "HEXIS", "RAL", "PPG", "BOSCH"].map(
                    (brand) => (
                      <span
                        key={brand}
                        className="text-lg font-bold tracking-wider text-[#404040] transition-colors hover:text-white"
                      >
                        {brand}
                      </span>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let's Build Something Together</h2>
          <p className="mb-8 text-lg leading-relaxed text-[#a3a3a3]">
            Have a project in mind? We'd love to hear about it. Drop by our workshop or
            give us a call.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-[#dc2626] px-8 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#b91c1c]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
