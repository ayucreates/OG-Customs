import { Shield, Sparkles, Car, Mountain, Paintbrush, RotateCcw, Wrench } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Paint Protection Film (PPF)",
    description:
      "Premium self-healing PPF that shields your vehicle's paint from stone chips, scratches, UV rays, and environmental contaminants. Our precision installation ensures invisible protection with a glossy or matte finish.",
    points: [
      "Self-healing top coat technology",
      "UV resistance up to 99.9%",
      "Hydrophobic properties for easy cleaning",
      "Custom cut or bulk film installation",
    ],
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description:
      "Advanced nano-ceramic coatings that create a permanent or semi-permanent bond with your paint, providing unmatched gloss, hydrophobicity, and protection against contaminants.",
    points: [
      "9H hardness rating for scratch resistance",
      "Chemical & water spot resistance",
      "Deep wet-look gloss enhancement",
      "Up to 5 years of durable protection",
    ],
  },
  {
    icon: Car,
    title: "Body Facelift & Customization",
    description:
      "Transform the look of your vehicle with wide-body kits, custom bumpers, grilles, spoilers, diffusers, and full exterior restyling. We bring your vision to life.",
    points: [
      "OEM & aftermarket body kit installation",
      "Custom wide-body fabrication",
      "Lighting upgrades (LED, DRL, sequential)",
      "Vinyl wraps & custom paint",
    ],
  },
  {
    icon: Mountain,
    title: "4x4 Off-Roading Builds",
    description:
      "From mild trail rigs to extreme overlanders, we build capable off-road vehicles that conquer the toughest terrains of Northeast India.",
    points: [
      "Suspension lifts & leveling kits",
      "All-terrain & mud-terrain tire fitting",
      "Winch, bumper & armor installation",
      "Snorkel, roof rack & accessory mounting",
    ],
  },
  {
    icon: Paintbrush,
    title: "Denting & Painting",
    description:
      "Factory-quality dent repair and paint jobs using state-of-the-art equipment and premium paints. Color matching guaranteed.",
    points: [
      "Paintless dent repair (PDR)",
      "Full & partial resprays",
      "Custom color matching",
      "Panel beating & replacement",
    ],
  },
  {
    icon: RotateCcw,
    title: "Detailing & Restoration",
    description:
      "Breathe new life into your vehicle with our comprehensive detailing and restoration packages. From deep interior cleaning to full concours-level restoration.",
    points: [
      "Paint correction & polishing",
      "Interior deep cleaning & leather treatment",
      "Engine bay detailing",
      "Classic car restoration",
    ],
  },
  {
    icon: Wrench,
    title: "Car Accessories",
    description:
      "Upgrade your ride with the latest performance parts and aesthetic accessories sourced from trusted brands worldwide.",
    points: [
      "Performance exhausts & intakes",
      "Alloy wheels & performance tires",
      "Interior carbon fiber trim",
      "Audio system upgrades & sound deadening",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dc2626]/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            What We Do
          </span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
            From protective films to full custom builds — every service we offer is
            delivered with precision, passion, and an unwavering commitment to quality.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-8 transition-all duration-150 hover:border-[#dc2626]/50 hover:shadow-lg hover:shadow-[#dc2626]/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#dc2626]/10 text-[#dc2626]">
                    <Icon size={26} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mb-5 leading-relaxed text-[#a3a3a3]">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dc2626]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Transform Your Ride?</h2>
          <p className="mb-8 text-lg leading-relaxed text-[#a3a3a3]">
            Book a free consultation today and let's discuss how OG Customs can bring
            your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-[#dc2626] px-8 py-3 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#b91c1c]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
