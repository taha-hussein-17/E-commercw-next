import { CartProvider } from "@/context/CartContext";
import Link from "next/link";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <CartProvider>
          <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <Link href="/">الرئيسية</Link>
            <Link href="/products" className="font-bold">
              المنتجات
            </Link>
            <Link href="/cart" className="font-bold">
              السلة
            </Link>
          </nav>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
