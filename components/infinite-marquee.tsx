"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface InfiniteMarqueeProps {
  items: string[]
  speed?: number
  reverse?: boolean
  className?: string
}

export function InfiniteMarquee({
  items,
  speed = 20,
  reverse = false,
  className = "",
}: InfiniteMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!marqueeRef.current || !contentRef.current) return

    const marquee = marqueeRef.current
    const content = contentRef.current

    // Clone items for seamless loop
    const clone = content.cloneNode(true)
    marquee.appendChild(clone)

    // Get the width of one set
    const width = content.offsetWidth
    const totalWidth = width * 2

    // Create animation
    gsap.to(marquee, {
      x: reverse ? totalWidth : -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    })

    return () => {
      gsap.killTweensOf(marquee)
    }
  }, [speed, reverse])

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div ref={contentRef} className="flex gap-8 pr-8">
          {items.map((item, i) => (
            <div key={i} className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex-shrink-0 text-white">
              {item}
              <span className="text-[#ff006e]">*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
