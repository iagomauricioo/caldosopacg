import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
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
      <CardContent className="p-3">
        <h3 className="font-medium">{name}</h3>
        <p className="text-amber-600 font-bold mt-1">
          R$ {price.toFixed(2).replace(".", ",")}
        </p>
      </CardContent>
    </Card>
  );
} 