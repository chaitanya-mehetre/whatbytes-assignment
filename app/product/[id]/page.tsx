"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function ProductDetailContent() {
  const params = useParams();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(params.id));

  return (
    <main>
      <Header search={search} setSearch={setSearch} />

      <div className="mx-auto max-w-6xl px-6 py-8">
        {!product ? (
          <div>
            <p className="text-lg text-gray-600">Product not found.</p>
            <Link
              href="/"
              className="mt-2 inline-block text-[#0b5cad] underline"
            >
              Back to products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 rounded-xl bg-white p-6 shadow-sm md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="h-80 w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[#0a2f66]">
                {product.title}
              </h1>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                ₹{product.price}
              </p>

              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`h-5 w-5 ${
                      n <= product.rating
                        ? "fill-[#0b5cad] text-[#0b5cad]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 text-gray-700">{product.description}</p>

              <p className="mt-4 text-gray-900">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <span className="font-semibold text-gray-900">Quantity</span>
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 text-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="mt-6 w-full rounded-lg bg-[#0b5cad] py-3 text-lg font-semibold text-white hover:bg-[#0a4f96] md:w-auto md:px-12"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={null}>
      <ProductDetailContent />
    </Suspense>
  );
}
