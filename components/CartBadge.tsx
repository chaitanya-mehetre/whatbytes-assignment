"use client";

import { useCart } from "@/context/CartContext";

export default function CartBadge() {
  const { totalItems } = useCart();

  if (totalItems <= 0) return null;

  return (
    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
      {totalItems}
    </span>
  );
}
