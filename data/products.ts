export type Product = {
  id: number;
  title: string;
  price: number;
  category: "Electronics" | "Clothing" | "Home";
  image: string;
  description: string;
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    image: "/products/running-shoes.jpg",
    description: "Lightweight running shoes with a comfortable cushioned sole.",
    rating: 4,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199,
    category: "Electronics",
    image: "/products/headphones.jpg",
    description: "Over-ear wireless headphones with rich sound and long battery life.",
    rating: 4,
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    category: "Clothing",
    image: "/products/backpack.jpg",
    description: "Durable everyday backpack with plenty of storage space.",
    rating: 4,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    image: "/products/smartwatch.jpg",
    description: "Smartwatch with fitness tracking and notifications.",
    rating: 5,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    category: "Clothing",
    image: "/products/sunglasses.jpg",
    description: "Stylish sunglasses with UV protection.",
    rating: 4,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    image: "/products/camera.jpg",
    description: "Compact digital camera for sharp photos and video.",
    rating: 5,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    category: "Clothing",
    image: "/products/tshirt.jpg",
    description: "Soft cotton t-shirt for everyday wear.",
    rating: 4,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    image: "/products/smartphone.jpg",
    description: "Lorem ipsum dolor amet, consectetur euisagend.",
    rating: 4,
  },
];