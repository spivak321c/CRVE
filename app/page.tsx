"use client"

import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import { cancelFrame, frame } from "framer-motion"
import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollBackground } from "@/components/scroll-background"
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { ValuesSection } from "@/components/values-section"
import { HeroBanner } from "@/components/hero-banner"
import { GsapSectionWrapper } from "@/components/gsap-section-wrapper"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { magneticHover, staggerFadeScale } from "@/lib/gsap-effects"

const ease = [0.25, 1, 0.5, 1] as const

const services = [
  {
    id: "01",
    title: "Brand Strategy",
    description:
      "We develop comprehensive brand strategies that define your unique position. From market research to positioning, we build a foundation for all creative work.",
    features: ["Market Research", "Brand Positioning", "Competitive Analysis", "Messaging Framework"],
  },
  {
    id: "02",
    title: "Visual Identity",
    description:
      "Creating distinctive visual identities that make your brand memorable. Logos, color systems, typography, and all visual elements.",
    features: ["Logo Design", "Color Systems", "Typography", "Brand Asset Library"],
  },
  {
    id: "03",
    title: "Digital Design",
    description:
      "Beautiful and functional digital experiences. From websites to applications, interfaces that engage users and drive results.",
    features: ["UX/UI Design", "Website Design", "App Design", "Design Systems"],
  },
  {
    id: "04",
    title: "Web Development",
    description:
      "Fast, scalable, and secure web applications using modern technologies. Responsive websites to complex platforms.",
    features: ["Full-Stack Development", "Performance Optimization", "API Development", "Database Architecture"],
  },
  {
    id: "05",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that users love. From concept to launch, the entire development lifecycle.",
    features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
  },
  {
    id: "06",
    title: "Content Strategy",
    description:
      "Strategic content that tells your story and engages your audience. Content strategies aligned with business goals.",
    features: ["Content Audit", "Strategy Development", "Copywriting", "SEO Optimization"],
  },
]

