import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "E-commerce Store",
  description: "متجر إلكتروني عصري بـ Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <CartProvider>
          <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              متجرنا
            </Link>
            <nav className="flex gap-4">
              <Link href="/products" className="hover:text-blue-500">المنتجات</Link>
              <Link href="/cart" className="hover:text-blue-500">السلة</Link>
              <Link href="/contact" className="hover:text-blue-500">تواصل معنا</Link>
            </nav>
          </header>

          <main className="container mx-auto p-6">{children}</main>

          <footer className="bg-gray-800 text-white py-6 text-center mt-12">
            <p>&copy; {new Date().getFullYear()} متجرنا. جميع الحقوق محفوظة.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
