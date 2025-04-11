import { Badge } from "@/components/ui/badge";

export function CategoryFilters() {
  return (
    <section className="px-4 mb-6 overflow-x-auto">
      <div className="flex gap-3 min-w-max pb-2">
        <Badge
          variant="outline"
          className="py-2 px-6 text-base rounded-full bg-[#0B3B2C] text-amber-50 hover:bg-[#0B3B2C]/90 hover:text-amber-50 cursor-pointer"
        >
          Todos
        </Badge>
        <Badge
          variant="outline"
          className="py-2 px-6 text-base rounded-full bg-gray-700 text-amber-50 hover:bg-[#0B3B2C] hover:text-amber-50 cursor-pointer"
        >
          Caldos
        </Badge>
        <Badge
          variant="outline"
          className="py-2 px-6 text-base rounded-full bg-gray-700 text-amber-50 hover:bg-[#0B3B2C] hover:text-amber-50 cursor-pointer"
        >
          Sopas
        </Badge>
        <Badge
          variant="outline"
          className="py-2 px-6 text-base rounded-full bg-gray-700 text-amber-50 hover:bg-[#0B3B2C] hover:text-amber-50 cursor-pointer"
        >
          Acompanhamentos
        </Badge>
      </div>
    </section>
  );
} 