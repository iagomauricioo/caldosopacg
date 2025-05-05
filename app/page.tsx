"use client";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import { useCart } from "@/contexts/cart-context";
import { products } from "@/data/products";
import Navbar from "@/components/navbar";
import { Minus, Plus } from "lucide-react";

export default function Home() {
  const { items, addItem, updateQuantity, totalItems, totalPrice } = useCart();

  // Função para obter a quantidade de um item no carrinho
  const getItemQuantity = (id: string) => {
    const item = items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 pb-24 md:pb-0">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 mb-6">
          <Image
            src="/images/caldo-frango.png"
            alt="Caldo fumegante"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Sabor que aquece sua alma
            </h2>
            <p className="text-white md:text-xl">
              Caldos artesanais feitos com amor
            </p>
          </div>
        </div>

        {/* Nossos Caldos Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Nossos Caldos
          </h2>

          <div className="px-4 md:px-8 max-w-7xl mx-auto mb-40">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const quantity = getItemQuantity(product.id);

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 text-xl font-bold">
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </span>

                      {quantity > 0 ? (
                        <div className="flex items-center gap-2">
                          <button
                            className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() =>
                              updateQuantity(product.id, quantity - 1)
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-lg">{quantity}</span>
                          <button
                            className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() =>
                              updateQuantity(product.id, quantity + 1)
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                          onClick={() => addItem(product)}
                        >
                          Adicionar
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Por que escolher nossos caldos? */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-8 bg-amber-200 py-6 md:py-12 md:rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
            Por que escolher nossos caldos?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 md:flex-col md:text-center md:items-center">
              <div className="bg-green-600 rounded-full p-2 md:p-4 md:mb-3">
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 text-white"
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
                <h3 className="font-bold md:text-lg">Ingredientes Naturais</h3>
                <p className="text-sm md:text-base">
                  Produtos frescos e selecionados
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:flex-col md:text-center md:items-center">
              <div className="bg-green-600 rounded-full p-2 md:p-4 md:mb-3">
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 text-white"
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
                <h3 className="font-bold md:text-lg">Entrega Rápida</h3>
                <p className="text-sm md:text-base">
                  Seu caldo quentinho em minutos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:flex-col md:text-center md:items-center">
              <div className="bg-green-600 rounded-full p-2 md:p-4 md:mb-3">
                <svg
                  className="w-5 h-5 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold md:text-lg">Feito com Amor</h3>
                <p className="text-sm md:text-base">
                  Receitas caseiras especiais
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-8">
          <div className="bg-orange-500 rounded-lg p-6 md:p-12 text-center text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
              Peça agora mesmo!
            </h2>
            <p className="mb-4 md:mb-6 md:text-lg">
              Experimente nossos caldos artesanais
            </p>
            <button className="bg-white text-orange-500 font-bold py-2 px-6 md:py-3 md:px-8 rounded-full inline-flex items-center hover:bg-amber-100 transition-colors">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 mr-2"
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

      {/* Footer - Visível apenas em desktop */}
      <footer className="bg-[#0B3B2C] text-amber-50 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Caldos da Cynthia</h3>
            <p className="text-sm">Aquecendo corações desde 2020</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-200 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/cardapio"
                  className="hover:text-amber-200 transition-colors"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-amber-200 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-amber-200 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>Tel: (11) 99999-9999</li>
              <li>Email: contato@caldosdacynthia.com.br</li>
              <li>Rua dos Caldos, 123 - São Paulo</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-amber-50 hover:text-amber-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-50 hover:text-amber-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-50 hover:text-amber-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-8 mt-8 border-t border-amber-50/20 text-center text-sm">
          <p>© 2025 Caldos da Cynthia. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Mobile Footer - Visível apenas em mobile */}
      <footer className="bg-[#0B3B21] text-amber-50 py-4 pb-32 text-center text-sm md:hidden">
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

      {/* Bottom Navigation - Visível apenas em mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
