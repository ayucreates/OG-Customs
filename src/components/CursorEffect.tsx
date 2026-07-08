"use client"

import { useEffect, useRef } from "react"

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const ringPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    if (isMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }

    const animate = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.12
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.12
      ring.style.transform = `translate(${ringPosRef.current.x - 16}px, ${ringPosRef.current.y - 16}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", onMouseMove)
    requestAnimationFrame(animate)

    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-[#dc2626] md:block hidden"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-[#dc2626] md:block hidden"
      />
    </>
  )
}
