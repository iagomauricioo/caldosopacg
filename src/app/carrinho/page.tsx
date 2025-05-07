"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CarrinhoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Caldo de Mandioca",
      price: 25.90,
      image: "/assets/caldo1.png",
      quantity: 2
    },
    {
      id: 2,
      name: "Caldo de Galinha",
      price: 22.90,
      image: "/assets/caldo2.png",
      quantity: 1
    }
  ])

  const deliveryFee = 5.00

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const total = subtotal + deliveryFee

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-amber-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white p-4 flex items-center border-b">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-medium text-emerald-900">Carrinho</h1>
      </header>

      <div className="container max-w-md mx-auto pb-24">
        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
          <h2 className="font-medium mb-3 text-emerald-900">Seus Pedidos</h2>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Voltar para tela inicial
                </Button>
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border-b pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">500ml</p>
                  </div>
                  <div className="font-medium">R$ {item.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3">
                    <button 
                      className="h-8 w-8 flex items-center justify-center rounded-full border"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button 
                      className="h-8 w-8 flex items-center justify-center rounded-full border"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button 
                    className="text-red-500"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
              <h2 className="font-medium mb-3 text-emerald-900">Endereço de Entrega</h2>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="cep">CEP</Label>
                  <Input 
                    id="cep" 
                    placeholder="00000-000" 
                    className="mt-1"
                    maxLength={9}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, '')
                      if (value.length > 5) {
                        value = value.slice(0,5) + '-' + value.slice(5)
                      }
                      e.target.value = value
                    }}
                  />
                </div>

                <div>
                  <Label htmlFor="rua">Rua</Label>
                  <Input id="rua" className="mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="numero">Número</Label>
                    <Input id="numero" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="complemento">Complemento</Label>
                    <Input id="complemento" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input id="bairro" className="mt-1" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
              <h2 className="font-medium mb-3 text-emerald-900">Método de Pagamento</h2>

              <RadioGroup defaultValue="cartao">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="cartao" id="cartao" />
                  <Label htmlFor="cartao" className="flex items-center gap-2">
                    <span className="i-lucide-credit-card"></span>
                    Cartão de Crédito
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex items-center gap-2">
                    <span className="i-lucide-qr-code"></span>
                    PIX
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm mt-4 p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxa de entrega</span>
                <span className="font-medium">R$ {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg mt-3 pt-3 border-t">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Finalizar Pedido</Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
