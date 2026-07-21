"use client"

import { useState } from "react"
import { LuxuryHeader } from "@/components/luxury-header"
import { ContactDrawer } from "@/components/contact-drawer"
import { CursorFollower } from "@/components/cursor-follower"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@crve.studio",
    link: "mailto:hello@crve.studio",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 (0) 800 CRVE",
    link: "tel:+2348002783",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Port Harcourt, Nigeria",
    link: "#",
  },
]

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Most projects take 4-12 weeks depending on scope and complexity. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. We love helping early-stage companies establish their brand presence and launch their digital products.",
  },
  {
    question: "What's your process?",
    answer: "We follow: Discovery → Strategy → Design → Development → Launch. You're involved every step of the way.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide maintenance and support packages. Many clients work with us on retainer for continuous optimization.",
  },
  {
    question: "What industries do you work in?",
    answer: "We work across tech, fintech, fashion, and cultural sectors. Our approach adapts to each industry while maintaining creative excellence.",
  },
]

export default function ContactPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  return (
    <>
      <CursorFollower />
      <LuxuryHeader />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main className="bg-black min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-8">
              Let's Talk
              <br />
              <span className="text-neon-cyan">About Your Project</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Have a project in mind? Get in touch and let's create something exceptional together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDrawerOpen(true)}
              className="px-10 py-5 bg-neon-cyan text-black font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300"
            >
              Start a Conversation
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-y border-white/10 mb-24"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={i}
                  href={info.link}
                  whileHover={{ y: -5 }}
                  className="group text-center md:text-left"
                >
                  <div className="flex justify-center md:justify-start mb-4">
                    <Icon className="w-12 h-12 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-neutral-400 text-sm uppercase tracking-widest font-bold mb-2">{info.title}</p>
                  <p className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">{info.value}</p>
                </motion.a>
              )
            })}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-5xl font-black tracking-tighter mb-12">
              Frequently Asked
              <br />
              <span className="text-neon-cyan">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-white/10 overflow-hidden hover:border-neon-cyan/50 transition-colors duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/2 transition-colors duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-left text-white group-hover:text-neon-cyan transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-neon-cyan flex-shrink-0 ml-4"
                    >
                      <span className="text-2xl">+</span>
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: expandedFaq === i ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="px-8 py-6 bg-white/2">
                      <p className="text-neutral-300 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
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
            className="py-24 px-8 bg-gradient-to-r from-neon-cyan/10 via-neon-pink/5 to-neon-purple/10 border border-white/10 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                Ready to Create
                <br />
                <span className="text-neon-cyan">Something Great?</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you have a specific project or just want to explore possibilities, we're here to help.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDrawerOpen(true)}
                className="px-10 py-5 bg-neon-cyan text-black font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300 inline-flex items-center gap-2"
              >
                Let's Create <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
