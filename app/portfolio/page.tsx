"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioFilter } from "@/components/portfolio-filter"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      image: "/modern-brand-identity.png",
      description: "Complete visual identity for a tech startup",
      year: "2024",
    },
    {
      id: 2,
      title: "Digital Experience",
      category: "Design",
      image: "/digital-product-interface.png",
      description: "Innovative digital product interface",
      year: "2024",
    },
    {
      id: 3,
      title: "Campaign Strategy",
      category: "Strategy",
      image: "/vibrant-marketing-campaign.png",
      description: "Integrated marketing campaign",
      year: "2023",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      category: "Design",
      image: "/ecommerce-platform.jpg",
      description: "Full-featured e-commerce website redesign",
      year: "2023",
    },
    {
      id: 5,
      title: "Corporate Rebrand",
      category: "Branding",
      image: "/corporate-rebrand.jpg",
      description: "Complete rebrand for established corporation",
      year: "2023",
    },
    {
      id: 6,
      title: "Social Media Campaign",
      category: "Strategy",
      image: "/social-media-campaign.jpg",
      description: "Multi-channel social media strategy and content",
      year: "2024",
    },
    {
      id: 7,
      title: "Mobile App Design",
      category: "Design",
      image: "/mobile-app-design.jpg",
      description: "iOS and Android app design system",
      year: "2024",
    },
    {
      id: 8,
      title: "Brand Guidelines",
      category: "Branding",
      image: "/brand-guidelines.jpg",
      description: "Comprehensive brand guidelines documentation",
      year: "2023",
    },
    {
      id: 9,
      title: "SaaS Platform",
      category: "Development",
      image: "/saas-platform-dashboard.jpg",
      description: "Full-stack SaaS application with real-time analytics",
      year: "2024",
    },
    {
      id: 10,
      title: "E-Learning Portal",
      category: "Development",
      image: "/online-learning-platform.jpg",
      description: "Interactive e-learning platform with course management",
      year: "2024",
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      category: "App Development",
      image: "/fitness-mobile-app.jpg",
      description: "Cross-platform fitness tracking and workout app",
      year: "2024",
    },
    {
      id: 12,
      title: "Social Commerce App",
      category: "App Development",
      image: "/social-commerce-mobile-app.jpg",
      description: "Native iOS and Android social shopping application",
      year: "2023",
    },
  ]

  const categories = ["All", "Branding", "Design", "Strategy", "Development", "App Development"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Our Work</h1>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A collection of projects showcasing our expertise in branding, design, strategy, and development. Each
            project represents our commitment to creative excellence.
          </p>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <PortfolioFilter categories={categories} onFilterChange={setSelectedCategory} />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group cursor-pointer">
                <div className="space-y-4">
                  <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-accent font-medium">{project.category}</p>
                      <p className="text-sm text-foreground/50">{project.year}</p>
                    </div>
                    <h3 className="text-2xl font-light group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-foreground/60">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/60 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Interested in working together?</h2>
          <p className="text-lg text-background/70 mb-8">
            Let's discuss your project and explore how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
