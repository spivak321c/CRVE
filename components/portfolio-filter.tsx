"use client"

import { useState } from "react"

interface PortfolioFilterProps {
  categories: string[]
  onFilterChange: (category: string) => void
}

export function PortfolioFilter({ categories, onFilterChange }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? "bg-accent text-accent-foreground"
              : "border border-foreground/20 text-foreground hover:border-foreground/40"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
