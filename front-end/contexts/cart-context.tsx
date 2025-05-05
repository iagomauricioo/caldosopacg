"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  useCallback,
} from "react";
import { useToast } from "@/hooks/use-toast";

export type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const { addToast } = useToast();

  // Carregar carrinho do localStorage quando o componente montar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error);
        localStorage.removeItem("cart");
      }
    }
    setIsInitialized(true);
  }, []);

  // Salvar carrinho no localStorage quando mudar
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = useCallback(
    (newItem: Omit<CartItem, "quantity">) => {
      setItems((currentItems) => {
        // Verificar se o item já existe no carrinho
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === newItem.id
        );

        if (existingItemIndex > -1) {
          // Se existir, aumentar a quantidade
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        } else {
          // Se não existir, adicionar como novo item
          return [...currentItems, { ...newItem, quantity: 1 }];
        }
      });

      // Mostrar toast fora do setItems
      const existingItem = items.find((item) => item.id === newItem.id);
      if (existingItem) {
        addToast(
          `Quantidade de ${newItem.name} aumentada para ${existingItem.quantity + 1}`,
          "success"
        );
      } else {
        addToast(`${newItem.name} adicionado ao carrinho`, "success");
      }
    },
    [addToast, items]
  );

  const removeItem = useCallback(
    (id: string) => {
      const itemToRemove = items.find((item) => item.id === id);
      if (itemToRemove) {
        addToast(`${itemToRemove.name} removido do carrinho`, "warning");
      }

      setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    },
    [addToast, items]
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      const itemToUpdate = items.find((item) => item.id === id);

      if (quantity <= 0) {
        if (itemToUpdate) {
          addToast(`${itemToUpdate.name} removido do carrinho`, "warning");
        }
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
        return;
      }

      if (itemToUpdate && itemToUpdate.quantity !== quantity) {
        addToast(
          `Quantidade de ${itemToUpdate.name} atualizada para ${quantity}`,
          "success"
        );
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    },
    [addToast, items]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    addToast("Carrinho esvaziado", "warning");
  }, [addToast]);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
