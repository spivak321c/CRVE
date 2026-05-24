"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

// Custom cubic bezier for Apple-esque fluid motion
const ease = [0.32, 0.72, 0, 1] as const

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      image: "/modern-brand-identity.png",
      description: "Complete visual identity for a tech startup",
      span: "md:col-span-8 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto",
    },
    {
      id: 2,
      title: "Digital Experience",
      category: "Design",
      image: "/digital-product-interface.png",
      description: "Innovative digital product interface",
      span: "md:col-span-4 md:row-span-1",
      aspect: "aspect-square",
    },
    {
      id: 3,
      title: "Campaign Strategy",
      category: "Strategy",
      image: "/vibrant-marketing-campaign.png",
      description: "Integrated marketing campaign",
      span: "md:col-span-4 md:row-span-1",
      aspect: "aspect-square",
    },
  ]

  const services = [
    {
      num: "01",
      title: "Brand Strategy",
      description:
        "We develop comprehensive brand strategies that define your unique position in the market and resonate with your audience on a deeper level.",
    },
    {
      num: "02",
      title: "Design & Creative",
      description:
        "From visual identity to digital experiences, we create beautiful, purposeful, and functional designs that tell your unique story.",
    },
    {
      num: "03",
      title: "Digital Solutions",
      description:
        "We engineer performant digital products and web experiences that engage users and drive meaningful, measurable results for your business.",
    },
  ]

  return (
    <main className="min-h-[100dvh] bg-background selection:bg-accent/20 selection:text-foreground overflow-hidden">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-4 md:px-6 lg:px-8 min-h-[90vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Massive Typography */}
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tight leading-[0.95] text-foreground max-w-6xl"
            >
              Digital products. <br className="hidden md:block" />
              Brand systems. <br className="hidden lg:block" />
              <span className="text-foreground/40 italic font-light">Creative motion.</span>
            </motion.h1>

            {/* Subtitle & CTA */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12"
            >
              <p className="text-lg md:text-xl text-foreground/60 max-w-md font-light leading-relaxed">
                An independent design and development studio. We build things people actually want to use.
              </p>

              <Link
                href="/contact"
                className="group flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full font-medium transition-transform duration-500 ease-out hover:scale-[0.98] active:scale-[0.95]"
              >
                <span>Start a Project</span>
                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:-rotate-45" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED WORK (Asymmetrical Bento) */}
      <section className="py-32 md:py-40 px-4 md:px-6 lg:px-8 bg-background relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
          >
            <div>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-medium tracking-tight">
                Recent Work.
              </motion.h2>
            </div>

            <motion.div variants={fadeUpVariant}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
              >
                View all projects
                <ArrowRight size={16} className="transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                custom={i}
                className={`${project.span} group cursor-pointer`}
              >
                <Link href={`/portfolio/${project.id}`} className="block h-full">
                  {/* The Double-Bezel Shell */}
                  <div
                    className={`relative p-2 rounded-[2rem] bg-foreground/[0.02] border border-foreground/[0.05] h-full ${project.aspect} md:aspect-auto md:min-h-[450px]`}
                  >
                    {/* The Inner Core */}
                    <div className="relative w-full h-full rounded-[calc(2rem-8px)] overflow-hidden bg-muted shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity duration-700 ease-out group-hover:opacity-80" />

                      {/* Floating Data Badge */}
                      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-2">
                        <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-semibold text-foreground shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Content block inside image */}
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 opacity-90 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">{project.title}</h3>
                            <p className="text-white/70 text-sm md:text-base font-light max-w-sm">{project.description}</p>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20 transition-transform duration-700 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                            <ArrowUpRight size={20} className="transition-transform duration-500 group-hover:rotate-45" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES (Soft Structuralism / The Editorial Split) */}
      <section className="py-32 md:py-48 px-4 md:px-6 lg:px-8 bg-secondary/30 border-y border-border/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left: Sticky Massive Typo */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-balance leading-[1.05]"
                >
                  What we do.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.2 }}
                  className="text-foreground/60 text-lg max-w-md font-light leading-relaxed mb-10"
                >
                  We don't do everything. But what we do, we do exceptionally well. Strategy, design, and engineering under one roof.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.3 }}
                >
                  <Link
                    href="/services"
                    className="group flex items-center gap-3 w-max px-6 py-4 bg-transparent border border-foreground/10 text-foreground rounded-full font-medium transition-all duration-500 hover:border-foreground/30 hover:bg-foreground/5 active:scale-[0.98]"
                  >
                    <span>Explore All Services</span>
                    <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <ArrowRight size={14} className="transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right: Z-Axis Cascade / List */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease, delay: index * 0.1 }}
                  className="group relative p-2 rounded-[2rem] bg-background border border-border/50 transition-colors duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10 shadow-sm hover:shadow-md"
                >
                  <div className="p-8 md:p-10 rounded-[calc(2rem-8px)] bg-transparent">
                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                      <span className="text-sm font-semibold text-foreground/30 font-mono pt-1 md:pt-2">
                        {service.num}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4 transition-colors duration-500 group-hover:text-accent">
                          {service.title}
                        </h3>
                        <p className="text-foreground/60 leading-relaxed text-base md:text-lg font-light mb-8">
                          {service.description}
                        </p>
                        <div className="overflow-hidden h-10 flex items-center">
                          <Link
                            href="/services"
                            className="inline-flex items-center gap-3 text-sm font-medium text-foreground translate-y-12 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                              <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                            </div>
                            <span>Discover {service.title}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE CTA */}
      <section className="relative py-40 md:py-56 px-4 md:px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[80vh] border-t border-border/40">
        {/* Deep background element */}
        <div className="absolute inset-0 bg-foreground text-background" />

        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tight mb-8 leading-[0.95] text-balance">
              Got a project? <br className="hidden md:block" />
              <span className="italic font-light text-background/60">Let's talk.</span>
            </h2>

            <p className="text-lg md:text-xl text-background/70 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              We're currently taking on new projects. Drop us a line to get started.
            </p>

            <Link
              href="/contact"
              className="group flex items-center gap-4 px-8 py-5 bg-background text-foreground rounded-full font-medium text-lg transition-all duration-500 ease-out hover:scale-[0.98] active:scale-[0.95] shadow-2xl shadow-background/10"
            >
              <span>Get in touch</span>
              <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
