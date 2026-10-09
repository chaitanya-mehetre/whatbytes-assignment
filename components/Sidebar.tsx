"use client";

const categories = ["All", "Electronics", "Clothing", "Home"];

type SidebarProps = {
  category: string;
  setCategory: (value: string) => void;
  price: number;
  setPrice: (value: number) => void;
};

export default function Sidebar({
  category,
  setCategory,
  price,
  setPrice,
}: SidebarProps) {
  return (
    <aside className="w-full rounded-2xl bg-[#0b5cad] p-6 text-white md:w-64">
      <h2 className="mb-5 text-2xl font-semibold">Fliter</h2>
      <h3 className="mb-3 text-lg font-medium">Category</h3>
      <div className="space-y-3">
        {categories.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="category"
              checked={category === item}
              onChange={() => setCategory(item)}
              className="h-5 w-5 accent-white"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <h3 className="mb-3 mt-8 text-lg font-medium">Price</h3>
      <input
        type="range"
        min={0}
        max={1000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full accent-white"
      />
      <div className="mt-1 flex justify-between text-sm">
        <span>0</span>
        <span>{price}</span>
      </div>
    </aside>
  );
}
