import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-white p-4 shadow-sm border border-gray-100">
      <Link href={`/product/${product.id}`}>
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain "
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <h3 className="mt-4 text-base font-semibold text-gray-900 line-clamp-2">
            {product.title}
          </h3>
        </div>
      </Link>

      <div className="mt-2">
        <p className="text-xl font-black text-gray-900">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full rounded-lg bg-[#0b5cad] py-2.5 font-semibold text-white transition-colors hover:bg-[#0a4f96]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
