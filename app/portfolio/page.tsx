"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { GsapSectionWrapper } from "@/components/gsap-section-wrapper"
import Link from "next/link"
import Image from "next/image"
import { staggerFadeScale, parallaxScroll } from "@/lib/gsap-effects"

const featuredProject = {
  title: "Floe",
  category: "Branding & Design",
  description: "Premium brand identity and packaging design for a natural juice company.",
  image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783198735/30fdf6222405637.67e52ac4759e9_txxyii.png",
  year: "2024",
}

const projects = [
  {
    id: 1,
    title: "Alive",
    category: "Design",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783201792/alive_lmup2w.png",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 2,
    title: "Sabur Energy",
    category: "Strategy",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200650/Free_Sign_Mockup_1_uu9ssf.jpg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 3,
    title: "Sabur Energy",
    category: "Branding",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200688/Billboard_Mockup_2_oc5mk0.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 4,
    title: "Sabur Energy",
    category: "Design",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200636/02_Free_Closeup_iPhone_15_Pro_Max_Mockup_nvorpc.jpg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 5,
    title: "Flow",
    category: "Strategy",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200372/Artboard_1_jiovwj.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 6,
    title: "Flow",
    category: "Design",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200369/Artboard_2_n5eo4c.jpg",
    hoverImage: null,
    year: "2024",
  },
  {
    id: 7,
    title: "Flow",
    category: "Branding",
    image: "https://res.cloudinary.com/mwvch9hy/image/upload/v1783200368/Artboard_3_cnmwtf.jpg",
    hoverImage: null,
    year: "2023",
  },
  {
    id: 8,
    title: "SaaS Platform",
    category: "Development",
    image: null,
    hoverImage: null,
    year: "2024",
  },
  {
    id: 9,
    title: "E-Learning Portal",
    category: "Development",
    image: null,
    hoverImage: null,
    year: "2024",
  },
  {
    id: 10,
    title: "Fitness Tracking App",
    category: "Development",
    image: null,
    hoverImage: null,
    year: "2024",
  },
  {
    id: 11,
    title: "Social Commerce App",
    category: "Development",
    image: null,
    hoverImage: null,
    year: "2023",
  },
]

const categories = ["All", "Branding", "Design", "Strategy", "Development"]

export default function PortfolioPage() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected)

  useEffect(() => {
    // Stagger animation for portfolio grid
    staggerFadeScale(".portfolio-card", {
      duration: 0.6,
      stagger: 0.08,
      delay: 0.1,
      fromScale: 0.9,
    })

    // Parallax effect on featured project
    parallaxScroll(".featured-project-img", 0.3)
  }, [selected])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(150px,25vw,400px)] font-extrabold text-white/[0.015] tracking-[-0.05em] select-none pointer-events-none whitespace-nowrap">
          Portfolio
        </span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-6">
                Portfolio
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(32px,7vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-full mb-8">
                Our Work
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-white/[0.45] leading-relaxed max-w-xl">
                A collection of projects showcasing our expertise in branding, design, strategy, and development.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <ScrollReveal>
              <div className="group">
              <div className="featured-project-img relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-950">
                {featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/[0.45] mb-3 block">
                    Featured Project
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                    {featuredProject.title}
                  </h2>
                  <p className="text-sm text-white/[0.55] max-w-xl leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-xs text-white/[0.35] font-mono">{featuredProject.category}</span>
                    <span className="text-white/[0.15]">/</span>
                    <span className="text-xs text-white/[0.35] font-mono">{featuredProject.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex gap-5 md:gap-8 py-5 md:py-6 border-b border-white/[0.08] overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`shrink-0 text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 relative pb-5 md:pb-6 ${
                  selected === cat ? "text-white" : "text-white/[0.35] hover:text-white/[0.6]"
                }`}
              >
                {cat}
                {selected === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 py-10 md:py-16">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.04} y={20}>
                <div className="portfolio-card group cursor-pointer">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-950">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                          View Project
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/[0.08]">
                    <h3 className="text-sm md:text-base font-medium tracking-tight text-white/[0.55] group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-[11px] md:text-xs text-white/[0.35] font-mono">{project.year}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/[0.35] text-sm">No projects found in this category.</p>
            </div>
          )}
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
