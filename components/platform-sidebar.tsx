"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Building2,
  Users,
  Settings,
  BarChart3,
  FileText,
  Globe,
  Shield,
  Menu,
  X,
  AlertCircle,
} from "lucide-react"
import { usePlatform } from "@/lib/platform-context"

const navigationItems = [
  {
    label: "Dashboard",
    href: "/platform",
    icon: LayoutDashboard,
    permission: null,
  },
  {
    label: "Tenants",
    href: "/platform/tenants",
    icon: Building2,
    permission: "platform.tenants.view" as const,
    badge: "42",
  },
  {
    label: "Users",
    href: "/platform/users",
    icon: Users,
    permission: "platform.users.view" as const,
    badge: "22K",
  },
  {
    label: "Analytics",
    href: "/platform/analytics",
    icon: BarChart3,
    permission: "platform.analytics.view" as const,
  },
  {
    label: "Countries",
    href: "/platform/countries",
    icon: Globe,
    permission: "platform.config.view" as const,
  },
  {
    label: "Configuration",
    href: "/platform/config",
    icon: Settings,
    permission: "platform.config.view" as const,
  },
  {
    label: "Audit Logs",
    href: "/platform/audit",
    icon: FileText,
    permission: "platform.audit.view" as const,
  },
  {
    label: "Compliance",
    href: "/platform/compliance",
    icon: Shield,
    permission: "platform.config.view" as const,
  },
  {
    label: "Support",
    href: "/platform/support",
    icon: AlertCircle,
    permission: "platform.support.view" as const,
    badge: "12",
  },
]

export function PlatformSidebar() {
  const pathname = usePathname()
  const { hasPermission } = usePlatform()
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
              <span className="text-sm font-bold">WRAPA Platform</span>
              <span className="text-xs text-muted-foreground">System Admin</span>
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
