"use client";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import { useCart } from "@/contexts/cart-context";
import { products } from "@/data/products";
import Navbar from "@/components/navbar";

export default function Cardapio() {
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

      <main className="flex-1 pb-24 md:pb-8">
        {/* Filtros */}
        <div className="flex gap-2 p-4 md:p-6 overflow-x-auto max-w-7xl mx-auto">
          <button className="bg-[#0B3B2C] text-amber-50 px-4 py-2 rounded-full whitespace-nowrap">
            Todos
          </button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap">
            Caldos
          </button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap">
            Acompanhamentos
          </button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap">
            Bebidas
          </button>
        </div>

        {/* Lista de Produtos */}
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

        {/* Total do Pedido - Visível apenas em mobile */}
        {totalItems > 0 && (
          <div className="fixed bottom-24 left-0 right-0 bg-white p-4 border-t border-gray-200 md:hidden">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Total do Pedido:</span>
              <span className="text-orange-500 font-bold">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <Link
              href="/carrinho"
              className="bg-orange-500 text-white py-3 rounded-full flex items-center justify-center gap-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Finalizar Pedido ({totalItems}{" "}
              {totalItems === 1 ? "item" : "itens"})
            </Link>
          </div>
        )}

        {/* Total do Pedido - Visível apenas em desktop */}
        {totalItems > 0 && (
          <div className="hidden md:block max-w-7xl mx-auto px-8 py-4 mt-8">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">
                Total do Pedido:{" "}
                <span className="text-orange-500">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </span>
              <Link
                href="/carrinho"
                className="bg-orange-500 text-white py-2 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Finalizar Pedido ({totalItems}{" "}
                {totalItems === 1 ? "item" : "itens"})
              </Link>
            </div>
          </div>
        )}
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

      {/* Bottom Navigation - Visível apenas em mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
