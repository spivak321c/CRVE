"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Link from "next/link"

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

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                Services
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                Services designed to elevate your brand.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                A comprehensive range of services to help your brand succeed. From strategy to execution.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start py-10 border-b border-neutral-900 last:border-b-0"
              >
                <ScrollReveal className="md:col-span-1">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800">
                    {service.id}
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.05} className="md:col-span-4">
                  <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="md:col-span-5">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-neutral-600 font-mono">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
                <ScrollReveal delay={0.15} className="md:col-span-2 flex md:justify-end">
                  <Link
                    href="/contact"
                    className="nav-link text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
                  >
                    Inquire
                  </Link>
                </ScrollReveal>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {process.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <span className="text-5xl font-extrabold tracking-tight text-neutral-800 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </ScrollReveal>
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
