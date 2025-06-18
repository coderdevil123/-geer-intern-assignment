const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ""

// Generic API request function with better error handling
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // For server-side rendering, use absolute URL
  const baseUrl = typeof window === "undefined" ? "http://localhost:3000/api" : "/api"

  const url = `${baseUrl}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    // Check if response is ok
    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`

      try {
        const errorData = await response.json()
        errorMessage = errorData.error || errorData.message || errorMessage
      } catch {
        // If response is not JSON, use status text
        errorMessage = response.statusText || errorMessage
      }

      throw new Error(errorMessage)
    }

    // Check if response has content
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON")
    }

    return await response.json()
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error)
    throw error
  }
}

// Product API functions
export const productApi = {
  getAll: (params?: { search?: string; category?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.search) searchParams.set("search", params.search)
    if (params?.category && params.category !== "all") searchParams.set("category", params.category)

    const query = searchParams.toString()
    return apiRequest<Product[]>(`/products${query ? `?${query}` : ""}`)
  },

  getById: (id: string) => apiRequest<Product>(`/products/${id}`),

  create: (product: Omit<Product, "id">) =>
    apiRequest<Product>("/products", {
      method: "POST",
      body: JSON.stringify(product),
    }),

  delete: (id: string) =>
    apiRequest<{ success: boolean; message: string }>(`/products/${id}`, {
      method: "DELETE",
    }),
}

// Order API functions
export const orderApi = {
  create: (orderData: Omit<Order, "id" | "createdAt" | "status">) =>
    apiRequest<Order>("/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    }),

  getById: (id: string) => apiRequest<Order>(`/orders/${id}`),

  getByUser: (userId?: string) => apiRequest<Order[]>(`/orders${userId ? `?userId=${userId}` : ""}`),

  updateStatus: (id: string, status: Order["status"]) =>
    apiRequest<Order>(`/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
}

// Payment API functions
export const paymentApi = {
  processPayment: (paymentData: {
    amount: number
    paymentMethod: PaymentMethod
    orderId: string
  }) =>
    apiRequest<{ success: boolean; transactionId: string; message: string }>("/payments/process", {
      method: "POST",
      body: JSON.stringify(paymentData),
    }),

  createPaymentIntent: (amount: number) =>
    apiRequest<{ clientSecret: string; paymentIntentId: string }>("/payments/create-intent", {
      method: "POST",
      body: JSON.stringify({ amount }),
    }),
}

// Types
import type { Product, Order, PaymentMethod } from "./types"
