"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LuxuryHeader } from "@/components/luxury-header"
import { InfiniteMarquee } from "@/components/infinite-marquee"
import { ContactDrawer } from "@/components/contact-drawer"
import { CursorFollower } from "@/components/cursor-follower"
import { motion } from "framer-motion"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const clients = [
  "Design Studios",
  "Tech Startups",
  "Global Brands",
  "Creative Agencies",
  "Digital Products",
  "Future Ventures",
]

const services = [
  {
    icon: "✦",
    title: "Brand Identity",
    description: "From concept to execution. We craft memorable identities that define your presence.",
  },
  {
    icon: "◆",
    title: "Digital Design",
    description: "Cutting-edge interfaces and experiences that captivate and convert users.",
  },
  {
    icon: "●",
    title: "Web Development",
    description: "Performance-first development for scalable, future-proof digital products.",
  },
  {
    icon: "▲",
    title: "Strategy",
    description: "Comprehensive strategic direction that aligns creativity with business goals.",
  },
]

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    // Hero title animation
    gsap.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    })

    // Background scroll effect
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
      })
    }
  }, [])

  return (
    <>
      <CursorFollower />
      <LuxuryHeader />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <main className="bg-black">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <p className="text-xs font-mono uppercase tracking-[0.3em] mb-8 text-neutral-400">
                DESIGN STUDIO
              </p>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mb-8 text-white"
            >
              We Create
              <br />
              <span className="text-[#ff006e]">Tomorrow</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm md:text-base font-mono text-neutral-500 max-w-2xl mx-auto mb-16 leading-relaxed"
            >
              Pixel-perfect design meets intelligent strategy. We build digital experiences that captivate and convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-wider hover:shadow-[0_0_40px_rgba(255,0,110,0.3)] transition-all duration-300 border border-white hover:border-[#ff006e]"
              >
                Start Project
              </button>
              <Link
                href="/work"
                className="px-10 py-5 border-2 border-white text-white font-black text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                View Work
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Marquee Section */}
        <section className="py-24 border-y border-white/10 bg-gradient-to-b from-black to-neutral-950">
          <div className="mb-12">
            <InfiniteMarquee items={clients} speed={30} className="py-8" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto border-y border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
            <div className="md:col-span-2">
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 text-white">
                Our
                <br />
                <span className="text-[#ff006e]">Services</span>
              </h2>
              <p className="text-sm font-mono text-neutral-500 leading-relaxed max-w-xl">
                Strategic brand development, visual identity design, digital experiences, and development that elevates your business.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/10 hover:border-[#ff006e] transition-all duration-300 hover:bg-white/2 hover:shadow-[inset_0_0_20px_rgba(255,0,110,0.1)]"
              >
                <div className="text-4xl mb-4 text-white group-hover:text-[#ff006e] group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-white">{service.title}</h3>
                <p className="text-sm text-neutral-500 font-mono">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden border-y border-white/10">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 text-white">
              Let's Build
              <br />
              <span className="text-[#ff006e]">Something Great</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-[#ff006e] hover:text-white hover:shadow-[0_0_40px_rgba(255,0,110,0.4)] transition-all duration-300 border border-white hover:border-[#ff006e]"
            >
              Start Your Project
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6 bg-black">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <p className="text-2xl font-black tracking-tighter mb-4 text-white">
                CRVE<span className="text-[#ff006e]">.</span>
              </p>
              <p className="text-xs font-mono text-neutral-500">Independent creative studio crafting bold digital experiences.</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-white">Links</p>
              <div className="space-y-2">
                <p>
                  <Link href="/work" className="text-xs text-neutral-500 font-mono hover:text-[#ff006e] transition-colors">
                    Work
                  </Link>
                </p>
                <p>
                  <Link href="/services" className="text-xs text-neutral-500 font-mono hover:text-[#ff006e] transition-colors">
                    Services
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-white">Contact</p>
              <p className="text-xs text-neutral-500 font-mono">hello@crve.studio</p>
              <p className="text-xs text-neutral-500 font-mono">Port Harcourt, Nigeria</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-neutral-600 font-mono">
            <p>&copy; 2026 CRVE. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
