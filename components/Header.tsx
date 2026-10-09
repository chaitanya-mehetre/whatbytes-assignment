import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  const { totalItems } = useCart();
  return (
    <header className="bg-[#0b5cad] px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="-my-4 h-20 w-20 object-contain"
          priority
        />

        <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-white/50 bg-[#0d63bb] px-4 py-3">
          <Search className="h-5 w-5 text-white" />

          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white placeholder-white outline-none"
          />
        </div>

        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-lg bg-[#0a3a73] px-5 py-3 font-semibold text-white"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
