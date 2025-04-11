"use client";
import Image from "next/image";
import BottomNav from "@/components/bottom-nav";
import Carousel from "@/components/carousel";
import { ProductCard } from "@/components/product-card";
import { ReviewCard } from "@/components/review-card";
import { CategoryFilters } from "@/components/category-filters";
import Header from "@/components/header";

// Dados de exemplo para os produtos
const products = [
  {
    id: 1,
    name: "Caldo de Abóbora",
    price: 15.9,
    image: "/assets/caldo1.png",
  },
  {
    id: 2,
    name: "Caldo de Feijão",
    price: 15.9,
    image: "/assets/caldo2.png",
  },
  {
    id: 3,
    name: "Caldo de Mandioca",
    price: 16.9,
    image: "/assets/caldo1.png",
  },
  {
    id: 4,
    name: "Caldo Verde",
    price: 17.9,
    image: "/assets/caldo2.png",
  },
  {
    id: 5,
    name: "Caldo de Ervilha",
    price: 15.9,
    image: "/assets/caldo1.png",
  },
  {
    id: 6,
    name: "Creme de Milho",
    price: 18.9,
    image: "/assets/caldo2.png",
  },
];

// Dados de exemplo para as avaliações
const reviews = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment:
      "Caldos deliciosos e quentinhos! Entrega rápida e atendimento excelente.",
    avatar: "/assets/pessoa.png",
  },
  {
    id: 2,
    name: "João Oliveira",
    rating: 5,
    comment:
      "O caldo de abóbora é simplesmente incrível! Vou pedir novamente com certeza.",
    avatar: "/assets/pessoa.png",
  },
  {
    id: 3,
    name: "Ana Santos",
    rating: 4,
    comment: "Muito saboroso e reconfortante. Perfeito para os dias frios!",
    avatar: "/assets/pessoa.png",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    rating: 5,
    comment: "Melhor caldo da cidade! Recomendo o de feijão com bacon.",
    avatar: "/assets/pessoa.png",
  },
];

export default function Home() {
  // Renderiza os produtos como cards para o carousel
  const productCards = products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));

  // Renderiza as avaliações como cards para o carousel
  const reviewCards = reviews.map((review) => (
    <ReviewCard key={review.id} {...review} />
  ));

  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
      <Header />
      <div className="px-4 mb-6">
        <div className="relative overflow-hidden rounded-xl shadow-inner">
          <Image
            src="/assets/caldo3.png"
            alt="Caldeirão de caldo fumegante"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-amber-100 font-bold text-2xl">
              Sabor que aquece o coração
            </p>
            <p className="text-amber-100 font-medium">
              Caldos artesanais, feitos com amor e carinho
            </p>
          </div>
        </div>
      </div>

      {/* Mais Pedidos Section com Carousel */}
      <section className="px-4 mb-8">
        <h2 className="text-xl font-bold text-emerald-900 mb-3">
          Mais Pedidos
        </h2>
        <Carousel items={productCards} interval={5000} />
      </section>

      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Category Filters */}
      <CategoryFilters />

      {/* Reviews Section com Carousel */}
      <section className="px-4 mb-8">
        <h2 className="text-xl font-bold text-emerald-900 mb-3">Avaliações</h2>
        <Carousel items={reviewCards} interval={5000} />
      </section>

      {/* Footer */}
      <footer className="mt-auto p-4 text-center text-sm text-emerald-900 mb-24">
        © 2025 Caldos da Cynthia. Todos os direitos reservados.
      </footer>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
