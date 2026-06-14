import type React from "react"
import { PlatformProvider } from "@/lib/platform-context"
import { PlatformSidebar } from "@/components/platform-sidebar"
import { PlatformHeader } from "@/components/platform-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Admin - WRAPA Insurance",
  description: "Platform administration and management",
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlatformProvider>
      <div className="flex min-h-screen">
        <PlatformSidebar />
        <div className="flex-1 md:ml-64">
          <PlatformHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </PlatformProvider>
  )
}
