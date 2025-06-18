import type { Order } from "./types"

// Shared in-memory storage for orders (replace with database in production)
class OrderStorage {
  private orders: Order[] = []

  addOrder(order: Order): Order {
    this.orders.push(order)
    return order
  }

  getOrderById(id: string): Order | null {
    return this.orders.find((order) => order.id === id) || null
  }

  getAllOrders(): Order[] {
    return [...this.orders] // Return a copy to prevent external mutations
  }

  updateOrder(id: string, updates: Partial<Order>): Order | null {
    const index = this.orders.findIndex((order) => order.id === id)
    if (index === -1) return null

    this.orders[index] = { ...this.orders[index], ...updates }
    return this.orders[index]
  }

  deleteOrder(id: string): boolean {
    const index = this.orders.findIndex((order) => order.id === id)
    if (index === -1) return false

    this.orders.splice(index, 1)
    return true
  }
}

// Create a singleton instance
export const orderStorage = new OrderStorage()
