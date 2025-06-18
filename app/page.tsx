import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Product Listing App</h1>
      <p className="text-xl mb-8 text-center max-w-md">Welcome to our product listing application built with Next.js</p>
      <Button asChild size="lg">
        <Link href="/products">View Products</Link>
      </Button>
    </main>
  )
}
