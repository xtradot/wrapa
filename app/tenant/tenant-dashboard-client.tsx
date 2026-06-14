"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Users,
  TrendingUp,
  DollarSign,
  FileText,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export function TenantDashboardClient() {
  const { user } = useAuth()

  const companyName = user?.companyName || "Your Organization"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tenant Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to {companyName}. Manage your products, agents, and operations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">6 product categories</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/tenant/products">
                Manage Products <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600">+12 this month</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/tenant/agents">
                View Agents <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦68.5M</div>
            <p className="text-xs text-green-600">+15% from last month</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/tenant/analytics">
                View Analytics <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,542</div>
            <p className="text-xs text-muted-foreground">245 new this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/tenant/products/new">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Create Product</h3>
                  <p className="text-sm text-muted-foreground">Add new insurance product</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/tenant/agents/invite">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Invite Agent</h3>
                  <p className="text-sm text-muted-foreground">Onboard new sales agent</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/tenant/analytics">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">View Reports</h3>
                  <p className="text-sm text-muted-foreground">Sales & performance data</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Best selling products this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Comprehensive Motor Insurance", sales: 1234, revenue: 45600000, growth: 12 },
              { name: "Family Health Insurance", sales: 856, revenue: 38400000, growth: 8 },
              { name: "Home Protection Plus", sales: 642, revenue: 28900000, growth: -3 },
              { name: "Travel Insurance Pro", sales: 521, revenue: 15200000, growth: 22 },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{product.name}</span>
                    <Badge variant={product.growth > 0 ? "secondary" : "destructive"} className="text-xs">
                      {product.growth > 0 ? "+" : ""}
                      {product.growth}%
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {product.sales} policies • ₦{(product.revenue / 1000000).toFixed(1)}M revenue
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                action: "Product Updated",
                title: "Motor Insurance Premium Adjusted",
                time: "10 mins ago",
                icon: Package,
                color: "text-blue-600",
              },
              {
                action: "Agent Onboarded",
                title: "John Doe joined as Gold Agent",
                time: "1 hour ago",
                icon: UserCheck,
                color: "text-green-600",
              },
              {
                action: "Policy Activated",
                title: "245 new policies activated",
                time: "2 hours ago",
                icon: CheckCircle2,
                color: "text-green-600",
              },
              {
                action: "Claim Processed",
                title: "₦2.4M in claims paid out",
                time: "3 hours ago",
                icon: DollarSign,
                color: "text-purple-600",
              },
            ].map((activity, index) => {
              const Icon = activity.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Actions</CardTitle>
          <CardDescription>Items requiring your attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3 p-4 border rounded-lg bg-yellow-500/10">
              <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">8 Product Reviews</h4>
                <p className="text-xs text-muted-foreground mt-1">Annual product compliance review due</p>
                <Button size="sm" variant="outline" className="mt-3 bg-transparent" asChild>
                  <Link href="/tenant/products">Review Now</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg bg-orange-500/10">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">5 Agents Pending Approval</h4>
                <p className="text-xs text-muted-foreground mt-1">New agent applications waiting</p>
                <Button size="sm" variant="outline" className="mt-3 bg-transparent" asChild>
                  <Link href="/tenant/agents">Approve Agents</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg bg-blue-500/10">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Monthly Report Ready</h4>
                <p className="text-xs text-muted-foreground mt-1">December performance report available</p>
                <Button size="sm" variant="outline" className="mt-3 bg-transparent" asChild>
                  <Link href="/tenant/analytics">View Report</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
