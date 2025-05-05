"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import { useCart } from "@/contexts/cart-context";
import { products } from "@/data/products";

export default function Home() {
  const { totalItems, addItem } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
      {/* Header */}
      <header className="bg-[#0B3B2C] text-amber-50 p-4 flex justify-between items-center">
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
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <div className="relative h-64 mb-6">
          <Image
            src="/images/caldo-frango.png"
            alt="Caldo fumegante"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white">
              Sabor que aquece sua alma
            </h2>
            <p className="text-white">Caldos artesanais feitos com amor</p>
          </div>
        </div>

        {/* Nossos Caldos Section */}
        <section className="px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Nossos Caldos</h2>

          {/* Caldo de Frango */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex gap-4">
              <Image
                src="/images/caldo-frango.png"
                alt="Caldo de Frango"
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold">Caldo de Frango</h3>
                <p className="text-sm text-gray-600">
                  Rico em proteínas e vegetais frescos
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-orange-500 font-bold">R$ 15,90</span>
                  <button
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                    onClick={() => addItem(products[0])}
                  >
                    + Pedir
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Caldo de Feijão */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex gap-4">
              <Image
                src="/images/caldo-feijao.png"
                alt="Caldo de Feijão"
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold">Caldo de Feijão</h3>
                <p className="text-sm text-gray-600">
                  Tradicional e reconfortante
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-orange-500 font-bold">R$ 14,90</span>
                  <button
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                    onClick={() => addItem(products[1])}
                  >
                    + Pedir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que escolher nossos caldos? */}
        <section className="px-4 mb-8 bg-amber-200 py-6">
          <h2 className="text-xl font-bold mb-4">
            Por que escolher nossos caldos?
          </h2>

          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-600 rounded-full p-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Ingredientes Naturais</h3>
              <p className="text-sm">Produtos frescos e selecionados</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-600 rounded-full p-2">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">Entrega Rápida</h3>
              <p className="text-sm">Seu caldo quentinho em minutos</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 mb-8">
          <div className="bg-orange-500 rounded-lg p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-2">Peça agora mesmo!</h2>
            <p className="mb-4">Experimente nossos caldos artesanais</p>
            <button className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Ligar agora
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Footer */}
      <footer className="bg-[#0B3B2C] text-amber-50 py-4 text-center text-sm">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="text-amber-50">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="text-amber-50">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>
        <p>© 2025 Caldos da Cynthia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
