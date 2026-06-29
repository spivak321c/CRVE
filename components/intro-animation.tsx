"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const letters = ["C", "R", "V", "E", "."]

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setReady(true), 200)
    const t2 = setTimeout(() => setIntroDone(true), 4500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      {!introDone && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none">
          <div className="flex items-center justify-center gap-0">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-white font-extrabold tracking-tight select-none inline-block"
                style={{ fontSize: "clamp(140px, 28vw, 480px)", lineHeight: 1 }}
                initial={{ opacity: 0, y: -200 }}
                animate={
                  ready
                    ? {
                        opacity: [0, 1, 1, 0],
                        y: [-200, 0, 0, -window.innerHeight * 0.5],
                      }
                    : { opacity: 0, y: -200 }
                }
                transition={{
                  duration: 3.5,
                  delay: i * 0.12,
                  ease: [0.25, 1, 0.5, 1],
                  times: [0, 0.3, 0.6, 1],
                }}
              >
                {letter === "." ? (
                  <span className="text-neutral-600">.</span>
                ) : (
                  letter
                )}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
