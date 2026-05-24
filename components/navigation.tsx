"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Monitor, Palette, TrendingUp, Smartphone } from "lucide-react"

const columns = [
  {
    title: "Web Development",
    description: "Custom websites, SaaS platforms, and web applications built with modern technologies.",
    icon: Monitor,
    links: [
      { label: "React / Next.js", href: "/services" },
      { label: "E-Commerce", href: "/services" },
      { label: "CMS & Platforms", href: "/services" },
    ],
  },
  {
    title: "Brand & Design",
    description: "Strategic brand identities, visual systems, and design languages that captivate audiences.",
    icon: Palette,
    links: [
      { label: "Brand Identity", href: "/services" },
      { label: "UI / UX Design", href: "/services" },
      { label: "Visual Systems", href: "/services" },
    ],
  },
  {
    title: "Digital Strategy",
    description: "Data-driven strategies that grow your audience, engagement, and bottom line.",
    icon: TrendingUp,
    links: [
      { label: "SEO & Growth", href: "/services" },
      { label: "Content Strategy", href: "/services" },
      { label: "Analytics", href: "/services" },
    ],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications with exceptional user experiences.",
    icon: Smartphone,
    links: [
      { label: "iOS & Android", href: "/services" },
      { label: "React Native", href: "/services" },
      { label: "App Design", href: "/services" },
    ],
  },
]

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [hoveredCol, setHoveredCol] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(label)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
      setHoveredCol(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50"
      onMouseLeave={handleLeave}
    >
      <div className="relative bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-1">
              <span className="text-foreground">CRVE</span>
              <span className="text-accent">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.label)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeMenu === item.label
                        ? "text-foreground bg-accent/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-2xl overflow-hidden"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex gap-3">
                {columns.map((col, i) => (
                  <motion.div
                    key={col.title}
                    className="relative overflow-hidden rounded-2xl"
                    onMouseEnter={() => setHoveredCol(i)}
                    onMouseLeave={() => setHoveredCol(null)}
                    animate={{
                      flex: hoveredCol === null ? 1 : hoveredCol === i ? 2.8 : 0.6,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    style={{ flex: 1 }}
                  >
                    <div
                      className={`h-full p-7 rounded-2xl transition-colors duration-300 border ${
                        hoveredCol === i
                          ? "bg-accent/[0.04] border-accent/10"
                          : "bg-transparent border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                          <col.icon size={18} className="text-accent" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground whitespace-nowrap">
                          {col.title}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {hoveredCol === i && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                          >
                            <p className="text-sm text-foreground/60 leading-relaxed mb-5">
                              {col.description}
                            </p>
                            <div className="space-y-2.5">
                              {col.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block text-sm text-foreground/60 hover:text-accent transition-colors"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                            <Link
                              href={col.links[0].href}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 hover:gap-2.5 transition-all"
                            >
                              Learn more <ArrowRight size={12} />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {hoveredCol !== null && hoveredCol !== i && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-foreground/20 rotate-90 uppercase tracking-widest">
                          {col.title}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-accent/5 rounded-lg transition-all text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 bg-accent text-accent-foreground rounded-xl text-sm font-medium text-center mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
