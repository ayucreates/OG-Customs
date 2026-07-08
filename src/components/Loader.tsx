"use client"

import { useState, useEffect } from "react"

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let cancelled = false
    const fallback = setTimeout(() => { cancelled = true; setIsVisible(false) }, 5000)

    function onLoad() {
      if (cancelled) return
      clearTimeout(fallback)
      setTimeout(() => setIsVisible(false), 400)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }

    return () => {
      cancelled = true
      clearTimeout(fallback)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <span className="relative z-10 animate-pulse text-2xl font-bold tracking-widest text-[#dc2626]">
        Loading...
      </span>
    </div>
  )
}
