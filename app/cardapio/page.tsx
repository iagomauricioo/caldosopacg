"use client"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BottomNav from "@/components/bottom-nav"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/data/products"

export default function Cardapio() {
  const { items, addItem, updateQuantity, totalItems, totalPrice } = useCart()

  // Função para obter a quantidade de um item no carrinho
  const getItemQuantity = (id: string) => {
    const item = items.find((item) => item.id === id)
    return item ? item.quantity : 0
  }

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
          <button className="text-2xl">≡</button>
        </div>
      </header>

      <main className="flex-1 pb-24">
        {/* Filtros */}
        <div className="flex gap-2 p-4 overflow-x-auto">
          <button className="bg-[#0B3B2C] text-amber-50 px-4 py-2 rounded-full whitespace-nowrap">Todos</button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap">Caldos</button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-full whitespace-nowrap">
            Acompanhamentos
          </button>
        </div>

        {/* Lista de Produtos */}
        <div className="px-4 space-y-4">
          {products.map((product) => {
            const quantity = getItemQuantity(product.id)

            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
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
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg">{quantity}</span>
                      <button
                        className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded-full"
                      onClick={() => addItem(product)}
                    >
                      Adicionar
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Total do Pedido */}
        {totalItems > 0 && (
          <div className="fixed bottom-24 left-0 right-0 bg-white p-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Total do Pedido:</span>
              <span className="text-orange-500 font-bold">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
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
              Finalizar Pedido ({totalItems} {totalItems === 1 ? "item" : "itens"})
            </Link>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
