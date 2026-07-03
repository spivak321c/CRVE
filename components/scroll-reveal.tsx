"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const ease = [0.25, 1, 0.5, 1] as const

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}

export function ScrollReveal({ children, className, delay = 0, y = 24, duration = 0.7 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface WordRevealProps {
  text: string
  className?: string
  stagger?: number
  tag?: "p" | "span" | "div"
}

export function WordReveal({ text, className, stagger = 0.06, tag = "span" }: WordRevealProps) {
  const words = text.split(" ")
  const Component = motion[tag]

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
          }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Component>
  )
}

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  childDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.08, childDelay = 0.1 }: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
