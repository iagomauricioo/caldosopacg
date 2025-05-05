"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();

  return (
    <header className="bg-[#0B3B2C] text-amber-50">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h1 className="text-2xl font-bold">Caldos da Cynthia</h1>
        <div className="flex items-center gap-4">
          <Link href="/carrinho" className="relative">
            <ShoppingCart className="w-6 h-6 fill-amber-100" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="text-2xl">≡</button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Caldos da Cynthia
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`hover:text-amber-200 transition-colors ${
              pathname === "/" ? "text-amber-200" : ""
            }`}
          >
            Início
          </Link>
          <Link
            href="/cardapio"
            className={`hover:text-amber-200 transition-colors ${
              pathname === "/cardapio" ? "text-amber-200" : ""
            }`}
          >
            Cardápio
          </Link>
          <Link
            href="/sobre"
            className={`hover:text-amber-200 transition-colors ${
              pathname === "/sobre" ? "text-amber-200" : ""
            }`}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className={`hover:text-amber-200 transition-colors ${
              pathname === "/contato" ? "text-amber-200" : ""
            }`}
          >
            Contato
          </Link>
          <Link href="/carrinho" className="relative">
            <ShoppingCart className="w-6 h-6 fill-amber-100" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
