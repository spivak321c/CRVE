import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "We develop comprehensive brand strategies that define your unique position in the market. From market research to brand positioning, we create a foundation for all your creative work.",
      features: [
        "Market Research & Analysis",
        "Brand Positioning",
        "Competitive Analysis",
        "Brand Guidelines",
        "Messaging Framework",
      ],
    },
    {
      id: 2,
      title: "Visual Identity",
      description:
        "Creating distinctive visual identities that make your brand memorable. We design logos, color systems, typography, and all visual elements that represent your brand.",
      features: [
        "Logo Design",
        "Color Palette Development",
        "Typography Selection",
        "Visual System Design",
        "Brand Asset Library",
      ],
    },
    {
      id: 3,
      title: "Digital Design",
      description:
        "We design beautiful and functional digital experiences. From websites to applications, we create interfaces that engage users and drive results.",
      features: ["UX/UI Design", "Website Design", "App Design", "Interaction Design", "Design Systems"],
    },
    {
      id: 4,
      title: "Web Development",
      description:
        "We build fast, scalable, and secure web applications using modern technologies. From responsive websites to complex web platforms, we deliver solutions that perform.",
      features: [
        "Full-Stack Development",
        "Responsive Design Implementation",
        "Performance Optimization",
        "API Development",
        "Database Architecture",
      ],
    },
    {
      id: 5,
      title: "App Development",
      description:
        "We create native and cross-platform mobile applications that users love. From concept to launch, we handle the entire development lifecycle.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Ongoing Support & Maintenance",
      ],
    },
    {
      id: 6,
      title: "Content Strategy",
      description:
        "Strategic content that tells your story and engages your audience. We develop content strategies that align with your business goals.",
      features: ["Content Audit", "Strategy Development", "Copywriting", "Content Calendar", "SEO Optimization"],
    },
    {
      id: 7,
      title: "Marketing Campaign",
      description:
        "Integrated marketing campaigns that drive awareness and engagement. We create cohesive campaigns across multiple channels.",
      features: [
        "Campaign Strategy",
        "Creative Direction",
        "Social Media Content",
        "Email Marketing",
        "Performance Analytics",
      ],
    },
    {
      id: 8,
      title: "Brand Consulting",
      description:
        "Expert guidance on brand development and evolution. We help established brands stay relevant and new brands find their voice.",
      features: [
        "Brand Audit",
        "Rebranding Strategy",
        "Brand Evolution",
        "Stakeholder Workshops",
        "Implementation Support",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">
            Services designed to elevate your brand
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            We offer a comprehensive range of services to help your brand succeed. From strategy to execution, we're
            here to support your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="space-y-6 pb-8 border-b border-border">
                <div>
                  <h2 className="text-3xl font-light mb-3">{service.title}</h2>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wide">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-block text-accent font-medium hover:opacity-70 transition-opacity"
                >
                  Learn more about this service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and audience through research and workshops.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a strategic approach tailored to your unique needs and market position.",
              },
              {
                step: "03",
                title: "Creation",
                description: "Our creative team brings the strategy to life through design and content development.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver polished assets and provide support to ensure successful implementation.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <p className="text-4xl font-light text-accent/50">{item.step}</p>
                <h3 className="text-xl font-light">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to get started?</h2>
          <p className="text-lg text-background/70 mb-8">
            Let's discuss which services are right for your project and create a plan together.
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
