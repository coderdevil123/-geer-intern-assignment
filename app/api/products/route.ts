import { type NextRequest, NextResponse } from "next/server"
import { getAllProducts, searchProducts, addProduct, getProductsByCategory } from "@/lib/products-data"

// GET /api/products
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get("search")
    const category = searchParams.get("category")

    let products

    if (search) {
      products = searchProducts(search, category || undefined)
    } else if (category && category !== "all") {
      products = getProductsByCategory(category)
    } else {
      products = getAllProducts()
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST /api/products
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || typeof body.price !== "number" || body.price <= 0) {
      return NextResponse.json({ error: "Name and valid price are required" }, { status: 400 })
    }

    const newProduct = addProduct({
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl || "/placeholder.svg?height=200&width=200",
      description: body.description,
      category: body.category || "Uncategorized",
    })

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
