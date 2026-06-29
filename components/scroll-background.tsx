"use client"

import { useEffect, useRef } from "react"

type Element = {
  el: HTMLElement
  x: number
  y: number
  rx: number
  ry: number
  vx: number
  vy: number
  vr: number
  originX: number
  originY: number
  originRX: number
  originRY: number
}

export function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isDesktop = window.innerWidth >= 768
    if (!isDesktop) return

    const shapes: Element[] = []
    let velocity = 0
    let mouseX = 0
    let mouseY = 0
    let rafId: number

    for (let i = 0; i < 6; i++) {
      const el = document.createElement("div")
      el.className = "scroll-shape"
      el.style.position = "absolute"
      el.style.pointerEvents = "none"

      if (i === 0) {
        el.style.width = "clamp(200px, 30vw, 500px)"
        el.style.height = "clamp(200px, 30vw, 500px)"
        el.style.borderRadius = "50%"
        el.style.border = "1px solid rgba(255,255,255,0.04)"
        el.style.left = "60%"
        el.style.top = "10%"
      } else if (i === 1) {
        el.style.width = "clamp(120px, 18vw, 300px)"
        el.style.height = "clamp(120px, 18vw, 300px)"
        el.style.borderRadius = "50%"
        el.style.border = "1px solid rgba(255,255,255,0.03)"
        el.style.left = "15%"
        el.style.top = "55%"
      } else if (i === 2) {
        el.style.width = "clamp(60px, 8vw, 140px)"
        el.style.height = "clamp(60px, 8vw, 140px)"
        el.style.borderRadius = "50%"
        el.style.backgroundColor = "rgba(255,255,255,0.015)"
        el.style.left = "75%"
        el.style.top = "65%"
      } else if (i === 3) {
        el.style.width = "clamp(80px, 10vw, 180px)"
        el.style.height = "clamp(80px, 10vw, 180px)"
        el.style.borderRadius = "50%"
        el.style.border = "1px solid rgba(255,255,255,0.025)"
        el.style.left = "40%"
        el.style.top = "75%"
      } else if (i === 4) {
        el.style.width = "1px"
        el.style.height = "clamp(100px, 15vh, 250px)"
        el.style.backgroundColor = "rgba(255,255,255,0.02)"
        el.style.left = "25%"
        el.style.top = "15%"
      } else if (i === 5) {
        el.style.width = "clamp(100px, 14vw, 240px)"
        el.style.height = "1px"
        el.style.backgroundColor = "rgba(255,255,255,0.02)"
        el.style.left = "50%"
        el.style.top = "40%"
      }

      container.appendChild(el)

      const rect = el.getBoundingClientRect()
      shapes.push({
        el,
        x: 0,
        y: 0,
        rx: 0,
        ry: 0,
        vx: 0,
        vy: 0,
        vr: 0,
        originX: parseFloat(el.style.left),
        originY: parseFloat(el.style.top),
        originRX: 0,
        originRY: 0,
      })
    }

    function tick() {
      velocity *= 0.9
      if (Math.abs(velocity) < 0.001) velocity = 0

      const mdx = (mouseX / window.innerWidth - 0.5) * 2
      const mdy = (mouseY / window.innerHeight - 0.5) * 2

      shapes.forEach((s, i) => {
        const strength = 1 - i * 0.12
        s.vy += velocity * 0.15 * strength
        s.vx += velocity * 0.03 * (i % 2 === 0 ? 1 : -1) * strength
        s.vr += velocity * 0.002 * (i % 2 === 0 ? 1 : -1) * strength

        s.vy += mdy * 0.02 * strength
        s.vx += mdx * 0.02 * strength

        s.vy *= 0.92
        s.vx *= 0.92
        s.vr *= 0.92

        s.y += s.vy
        s.x += s.vx
        s.ry += s.vr

        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.ry}deg)`
      })

      rafId = requestAnimationFrame(tick)
    }

    function onWheel(e: WheelEvent) {
      velocity += e.deltaY * 0.3
      velocity = Math.max(-80, Math.min(80, velocity))
    }

    function onTouchStart(e: TouchEvent) {
      startY = e.touches[0].screenY
    }

    function onTouchMove(e: TouchEvent) {
      const dy = startY - e.touches[0].screenY
      velocity += dy * 0.2
      velocity = Math.max(-80, Math.min(80, velocity))
      startY = e.touches[0].screenY
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    let startY = 0

    window.addEventListener("wheel", onWheel, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("mousemove", onMouseMove)
      shapes.forEach((s) => s.el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none hidden md:block"
      aria-hidden="true"
    />
  )
}
