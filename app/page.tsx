"use client"

import { ReactLenis } from "lenis/react"
import type { LenisRef } from "lenis/react"
import { cancelFrame, frame } from "framer-motion"
import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectMorph } from "@/components/project-morph"
import { ScrollBackground } from "@/components/scroll-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ValuesSection } from "@/components/values-section"
import { ZoomPortalHero } from "@/components/zoom-portal-hero"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    description:
      "Identity and packaging system for a premium fruit preserve brand, built to own shelf space in a crowded retail category.",
    tags: ["Identity", "Packaging", "Art Direction"],
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
    description:
      "Campaign identity for a product launch, built from one bold mark that flexes across print, digital and motion.",
    tags: ["Campaign", "Art Direction", "Motion"],
    images: [
      "https://res.cloudinary.com/mwvch9hy/image/upload/v1783201792/alive_lmup2w.png",
    ],
  },
  {
    id: "003",
    title: "Sabur Energy",
    category: "Brand Identity",
    year: "2024",
    description:
      "Brand identity for an energy company, from wordmark to billboards and citylight out-of-home, made to hold up at highway scale.",
    tags: ["Identity", "Out-of-Home", "Brand System"],
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
    description: "Visual identity for a creative consultancy, built on a fluid mark and a strict typographic system.",
    tags: ["Identity", "Typography", "Collateral"],
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

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <ScrollBackground />
        <Navigation />

        {/* HERO - Scroll Zoom Portal */}
        <ZoomPortalHero />

        {/* FEATURED PROJECTS HEADING */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto w-full">
            <ScrollReveal>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-[#a6a6a6]/60" aria-hidden="true" />
                  <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#a6a6a6]">
                    Featured Projects
                  </h2>
                </div>
                <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-600">
                  Select a project
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FEATURED PROJECTS - FLIP layout morph */}
        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-[1400px] mx-auto">
            <ProjectMorph projects={projects} />
          </div>
        </section>

        {/* LOWER CONTENT */}
        <section className="relative bg-black">
          <div className="bg-black">
            {/* TICKER */}
            <div className="border-t border-b border-white/[0.08] overflow-hidden py-4">
              <div className="animate-marquee whitespace-nowrap flex">
                <div className="inline-flex gap-16 shrink-0">
                  {["Brand Identity", "Product Design", "Motion Graphics", "Web Engineering", "Digital Strategy"].map(
                    (item) => (
                      <span key={item} className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-800">
                        {item}
                      </span>
                    )
                  )}
                </div>
                <div className="inline-flex gap-16 shrink-0">
                  {["Brand Identity", "Product Design", "Motion Graphics", "Web Engineering", "Digital Strategy"].map(
                    (item) => (
                      <span key={item} className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-800">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <section className="border-t border-white/[0.08]">
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
                      className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden"
                    >
                      <div className="service-wipe absolute inset-0 bg-white" />
                      <div className="relative z-10 md:col-span-1">
                        <ScrollReveal>
                          <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 group-hover:text-black transition-colors duration-700">
                            {service.id}
                          </span>
                        </ScrollReveal>
                      </div>
                      <div className="relative z-10 md:col-span-4">
                        <ScrollReveal delay={0.05}>
                          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-black mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                            {service.title}
                          </h2>
                          <p className="text-sm text-neutral-400 group-hover:text-neutral-600 leading-relaxed transition-colors duration-700">
                            {service.description}
                          </p>
                        </ScrollReveal>
                      </div>
                      <div className="relative z-10 md:col-span-5">
                        <ScrollReveal delay={0.1}>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="text-xs text-neutral-600 group-hover:text-neutral-700 font-mono transition-colors duration-700">
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
                            className="nav-link text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 group-hover:text-black transition-colors duration-700"
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
