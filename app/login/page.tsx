"use client";

import type React from "react";

import { useState } from "react";
import { CircleUserRound, Eye, EyeOff, Key, LogIn, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-200">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Caldos da Cynthia
          </h1>
          <p className="text-gray-600">Acesso Administrativo</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="user"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Usuário
            </label>
            <div className="relative">
              <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 pl-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <CircleUserRound />
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 pl-10 pr-10 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Key />
              </span>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-green-900 py-2 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
