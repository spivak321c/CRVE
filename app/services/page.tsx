"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { GsapSectionWrapper } from "@/components/gsap-section-wrapper"
import Link from "next/link"
import Image from "next/image"
import { magneticHover, staggerFadeScale } from "@/lib/gsap-effects"

const serviceGroups = [
  {
    label: "Brand",
    items: [
      {
        id: "01",
        title: "Brand Strategy",
        description: "We develop comprehensive brand strategies that define your unique position. From market research to positioning, we build a foundation for all creative work.",
        features: ["Market Research", "Brand Positioning", "Competitive Analysis", "Messaging Framework"],
      },
      {
        id: "02",
        title: "Visual Identity",
        description: "Creating distinctive visual identities that make your brand memorable. Logos, color systems, typography, and all visual elements.",
        features: ["Logo Design", "Color Systems", "Typography", "Brand Asset Library"],
      },
    ],
  },
  {
    label: "Digital",
    items: [
      {
        id: "03",
        title: "Digital Design",
        description: "Beautiful and functional digital experiences. From websites to applications, interfaces that engage users and drive results.",
        features: ["UX/UI Design", "Website Design", "App Design", "Design Systems"],
      },
      {
        id: "06",
        title: "Content Strategy",
        description: "Strategic content that tells your story and engages your audience. Content strategies aligned with business goals.",
        features: ["Content Audit", "Strategy Development", "Copywriting", "SEO Optimization"],
      },
    ],
  },
  {
    label: "Development",
    items: [
      {
        id: "04",
        title: "Web Development",
        description: "Fast, scalable, and secure web applications using modern technologies. Responsive websites to complex platforms.",
        features: ["Full-Stack Development", "Performance Optimization", "API Development", "Database Architecture"],
      },
      {
        id: "05",
        title: "App Development",
        description: "Native and cross-platform mobile applications that users love. From concept to launch, the entire development lifecycle.",
        features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
      },
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand your business, goals, and audience through research and workshops.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Develop a strategic approach tailored to your unique needs and market position.",
  },
  {
    step: "03",
    title: "Creation",
    description: "Bring the strategy to life through design and content development.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Deliver polished assets and provide support for successful implementation.",
  },
]

// Service card images mapped by ID
const serviceImages: Record<string, string> = {
  "01": "/images/service-strategy.png",
  "02": "/images/service-design.png",
  "03": "/images/service-design.png",
  "04": "/images/service-development.png",
  "05": "/images/service-development.png",
  "06": "/images/service-strategy.png",
}

export default function ServicesPage() {
  useEffect(() => {
    // Initialize magnetic hover effects
    magneticHover(".service-card-item", 0.3)

    // Stagger animation for service items
    staggerFadeScale(".service-card-item", {
      duration: 0.6,
      stagger: 0.05,
      delay: 0.1,
      fromScale: 0.95,
    })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(150px,25vw,400px)] font-extrabold text-white/[0.015] tracking-[-0.05em] select-none pointer-events-none whitespace-nowrap">
          Services
        </span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-6">
                Services
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(32px,8vw,88px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-full mb-8">
                Services designed to elevate your brand.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-white/[0.45] leading-relaxed max-w-xl">
                A comprehensive range of services to help your brand succeed. From strategy to execution.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          {serviceGroups.map((group) => (
            <div key={group.label}>
              <div className="px-6 md:px-12 pt-16 pb-6">
                <ScrollReveal>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.25]">
                    {group.label}
                  </span>
                </ScrollReveal>
              </div>
              <div className="space-y-0">
                {group.items.map((service) => (
                  <div
                    key={service.id}
                    className="service-card-item group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 px-6 md:px-12 border-b border-white/[0.08] last:border-b-0 overflow-hidden"
                  >
                    {/* Animated background image */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                      <Image
                        src={serviceImages[service.id] || "/images/service-design.png"}
                        alt={service.title}
                        fill
                        className="object-cover scale-110"
                        sizes="100vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-white transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] scale-x-0 group-hover:scale-x-100 origin-left" />
                    <div className="relative z-10 md:col-span-1 transition-colors duration-300 group-hover:text-black">
                      <ScrollReveal>
                        <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white/[0.15] group-hover:text-black transition-colors duration-300">
                          {service.id}
                        </span>
                      </ScrollReveal>
                    </div>
                    <div className="relative z-10 md:col-span-4 transition-colors duration-300">
                      <ScrollReveal delay={0.05}>
                        <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-black mb-3 transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-sm text-white/[0.45] group-hover:text-black/60 leading-relaxed transition-colors duration-300">
                          {service.description}
                        </p>
                      </ScrollReveal>
                    </div>
                    <div className="relative z-10 md:col-span-5 transition-colors duration-300">
                      <ScrollReveal delay={0.1}>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-xs text-white/[0.25] group-hover:text-black/50 font-mono transition-colors duration-300">
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
                          className="nav-link text-xs font-medium uppercase tracking-[0.2em] text-white/[0.35] group-hover:text-black transition-colors duration-300"
                        >
                          Inquire
                        </Link>
                      </ScrollReveal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-12">
              Process
            </span>
          </ScrollReveal>
          <div className="flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-white/[0.08]">
            {process.map((item) => (
              <ScrollReveal key={item.step} delay={0}>
                <div className="flex-1 pt-8 md:pt-0 md:px-8 first:md:pl-0 last:md:pr-0">
                  <span className="text-7xl font-extrabold tracking-tight text-white/[0.08] block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/[0.45] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-white/[0.08] py-10 md:py-12 px-6 md:px-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-white/[0.45] transition-colors group"
        >
          Start a Project
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
