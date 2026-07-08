"use client"

const brands = [
  "Blaupunkt",
  "Ceramic Pro",
  "Glasurit",
  "JBL",
  "Sony",
  "Nakamichi",
  "Nippon Paint",
  "Knightskin",
  "Profender",
]

export default function BrandMarquee() {
  const items = [...brands, ...brands]

  return (
    <section className="w-full bg-[#0a0a0a] py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#a3a3a3] mb-10">
          Our Brand Partners
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex gap-16 items-center shrink-0 pr-16">
          {items.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="h-12 flex items-center justify-center grayscale opacity-50 hover:opacity-100 hover:filter-none transition-all duration-150"
            >
              <svg
                viewBox="0 0 180 48"
                className="h-full w-auto"
              >
                <rect x="0" y="0" width="180" height="48" rx="6" fill="#1a1a1a" />
                <text
                  x="90"
                  y="28"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#a3a3a3"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="Exo 2, sans-serif"
                >
                  {name}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
