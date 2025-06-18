import { type NextRequest, NextResponse } from "next/server"
import { orderStorage } from "@/lib/storage"
import type { Order } from "@/lib/types"

// GET /api/orders
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get("userId")

    // In a real app, you'd filter by authenticated user
    const orders = orderStorage.getAllOrders()

    // For demo purposes, return all orders
    // In production, filter by authenticated user
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST /api/orders
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: "Order items are required" }, { status: 400 })
    }

    if (!body.shippingAddress || !body.paymentMethod) {
      return NextResponse.json({ error: "Shipping address and payment method are required" }, { status: 400 })
    }

    // Validate shipping address required fields
    const { shippingAddress } = body
    if (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.email || !shippingAddress.address) {
      return NextResponse.json({ error: "Complete shipping address is required" }, { status: 400 })
    }

    // Create new order
    const newOrder: Order = {
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
      items: body.items,
      subtotal: Number(body.subtotal) || 0,
      tax: Number(body.tax) || 0,
      shipping: Number(body.shipping) || 0,
      total: Number(body.total) || 0,
      shippingAddress: body.shippingAddress,
      paymentMethod: body.paymentMethod,
      status: "pending",
      createdAt: new Date(),
    }

    // Add order to storage
    const savedOrder = orderStorage.addOrder(newOrder)

    console.log("Order created:", savedOrder.id) // Debug log

    return NextResponse.json(savedOrder, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }
}
