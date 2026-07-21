"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!cursorRef.current) return

    const cursor = cursorRef.current
    let isMoving = false

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      if (!isMoving) {
        isMoving = true
        gsap.to(cursor, {
          x: mousePos.current.x - 15,
          y: mousePos.current.y - 15,
          duration: 0.1,
          overwrite: "auto",
        })
        isMoving = false
      }
    }

    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 })
    }

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3 })
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 border-2 border-[#ff006e] rounded-full pointer-events-none z-50 opacity-0"
      style={{
        transform: "translate3d(0, 0, 0)",
        boxShadow: "0 0 20px rgba(255, 0, 110, 0.5), inset 0 0 20px rgba(255, 0, 110, 0.3)",
      }}
    />
  )
}
