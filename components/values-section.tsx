"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface TypedTextProps {
  text: string
  delay?: number
}

function TypedText({ text, delay = 0 }: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0
    
    const timeout = setTimeout(() => {
      const typeNextCharacter = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
          timeoutRef.current = setTimeout(typeNextCharacter, 50)
        }
      }
      typeNextCharacter()
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text, delay])

  return <span>{displayedText}</span>
}

interface ValueItemProps {
  text: string
  delay?: number
  index: number
}

function ValueItem({ text, delay = 0, index }: ValueItemProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { margin: "-100px" }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="flex flex-col items-center"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-center leading-tight">
        {isInView ? <TypedText text={text} delay={delay + index * 200} /> : ""}
      </p>
    </motion.div>
  )
}

export function ValuesSection() {
  return (
    <section className="border-t border-white/[0.08] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <ValueItem text="100% Strategy" delay={0} index={0} />
          <ValueItem text="100% Execution" delay={100} index={1} />
          <ValueItem text="100% Planning" delay={200} index={2} />
        </div>
      </div>
    </section>
  )
}
