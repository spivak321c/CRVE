import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BookingForm } from "@/components/booking-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hello@studio.com",
                description: "Send us an email anytime",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+1 (555) 123-4567",
                description: "Call us during business hours",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "San Francisco, CA",
                description: "Visit our office",
              },
              {
                icon: Clock,
                title: "Hours",
                content: "Mon - Fri, 9am - 6pm",
                description: "Pacific Time",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 font-medium">{item.content}</p>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Schedule a Consultation</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary depending on scope and complexity. Most projects take 4-12 weeks from discovery to delivery. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with startups?",
                answer:
                  "We love working with startups and have experience helping early-stage companies establish their brand and market presence.",
              },
              {
                question: "What's your process for working with clients?",
                answer:
                  "We follow a collaborative approach: discovery, strategy, creative development, implementation, and optimization. We keep you involved throughout the entire process.",
              },
              {
                question: "Can you help with ongoing support?",
                answer:
                  "Yes, we offer ongoing support and maintenance services. Many of our clients work with us on a retainer basis for continuous optimization and updates.",
              },
              {
                question: "How do you determine project pricing?",
                answer:
                  "Pricing depends on project scope, complexity, and timeline. We provide custom quotes after understanding your specific needs and goals.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We work across various industries including tech, e-commerce, healthcare, finance, and more. Our diverse experience helps us bring fresh perspectives to every project.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3 pb-8 border-b border-border last:border-b-0">
                <h3 className="text-lg font-medium text-foreground">{item.question}</h3>
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
          <p className="text-lg text-background/70">
            Fill out the form above or give us a call. We're excited to hear about your vision.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
