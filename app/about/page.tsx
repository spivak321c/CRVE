"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { staggerFadeScale, magneticHover } from "@/lib/gsap-effects"

const values = [
  {
    number: "01",
    title: "Creativity",
    description: "We believe in the power of creative thinking to solve problems and create meaningful experiences that resonate with real people.",
  },
  {
    number: "02",
    title: "Integrity",
    description: "We operate with honesty and transparency in all our relationships. We stand by our work and our commitments.",
  },
  {
    number: "03",
    title: "Collaboration",
    description: "The best work comes from working closely with clients. We value diverse perspectives and genuine partnership.",
  },
  {
    number: "04",
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in everything we do. No shortcuts, no compromises.",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dig deep into your business, market, and audience through research and workshops to uncover real opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We craft a focused strategy aligned with your goals, defining a clear roadmap from where you are to where you want to be.",
  },
  {
    step: "03",
    title: "Creation",
    description: "Our team brings the strategy to life through world-class design, compelling content, and powerful storytelling.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "We manage the entire implementation, ensuring a seamless launch with ongoing support and optimization.",
  },
]

const team = [
  {
    name: "Kuch",
    role: "Product Designer",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198709/kuch_eiesrl.jpg",
  },
  {
    name: "Andre",
    role: "Fullstack Developer",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198701/andre_zgqi1y.jpg",
  },
]

const statsData = [
  { value: 48, suffix: " +", label: "Projects Delivered" },
  { value: 24, suffix: " +", label: "Happy Clients" },
  { value: 2, suffix: "", label: "Years of Craft" },
  { value: 2, suffix: "", label: "Team Members" },
]

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    setCount(0)
    const duration = 1500
    const start = performance.now()
    let raf: number
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center flex-1">
      <span className="block text-[clamp(40px,5vw,64px)] font-extrabold tracking-tight text-white leading-none">
        {count}{suffix}
      </span>
      <span className="block text-xs text-[#a6a6a6] font-medium uppercase tracking-[0.15em] mt-2">
        {label}
      </span>
    </div>
  )
}

export default function AboutPage() {
  useEffect(() => {
    // Stagger animation for values cards
    staggerFadeScale(".values-card", {
      duration: 0.6,
      stagger: 0.1,
      delay: 0.1,
      fromScale: 0.9,
    })

    // Stagger animation for team members
    staggerFadeScale(".team-member", {
      duration: 0.6,
      stagger: 0.08,
      delay: 0.1,
      fromScale: 0.95,
    })

    // Magnetic hover effect on team members
    magneticHover(".team-member", 0.2)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pb-28 px-6 md:px-12 overflow-hidden min-h-[70vh] flex items-center">
        <span className="absolute -top-12 right-0 md:right-12 text-[clamp(200px,30vw,400px)] font-extrabold tracking-tighter text-white/[0.025] leading-none pointer-events-none select-none">
          About
        </span>
        <StaggerContainer className="max-w-[1400px] mx-auto relative z-10 w-full">
          <StaggerItem>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-6">
              About CRVE
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-[clamp(32px,8vw,88px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white max-w-full mb-8">
              We build brands that outlast trends.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base md:text-lg text-[#a6a6a6] leading-relaxed max-w-xl font-light">
              An independent design and development studio in Port Harcourt.
              We do not follow trends. We build systems that scale and outlive the moment.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Studio Image */}
      <section className="border-t border-white/[0.08]">
        <div className="h-[50vh] md:h-[60vh] w-full bg-black flex items-center justify-center border-b border-white/[0.08]">
          <span className="text-[clamp(80px,15vw,200px)] font-extrabold text-white/[0.03] tracking-[-0.03em] select-none">
            CRVE
          </span>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              Our Story
            </span>
          </ScrollReveal>
          <div className="space-y-10">
            <ScrollReveal>
              <p className="text-[clamp(28px,4.5vw,52px)] font-extrabold tracking-[-0.03em] text-white leading-[1.05] max-w-4xl">
                Founded in 2024. Based in Port Harcourt. Built for the bold.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl md:text-2xl text-[#a6a6a6] leading-relaxed font-light italic max-w-3xl">
                We believe design should solve problems, not just look good.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="max-w-xl space-y-6">
                <p className="text-sm md:text-base text-[#a6a6a6] leading-relaxed font-light">
                  CRVE started with a simple belief: design should solve problems, not just look good.
                  What began as a small team of strategists and engineers has grown into a full-service
                  creative studio working with startups, established brands, and everything in between.
                </p>
                <p className="text-sm md:text-base text-[#a6a6a6] leading-relaxed font-light">
                  Every project teaches us something new and shapes our approach to creative problem-solving.
                  We do not believe in one-size-fits-all solutions. Each client brings a unique challenge,
                  and we meet it with the same rigor and curiosity every time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
              {statsData.map((stat, i) => (
                <div key={stat.label} className="flex-1 w-full md:w-auto flex items-center justify-center">
                  <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.1} />
                  {i < statsData.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-white/[0.08]" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              Values
            </span>
          </ScrollReveal>
          {/* Desktop */}
          <div className="hidden md:block">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-xs text-[#a6a6a6] font-medium uppercase tracking-[0.15em] mb-8">
                <span>Scroll</span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </div>
            </ScrollReveal>
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden -mx-6 px-6">
              <div className="flex gap-6 pb-4 w-max">
                {values.map((value, i) => (
                  <motion.div
                    key={value.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="values-card w-[320px] flex-shrink-0 border border-white/[0.08] p-8 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                  >
                    <span className="text-5xl font-extrabold tracking-tight text-white/[0.06] block mb-6">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#a6a6a6] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.number} delay={i * 0.08}>
                <div className="values-card border border-white/[0.08] p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-extrabold tracking-tight text-[#a6a6a6]">
                      {value.number}
                    </span>
                    <h3 className="text-lg font-medium tracking-tight text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#a6a6a6] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-16">
              Process
            </span>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-white/[0.08]" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {process.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.1}>
                  <div className="relative">
                    <div className="hidden md:flex items-center justify-center w-6 h-6 border border-white/[0.08] relative z-10 mb-8">
                      <div className="w-2 h-2 bg-white" />
                    </div>
                    <span className="hidden md:block text-5xl font-extrabold tracking-tight text-white/[0.06] mb-4">
                      {item.step}
                    </span>
                    <div className="flex items-center gap-4 md:hidden mb-3">
                      <span className="text-2xl font-extrabold tracking-tight text-white/[0.15]">
                        {item.step}
                      </span>
                      <h3 className="text-lg font-medium tracking-tight text-white">
                        {item.title}
                      </h3>
                    </div>
                    <h3 className="hidden md:block text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#a6a6a6] leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              Team
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="team-member group border border-white/[0.08] overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-medium text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#a6a6a6] font-light mt-1 uppercase tracking-[0.1em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <ScrollReveal className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] mb-8">
              Ready to build something great?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-5 text-sm font-medium uppercase tracking-[0.2em] text-white hover:text-[#a6a6a6] transition-colors duration-300 group"
            >
              Start a Project
              <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
