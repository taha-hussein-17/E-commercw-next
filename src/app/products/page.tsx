"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // جلب التصنيفات
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // جلب المنتجات حسب التصنيف المحدد
  useEffect(() => {
    const url =
      selectedCategory === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">المنتجات</h1>

      {/* فلتر التصنيفات */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "all" ? "bg-blue-600 text-black" : "bg-black-200"
          }`}
        >
          الكل
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* عرض المنتجات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border p-4 rounded shadow-md flex flex-col hover:shadow-xl transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain mb-4"
              loading="lazy"
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-green-600 font-semibold">{product.price} EGP</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
