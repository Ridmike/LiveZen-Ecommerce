

const dataset = {
  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "customer",
      address: "123 Main St, New York, USA"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "customer",
      address: "456 Market St, San Francisco, USA"
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@shop.com",
      role: "admin",
      address: "HQ Building, New York, USA"
    }
  ],
  products: [
    {
      id: 101,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      stock: 50,
      image: "/images/headphones.jpg",
      rating: 4.5,
      isOfferAvailable: true,
      discountPercentage: 15
    },
    {
      id: 102,
      name: "Running Shoes",
      category: "Sportswear",
      price: 59.99,
      stock: 120,
      image: "/images/shoes.jpg",
      rating: 4.2,
      isOfferAvailable: false,
      discountPercentage: 0
    },
    {
      id: 103,
      name: "Smart Watch",
      category: "Electronics",
      price: 149.99,
      stock: 30,
      image: "/images/smartwatch.jpg",
      rating: 4.7,
      isOfferAvailable: true,
      discountPercentage: 10
    },
    {
      id: 104,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      stock: 50,
      image: "/images/headphones.jpg",
      rating: 4.5,
      isOfferAvailable: true,
      discountPercentage: 15
    },
    {
      id: 105,
      name: "Running Shoes",
      category: "Sportswear",
      price: 59.99,
      stock: 120,
      image: "/images/shoes.jpg",
      rating: 4.2,
      isOfferAvailable: false,
      discountPercentage: 0
    },
    {
      id: 106,
      name: "Smart Watch",
      category: "Electronics",
      price: 149.99,
      stock: 30,
      image: "/images/smartwatch.jpg",
      rating: 4.7,
      isOfferAvailable: true,
      discountPercentage: 10
    },
    {
      id: 107,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 99.99,
      stock: 50,
      image: "/images/headphones.jpg",
      rating: 4.5,
      isOfferAvailable: true,
      discountPercentage: 15
    },
    {
      id: 108,
      name: "Running Shoes",
      category: "Sportswear",
      price: 59.99,
      stock: 120,
      image: "/images/shoes.jpg",
      rating: 4.2,
      isOfferAvailable: false,
      discountPercentage: 0
    },
    {
      id: 109,
      name: "Smart Watch",
      category: "Electronics",
      price: 149.99,
      stock: 30,
      image: "/images/smartwatch.jpg",
      rating: 4.7,
      isOfferAvailable: true,
      discountPercentage: 10
    }
  ],
  orders: [
    {
      orderId: 5001,
      userId: 1,
      items: [
        { productId: 101, quantity: 1 },
        { productId: 102, quantity: 2 }
      ],
      total: 219.97,
      status: "shipped",
      date: "2025-09-28"
    },
    {
      orderId: 5002,
      userId: 2,
      items: [
        { productId: 103, quantity: 1 }
      ],
      total: 149.99,
      status: "processing",
      date: "2025-09-29"
    }
  ],
  categories: [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Sportswear" },
    { id: 3, name: "Home & Kitchen" }
  ]
};

export default dataset;
