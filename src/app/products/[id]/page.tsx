"use client";


import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // جلب بيانات المنتج عند أول تحميل
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>جارٍ التحميل...</p>;
  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="object-contain"
        loading="lazy"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            {product.price} EGP
          </p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
}
