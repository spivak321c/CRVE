import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "Visionary leader with 12+ years of experience in brand strategy and creative direction.",
      image: "/team-member-1.jpg",
      specialties: ["Brand Strategy", "Creative Direction", "Design Leadership"],
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Lead Designer",
      bio: "Passionate designer focused on creating beautiful and functional digital experiences.",
      image: "/team-member-2.jpg",
      specialties: ["UI/UX Design", "Digital Design", "Design Systems"],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Brand Strategist",
      bio: "Strategic thinker specializing in brand positioning and market research.",
      image: "/team-member-3.jpg",
      specialties: ["Brand Strategy", "Market Research", "Positioning"],
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Content Strategist",
      bio: "Storyteller and strategist crafting compelling narratives for brands.",
      image: "/team-member-4.jpg",
      specialties: ["Content Strategy", "Copywriting", "Storytelling"],
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Project Manager",
      bio: "Organized and detail-oriented professional ensuring projects run smoothly.",
      image: "/team-member-5.jpg",
      specialties: ["Project Management", "Client Relations", "Coordination"],
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Digital Strategist",
      bio: "Expert in digital marketing and campaign strategy with proven results.",
      image: "/team-member-6.jpg",
      specialties: ["Digital Strategy", "Marketing", "Analytics"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Meet Our Team</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A talented group of creative professionals dedicated to delivering exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="space-y-4">
                <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-light">{member.name}</h3>
                  <p className="text-accent font-medium text-sm">{member.role}</p>
                  <p className="text-foreground/60 leading-relaxed">{member.bio}</p>

                  <div className="pt-4">
                    <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary/50 text-foreground/70 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Our Culture</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Collaboration",
                description:
                  "We believe the best ideas come from diverse perspectives and open collaboration. Our team works together to create exceptional work.",
              },
              {
                title: "Creativity",
                description:
                  "We foster an environment where creativity thrives. We encourage experimentation and celebrate innovative thinking.",
              },
              {
                title: "Excellence",
                description:
                  "We're committed to delivering excellence in everything we do. Quality and attention to detail are non-negotiable.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-light">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">What Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Working with this team was transformative for our brand. They understood our vision and delivered beyond expectations.",
                author: "Alex Turner",
                company: "Tech Startup Co.",
              },
              {
                quote:
                  "The level of professionalism and creativity was outstanding. They brought fresh ideas and executed flawlessly.",
                author: "Jennifer Lee",
                company: "Fashion Brand Inc.",
              },
              {
                quote:
                  "From strategy to execution, every step was handled with care and expertise. Highly recommended!",
                author: "Michael Brown",
                company: "E-Commerce Solutions",
              },
              {
                quote:
                  "They didn't just deliver a project; they became an extension of our team. Exceptional work and great people.",
                author: "Sarah Martinez",
                company: "Digital Agency Partners",
              },
            ].map((testimonial, index) => (
              <div key={index} className="space-y-4 p-8 bg-secondary/30 rounded-lg">
                <p className="text-foreground/70 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Join Our Team</h2>
          <p className="text-lg text-background/70 mb-8">
            We're always looking for talented individuals to join our creative team. Check back soon for open positions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
