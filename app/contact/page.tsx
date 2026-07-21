"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { ContactForm } from "@/components/contact-form"
import { BookingForm } from "@/components/booking-form"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { staggerFadeScale } from "@/lib/gsap-effects"

const contactMethods = [
  { id: "01", label: "Email", value: "hello@crve.studio", href: "mailto:hello@crve.studio" },
  { id: "02", label: "Phone", value: "+234 800 CRVE STUDIO", href: "tel:+23480027837883" },
  { id: "03", label: "Location", value: "Port Harcourt, Nigeria", href: "#" },
  { id: "04", label: "Social", value: "@crve.studio", href: "#" },
]

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. Most projects take 4-12 weeks from discovery to delivery.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We love working with startups and have experience helping early-stage companies establish their brand and market presence.",
  },
  {
    question: "What's your process for working with clients?",
    answer:
      "We follow a collaborative approach: discovery, strategy, creative development, implementation, and optimization. You're involved throughout.",
  },
  {
    question: "Can you help with ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages. Many of our clients work with us on a retainer basis.",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We work across technology, fintech, fashion, and cultural sectors. Our approach adapts to each industry's unique needs while maintaining our creative standards.",
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    // Stagger animation for contact methods
    staggerFadeScale(".contact-method", {
      duration: 0.6,
      stagger: 0.08,
      delay: 0.1,
      fromScale: 0.95,
    })

    // FAQ items animation
    staggerFadeScale(".faq-item", {
      duration: 0.6,
      stagger: 0.05,
      delay: 0.1,
      fromScale: 0.98,
    })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-full flex items-start justify-end pointer-events-none select-none">
          <span className="text-[clamp(300px,50vw,700px)] font-extrabold leading-[0.8] tracking-[-0.06em] text-white/[0.025]">
            C
          </span>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-8">
                Contact
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(32px,12vw,140px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white max-w-full mb-6">
                Get in Touch
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="w-16 h-px bg-white/[0.08] mb-8" />
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-[#a6a6a6] leading-relaxed max-w-xl">
                Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s start a conversation.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08]">
              {contactMethods.map((method) => (
                <StaggerItem key={method.id}>
                  <Link
                    href={method.href}
                    className="contact-method group flex items-start gap-6 p-8 bg-black transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <span className="text-xs font-medium text-[#a6a6a6] tracking-wider mt-0.5">{method.id}</span>
                    <div className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a6a6a6] block mb-2">
                        {method.label}
                      </span>
                      <span className="text-lg md:text-xl font-medium text-white transition-colors duration-300 group-hover:text-white/70">
                        {method.value}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#a6a6a6] mt-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Studio Address */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-6">
                  Visit Us
                </span>
                <div className="w-8 h-px bg-white/[0.08] mb-6" />
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3">
                  CRVE Studio
                </h3>
                <p className="text-[#a6a6a6] leading-relaxed max-w-md">
                  Port Harcourt, Rivers
                  <br />
                  Nigeria
                </p>
              </div>
              <div className="w-full md:w-64 h-32 border border-white/[0.08] flex items-center justify-center">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a6a6a6]">
                  Map Reference
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Forms */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <ScrollReveal className="px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-white/[0.08]">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-3">
              Send a Message
            </span>
            <div className="w-8 h-px bg-white/[0.08] mb-8" />
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="px-6 md:px-12 py-16 md:py-24">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-3">
              Schedule a Consultation
            </span>
            <div className="w-8 h-px bg-white/[0.08] mb-8" />
            <BookingForm />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-12">
              FAQ
            </span>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item border-b border-white/[0.08] last:border-b-0">
                <ScrollReveal>
                  <button
                    onClick={() => toggleFaq(i)}
                    className="group flex items-center justify-between w-full py-6 text-left transition-colors duration-300 hover:cursor-pointer"
                  >
                    <span className="text-base md:text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-white/60">
                      {item.question}
                    </span>
                    <span className="ml-6 flex-shrink-0 text-[#a6a6a6] transition-transform duration-300">
                      {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-[#a6a6a6] leading-relaxed max-w-2xl pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a6a6a6] block mb-8">
                Start a Project
              </span>
            </StaggerItem>
            <StaggerItem>
              <div className="w-12 h-px bg-white/[0.08] mb-10" />
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-[clamp(48px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white max-w-3xl mb-10">
                Let&apos;s build something extraordinary.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="mailto:hello@crve.studio"
                className="group inline-flex items-center gap-4 text-lg font-medium text-white transition-all duration-300 hover:text-white/60"
              >
                hello@crve.studio
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  )
}
