"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ContactDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", project: "", message: "" })
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[500px] bg-black border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <h2 className="text-3xl font-black tracking-tighter">
                Let's Create<span className="text-neon-cyan">.</span>
              </h2>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                    <p className="text-neutral-400">We'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-neon-cyan focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-neon-cyan focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-neon-cyan focus:outline-none transition-colors"
                      placeholder="e.g., Brand Identity, Website"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-neon-cyan text-black font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
