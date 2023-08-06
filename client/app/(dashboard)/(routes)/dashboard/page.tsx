'use client'

import { ArrowRight,
      LayoutDashboard, 
      ArrowBigDownDash, 
      ActivitySquare, 
      Users,  
      Wallet, 
      Settings } from "lucide-react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const tools = [
  {
    label: "Insights de Compras",
    icon: ArrowBigDownDash, 
    color: "text-violet-500",
    bgColor: "text-violet-500/100",
    href : "/compras",
  },
  {
    label: "Insights de Ventas",
    icon: ActivitySquare, 
    color: "text-pink-700",
    bgColor: "text-pink-700/100",
    href : "/ventas",
  },
  {
    label: "Insights de Clientes",
    icon: Users, 
    color: "text-orange-500",
    bgColor: "text-orange-500/100",
    href : "/clientes",
  },
  {
    label: "Insights Financieros",
    icon: Wallet, 
    color: "text-green-500",
    bgColor: "text-green-500/100",
    href : "/financieros",
  },
]


const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold
        text-center">
          Dashboard SuperPower Insights
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          La combinaciones de los mejores indicadores para el performance de tu negocio
        </p>
        <div className="px-4 md:px-20 lg:px:323 space-y-4">
          {tools.map((tool) => (
            <Card
            onClick={() => router.push(tool.href)}
            key={tool.href} 
            className="p-4 border-black/5 flex items-center justify-between hover:shodow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color )}/>
                </div>
                  <div className="font-semibold">
                    {tool.label}
                  </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>

  )
}

export default DashboardPage;