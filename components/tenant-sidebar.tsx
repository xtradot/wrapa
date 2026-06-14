"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Users,
  BarChart3,
  DollarSign,
  FileText,
  Settings,
  Shield,
  TrendingUp,
  UserCog,
  FileCheck,
  Menu,
  X,
  Palette,
} from "lucide-react"
import { useTenant } from "@/lib/tenant-context"

const navigationItems = [
  {
    label: "Overview",
    href: "/tenant",
    icon: TrendingUp,
    permission: null,
  },
  {
    label: "Products",
    href: "/tenant/products",
    icon: Package,
    permission: "products.view" as const,
    badge: "24",
  },
  {
    label: "Agents",
    href: "/tenant/agents",
    icon: Users,
    permission: "agents.view" as const,
    badge: "156",
  },
  {
    label: "Policies",
    href: "/tenant/policies",
    icon: FileText,
    permission: "policies.view" as const,
  },
  {
    label: "Claims",
    href: "/tenant/claims",
    icon: Shield,
    permission: "claims.view" as const,
    badge: "8",
  },
  {
    label: "Finance",
    href: "/tenant/finance",
    icon: DollarSign,
    permission: "finance.view" as const,
  },
  {
    label: "Analytics",
    href: "/tenant/analytics",
    icon: BarChart3,
    permission: "analytics.view" as const,
  },
  {
    label: "Compliance",
    href: "/tenant/compliance",
    icon: FileCheck,
    permission: "compliance.view" as const,
  },
  {
    label: "Team",
    href: "/tenant/team",
    icon: UserCog,
    permission: "users.view" as const,
  },
  {
    label: "Branding",
    href: "/tenant/branding",
    icon: Palette,
    permission: "settings.view" as const,
  },
  {
    label: "Settings",
    href: "/tenant/settings",
    icon: Settings,
    permission: "settings.view" as const,
  },
]

export function TenantSidebar() {
  const pathname = usePathname()
  const { hasPermission } = useTenant()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const filteredItems = navigationItems.filter((item) => !item.permission || hasPermission(item.permission))

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="mb-4 flex items-center gap-2 px-2">
            <Shield className="h-6 w-6 text-primary" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Tenant Admin</span>
              <span className="text-xs text-muted-foreground">Insurance Portal</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {filteredItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge variant={isActive ? "secondary" : "outline"} className="ml-auto text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
