import type React from "react"
import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TenantProvider } from "@/lib/tenant-context"
import { BrandingProvider } from "@/lib/branding-context"
import { TenantSidebar } from "@/components/tenant-sidebar"

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandingProvider tenantId="axa-mansard">
      <TenantProvider>
        <div className="min-h-screen bg-background">
          <TenantSidebar />

          {/* Main Content Area */}
          <div className="md:pl-64">
            {/* Top Navigation */}
            <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-6">
                  <Link href="/tenant" className="flex items-center gap-2 md:hidden">
                    <Shield className="h-6 w-6 text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">AXA Mansard</span>
                      <span className="text-xs text-muted-foreground">Tenant Admin</span>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="relative" asChild>
                    <Link href="/tenant/notifications">
                      <Bell className="h-5 w-5" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        3
                      </Badge>
                    </Link>
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary">AM</AvatarFallback>
                        </Avatar>
                        <span className="hidden md:block text-sm">Admin User</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Tenant Admin</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/tenant/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/tenant/settings">Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/tenant/support">Support</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Sign Out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </TenantProvider>
    </BrandingProvider>
  )
}
