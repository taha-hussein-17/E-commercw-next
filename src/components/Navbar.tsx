// src/app/components/Navbar.tsx
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">MyShop</h1>
    <div className="space-x-6">
      <Link href="/" className="hover:text-blue-400 transition">الرئيسية</Link>
      <Link href="/products" className="hover:text-blue-400 transition">المنتجات</Link>
      <Link href="/cart" className="hover:text-blue-400 transition">السلة</Link>
    </div>
  </nav>
  );
}
