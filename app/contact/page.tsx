"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { ContactForm } from "@/components/contact-form"
import { BookingForm } from "@/components/booking-form"

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
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />

      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <StaggerContainer>
            <StaggerItem>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-6">
                Contact
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white max-w-4xl mb-8">
                Get in Touch
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light max-w-xl">
                Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s start a conversation.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-neutral-900">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <ScrollReveal className="px-6 md:px-12 py-16 md:py-24 border-b md:border-b-0 md:border-r border-neutral-900">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-8">
              Send a Message
            </span>
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="px-6 md:px-12 py-16 md:py-24">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 block mb-8">
              Schedule a Consultation
            </span>
            <BookingForm />
          </ScrollReveal>
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

      <Footer />
    </main>
  )
}
