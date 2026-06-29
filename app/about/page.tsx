"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    title: "Creativity",
    description: "We believe in the power of creative thinking to solve problems and create meaningful experiences.",
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our relationships. We stand by our work.",
  },
  {
    title: "Collaboration",
    description: "The best work comes from working closely with clients. We value diverse perspectives.",
  },
  {
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in everything we do. No shortcuts.",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We deeply understand your business, market, and audience through research and workshops.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a comprehensive strategy aligned with your goals and define a clear roadmap.",
  },
  {
    step: "03",
    title: "Creation",
    description: "Our team brings the strategy to life through design, content, and storytelling.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "We manage implementation and ensure a smooth launch with ongoing support.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                About
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                We build brands that outlast trends.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                An independent design and development studio in Port Harcourt.
                We don&apos;t follow trends. We build systems that scale and outlive the moment.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src="/crve-bg.jpg"
          alt="CRVE studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <ScrollReveal className="px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-neutral-900">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-[1.1]">
              Founded in 2024, based in Port Harcourt.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light max-w-sm">
                CRVE started with a simple belief: design should solve problems, not just look good.
                What began as a small team of strategists and engineers has grown into a full-service
                creative studio.
              </p>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light max-w-sm">
                We work with startups, established brands, and everything in between.
                Each project teaches us something new and shapes our approach to creative problem-solving.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-12">
              Values
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {value.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-12">
              Process
            </span>
          </ScrollReveal>
          <div className="space-y-0">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 border-b border-neutral-900 last:border-b-0"
              >
                <ScrollReveal className="md:col-span-1">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800">
                    {item.step}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.05} className="md:col-span-3">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="md:col-span-8">
                  <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-lg">
                    {item.description}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-neutral-900 py-10 md:py-12 px-6 md:px-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
        >
          Start a Project
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
