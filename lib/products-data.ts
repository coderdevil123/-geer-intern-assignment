import type { Product } from "@/lib/types"

// Shared products data that can be used by both API routes and Server Components
export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    description: "Premium wireless headphones with noise cancellation.",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    description: "Track your fitness and stay connected with this smart watch.",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Smartphone",
    price: 699.99,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
    description: "Latest smartphone with advanced camera and long battery life.",
    category: "Electronics",
  },
  {
    id: "8",
    name: "Laptop",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
    description: "High-performance laptop for work and gaming.",
    category: "Electronics",
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
    description: "Portable Bluetooth speaker with rich sound quality.",
    category: "Electronics",
  },
  {
    id: "10",
    name: "Tablet",
    price: 449.99,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
    description: "Lightweight tablet perfect for reading and entertainment.",
    category: "Electronics",
  },

  // Clothing
  {
    id: "4",
    name: "Cotton T-Shirt",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    description: "Comfortable cotton t-shirt for everyday wear.",
    category: "Clothing",
  },
  {
    id: "11",
    name: "Denim Jeans",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
    description: "Classic blue denim jeans with perfect fit.",
    category: "Clothing",
  },
  {
    id: "12",
    name: "Hoodie",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center",
    description: "Cozy hoodie perfect for casual wear.",
    category: "Clothing",
  },
  {
    id: "13",
    name: "Running Shoes",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
    description: "Comfortable running shoes with excellent support.",
    category: "Clothing",
  },
  {
    id: "14",
    name: "Dress Shirt",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center",
    description: "Professional dress shirt for business occasions.",
    category: "Clothing",
  },
  {
    id: "15",
    name: "Winter Jacket",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
    description: "Warm winter jacket with water-resistant material.",
    category: "Clothing",
  },

  // Home & Kitchen
  {
    id: "5",
    name: "Coffee Mug",
    price: 14.99,
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
    description: "Ceramic coffee mug with minimalist design.",
    category: "Home & Kitchen",
  },
  {
    id: "16",
    name: "Dinner Plates Set",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    description: "Set of 4 elegant ceramic dinner plates.",
    category: "Home & Kitchen",
  },
  {
    id: "17",
    name: "Kitchen Knife Set",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop&crop=center",
    description: "Professional kitchen knife set with wooden block.",
    category: "Home & Kitchen",
  },
  {
    id: "18",
    name: "Table Lamp",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&crop=center",
    description: "Modern table lamp with adjustable brightness.",
    category: "Home & Kitchen",
  },
  {
    id: "19",
    name: "Throw Pillow",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    description: "Soft decorative throw pillow for your sofa.",
    category: "Home & Kitchen",
  },
  {
    id: "20",
    name: "Plant Pot",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&crop=center",
    description: "Ceramic plant pot perfect for indoor plants.",
    category: "Home & Kitchen",
  },

  // Books & Stationery
  {
    id: "6",
    name: "Notebook",
    price: 9.99,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop&crop=center",
    description: "Hardcover notebook with lined pages.",
    category: "Books & Stationery",
  },
  {
    id: "21",
    name: "Fountain Pen",
    price: 45.99,
    imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=400&fit=crop&crop=center",
    description: "Elegant fountain pen with smooth ink flow.",
    category: "Books & Stationery",
  },
  {
    id: "22",
    name: "Art Supplies Set",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop&crop=center",
    description: "Complete art supplies set for drawing and painting.",
    category: "Books & Stationery",
  },
  {
    id: "23",
    name: "Desk Organizer",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    description: "Wooden desk organizer to keep your workspace tidy.",
    category: "Books & Stationery",
  },
  {
    id: "24",
    name: "Planner",
    price: 16.99,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
    description: "Daily planner to organize your schedule and goals.",
    category: "Books & Stationery",
  },

  // Sports & Fitness
  {
    id: "25",
    name: "Yoga Mat",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
    description: "Non-slip yoga mat for comfortable workouts.",
    category: "Sports & Fitness",
  },
  {
    id: "26",
    name: "Dumbbells Set",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    description: "Adjustable dumbbells set for strength training.",
    category: "Sports & Fitness",
  },
  {
    id: "27",
    name: "Water Bottle",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop&crop=center",
    description: "Insulated water bottle to keep drinks cold or hot.",
    category: "Sports & Fitness",
  },
  {
    id: "28",
    name: "Resistance Bands",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    description: "Set of resistance bands for versatile workouts.",
    category: "Sports & Fitness",
  },

  // Accessories
  {
    id: "3",
    name: "Leather Wallet",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center",
    description: "Genuine leather wallet with multiple card slots.",
    category: "Accessories",
  },
  {
    id: "29",
    name: "Sunglasses",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
    description: "Stylish sunglasses with UV protection.",
    category: "Accessories",
  },
  {
    id: "30",
    name: "Backpack",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    description: "Durable backpack perfect for travel and daily use.",
    category: "Accessories",
  },
  {
    id: "31",
    name: "Watch",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    description: "Classic analog watch with leather strap.",
    category: "Accessories",
  },
  {
    id: "32",
    name: "Belt",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    description: "Genuine leather belt with metal buckle.",
    category: "Accessories",
  },
]

// Get all unique categories
export function getCategories(): string[] {
  const categories = [...new Set(products.map((product) => product.category).filter(Boolean))]
  return categories.sort()
}

// Service functions for data operations
export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: string): Product | null {
  return products.find((product) => product.id === id) || null
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string, category?: string): Product[] {
  const searchTerm = query.toLowerCase()
  let filteredProducts = products

  // Filter by category first if provided
  if (category && category !== "all") {
    filteredProducts = products.filter((product) => product.category === category)
  }

  // Then filter by search term
  return filteredProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category?.toLowerCase().includes(searchTerm) ||
      product.description?.toLowerCase().includes(searchTerm),
  )
}

export function addProduct(productData: Omit<Product, "id">): Product {
  const newProduct: Product = {
    id: Date.now().toString(), // Simple ID generation
    ...productData,
  }
  products.push(newProduct)
  return newProduct
}

export function deleteProduct(id: string): boolean {
  const index = products.findIndex((product) => product.id === id)
  if (index === -1) return false
  products.splice(index, 1)
  return true
}
