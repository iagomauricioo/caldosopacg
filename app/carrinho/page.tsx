"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import { useCart } from "@/contexts/cart-context";
import { useState } from "react";
import Navbar from "@/components/navbar";

export default function Carrinho() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleFinishOrder = () => {
    // Aqui você poderia implementar a lógica para enviar o pedido para um backend
    setOrderPlaced(true);
    // Após alguns segundos, redirecionar para a página inicial
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen bg-amber-100 items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Pedido Realizado!</h2>
          <p className="mb-6">
            Seu pedido foi recebido e está sendo preparado. Em breve entraremos
            em contato.
          </p>
          <p className="text-sm text-gray-500">
            Redirecionando para a página inicial...
          </p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="text-center">
            <svg
              className="w-20 h-20 text-gray-400 mx-auto mb-4"
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
            <h2 className="text-xl font-bold mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">
              Adicione alguns itens deliciosos para começar seu pedido
            </p>
            <Link
              href="/cardapio"
              className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block"
            >
              Ver Cardápio
            </Link>
          </div>
        </main>

        {/* Bottom Navigation - Visível apenas em mobile */}
        <div className="md:hidden">
          <BottomNav />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 pb-24 md:pb-8 max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Coluna da esquerda - Itens e Endereço */}
          <div className="md:col-span-2">
            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Seus Pedidos
              </h2>

              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center mb-4 pb-4 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-gray-500">500ml</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-500 font-bold">
                        R${" "}
                        {(item.price * item.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          className="text-red-500 ml-2"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Endereço de Entrega */}
            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Endereço de Entrega
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cep"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      CEP
                    </label>
                    <input
                      type="text"
                      id="cep"
                      placeholder="00000-000"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bairro"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bairro
                    </label>
                    <input
                      type="text"
                      id="bairro"
                      placeholder="Seu bairro"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="rua"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Rua
                    </label>
                    <input
                      type="text"
                      id="rua"
                      placeholder="Nome da rua"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="numero"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Número
                    </label>
                    <input
                      type="text"
                      id="numero"
                      placeholder="123"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="complemento"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Complemento
                    </label>
                    <input
                      type="text"
                      id="complemento"
                      placeholder="Apto, bloco, etc."
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Coluna da direita - Pagamento e Resumo */}
          <div className="md:col-span-1">
            {/* Método de Pagamento */}
            <section className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Método de Pagamento
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <div className="space-y-4">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                    <input
                      type="radio"
                      name="payment"
                      className="mr-3"
                      defaultChecked
                    />
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Cartão de Crédito
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                    <input type="radio" name="payment" className="mr-3" />
                    <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" width={20} height={20} className="mr-2"/>
                    PIX
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg">
                    <input type="radio" name="payment" className="mr-3" />
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Dinheiro
                  </label>
                </div>
              </div>
            </section>

            {/* Resumo */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Resumo do Pedido
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Taxa de entrega</span>
                  <span>R$ 5,00</span>
                </div>
                <div className="flex justify-between text-xl font-bold border-t border-gray-200 pt-4 mt-4">
                  <span>Total</span>
                  <span>
                    R$ {(totalPrice + 5).toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <button
                  className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-bold hover:bg-orange-600 transition-colors"
                  onClick={handleFinishOrder}
                >
                  Finalizar Pedido
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Bottom Navigation - Visível apenas em mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
