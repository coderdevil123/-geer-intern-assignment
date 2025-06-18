import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductSearch from "@/components/product-search"
import CategoryFilter from "@/components/category-filter"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductsPageProps {
  searchParams: { search?: string; category?: string }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const searchQuery = searchParams.search
  const category = searchParams.category

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="mb-6">
        <ProductSearch />
      </div>

      <CategoryFilter />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList searchQuery={searchQuery} category={category} />
      </Suspense>
    </main>
  )
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {Array(12)
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
