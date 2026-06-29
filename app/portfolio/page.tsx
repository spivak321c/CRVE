"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Cowrywise Finance",
    category: "Branding",
    image: "/Orange_Juice_Bottle_Mockup_3.jpg.jpeg",
    hoverImage: "/crve-hover-1.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Onchain Core",
    category: "Design",
    image: "/alive.png",
    hoverImage: "/crve-hover-2.jpg",
    year: "2024",
  },
  {
    id: 3,
    title: "Things Fall Apart",
    category: "Strategy",
    image: "/Tape Coiled Up in Spiral Mockup.jpg.jpeg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 4,
    title: "Brand Guidelines",
    category: "Branding",
    image: "/brand-guidelines.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Design",
    image: "/ecommerce-platform.jpg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 6,
    title: "Social Media Campaign",
    category: "Strategy",
    image: "/social-media-campaign.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 7,
    title: "Mobile App Design",
    category: "Design",
    image: "/mobile-app-design.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 8,
    title: "Corporate Rebrand",
    category: "Branding",
    image: "/corporate-rebrand.jpg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 9,
    title: "SaaS Platform",
    category: "Development",
    image: "/saas-platform-dashboard.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 10,
    title: "E-Learning Portal",
    category: "Development",
    image: "/online-learning-platform.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 11,
    title: "Fitness Tracking App",
    category: "Development",
    image: "/fitness-mobile-app.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 12,
    title: "Social Commerce App",
    category: "Development",
    image: "/social-commerce-mobile-app.jpg",
    hoverImage: null,
    year: "2023",
  },
]

const categories = ["All", "Branding", "Design", "Strategy", "Development"]

export default function PortfolioPage() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected)

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                Portfolio
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                Our Work
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                A collection of projects showcasing our expertise in branding, design, strategy, and development.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex gap-6 py-6 border-b border-neutral-900 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`text-xs font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                  selected === cat ? "text-white" : "text-neutral-600 hover:text-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-10">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.06} y={20}>
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
                        {project.category}
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-600 text-sm">No projects found in this category.</p>
            </div>
          )}
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
