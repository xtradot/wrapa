import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Shield,
  TrendingUp,
  DollarSign,
  FileText,
  AlertTriangle,
  Activity,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Dashboard - WRAPA Admin",
  description: "Platform administration and monitoring",
}

export default function PlatformDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Platform Administration</h1>
        <p className="text-muted-foreground mt-1">Monitor and manage the WRAPA Insurance Platform</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tenants</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-green-600">+5 this month</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/platform/tenants">
                Manage Tenants <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22,570</div>
            <p className="text-xs text-green-600">+1,245 this month</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/platform/users">
                View Users <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
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

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.8B</div>
            <p className="text-xs text-green-600">+15% this quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/platform/tenants/new">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Onboard Tenant</h3>
                  <p className="text-sm text-muted-foreground">Add new insurance company</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/platform/config">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">System Config</h3>
                  <p className="text-sm text-muted-foreground">Platform settings & features</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/platform/analytics">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Platform Analytics</h3>
                  <p className="text-sm text-muted-foreground">View insights & reports</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Tenants */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Tenants</CardTitle>
            <CardDescription>By revenue this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "AXA Mansard Insurance", policies: 8542, revenue: 685000000, growth: 15 },
              { name: "Leadway Assurance", policies: 6234, revenue: 542000000, growth: 12 },
              { name: "AIICO Insurance", policies: 5421, revenue: 478000000, growth: 18 },
              { name: "Custodian Investment", policies: 4156, revenue: 389000000, growth: -3 },
            ].map((tenant, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{tenant.name}</span>
                    <Badge variant={tenant.growth > 0 ? "secondary" : "destructive"} className="text-xs">
                      {tenant.growth > 0 ? "+" : ""}
                      {tenant.growth}%
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {tenant.policies.toLocaleString()} policies • ₦{(tenant.revenue / 1000000).toFixed(1)}M revenue
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Platform Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                action: "Tenant Onboarded",
                title: "NEM Insurance joined platform",
                time: "2 hours ago",
                icon: Building2,
                color: "text-green-600",
              },
              {
                action: "System Update",
                title: "Platform upgraded to v2.5.0",
                time: "5 hours ago",
                icon: Activity,
                color: "text-blue-600",
              },
              {
                action: "User Milestone",
                title: "Reached 20,000 active users",
                time: "1 day ago",
                icon: Users,
                color: "text-purple-600",
              },
              {
                action: "Revenue Milestone",
                title: "₦2B total platform revenue",
                time: "2 days ago",
                icon: DollarSign,
                color: "text-green-600",
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

      {/* System Health & Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Platform status and uptime</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { service: "API Services", status: "operational", uptime: "99.98%" },
              { service: "Database", status: "operational", uptime: "99.95%" },
              { service: "Payment Gateway", status: "operational", uptime: "99.92%" },
              { service: "File Storage", status: "degraded", uptime: "98.50%" },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${service.status === "operational" ? "bg-green-500" : "bg-yellow-500"}`}
                  />
                  <span className="text-sm font-medium">{service.service}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{service.uptime} uptime</span>
                  <Badge variant={service.status === "operational" ? "default" : "outline"}>{service.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
            <CardDescription>Items requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 border rounded-lg bg-yellow-500/10">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">3 Tenant Applications</h4>
                  <p className="text-xs text-muted-foreground mt-1">New insurance companies awaiting approval</p>
                  <Button size="sm" variant="outline" className="mt-3 bg-transparent" asChild>
                    <Link href="/platform/tenants">Review Applications</Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg bg-orange-500/10">
                <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Compliance Report Due</h4>
                  <p className="text-xs text-muted-foreground mt-1">Q4 regulatory report submission deadline</p>
                  <Button size="sm" variant="outline" className="mt-3 bg-transparent" asChild>
                    <Link href="/platform/compliance">Generate Report</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Geographic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
          <CardDescription>Platform usage by country</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { country: "Nigeria", flag: "🇳🇬", users: 12500, policies: 45000, revenue: "₦1.2B" },
              { country: "Ghana", flag: "🇬🇭", users: 3200, policies: 8500, revenue: "₦450M" },
              { country: "Kenya", flag: "🇰🇪", users: 5600, policies: 15000, revenue: "₦820M" },
              { country: "South Africa", flag: "🇿🇦", users: 850, policies: 2100, revenue: "₦180M" },
              { country: "Rwanda", flag: "🇷🇼", users: 420, policies: 950, revenue: "₦95M" },
              { country: "Uganda", flag: "🇺🇬", users: 0, policies: 0, revenue: "₦0" },
            ].map((country, index) => (
              <div key={index} className="p-4 border rounded-lg text-center">
                <div className="text-3xl mb-2">{country.flag}</div>
                <h4 className="font-semibold text-sm mb-1">{country.country}</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{country.users.toLocaleString()} users</p>
                  <p>{country.policies.toLocaleString()} policies</p>
                  <p className="font-medium text-foreground">{country.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
