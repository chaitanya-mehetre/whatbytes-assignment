import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
  wide?: boolean;
};

export default function ProductCard({
  product,
  wide = false,
}: ProductCardProps) {
  const { addToCart } = useCart();

  if (wide) {
    return (
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:col-span-2 sm:flex-row">
        <Link
          href={`/product/${product.id}`}
          className="flex items-center justify-center sm:w-1/2"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={240}
            height={280}
            className="h-64 w-full object-contain rounded-lg"
          />
        </Link>

        <div className="flex flex-1 flex-col justify-center">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-2xl font-bold text-[#0a2f66]">
              {product.title}
            </h3>
          </Link>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            ${product.price}
          </p>

          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={`h-4 w-4 ${
                  n <= product.rating
                    ? "fill-[#0b5cad] text-[#0b5cad]"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-gray-700">{product.description}</p>
          <p className="mt-3 text-sm text-gray-900">Category</p>
          <p className="text-sm text-gray-700">{product.category}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 rounded-lg bg-[#0b5cad] py-2.5 text-lg font-semibold text-white hover:bg-[#0a4f96]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

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
