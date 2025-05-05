"use client";

import type React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import { createContext, useContext } from "react";

type ToastVariant = "default" | "success" | "destructive" | "warning";

type Toast = {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (
    message: string,
    variant?: ToastVariant,
    duration?: number
  ) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutsRef = useRef<Record<string, NodeJS.Timeout>>({});

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

    // Limpar o timeout se existir
    if (timeoutsRef.current[id]) {
      clearTimeout(timeoutsRef.current[id]);
      delete timeoutsRef.current[id];
    }
  }, []);

  const addToast = useCallback(
    (message: string, variant: ToastVariant = "default", duration = 3000) => {
      const id = Math.random().toString(36).substring(2, 9);

      setToasts((prev) => [...prev, { id, message, variant, duration }]);

      // Configurar o timeout para remover o toast
      timeoutsRef.current[id] = setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  // Limpar todos os timeouts quando o componente for desmontado
  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
