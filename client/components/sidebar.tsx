'use client'
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, ArrowBigDownDash, ActivitySquare, Users,  Wallet, Settings } from "lucide-react"
import { usePathname } from "next/navigation"

const montserrat = Montserrat({ 
    weight: "600", 
    subsets:["latin"]
});

const routes =[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Insights de Compras",
        icon: ArrowBigDownDash,
        href: "/compras",
        color: "text-violet-500",
    },
    {
        label: "Insights de Ventas",
        icon: ActivitySquare,
        href: "/ventas",
        color: "text-pink-700",
    },
    {
        label: "Insights de Clientes",
        icon: Users,
        href: "/clientes",
        color: "text-orange-500",
    },
    {
        label: "Insights Financieros",
        icon: Wallet,
        href: "/financieros",
        color: "text-green-500",
    },
    {
        label: "Ajustes",
        icon: Settings,
        href: "/configuracion",
    },
]


const Sidebar = () => {
const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 felx felx-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image
                    fill
                    alt="Logo"
                    src="/logo.png"
                    />
                </div>
                <h1 className={cn ("text-2xl font-bold", montserrat.className )}>
                Financer
                </h1>
            </Link>
            <div className="space-y-1">
                {routes.map((route) =>(
                    <Link
                     href={route.href}
                     key={route.href}
                     className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                     pathname=== route.href ? "text-white bg-white/10": "text-zinc-400")}
                    >
                        <div className="flex items-center felx-1">
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}

            </div>

        </div>
    </div>
  )
}

export default Sidebar;