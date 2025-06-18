"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { productApi } from "@/lib/api"
import CartButton from "@/components/cart-button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProduct = async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await productApi.getById(params.id)
      setProduct(data)
    } catch (err) {
      if (err instanceof Error && err.message.includes("404")) {
        notFound()
      }
      setError(err instanceof Error ? err.message : "Failed to fetch product")
      console.error("Error fetching product:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center mb-6 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-80 md:h-96 rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center mb-6 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>

        <Alert variant="destructive">
          <AlertDescription className="flex items-center justify-between">
            <span>Error loading product: {error}</span>
            <Button variant="outline" size="sm" onClick={fetchProduct}>
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </main>
    )
  }

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center mb-6 text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>

          {product.description && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          <div className="mt-8">
            <CartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  )
}
