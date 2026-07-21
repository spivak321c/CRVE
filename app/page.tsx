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
          {/* Gradient Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <p className="text-neon-cyan font-bold text-sm uppercase tracking-widest mb-6">
                Creative Excellence
              </p>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8"
            >
              We Design
              <br />
              <span className="text-neon-cyan">The Future</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12"
            >
              Bold ideas. Exceptional execution. We create digital experiences that push boundaries and inspire change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 bg-neon-cyan text-black font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
              >
                Start Project
              </button>
              <Link
                href="/work"
                className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold text-sm uppercase tracking-wider hover:bg-neon-cyan/10 transition-all duration-300"
              >
                View Work
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan"
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
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
            <div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-6">
                What We
                <br />
                <span className="text-neon-cyan">Deliver</span>
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                We combine strategic thinking with exceptional design and development to create digital products that matter.
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
                className="group p-8 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:bg-white/2"
              >
                <div className="text-4xl mb-4 text-neon-cyan group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8">
              Ready to Create
              <br />
              <span className="text-neon-cyan">Something Exceptional?</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="px-10 py-5 bg-neon-cyan text-black font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-black tracking-tighter mb-2">
                CRVE<span className="text-neon-cyan">.</span>
              </p>
              <p className="text-sm text-neutral-400">Creative. Bold. Forward-thinking.</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-bold">Navigation</p>
              <div className="space-y-1">
                <p>
                  <Link href="/work" className="text-neutral-400 hover:text-neon-cyan transition-colors text-sm">
                    Work
                  </Link>
                </p>
                <p>
                  <Link href="/services" className="text-neutral-400 hover:text-neon-cyan transition-colors text-sm">
                    Services
                  </Link>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-neutral-600 font-bold">Contact</p>
              <p className="text-neutral-400 text-sm">hello@crve.studio</p>
              <p className="text-neutral-400 text-sm">Port Harcourt, Nigeria</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-neutral-600">
            <p>&copy; 2026 CRVE. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}
