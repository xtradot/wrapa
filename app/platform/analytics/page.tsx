import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Download, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Analytics - WRAPA Admin",
  description: "Platform analytics and insights",
}

export default function PlatformAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Platform Analytics</h1>
          <p className="text-muted-foreground mt-1">Comprehensive insights across all tenants</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦2.8B</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +15.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22,570</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <Users className="h-3 w-3" /> +1,245 new this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">71,550</div>
            <p className="text-xs text-green-600">+8.5% growth rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Policy Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦39,200</div>
            <p className="text-xs text-green-600">+3.2% increase</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="policies">Policy Analytics</TabsTrigger>
          <TabsTrigger value="tenants">Tenant Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Revenue by product type across all tenants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { product: "Motor Insurance", revenue: 1200000000, percentage: 43, growth: 15 },
                { product: "Health Insurance", revenue: 850000000, percentage: 30, growth: 22 },
                { product: "Property Insurance", revenue: 520000000, percentage: 19, growth: 8 },
                { product: "Life Insurance", revenue: 230000000, percentage: 8, growth: -3 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.product}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">₦{(item.revenue / 1000000).toFixed(0)}M</span>
                      <Badge variant={item.growth > 0 ? "secondary" : "destructive"}>
                        {item.growth > 0 ? "+" : ""}
                        {item.growth}%
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground w-12">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
              <CardDescription>User roles across the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { role: "Policy Holders", count: 18450, percentage: 82 },
                { role: "Agents", count: 3200, percentage: 14 },
                { role: "Claims Officers", count: 650, percentage: 3 },
                { role: "Administrators", count: 270, percentage: 1 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.role}</span>
                    <span className="text-sm">{item.count.toLocaleString()} users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground w-12">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Policy Status Distribution</CardTitle>
              <CardDescription>Active vs expired policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { status: "Active", count: 65230, percentage: 91, color: "bg-green-600" },
                { status: "Pending Renewal", count: 4120, percentage: 6, color: "bg-yellow-600" },
                { status: "Expired", count: 1850, percentage: 3, color: "bg-red-600" },
                { status: "Cancelled", count: 350, percentage: 0.5, color: "bg-gray-600" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.status}</span>
                    <span className="text-sm">{item.count.toLocaleString()} policies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground w-12">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tenants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Tenants</CardTitle>
              <CardDescription>By revenue this quarter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "AXA Mansard Insurance", revenue: 685000000, policies: 8542, growth: 15 },
                { name: "Leadway Assurance", revenue: 542000000, policies: 6234, growth: 12 },
                { name: "AIICO Insurance", revenue: 478000000, policies: 5421, growth: 18 },
                { name: "Custodian Investment", revenue: 389000000, policies: 4156, growth: -3 },
                { name: "NEM Insurance", revenue: 312000000, policies: 3890, growth: 8 },
              ].map((tenant, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{tenant.name}</span>
                      <Badge variant={tenant.growth > 0 ? "secondary" : "destructive"}>
                        {tenant.growth > 0 ? "+" : ""}
                        {tenant.growth}%
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {tenant.policies.toLocaleString()} policies • ₦{(tenant.revenue / 1000000).toFixed(0)}M revenue
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
