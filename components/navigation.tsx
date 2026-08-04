"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, LayoutGrid, Smartphone, Package, MessageCircle } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between text-sm font-medium tracking-tight transition-all duration-500 ${
          scrolled ? "bg-[rgba(17,17,17,0.8)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.1)]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="shrink-0 flex items-center group" onClick={closeMenu}>
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-extrabold text-xl transition-transform group-hover:rotate-12">
              C.
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[#888888]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="#journal"
            onClick={closeMenu}
            className="hidden md:block text-[#888888] hover:text-white transition-colors"
          >
            Our journal
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#333333] rounded-lg transition-all duration-300 text-[#888888] hover:text-black"
            onClick={closeMenu}
          >
            Get started
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 p-2 bg-[rgba(17,17,17,0.8)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl">
        <div className="flex items-center gap-1 pr-4 border-r border-[#333333]">
          <button className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Dashboard">
            <LayoutGrid className="text-xl text-white w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Global">
            <Globe className="text-xl text-white w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Mobile">
            <Smartphone className="text-xl text-white w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Services">
            <Package className="text-xl text-white w-5 h-5" />
          </button>
          <button className="p-3 hover:bg-[#222222] rounded-xl transition-all group relative" title="Announcements">
            <MessageCircle className="text-xl text-white w-5 h-5" />
          </button>
        </div>
        <Link href="#contact" className="px-6 py-3 bg-[#FF6B50] hover:bg-[#E55A40] text-black font-bold text-sm tracking-wide uppercase rounded-xl transition-all">
          Contact
        </Link>
      </div>

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
                    className="text-4xl font-medium tracking-tight text-white hover:text-white/50 transition-colors"
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
                className="mt-6 pt-6 border-t border-white/[0.08]"
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
