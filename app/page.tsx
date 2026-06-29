"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollBackground } from "@/components/scroll-background"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.25, 1, 0.5, 1] as const

const projects = [
  {
    id: "001",
    title: "Cowrywise Finance",
    category: "Brand Identity",
    year: "2024",
    image: "/Orange_Juice_Bottle_Mockup_3.jpg.jpeg",
    hoverImage: "/crve-hover-1.jpg",
  },
  {
    id: "002",
    title: "Onchain Core",
    category: "Digital Experience",
    year: "2024",
    image: "/alive.png",
    hoverImage: "/crve-hover-2.jpg",
  },
  {
    id: "003",
    title: "Things Fall Apart",
    category: "Campaign Strategy",
    year: "2023",
    image: "/Tape Coiled Up in Spiral Mockup.jpg.jpeg",
    hoverImage: null,
  },
  {
    id: "004",
    title: "Brand Guidelines",
    category: "Visual Identity",
    year: "2024",
    image: "/brand-guidelines.jpg",
    hoverImage: null,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <ScrollBackground />
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-28 pb-12 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#1a1a1a_0%,transparent_70%)]" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-neutral-500 mb-12 block">
                Port Harcourt Rivers &mdash; Est. 2024
              </span>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-[clamp(48px,10vw,120px)] font-extrabold leading-[1.0] tracking-[-0.05em] text-white max-w-5xl">
                <span className="block hero-line" data-text="Digital products.">Digital products.</span>
                <span className="block hero-line" data-text="Brand systems.">Brand systems.</span>
                <span className="block hero-line" data-text="Creative motion.">Creative motion.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16 items-end">
                <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-md">
                  An independent design and development studio. We build things people actually want to use.
                </p>
                <div className="flex flex-col items-start md:items-end">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
                  >
                    View Our Work
                    <span className="inline-block w-12 h-px bg-white group-hover:w-20 transition-all duration-500" />
                  </Link>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-800 mt-4">
                    Scroll to explore
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FULL-BLEED REVEAL - Lined paper style with image */}
      <section className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Image
            src="/crve-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        </div>

        <div className="relative z-10">
          <div className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20">
            <div className="max-w-[1400px] mx-auto w-full">
              <ScrollReveal>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                  Selected Work
                </span>
              </ScrollReveal>
            </div>
          </div>

          <div className="bg-black">
            {/* TICKER */}
            <div className="border-t border-b border-neutral-900 overflow-hidden py-4">
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

            {/* SELECTED WORK */}
            <section className="border-t border-neutral-900">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center py-8 border-b border-neutral-900">
                  <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600">
                    Selected Work
                  </h2>
                  <Link href="/portfolio" className="nav-link text-xs font-medium text-neutral-600 hover:text-white uppercase tracking-widest">
                    View all
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-10">
                  {projects.map((project, i) => (
                    <ScrollReveal key={project.id} delay={i * 0.1} y={20}>
                      <div className="group cursor-pointer">
                        <div className="relative w-full aspect-square overflow-hidden bg-neutral-950">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover img-primary"
                          />
                          {project.hoverImage ? (
                            <Image
                              src={project.hoverImage}
                              alt=""
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover img-secondary"
                            />
                          ) : (
                            <div className="img-secondary bg-black/90 flex items-center justify-center">
                              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-700">
                                View Project
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4 flex justify-between items-start gap-4">
                          <div>
                            <h3 className="text-base md:text-lg font-medium tracking-tight text-neutral-600 group-hover:text-white transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-xs text-neutral-700 font-mono mt-1 block">
                              {project.id} / {project.category}
                            </span>
                          </div>
                          <span className="text-xs text-neutral-700 font-mono shrink-0">
                            {project.year}
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* MANIFESTO */}
            <section className="border-t border-neutral-900">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
                <ScrollReveal className="px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-neutral-900">
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-4">
                    Manifesto
                  </span>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-[1.1]">
                    We build systems that outlast the noise.
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light max-w-sm">
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
            <section className="border-t border-b border-neutral-900 py-10 md:py-12 px-6 md:px-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
              >
                Start a Project
                <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
              </Link>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
