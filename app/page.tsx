"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category") || "all";
  const category =
    categoryParam.charAt(0).toUpperCase() +
    categoryParam.slice(1).toLowerCase();

  const priceParam = searchParams.get("price") || "0-1000";
  const maxPrice = Number(priceParam.split("-")[1]);
  const price = isNaN(maxPrice) ? 1000 : maxPrice;

  const search = searchParams.get("search") || "";

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesPrice = product.price <= price;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <main>
      <Header
        search={search}
        setSearch={(value) => updateParams("search", value)}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row items-start">
        <Sidebar
          category={category}
          setCategory={(value) => updateParams("category", value.toLowerCase())}
          price={price}
          setPrice={(value) => updateParams("price", `0-${value}`)}
        />

        <section className="flex-1">
          <h2 className="mb-5 text-3xl font-bold text-[#0a2f66]">
            Product Listing
          </h2>

          {filteredProducts.length === 0 ? (
            <p className="text-lg text-gray-600">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} wide={product.id === 8} />
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}