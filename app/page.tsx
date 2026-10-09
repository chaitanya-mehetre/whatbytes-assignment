"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(1000);
  return (
    <main className="bg-white">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row">
        <Sidebar
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />

        <section className="flex-1">
          <h2 className="mb-5 text-3xl font-bold text-[#206ad7]">
            Product Listing
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
