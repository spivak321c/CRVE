"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { PricingCalculator } from "@/components/pricing-calculator"
import Link from "next/link"

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
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                Pricing
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                Transparent pricing for your project.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                Use our calculator to estimate your project. Select the services you need and see the cost in real-time.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-neutral-900 py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <PricingCalculator />
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-12">
              FAQ
            </span>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="py-8 border-b border-neutral-900 last:border-b-0"
              >
                <ScrollReveal>
                  <h3 className="text-base md:text-lg font-medium tracking-tight text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-2xl">
                    {item.answer}
                  </p>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-b border-neutral-900 py-10 md:py-12 px-6 md:px-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
        >
          Start a Project
          <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
