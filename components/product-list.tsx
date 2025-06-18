"use client"

import { useEffect, useState } from "react"
import type { Product } from "@/lib/types"
import { productApi } from "@/lib/api"
import ProductCard from "./product-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ProductListProps {
  searchQuery?: string
  category?: string
}

export default function ProductList({ searchQuery, category }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await productApi.getAll({
        search: searchQuery,
        category: category,
      })

      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products")
      console.error("Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [searchQuery, category])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <Skeleton className="h-48 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-6 w-1/4 mb-3" />
              <Skeleton className="h-8 w-full" />
            </div>
          ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-6">
        <Alert variant="destructive">
          <AlertDescription className="flex items-center justify-between">
            <span>Error loading products: {error}</span>
            <Button variant="outline" size="sm" onClick={fetchProducts}>
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-500">
          {searchQuery
            ? `No products found for "${searchQuery}"`
            : category && category !== "all"
              ? `No products found in "${category}" category`
              : "No products found"}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
