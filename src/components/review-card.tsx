import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export function ReviewCard({ id, name, rating, comment, avatar }: ReviewCardProps) {
  return (
    <Card className="bg-white border-0 shadow-sm h-full">
      <CardContent className="p-4 shadow-inner">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "fill-current"
                      : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600">&ldquo;{comment}&rdquo;</p>
      </CardContent>
    </Card>
  );
} 