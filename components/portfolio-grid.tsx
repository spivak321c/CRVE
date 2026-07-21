"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface PortfolioItem {
  id: string
  title: string
  category: string
  image: string
}

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (!gridRef.current) return

    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {items.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) itemsRef.current[i] = el
          }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-square overflow-hidden bg-neutral-900">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-center">
                <p className="text-neon-cyan text-sm uppercase tracking-widest font-bold mb-2">
                  {item.category}
                </p>
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold mt-4 text-white group-hover:text-neon-cyan transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">{item.category}</p>
        </div>
      ))}
    </div>
  )
}
