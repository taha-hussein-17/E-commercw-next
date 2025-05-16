"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">مرحبًا بك في متجرنا 🛍️</h1>
      <p className="text-lg text-gray-700 mb-8">تصفح أحدث المنتجات بأسعار مميزة</p>
      <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        مشاهدة المنتجات
      </Link>
    </main>
  );
}
