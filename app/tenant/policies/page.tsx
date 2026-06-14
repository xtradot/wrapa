import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Search, Download, Filter, Eye, TrendingUp, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Policy Management - Tenant Dashboard",
  description: "Manage and monitor insurance policies",
}

export default function TenantPoliciesPage() {
  const policies = [
    {
      id: "POL-2024-001",
      customer: "Adewale Johnson",
      product: "Comprehensive Motor Insurance",
      premium: 125000,
      status: "active",
      startDate: "2024-01-15",
      endDate: "2025-01-14",
      agent: "John Doe",
    },
    {
      id: "POL-2024-002",
      customer: "Chioma Okafor",
      product: "Family Health Insurance",
      premium: 450000,
      status: "active",
      startDate: "2024-02-01",
      endDate: "2025-01-31",
      agent: "Jane Smith",
    },
    {
      id: "POL-2024-003",
      customer: "Ibrahim Musa",
      product: "Home Protection Plus",
      premium: 180000,
      status: "pending-renewal",
      startDate: "2023-12-10",
      endDate: "2024-12-09",
      agent: "Paul Adams",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Policy Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and manage all insurance policies</p>
        </div>
        <Button asChild>
          <Link href="/tenant/reports/policies">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,542</div>
            <p className="text-xs text-green-600">+245 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7,856</div>
            <p className="text-xs text-muted-foreground">92% of total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Renewal</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-orange-600">Expiring in 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Premium</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦68.5M</div>
            <p className="text-xs text-green-600">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search policies, customers..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Policies Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Policies</CardTitle>
          <CardDescription>Complete list of insurance policies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policies.map((policy) => (
              <div key={policy.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{policy.id}</span>
                    <Badge variant={policy.status === "active" ? "default" : "secondary"}>{policy.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Customer</p>
                      <p className="font-medium">{policy.customer}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Product</p>
                      <p className="font-medium">{policy.product}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Premium</p>
                      <p className="font-medium">₦{policy.premium.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Agent</p>
                      <p className="font-medium">{policy.agent}</p>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/tenant/policies/${policy.id}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
