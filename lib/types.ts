export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  description?: string
  category?: string
}

export interface PaymentMethod {
  id: string
  type: "card" | "paypal" | "apple_pay"
  last4?: string
  brand?: string
  expiryMonth?: number
  expiryYear?: number
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  subtotal: number
  tax: number
  shipping: number
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: Date
}

export interface CartItem extends Product {
  quantity: number
}
