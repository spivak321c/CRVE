"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "Visionary leader with 12+ years of experience in brand strategy and creative direction.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Lead Designer",
    bio: "Passionate designer focused on creating beautiful and functional digital experiences.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Brand Strategist",
    bio: "Strategic thinker specializing in brand positioning and market research.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "James Wilson",
    role: "Content Strategist",
    bio: "Storyteller and strategist crafting compelling narratives for brands.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "Lisa Park",
    role: "Project Manager",
    bio: "Organized professional ensuring projects run smoothly from start to finish.",
    image: "/placeholder-user.jpg",
  },
  {
    name: "David Thompson",
    role: "Digital Strategist",
    bio: "Expert in digital marketing and campaign strategy with proven results.",
    image: "/placeholder-user.jpg",
  },
]

const culture = [
  {
    title: "Collaboration",
    description: "The best ideas come from diverse perspectives and open collaboration.",
  },
  {
    title: "Creativity",
    description: "We foster an environment where creativity thrives and experimentation is encouraged.",
  },
  {
    title: "Excellence",
    description: "Quality and attention to detail are non-negotiable in everything we deliver.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                Team
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                Meet Our Team
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                A talented group of creative professionals dedicated to delivering exceptional results.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.06}>
                <div className="group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-950 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light mt-3">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-12">
              Culture
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
            {culture.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
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
          Join Our Team
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
