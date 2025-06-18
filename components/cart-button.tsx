"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"
import { ShoppingCart } from "lucide-react"

interface CartButtonProps {
  product: Product
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export default function CartButton({ product, variant = "default", size = "default" }: CartButtonProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <Button onClick={handleAddToCart} variant={variant} size={size} className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  )
}
