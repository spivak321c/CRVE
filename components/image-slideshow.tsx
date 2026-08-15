"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"

interface ImageSlideshowProps {
  images: string[]
  alt: string
  interval?: number
  className?: string
}

export function ImageSlideshow({ images, alt, interval = 3500, className = "" }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1 || !visible) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval, images.length, visible])

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden bg-neutral-950 ${className}`}>
      {images.map((src, i) => {
        const isActive = i === current
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            {visible && (
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                quality={75}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
