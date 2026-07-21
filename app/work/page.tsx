"use client"

import { useState } from "react"
import { LuxuryHeader } from "@/components/luxury-header"
import { ContactDrawer } from "@/components/contact-drawer"
import { CursorFollower } from "@/components/cursor-follower"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { motion } from "framer-motion"

const portfolioItems = [
  {
    id: "1",
    title: "Digital Revolution",
    category: "Brand Identity",
    image: "/images/portfolio-1.png",
  },
  {
    id: "2",
    title: "Tech Innovation",
    category: "Web Design",
    image: "/images/portfolio-2.png",
  },
  {
    id: "3",
    title: "Future Commerce",
    category: "E-Commerce",
    image: "/images/portfolio-3.png",
  },
  {
    id: "4",
    title: "Creative Platform",
    category: "Product Design",
    image: "/images/portfolio-1.png",
  },
  {
    id: "5",
    title: "Brand Transformation",
    category: "Branding",
    image: "/images/portfolio-2.png",
  },
  {
    id: "6",
    title: "Digital Ecosystem",
    category: "Web Development",
    image: "/images/portfolio-3.png",
  },
]

const categories = ["All", "Brand Identity", "Web Design", "E-Commerce", "Product Design", "Branding"]

export default function WorkPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      <CursorFollower />
      <LuxuryHeader />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <main className="bg-black min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6">
              Our
              <br />
              <span className="text-neon-cyan">Work</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Carefully crafted digital experiences and brand identities that drive results.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16 flex flex-wrap gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                    : "border border-white/20 text-neutral-300 hover:border-neon-cyan hover:text-neon-cyan"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <PortfolioGrid items={filteredItems} />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 py-20 px-8 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 border border-white/10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              Ready to Start Your
              <br />
              <span className="text-neon-cyan">Next Project?</span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-neon-cyan text-black font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
        </div>
      </main>
    </>
  )
}
