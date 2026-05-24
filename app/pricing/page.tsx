import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingCalculator } from "@/components/pricing-calculator"
import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">
            Transparent pricing for your project
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Use our pricing calculator to get an estimate for your project. Select the services you need and see the
            total cost in real-time.
          </p>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: "How accurate is the pricing calculator?",
                answer:
                  "The calculator provides a baseline estimate based on our standard service packages. Final pricing may vary depending on project complexity, timeline, and specific requirements. We'll provide a detailed quote after discussing your project.",
              },
              {
                question: "Do you offer package discounts?",
                answer:
                  "Yes! We offer a 10% discount when you select 4 or more services. For larger projects or long-term partnerships, we can discuss custom pricing.",
              },
              {
                question: "What's included in each service?",
                answer:
                  "Each service includes specific deliverables and support. Visit our Services page for detailed information about what's included in each offering.",
              },
              {
                question: "Can I customize my package?",
                answer:
                  "Absolutely. The calculator shows our standard offerings, but we can customize packages to fit your specific needs and budget. Contact us to discuss your project.",
              },
              {
                question: "What's your payment process?",
                answer:
                  "We typically require a 50% deposit to begin work, with the remaining balance due upon completion. We can discuss payment terms based on your project scope.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes, we offer maintenance and support packages for all our services. Ask us about our ongoing support options during your consultation.",
              },
            ].map((item, index) => (
              <div key={index} className="pb-6 border-b border-border last:border-b-0">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.question}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to start your project?</h2>
          <p className="text-lg text-background/70 mb-8">
            Get in touch with our team to discuss your project and receive a custom quote.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
