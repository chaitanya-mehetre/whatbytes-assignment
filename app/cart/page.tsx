"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } =
    useCart();
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Header search={search} setSearch={setSearch} />

      <div className="mx-auto max-w-6xl w-full px-6 py-8 grow">
        <h1 className="mb-6 text-3xl font-bold text-[#0a2f66]">Your Cart</h1>

        {items.length === 0 ? (
          <div>
            <p className="text-lg text-gray-600 ">Your cart is empty</p>
            <Link
              href="/"
              className="mt-2 inline-block text-[#0b5cad] underline"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.title}
                    </h3>
                    <p className="font-semibold text-gray-900">
                      ₹{product.price}
                    </p>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-lg border border-gray-300">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          className="px-3 py-1 text-lg"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="px-3 py-1 text-lg"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-gray-900">
                    ₹{product.price * quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-[#0a2f66]">
                Price Summary
              </h2>
              <div className="flex justify-between text-gray-700">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="mt-2 flex justify-between text-lg font-semibold text-gray-900">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <button
                onClick={() => alert("Thank you! Your order has been placed.")}
                className="mt-6 w-full rounded-lg bg-[#0b5cad] py-3 text-lg font-semibold text-white hover:bg-[#0a4f96]"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
