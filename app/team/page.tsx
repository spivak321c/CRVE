"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Kuch",
    role: "Product Designer",
    bio: "Crafting interfaces that feel intuitive and look exceptional. Focused on user-centered design systems and visual storytelling.",
    image: "/kuch.jpg",
  },
  {
    name: "Andre",
    role: "Fullstack Developer",
    bio: "Building fast, scalable applications from database to UI. Passionate about clean architecture and performance.",
    image: "/andre.jpeg",
  },
]

const values = [
  {
    title: "Craft",
    description: "Every pixel, every line of code, every interaction is deliberate. We sweat the details others overlook.",
  },
  {
    title: "Honesty",
    description: "Transparent communication, realistic timelines, and no hidden agendas. Trust is the foundation of great work.",
  },
  {
    title: "Growth",
    description: "We grow with every project. Our studio evolves by staying curious and pushing our own boundaries.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-full flex items-start justify-end pointer-events-none select-none">
          <span className="text-[clamp(150px,25vw,400px)] font-extrabold leading-[0.8] tracking-[-0.06em] text-white/[0.015]">
            Team
          </span>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-6">
                The People
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(32px,8vw,88px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-full mb-6">
                Small team, big work.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-[#a6a6a6] leading-relaxed max-w-xl">
                Two creatives obsessed with building things that matter. Design and engineering, unified.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              Team
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="group border border-white/[0.08] overflow-hidden">
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
                    <p className="text-sm text-[#a6a6a6] leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              What Drives Us
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a6a6a6] leading-relaxed">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-b border-white/[0.08] py-10 md:py-12 px-6 md:px-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-[#a6a6a6] transition-colors duration-300 group"
        >
          Work With Us
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
