import { type NextRequest, NextResponse } from "next/server"
import { orderStorage } from "@/lib/storage"

// GET /api/orders/[id]
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Fetching order:", params.id) // Debug log

    const order = orderStorage.getOrderById(params.id)

    if (!order) {
      console.log("Order not found:", params.id) // Debug log
      console.log(
        "Available orders:",
        orderStorage.getAllOrders().map((o) => o.id),
      ) // Debug log
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    console.log("Order found:", order.id) // Debug log
    return NextResponse.json(order)
  } catch (error) {
    console.error("Error fetching order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PATCH /api/orders/[id]
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    const updatedOrder = orderStorage.updateOrder(params.id, {
      ...body,
      updatedAt: new Date(),
    })

    if (!updatedOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json(updatedOrder)
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// DELETE /api/orders/[id]
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const success = orderStorage.deleteOrder(params.id)

    if (!success) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Order deleted successfully" })
  } catch (error) {
    console.error("Error deleting order:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
