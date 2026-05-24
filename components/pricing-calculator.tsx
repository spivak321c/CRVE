"use client"

import { useState } from "react"

export function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      id: "brand-strategy",
      name: "Brand Strategy",
      basePrice: 3000,
      description: "Market research, positioning, and brand guidelines",
    },
    {
      id: "visual-identity",
      name: "Visual Identity",
      basePrice: 4000,
      description: "Logo design, color palette, and visual system",
    },
    {
      id: "digital-design",
      name: "Digital Design",
      basePrice: 5000,
      description: "UX/UI design for websites and applications",
    },
    {
      id: "web-development",
      name: "Web Development",
      basePrice: 8000,
      description: "Full-stack web applications and responsive websites",
    },
    {
      id: "app-development",
      name: "App Development",
      basePrice: 12000,
      description: "Native and cross-platform mobile applications",
    },
    {
      id: "content-strategy",
      name: "Content Strategy",
      basePrice: 2500,
      description: "Content planning, copywriting, and SEO optimization",
    },
    {
      id: "marketing-campaign",
      name: "Marketing Campaign",
      basePrice: 6000,
      description: "Integrated campaigns across multiple channels",
    },
    {
      id: "brand-consulting",
      name: "Brand Consulting",
      basePrice: 4500,
      description: "Expert guidance on brand development and evolution",
    },
  ]

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    const service = services.find((s) => s.id === serviceId)
    return sum + (service?.basePrice || 0)
  }, 0)

  const discount = selectedServices.length > 3 ? Math.floor(totalPrice * 0.1) : 0
  const finalPrice = totalPrice - discount

  return (
    <div className="space-y-8">
      {/* Services Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Select Services</h3>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.id} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleService(service.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => {}}
                    className="w-5 h-5 rounded border-border cursor-pointer"
                  />
                  <div>
                    <p className="font-medium text-foreground">{service.name}</p>
                    <p className="text-sm text-foreground/60">{service.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-accent">${service.basePrice.toLocaleString()}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-secondary/30 rounded-lg p-8 space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Pricing Summary</h3>

        {selectedServices.length === 0 ? (
          <p className="text-foreground/60">Select services to see pricing</p>
        ) : (
          <div className="space-y-4">
            {/* Selected Services Breakdown */}
            <div className="space-y-2 pb-4 border-b border-border">
              {selectedServices.map((serviceId) => {
                const service = services.find((s) => s.id === serviceId)
                return (
                  <div key={serviceId} className="flex justify-between text-sm">
                    <span className="text-foreground/70">{service?.name}</span>
                    <span className="text-foreground">${service?.basePrice.toLocaleString()}</span>
                  </div>
                )
              })}
            </div>

            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-foreground/70">Subtotal</span>
              <span className="text-foreground">${totalPrice.toLocaleString()}</span>
            </div>

            {/* Discount */}
            {discount > 0 && (
              <div className="flex justify-between text-accent">
                <span className="text-foreground/70">Discount (10% for 4+ services)</span>
                <span>-${discount.toLocaleString()}</span>
              </div>
            )}

            {/* Final Price */}
            <div className="flex justify-between pt-4 border-t border-border">
              <span className="font-semibold text-foreground">Total Estimate</span>
              <span className="text-2xl font-semibold text-accent">${finalPrice.toLocaleString()}</span>
            </div>

            {/* Note */}
            <p className="text-xs text-foreground/60 pt-4">
              *This is an estimate. Final pricing may vary based on project scope and complexity. Contact us for a
              detailed quote.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      {selectedServices.length > 0 && (
        <div className="pt-4">
          <a
            href="/contact"
            className="w-full block text-center px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get a Custom Quote
          </a>
        </div>
      )}
    </div>
  )
}
