"use client"

import Link from "next/link"
import CartIcon from "./cart-icon"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Product Store
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/orders" className="hover:underline">
            Orders
          </Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  )
}
