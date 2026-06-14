import type React from "react"
import type { Metadata } from "next"
import { AgentSidebar } from "@/components/agent-sidebar"
import { AgentHeader } from "@/components/agent-header"

export const metadata: Metadata = {
  title: "Agent Dashboard - WRAPA Insurance",
  description: "Agent sales portal and commission management",
}

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AgentHeader />
      <div className="flex">
        <AgentSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
