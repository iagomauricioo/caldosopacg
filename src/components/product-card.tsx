import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card className="bg-white border-0 shadow-sm overflow-hidden h-full">
      <div className="relative min-w-64 min-h-64 mx-auto mt-3 rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-3 flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl text-emerald-700">{name}</h3>
          <p className="text-amber-600 font-bold mt-1">
            R$ {price.toFixed(2).replace(".", ",")}
          </p>
        </div>
        <button className="w-full p-2 bg-amber-600 rounded-lg text-white hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
          <Plus className="w-5 h-5" />
          <span className="text-sm font-medium">Pedir</span>
        </button>
      </CardContent>
    </Card>
  );
}
