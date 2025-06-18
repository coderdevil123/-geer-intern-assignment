"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartIcon() {
  const { state } = useCart()

  return (
    <Button asChild variant="outline" size="sm" className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-4 w-4" />
        {state.itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {state.itemCount}
          </span>
        )}
        <span className="sr-only">Shopping cart</span>
      </Link>
    </Button>
  )
}
