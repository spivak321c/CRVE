"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface LuxuryHeaderProps {
  dark?: boolean
}

export function LuxuryHeader({ dark = true }: LuxuryHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tighter">
            CRVE<span className="text-neon-cyan">.</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-6 py-2 bg-neon-cyan text-black font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/5">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter">
            CRVE<span className="text-neon-cyan">.</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-white/5"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium uppercase tracking-widest text-neutral-400 hover:text-neon-cyan transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 bg-neon-cyan text-black font-bold text-sm uppercase tracking-wider text-center"
            >
              Let's Talk
            </Link>
          </div>
        </motion.nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24" />
    </>
  )
}
