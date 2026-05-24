import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">About Studio</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            We're a creative agency dedicated to helping brands succeed through thoughtful design, strategic thinking,
            and exceptional execution.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed">
                Studio was founded in 2015 with a simple mission: to create meaningful work that helps brands connect
                with their audiences. What started as a small team of passionate designers and strategists has grown
                into a full-service creative agency.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Over the years, we've had the privilege of working with startups, established brands, and everything in
                between. Each project has taught us something new and shaped our approach to creative problem-solving.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we continue to push boundaries and explore new possibilities in design and strategy. We believe
                that great work comes from collaboration, creativity, and a deep understanding of our clients' needs.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/about-story-image.jpg" alt="Studio office" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Creativity",
                description:
                  "We believe in the power of creative thinking to solve problems and create meaningful experiences. We encourage bold ideas and innovative approaches.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty and transparency in all our relationships. We stand by our work and take responsibility for our results.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best work comes from working closely with our clients and team members. We value diverse perspectives and open communication.",
              },
              {
                title: "Excellence",
                description:
                  "We're committed to delivering exceptional quality in everything we do. We pay attention to detail and never settle for mediocrity.",
              },
              {
                title: "Growth",
                description:
                  "We're constantly learning and evolving. We embrace challenges as opportunities to grow and improve our craft.",
              },
              {
                title: "Impact",
                description:
                  "We measure success by the impact our work has on our clients' businesses and their audiences. We create work that matters.",
              },
            ].map((value, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-2xl font-light">{value.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "25+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-light text-accent mb-2">{stat.number}</p>
                <p className="text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Our Approach</h2>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description:
                  "We start by deeply understanding your business, market, and audience. Through research and workshops, we uncover insights that inform our strategy.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description:
                  "We develop a comprehensive strategy that aligns with your goals. We create a clear roadmap for success and define key metrics.",
              },
              {
                step: "03",
                title: "Creative Development",
                description:
                  "Our creative team brings the strategy to life through design, content, and storytelling. We iterate and refine based on feedback.",
              },
              {
                step: "04",
                title: "Implementation & Launch",
                description:
                  "We manage the implementation process and ensure a smooth launch. We provide support and guidance throughout the rollout.",
              },
              {
                step: "05",
                title: "Measurement & Optimization",
                description:
                  "We track performance and gather insights. We continuously optimize and refine to ensure ongoing success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start pb-12 border-b border-border last:border-b-0"
              >
                <div>
                  <p className="text-5xl font-light text-accent/50">{item.step}</p>
                </div>
                <div className="md:col-span-3 space-y-3">
                  <h3 className="text-2xl font-light">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to work with us?</h2>
          <p className="text-lg text-background/70 mb-8">
            Let's discuss your project and explore how we can help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
