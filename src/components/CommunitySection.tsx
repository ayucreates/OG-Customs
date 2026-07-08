"use client"

export default function CommunitySection() {
  return (
    <section className="w-full bg-[#1a1a1a] border-y border-[#2a2a2a] py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex justify-center gap-8 md:gap-12 mb-10">
          <div>
            <p className="text-3xl md:text-[2.5rem] font-bold font-sans text-[#dc2626] leading-none">10K+</p>
            <p className="mt-1 text-sm text-[#a3a3a3]">Followers</p>
          </div>
          <div>
            <p className="text-3xl md:text-[2.5rem] font-bold font-sans text-[#dc2626] leading-none">5K+</p>
            <p className="mt-1 text-sm text-[#a3a3a3]">Community</p>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
          Join the <span className="text-[#dc2626]">Community</span>
        </h2>
        <p className="text-[#a3a3a3] max-w-lg mx-auto mb-10 leading-relaxed">
          Follow us on Instagram for daily updates, behind-the-scenes content, build reveals, and a growing community of
          automotive enthusiasts who share your passion.
        </p>
        <a
          href="https://www.instagram.com/rebel.ayu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white font-semibold transition-all duration-150 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  )
}
