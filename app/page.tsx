"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(1000);
  return (
    <main>
      <Header />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row">
        <Sidebar
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </div>
    </main>
  );
}
