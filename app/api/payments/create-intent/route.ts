import { type NextRequest, NextResponse } from "next/server"

// POST /api/payments/create-intent
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.amount || body.amount <= 0) {
      return NextResponse.json({ error: "Valid amount is required" }, { status: 400 })
    }

    // Simulate creating a payment intent (like Stripe)
    const paymentIntentId = `pi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const clientSecret = `${paymentIntentId}_secret_${Math.random().toString(36).substr(2, 9)}`

    return NextResponse.json({
      paymentIntentId,
      clientSecret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
