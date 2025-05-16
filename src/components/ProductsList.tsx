"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductsList({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">منتجاتنا</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
