"use client";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-green-600 font-semibold">{price} EGP</p>
      <button
        onClick={() => addToCart({ id, name, price })}
        className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded mt-2"
      >
        أضف إلى السلة
      </button>
    </div>
  );
}