const projects = [
  {
    id: "001",
    title: "Fruity Signature",
    category: "Brand Identity",
    year: "2024",
    images: [
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198735/30fdf6222405637.67e52ac4759e9_txxyii.png",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198752/Artboard_11.jpg_o0zaoy.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198690/2ccb96170262679.645aed7c1e02c.jpg_stwlvg.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198797/b07a93222405637.67e52ac478c12_xs9vtn.png",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198717/floe33_eweolq.png",
    ],
  },
  {
    id: "002",
    title: "Alive",
    category: "Campaign",
    year: "2024",
    images: [
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783201792/alive_lmup2w.png",
    ],
  },
  {
    id: "003",
    title: "Sabur Energy",
    category: "Brand Identity",
    year: "2024",
    images: [
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200650/Free_Sign_Mockup_1_uu9ssf.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200688/Billboard_Mockup_2_oc5mk0.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200638/Black_Frame_Citylight_Mockup_vdqogo.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200636/02_Free_Closeup_iPhone_15_Pro_Max_Mockup_nvorpc.jpg",
    ],
  },
  {
    id: "004",
    title: "Flow",
    category: "Brand Identity",
    year: "2024",
    images: [
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200372/Artboard_1_jiovwj.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200369/Artboard_2_n5eo4c.jpg",
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200368/Artboard_3_cnmwtf.jpg",
    ],
  },
]

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }
    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current?.lenis
    if (!lenis) return

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length > 0 && typeof value === "number") {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.animatedScroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    })

    const scrollUpdate = () => ScrollTrigger.update()
    lenis.on("scroll", scrollUpdate)

    setTimeout(() => ScrollTrigger.refresh(), 200)

    return () => {
      lenis.off("scroll", scrollUpdate)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Initialize magnetic hover effects on service cards
  useEffect(() => {
    magneticHover(".service-card-hover", 0.4)
    
    return () => {
      // Cleanup handled by magneticHover
    }
  }, [])

  // Stagger animation for project cards
  useEffect(() => {
    staggerFadeScale(".project-card", {
      duration: 0.6,
      stagger: 0.1,
      delay: 0.2,
      fromScale: 0.95,
    })
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <ScrollBackground />
        <Navigation />

        {/* HERO */}
        <header id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_70%)] opacity-60"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-[13vw] leading-[0.9] letter-spacing-[-0.05em] font-bold text-white text-center">
              /design
            </h1>
          </div>

          {/* Bottom UI Overlays */}
          <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-5 group">
            <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Team member" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="Team member" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all delay-75" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Team member" className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover grayscale group-hover:grayscale-0 transition-all delay-150" />
            </div>
            <p className="text-xs md:text-sm font-medium leading-tight text-[#888888] group-hover:text-white transition-colors">
              Building tomorrow&apos;s<br/>creative solutions.
            </p>
          </div>

          <div className="absolute bottom-12 right-8 md:right-12 text-right">
            <a href="mailto:hello@crve.studio" className="text-white font-medium hover:text-[#FF6B50] transition-colors border-b-2 border-white hover:border-[#FF6B50] pb-1">
              hello@crve.studio
            </a>
          </div>
        </header>

        {/* WORK GALLERY */}
        <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FF6B50]">Selected Work</h2>
            <span className="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">Volume 01 &mdash; 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {projects.map((project, idx) => (
              <article key={project.id} className="group cursor-pointer" style={{ marginTop: idx % 2 === 1 ? "6rem" : "0" }}>
                <div className="aspect-[4/3] overflow-hidden bg-[#111111] rounded-sm">
                  {project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-950" />
                  )}
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-[#FF6B50] transition-colors">{project.title}</h3>
                    <p className="text-[#666666] text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</p>
                  </div>
                  <div className="p-3 rounded-full border border-[#333333] group-hover:bg-[#FF6B50] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#FF6B50] animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">Why launch slow when you can move fast?</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white max-w-5xl mb-24">
            Clean, scalable design that helps you <span className="text-[#666666]">ship faster</span> and grow your revenue.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] rounded-[2.5rem] p-12 min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:bg-[#161616] transition-all duration-500">
              <div className="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
                Hyper-Growth
              </div>
              
              <div className="mt-auto">
                <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-white">
                  Start faster.
                </h3>
                <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#444444] group-hover:text-[#666666] transition-colors">
                  Earn sooner.
                </h3>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-[2.5rem] p-8 md:p-12 min-h-[520px] flex items-center justify-center relative overflow-hidden group">
              <div className="w-full max-w-md bg-[#e5e5e5] rounded-xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <div className="bg-[#f5f5f5] px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-4 h-3 w-32 bg-gray-200 rounded-full"></div>
                </div>
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Enterprise Edition</div>
                    <div className="text-lg font-bold">Creative Suite v1.0</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </section>

        {/* LOWER CONTENT */}
        <section className="relative bg-black">
          <div className="bg-black">
            {/* SERVICES */}
            <section>
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <ScrollReveal>
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-600 py-8">
                    Services
                  </h2>
                </ScrollReveal>
              </div>
              <div className="max-w-[1400px] mx-auto">
                <div className="space-y-0">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="service-card-hover group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100 origin-left" />
                      <div className="relative z-10 md:col-span-1">
                        <ScrollReveal>
                          <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 group-hover:text-black transition-colors duration-500">
                            {service.id}
                          </span>
                        </ScrollReveal>
                      </div>
                      <div className="relative z-10 md:col-span-4">
                        <ScrollReveal delay={0.05}>
                          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-black mb-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                            {service.title}
                          </h2>
                          <p className="text-sm text-neutral-400 group-hover:text-neutral-600 leading-relaxed transition-colors duration-500">
                            {service.description}
                          </p>
                        </ScrollReveal>
                      </div>
                      <div className="relative z-10 md:col-span-5">
                        <ScrollReveal delay={0.1}>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="text-xs text-neutral-600 group-hover:text-neutral-700 font-mono transition-colors duration-500">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </ScrollReveal>
                      </div>
                      <div className="relative z-10 md:col-span-2 flex md:justify-end">
                        <ScrollReveal delay={0.15}>
                          <Link
                            href="/contact"
                            className="nav-link text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black transition-colors duration-500"
                          >
                            Inquire
                          </Link>
                        </ScrollReveal>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* VALUES SECTION */}
            <ValuesSection />

            {/* MANIFESTO */}
            <section className="border-t border-white/[0.08]">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
                <ScrollReveal className="px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-white/[0.08]">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-4">
                    Manifesto
                  </span>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-[1.1]">
                    We build systems that outlast the noise.
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-sm">
                    CRVE is an independent studio in Port Harcourt. We don&apos;t subscribe to fleeting trends. Every system we build is designed to scale and outlive the moment.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors mt-8 group"
                  >
                    Learn About Our Approach
                    <span className="inline-block w-6 h-px bg-white group-hover:w-10 transition-all duration-500" />
                  </Link>
                </ScrollReveal>
              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-b border-white/[0.08] py-10 md:py-12 px-6 md:px-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
              >
                Start a Project
                <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
              </Link>
            </section>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  )
}
