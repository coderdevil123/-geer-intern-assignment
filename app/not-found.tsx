import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl mt-2">Product Not Found</h2>
      <p className="mt-4 text-gray-500 max-w-md">The product you're looking for doesn't exist or has been removed.</p>
      <Button asChild className="mt-6">
        <Link href="/products">Back to Products</Link>
      </Button>
    </div>
  )
}
