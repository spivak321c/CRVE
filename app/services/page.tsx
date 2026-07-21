"use client"

import { useState } from "react"
import { LuxuryHeader } from "@/components/luxury-header"
import { ContactDrawer } from "@/components/contact-drawer"
import { CursorFollower } from "@/components/cursor-follower"
import { ServicesAccordion } from "@/components/services-accordion"
import { motion } from "framer-motion"

const services = [
  {
    id: "1",
    title: "Brand Strategy & Positioning",
    description: "Define your unique market position",
    details: [
      "Comprehensive market & competitive analysis",
      "Brand vision & positioning framework",
      "Messaging architecture & guidelines",
      "Audience research & segmentation",
      "Brand personality definition",
      "Stakeholder alignment workshops",
    ],
  },
  {
    id: "2",
    title: "Visual Identity Design",
    description: "Create memorable brand experiences",
    details: [
      "Logo & mark design (multiple concepts)",
      "Color system & palette development",
      "Typography selection & specifications",
      "Design system & brand standards",
      "Iconography & illustration style",
      "Brand asset library delivery",
    ],
  },
  {
    id: "3",
    title: "Digital Design & UX",
    description: "Beautiful, functional interfaces",
    details: [
      "User research & persona development",
      "Wireframing & user journey mapping",
      "Interactive prototyping",
      "Responsive design systems",
      "Accessibility compliance (WCAG)",
      "Design handoff & documentation",
    ],
  },
  {
    id: "4",
    title: "Web Development",
    description: "Scalable, performant digital products",
    details: [
      "Full-stack development expertise",
      "Next.js & modern frameworks",
      "Progressive web applications (PWA)",
      "Performance optimization & SEO",
      "API development & integration",
      "Deployment & maintenance support",
    ],
  },
  {
    id: "5",
    title: "E-Commerce Solutions",
    description: "Drive revenue through digital commerce",
    details: [
      "Shopify & custom platform setup",
      "Product catalog optimization",
      "Payment gateway integration",
      "Inventory management systems",
      "Analytics & conversion optimization",
      "Marketing automation setup",
    ],
  },
  {
    id: "6",
    title: "Brand Campaign Design",
    description: "Integrated marketing experiences",
    details: [
      "Campaign concept & creative direction",
      "Multi-channel asset creation",
      "Social media content strategy",
      "Video & motion graphics",
      "Email & print collateral",
      "Campaign performance tracking",
    ],
  },
]

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <CursorFollower />
      <LuxuryHeader />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <main className="bg-black min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8">
              Our Services<span className="text-neon-cyan">.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl">
              Complete design and development solutions tailored to your unique needs. From strategy to execution, we
              handle every aspect of your digital transformation.
            </p>
          </motion.div>

          {/* Services Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ServicesAccordion items={services} />
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 py-20"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
              Our <span className="text-neon-cyan">Process</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understand your goals, challenges, and target audience",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Develop comprehensive plan and creative direction",
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Create beautiful, functional digital experiences",
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "Deploy and optimize for maximum impact",
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="mb-4">
                    <p className="text-6xl font-black text-neon-cyan/20">{phase.step}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-neutral-400">{phase.desc}</p>

                  {i < 3 && (
                    <div className="hidden md:block absolute -right-4 top-6 text-neon-cyan text-2xl">→</div>
                  )}
                </motion.div>
              ))}
            </div>
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
              Interested in Working
              <br />
              <span className="text-neon-cyan">Together?</span>
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-neon-cyan text-black font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </main>
    </>
  )
}
