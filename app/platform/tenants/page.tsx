import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2, Plus, Search, Eye, UserCheck, TrendingUp, DollarSign, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tenant Management - Platform Admin",
  description: "Manage insurance company tenants",
}

export default function PlatformTenantsPage() {
  const tenants = [
    {
      id: "TN-001",
      name: "AXA Mansard Insurance",
      licenseNumber: "NAICOM-2024-001",
      status: "active",
      users: 284,
      policies: 8542,
      revenue: 685000000,
      joinedDate: "Jan 2024",
      country: "Nigeria",
    },
    {
      id: "TN-002",
      name: "Leadway Assurance",
      licenseNumber: "NAICOM-2024-015",
      status: "active",
      users: 198,
      policies: 6234,
      revenue: 542000000,
      joinedDate: "Feb 2024",
      country: "Nigeria",
    },
    {
      id: "TN-003",
      name: "AIICO Insurance",
      licenseNumber: "NAICOM-2024-032",
      status: "active",
      users: 156,
      policies: 5421,
      revenue: 478000000,
      joinedDate: "Mar 2024",
      country: "Nigeria",
    },
    {
      id: "TN-004",
      name: "Custodian Investment",
      licenseNumber: "NAICOM-2024-048",
      status: "suspended",
      users: 142,
      policies: 4156,
      revenue: 389000000,
      joinedDate: "Apr 2024",
      country: "Nigeria",
    },
    {
      id: "TN-005",
      name: "NEM Insurance",
      licenseNumber: "NAICOM-2024-056",
      status: "pending",
      users: 0,
      policies: 0,
      revenue: 0,
      joinedDate: "Dec 2024",
      country: "Nigeria",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground mt-1">Manage insurance company tenants on the platform</p>
        </div>
        <Button asChild>
          <Link href="/platform/tenants/new">
            <Plus className="mr-2 h-4 w-4" />
            Onboard Tenant
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-green-600">+5 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">39</div>
            <p className="text-xs text-muted-foreground">92.9% active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.8B</div>
            <p className="text-xs text-green-600">+15% growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">71,550</div>
            <p className="text-xs text-green-600">+8.5% growth</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tenants by name or license number..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Status
          </Button>
          <Button variant="outline" size="sm">
            Active
          </Button>
          <Button variant="outline" size="sm">
            Pending
          </Button>
          <Button variant="outline" size="sm">
            Suspended
          </Button>
        </div>
      </div>

      {/* Tenants List */}
      <Card>
        <CardHeader>
          <CardTitle>Insurance Companies</CardTitle>
          <CardDescription>All registered tenants on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tenants.map((tenant) => (
              <div
                key={tenant.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {tenant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{tenant.name}</h4>
                      <Badge
                        variant={
                          tenant.status === "active"
                            ? "default"
                            : tenant.status === "pending"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {tenant.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {tenant.licenseNumber} • {tenant.country}
                    </p>
                    <p className="text-xs text-muted-foreground">Joined {tenant.joinedDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
                  <div>
                    <p className="text-xs text-muted-foreground">Users</p>
                    <p className="text-sm font-semibold">{tenant.users.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Policies</p>
                    <p className="text-sm font-semibold">{tenant.policies.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-sm font-semibold text-green-600">
                      {tenant.revenue > 0 ? `₦${(tenant.revenue / 1000000).toFixed(1)}M` : "₦0"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/platform/tenants/${tenant.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  {tenant.status !== "active" && (
                    <Button size="sm" variant="outline">
                      <UserCheck className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
