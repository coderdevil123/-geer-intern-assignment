"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getCategories } from "@/lib/products-data"

export default function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"
  const categories = getCategories()

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    // Keep search query if it exists
    const search = searchParams.get("search")
    if (search) {
      params.set("search", search)
    }

    const queryString = params.toString()
    router.push(`/products${queryString ? `?${queryString}` : ""}`)
  }

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={currentCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange("all")}
        >
          All Products
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={currentCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
