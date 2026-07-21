"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ChevronDown } from "lucide-react"

interface ServiceItem {
  id: string
  title: string
  description: string
  details: string[]
}

interface ServicesAccordionProps {
  items: ServiceItem[]
}

export function ServicesAccordion({ items }: ServicesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out",
      })
    })
  }, [])

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) itemsRef.current[i] = el
          }}
          className="border border-white/10 overflow-hidden hover:border-neon-cyan/50 transition-colors duration-300"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/2 transition-colors duration-300 group"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{item.description}</p>
            </div>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-4"
            >
              <ChevronDown className="text-neon-cyan" size={24} />
            </motion.div>
          </button>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: openId === item.id ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5"
          >
            <div className="px-8 py-6 bg-white/2">
              <ul className="space-y-3">
                {item.details.map((detail, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={openId === item.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: j * 0.05 }}
                    className="text-neutral-300 text-sm flex items-start gap-3"
                  >
                    <span className="text-neon-cyan flex-shrink-0 mt-1">+</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
