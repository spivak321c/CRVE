"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { PricingCalculator } from "@/components/pricing-calculator"
import Link from "next/link"
import { staggerFadeScale } from "@/lib/gsap-effects"

const plans = [
  {
    name: "Starter",
    price: "From $2K",
    description: "Essential brand and design services for early-stage projects and startups.",
    href: "/contact",
  },
  {
    name: "Growth",
    price: "From $8K",
    description: "Comprehensive strategy, design, and development for scaling brands and teams.",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Full-service partnership for enterprise-level initiatives and ongoing retainer work.",
    href: "/contact",
  },
]

const faqs = [
  {
    question: "How accurate is the pricing calculator?",
    answer:
      "The calculator provides a baseline estimate. Final pricing depends on project complexity, timeline, and specific requirements. We provide a detailed quote after discussion.",
  },
  {
    question: "Do you offer package discounts?",
    answer:
      "Yes. We offer a 10% discount when you select 4 or more services. For larger projects or long-term partnerships, we can discuss custom pricing.",
  },
  {
    question: "What's included in each service?",
    answer:
      "Each service includes specific deliverables and support. Visit our Services page for detailed information about what's included.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Absolutely. The calculator shows standard offerings, but we customize packages to fit your specific needs and budget.",
  },
  {
    question: "What's your payment process?",
    answer:
      "We typically require a 50% deposit to begin work, with the remaining balance due upon completion. Payment terms can be discussed based on scope.",
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    // Stagger animation for pricing plans
    staggerFadeScale(".pricing-card", {
      duration: 0.7,
      stagger: 0.1,
      delay: 0.2,
      fromScale: 0.9,
    })

    // FAQ items animation
    staggerFadeScale(".pricing-faq-item", {
      duration: 0.6,
      stagger: 0.05,
      delay: 0.1,
      fromScale: 0.98,
    })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(150px,25vw,400px)] font-extrabold text-white/[0.015] tracking-[-0.05em] select-none pointer-events-none whitespace-nowrap">
          Pricing
        </span>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-6">
                Pricing
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(32px,7vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-full mb-8">
                Transparent pricing for your project.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-white/[0.45] leading-relaxed max-w-xl">
                Simple tiered pricing for brand, development, and production services.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-12">
              Plans
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08]">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card bg-black p-8 md:p-10 flex flex-col transition-all duration-500 ${
                  plan.highlighted
                    ? "border border-white/[0.15] -m-px relative z-10"
                    : "border border-transparent hover:border-white/[0.1] hover:-translate-y-1"
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] mb-4">
                  {plan.name}
                </span>
                <span className="text-4xl font-extrabold tracking-tight text-white mb-3">
                  {plan.price}
                </span>
                <p className="text-sm text-white/[0.45] leading-relaxed mb-8 flex-1">
                  {plan.description}
                </p>
                <Link
                  href={plan.href}
                  className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-white/[0.45] transition-colors group w-fit"
                >
                  Get Started
                  <span className="inline-block w-12 h-px bg-white group-hover:w-16 transition-all duration-500" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.08] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <PricingCalculator />
        </div>
      </section>

      <section className="border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/[0.35] block mb-12">
              FAQ
            </span>
          </ScrollReveal>
          <div className="max-w-3xl">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="pricing-faq-item border-b border-white/[0.08] last:border-b-0"
              >
                <ScrollReveal>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <h3 className="text-base md:text-lg font-medium tracking-tight text-white group-hover:text-white/[0.6] transition-colors duration-300">
                      {item.question}
                    </h3>
                    <span className={`text-white/[0.35] text-lg font-light transition-transform duration-300 shrink-0 ml-6 ${openFaq === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      openFaq === i ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-white/[0.45] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-white/[0.08] py-10 md:py-12 px-6 md:px-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-white/[0.45] transition-colors group"
        >
          Start a Project
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
