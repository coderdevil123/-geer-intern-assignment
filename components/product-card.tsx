import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import CartButton from "./cart-button"
import { Badge } from "@/components/ui/badge"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 bg-gray-100">
          <Image
            src={product.imageUrl || "/placeholder.svg?height=200&width=200"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link href={`/products/${product.id}`} className="group flex-1">
            <h2 className="font-semibold text-lg group-hover:text-primary truncate">{product.name}</h2>
          </Link>
          {product.category && (
            <Badge variant="secondary" className="ml-2 text-xs">
              {product.category}
            </Badge>
          )}
        </div>
        <p className="text-xl font-bold mb-3">${product.price.toFixed(2)}</p>
        <CartButton product={product} variant="outline" size="sm" />
      </div>
    </div>
  )
}
