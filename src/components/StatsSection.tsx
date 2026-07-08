"use client"

import { useRef, useState, useEffect } from "react"

const stats = [
  { value: 5000, suffix: "+", label: "Vehicles" },
  { value: 4.9, suffix: "/5", label: "Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Delivery" },
  { value: 2026, suffix: "", label: "Year" },
]

function AnimatedCounter({ to, suffix, decimals = 0 }: { to: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(progress * to)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to])

  return (
    <div ref={ref}>
      <span className="text-[2.75rem] md:text-[3.25rem] font-bold font-sans text-[#dc2626] leading-none">
        {count.toFixed(decimals)}
        {suffix}
      </span>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="w-full bg-[#1a1a1a] border-y border-[#2a2a2a] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <AnimatedCounter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              <p className="mt-2 text-sm text-[#a3a3a3] font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
