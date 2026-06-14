"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  UserPlus,
  FileText,
  Wallet,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
  BarChart3,
  Target,
  LineChart,
  BookOpen,
  Award,
  ShoppingBag,
  FolderOpen,
} from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/agent",
    color: "text-sky-500",
  },
  {
    label: "New Sale",
    icon: UserPlus,
    href: "/agent/new-sale",
    color: "text-violet-500",
  },
  {
    label: "Lead Management",
    icon: Target,
    href: "/agent/leads",
    color: "text-red-500",
  },
  {
    label: "My Customers",
    icon: Users,
    href: "/agent/customers",
    color: "text-pink-700",
  },
  {
    label: "Sales History",
    icon: FileText,
    href: "/agent/sales",
    color: "text-orange-700",
  },
  {
    label: "Commission & Wallet",
    icon: Wallet,
    href: "/agent/wallet",
    color: "text-emerald-500",
  },
  {
    label: "Performance",
    icon: TrendingUp,
    href: "/agent/performance",
    color: "text-green-700",
  },
  {
    label: "Analytics",
    icon: LineChart,
    href: "/agent/analytics",
    color: "text-indigo-600",
  },
  {
    label: "Product Catalog",
    icon: ShoppingBag,
    href: "/agent/catalog",
    color: "text-cyan-600",
  },
  {
    label: "Documents",
    icon: FolderOpen,
    href: "/agent/documents",
    color: "text-amber-600",
  },
  {
    label: "Reports",
    icon: BarChart3,
    href: "/agent/reports",
    color: "text-blue-700",
  },
  {
    label: "Training & Resources",
    icon: BookOpen,
    href: "/agent/training",
    color: "text-purple-600",
  },
  {
    label: "Achievements",
    icon: Award,
    href: "/agent/achievements",
    color: "text-yellow-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/agent/settings",
  },
  {
    label: "Help & Support",
    icon: HelpCircle,
    href: "/agent/support",
  },
]

export function AgentSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-muted/30 text-foreground border-r">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-muted rounded-lg transition",
                pathname === route.href ? "bg-muted" : "transparent",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
