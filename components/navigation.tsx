"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
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
      <nav
        className={`fixed top-0 w-full z-50 animate-nav-enter transition-colors duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link
              href="/"
              className="shrink-0 text-2xl md:text-3xl font-extrabold tracking-tight text-white"
              onClick={closeMenu}
            >
              CRVE<span className="text-[#a6a6a6]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nav-link text-xs font-medium uppercase tracking-widest text-[#a6a6a6] hover:text-white"
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
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black z-40 flex flex-col pt-28 px-8 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu()
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <div
              key={item.href}
              className={`transition-all duration-400 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                className="text-4xl font-medium tracking-tight text-white hover:text-white/50 transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div
            className={`mt-6 pt-6 border-t border-white/[0.08] transition-all duration-400 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "300ms" : "0ms" }}
          >
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-widest text-white"
              onClick={closeMenu}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
