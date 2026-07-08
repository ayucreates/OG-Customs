"use client"

export default function TestimonialsCTA() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#a3a3a3] mb-4">
          Want to See Our
        </span>
        <h2 className="text-4xl md:text-6xl font-bold font-sans mb-6">
          <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f77737] bg-clip-text text-transparent">
            TESTIMONIALS?
          </span>
        </h2>
        <p className="text-[#a3a3a3] max-w-lg mx-auto mb-10 leading-relaxed">
          See what our customers are saying! Check out our Instagram for real builds, before-and-after transformations,
          and reviews from the OG Customs community.
        </p>
        <a
          href="https://www.instagram.com/rebel.ayu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-150 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #833ab4, #fd1d1d, #f77737)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
