"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Inbox,
  CheckCircle,
  TrendingUp,
  ClipboardList,
  Settings,
  Shield,
  FileCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const navigation = [
  { name: "Dashboard", href: "/officer", icon: LayoutDashboard },
  { name: "Claims Queue", href: "/officer/queue", icon: Inbox, badge: "12" },
  {
    name: "Maker-Checker",
    href: "/officer/maker-checker",
    icon: Shield,
    badge: "7",
    badgeVariant: "destructive" as const,
  },
  { name: "Approved Claims", href: "/officer/approved", icon: CheckCircle },
  { name: "My Reviews", href: "/officer/reviews", icon: ClipboardList },
  { name: "Analytics", href: "/officer/analytics", icon: TrendingUp },
  { name: "Audit Trail", href: "/officer/audit", icon: FileCheck },
  { name: "Settings", href: "/officer/settings", icon: Settings },
]

export function OfficerSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <Badge variant={item.badgeVariant || "secondary"} className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
