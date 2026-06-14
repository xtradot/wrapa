import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, CreditCard, AlertCircle, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { DashboardClient } from "./dashboard-client"

export const metadata: Metadata = {
  title: "Dashboard - WRAPA Insurance",
  description: "Manage your policies, claims, and payments",
}

export default function DashboardPage() {
  return <DashboardClient />
}
