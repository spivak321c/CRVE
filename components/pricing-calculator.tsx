"use client"

import { useState } from "react"

const pricing = [
  {
    id: "brand",
    category: "Brand and Identity Design",
    tiers: [
      { name: "Tier 1", price: 850, desc: "Essential brand identity package" },
      { name: "Tier 2", price: 1500, desc: "Comprehensive brand system" },
      { name: "Tier 3", price: 3000, desc: "Full brand strategy & identity" },
    ],
  },
  {
    id: "web",
    category: "Web & App Development",
    tiers: [
      { name: "Tier 1", price: 1250, desc: "Single page or basic site" },
      { name: "Tier 2", price: 15000, desc: "Multi-page web application" },
      { name: "Tier 3", price: 22000, desc: "Full-featured platform" },
    ],
  },
  {
    id: "video",
    category: "Video Production",
    tiers: [
      { name: "Tier 1", price: 10000, desc: "Short-form content" },
      { name: "Tier 2", price: 20000, desc: "Campaign video" },
      { name: "Tier 3", price: 50000, desc: "Full production & post" },
    ],
  },
]

export function PricingCalculator() {
  const [selections, setSelections] = useState<Record<string, number>>({})

  const select = (categoryId: string, tierIndex: number) => {
    setSelections((prev) => ({ ...prev, [categoryId]: tierIndex }))
  }

  const selectedCount = Object.keys(selections).length
  const total = pricing.reduce((sum, cat) => {
    const idx = selections[cat.id]
    if (idx === undefined) return sum
    return sum + cat.tiers[idx].price
  }, 0)

  return (
    <div>
      <div className="divide-y divide-white/[0.08]">
        {pricing.map((cat) => (
          <div key={cat.id} className="py-10 first:pt-0">
            <h3 className="text-sm font-medium tracking-tight text-white mb-6">
              {cat.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {cat.tiers.map((tier, i) => {
                const selected = selections[cat.id] === i
                return (
                  <button
                    key={tier.name}
                    onClick={() => select(cat.id, i)}
                    className={`text-left border px-6 py-6 transition-all duration-300 ${
                      selected
                        ? "border-white bg-white/5"
                        : "border-white/[0.08] hover:border-white/30"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#a6a6a6] block mb-2">
                      {tier.name}
                    </span>
                    <span className={`text-2xl md:text-3xl font-extrabold tracking-tight block mb-2 ${
                      selected ? "text-white" : "text-white"
                    }`}>
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-white/40 leading-relaxed block">
                      {tier.desc}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedCount > 0 && (
        <div className="border-t border-white/[0.08] pt-8 mt-4">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-medium tracking-tight text-white/40">
              Total Estimate
            </span>
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              ${total.toLocaleString()}
            </span>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em] text-white hover:text-neutral-400 transition-colors group"
          >
            Get a Custom Quote
            <span className="inline-block w-16 h-px bg-white group-hover:w-24 transition-all duration-500" />
          </a>
        </div>
      )}
    </div>
  )
}
