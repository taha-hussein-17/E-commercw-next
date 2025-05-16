"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">سلة المشتريات 🛒</h1>

      {cart.length === 0 ? (
        <p>السلة فاضية.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.price} EGP</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    className="w-16 border rounded text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <p className="text-xl font-bold">
              المجموع: {total.toFixed(2)} EGP
            </p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              تفريغ السلة
            </button>
          </div>
        </>
      )}
    </div>
  );
}
