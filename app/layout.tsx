import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { ToastContainer } from "@/components/ui/toast-container";
import { ToastProvider } from "@/hooks/use-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caldos da Cynthia",
  description: "Caldos artesanais feitos com amor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ToastProvider>
          <CartProvider>
            {children}
            <ToastContainer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
