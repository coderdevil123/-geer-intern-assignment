"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, AlertCircle } from "lucide-react"
import { orderApi } from "@/lib/api"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { Order } from "@/lib/types"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchOrder = async () => {
    if (!orderId) {
      setError("No order ID provided")
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      console.log("Fetching order:", orderId) // Debug log

      const orderData = await orderApi.getById(orderId)
      console.log("Order fetched:", orderData) // Debug log
      setOrder(orderData)
    } catch (err) {
      console.error("Error fetching order:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch order details")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrder()
  }, [orderId])

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading order details...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>Error loading order: {error}</span>
              <Button variant="outline" size="sm" onClick={fetchOrder}>
                Retry
              </Button>
            </AlertDescription>
          </Alert>

          <div className="text-center py-8">
            <h1 className="text-3xl font-bold mb-4">Unable to Load Order</h1>
            <p className="text-gray-500 mb-8">
              We're having trouble loading your order details. Your payment was processed successfully.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/orders">View All Orders</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!order) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
          <p className="text-gray-500 mb-8">We couldn't find your order details, but your payment was processed.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful!</h1>
          <p className="text-gray-600">Thank you for your order. We'll send you a confirmation email shortly.</p>
        </div>

        {/* Order Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order #{order.id}
            </CardTitle>
            <p className="text-sm text-gray-500">
              Placed on {new Date(order.createdAt).toLocaleDateString()} at{" "}
              {new Date(order.createdAt).toLocaleTimeString()}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Order Items */}
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Pricing Summary */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Paid</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Shipping Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>
              <p>{order.shippingAddress.address}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
              <p>{order.shippingAddress.email}</p>
              <p>{order.shippingAddress.phone}</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="capitalize">
              {order.paymentMethod.type.replace("_", " ")} ending in {order.paymentMethod.last4}
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
