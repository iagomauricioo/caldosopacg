import { Soup } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-4 bg-emerald-900 py-4 flex justify-around items-center">
      <h1 className="text-2xl font-bold text-amber-100">Caldos da Cynthia</h1>
      <Soup className="text-amber-100" />
    </header>
  );
}
