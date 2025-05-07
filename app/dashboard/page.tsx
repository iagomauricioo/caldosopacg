"use client";

import type React from "react";
import { BarChart, Settings, Users, Home, Plus, Eye } from "lucide-react";
import Link from "next/link";

// Componente para o Sidebar
function Sidebar() {
  return (
    <div className="h-screen w-64 bg-green-900 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Caldos da Cynthia</h1>
        <p className="text-sm text-green-300">Painel Administrativo</p>
      </div>
      <nav className="mt-8">
        <SidebarLink
          href="/dashboard"
          icon={<Home size={20} />}
          text="Dashboard"
          active
        />
        <SidebarLink
          href="/caldos"
          icon={<BarChart size={20} />}
          text="Caldos"
        />
        <SidebarLink
          href="/clientes"
          icon={<Users size={20} />}
          text="Clientes"
        />
        <SidebarLink
          href="/configuracoes"
          icon={<Settings size={20} />}
          text="Configurações"
        />
      </nav>
    </div>
  );
}

// Componente para os links do Sidebar
function SidebarLink({
  href,
  icon,
  text,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 ${
        active ? "bg-green-800" : "hover:bg-green-800"
      }`}
    >
      <span className="mr-3 text-green-300">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

// Componente para os cards de estatísticas
function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <p className="mb-2 text-center text-sm text-gray-500">{title}</p>
      <p className="text-center text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

// Componente para o gráfico de vendas por hora
function SalesByHourChart() {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-medium">Vendas por Hora</h3>
      <div className="h-64 w-full">
        {/* Aqui seria implementado o gráfico real com uma biblioteca como Chart.js ou Recharts */}
        <div className="relative h-full w-full bg-blue-50">
          <div className="absolute bottom-0 left-0 h-full w-full">
            {/* Simulação do gráfico */}
            <div className="flex h-full items-end justify-between">
              {[20, 40, 35, 50, 45, 60, 70, 90, 125, 150, 140, 130].map(
                (value, index) => (
                  <div
                    key={index}
                    className="mx-1 w-6 bg-blue-400"
                    style={{ height: `${value / 1.5}%` }}
                    title={`${value} vendas`}
                  />
                )
              )}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 text-xs text-gray-500">
            <div className="flex justify-between">
              <span>12am</span>
              <span>4am</span>
              <span>8am</span>
              <span>12pm</span>
              <span>4pm</span>
              <span>8pm</span>
              <span>10pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Componente para o gráfico de vendas por tipo de caldo
function SalesByTypeChart() {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-medium">Vendas por Caldo</h3>
      <div className="flex h-64 items-center justify-center">
        {/* Aqui seria implementado o gráfico real com uma biblioteca como Chart.js ou Recharts */}
        <div className="relative h-48 w-48 rounded-full border-8 border-transparent bg-white">
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div
              className="absolute h-1/2 w-1/2 bg-blue-500"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
            >
              <span className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                25.5%
              </span>
            </div>
            <div
              className="absolute h-1/2 w-1/2 bg-green-500"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                top: "50%",
              }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                32.5%
              </span>
            </div>
            <div
              className="absolute h-1/2 w-1/2 bg-yellow-500"
              style={{
                clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                left: "50%",
              }}
            >
              <span className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                22.8%
              </span>
            </div>
            <div
              className="absolute h-1/2 w-1/2 bg-red-500"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                left: "50%",
                top: "50%",
              }}
            >
              <span className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                9.5%
              </span>
            </div>
            <div
              className="absolute h-1/4 w-1/4 bg-purple-500"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                left: "75%",
                top: "75%",
              }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
                8.7%
              </span>
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full bg-white"
            style={{ width: "50%", height: "50%", left: "25%", top: "25%" }}
          ></div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-xs">Frango</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-xs">Feijão</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Mandioca</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Legumes</span>
        </div>
        <div className="flex items-center">
          <div className="mr-1 h-3 w-3 rounded-full bg-purple-500"></div>
          <span className="text-xs">Outros</span>
        </div>
      </div>
    </div>
  );
}

// Componente para o gerenciamento de caldos
function BrothManagement() {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-medium">Gestão de Caldos</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-md border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-medium">Caldo de Frango</h4>
            <div className="h-6 w-12 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              value="25"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-500">un.</span>
          </div>
        </div>
        <div className="rounded-md border border-gray-200 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-medium">Caldo de Feijão</h4>
            <div className="h-6 w-12 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              value="18"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-500">un.</span>
          </div>
        </div>
      </div>
      <button className="mt-4 flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:bg-gray-50">
        <Plus size={24} className="text-gray-700" />
      </button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-amber-200">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Visão geral das vendas</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center rounded-full bg-green-600 px-4 py-2 text-white">
              <Eye className="mr-2 h-4 w-4" />
              Vendas Ativas
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white">
              <div className="h-full w-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Últimas 24h" value="R$ 1.250,00" />
          <StatCard title="Últimos 7 dias" value="R$ 8.430,00" />
          <StatCard title="Últimos 30 dias" value="R$ 32.150,00" />
          <StatCard title="Este ano" value="R$ 245.800,00" />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <SalesByHourChart />
          <SalesByTypeChart />
        </div>

        <div className="grid grid-cols-1">
          <BrothManagement />
        </div>
      </div>
    </div>
  );
}
