import { TenantDashboardClient } from "./tenant-dashboard-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tenant Dashboard - WRAPA Insurance",
  description: "Manage your insurance products and operations",
}

export default function TenantDashboardPage() {
  return <TenantDashboardClient />
}
