"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link href="/" className="text-lg md:text-3xl font-extrabold tracking-tight text-white" onClick={closeMenu}>
              CRVE<span className="text-neutral-600">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link text-xs font-medium uppercase tracking-widest text-neutral-500 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="nav-link hidden md:inline-flex text-xs font-medium uppercase tracking-widest text-white"
            >
              Start a Project
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 flex flex-col pt-28 px-8"
            onClick={(e) => { if (e.target === e.currentTarget) closeMenu() }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-medium tracking-tight text-white hover:text-neutral-500 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-6 pt-6 border-t border-neutral-900"
              >
                <Link
                  href="/contact"
                  className="text-sm font-medium uppercase tracking-widest text-white"
                  onClick={closeMenu}
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
