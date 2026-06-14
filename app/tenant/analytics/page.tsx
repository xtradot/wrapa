import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, DollarSign, FileText, Users, Download, Calendar, BarChart3 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Analytics & Reports - Tenant Dashboard",
  description: "View detailed analytics and performance reports",
}

export default function TenantAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
          <p className="text-muted-foreground mt-1">Comprehensive insights into your business performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦68.5M</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">+15.2% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,542</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">+245 this week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-green-600">+12 this month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg Policy Value</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦128K</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <TrendingDown className="h-3 w-3 text-red-600" />
                  <span className="text-red-600">-2.1% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between gap-2">
                {[45, 52, 48, 61, 58, 72, 68, 75, 82, 78, 85, 92].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-primary rounded-t" style={{ height: `${value}%` }} />
                    <span className="text-xs text-muted-foreground">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Policy Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Policy Distribution by Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { type: "Motor", count: 3542, percentage: 41, color: "bg-blue-600" },
                  { type: "Health", count: 2156, percentage: 25, color: "bg-green-600" },
                  { type: "Home", count: 1284, percentage: 15, color: "bg-purple-600" },
                  { type: "Travel", count: 856, percentage: 10, color: "bg-yellow-600" },
                  { type: "Business", count: 428, percentage: 5, color: "bg-red-600" },
                  { type: "Life", count: 276, percentage: 4, color: "bg-pink-600" },
                ].map((item) => (
                  <div key={item.type}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.type}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.count} ({item.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Agents */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Agents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Sarah Ibrahim", rank: "Platinum", revenue: 28900000, policies: 456 },
                  { name: "John Okafor", rank: "Gold", revenue: 12500000, policies: 234 },
                  { name: "Emeka Nwosu", rank: "Silver", revenue: 5400000, policies: 128 },
                  { name: "Fatima Bello", rank: "Gold", revenue: 4200000, policies: 98 },
                  { name: "Chioma Eze", rank: "Silver", revenue: 3800000, policies: 87 },
                ].map((agent, index) => (
                  <div key={agent.name} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">{agent.name}</p>
                          <Badge
                            variant="secondary"
                            className={
                              agent.rank === "Platinum"
                                ? "bg-purple-500/10 text-purple-700"
                                : agent.rank === "Gold"
                                  ? "bg-yellow-500/10 text-yellow-700"
                                  : "bg-gray-500/10 text-gray-700"
                            }
                          >
                            {agent.rank}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{agent.policies} policies sold</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">₦{(agent.revenue / 1000000).toFixed(1)}M</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Analysis</CardTitle>
              <CardDescription>Detailed breakdown of each product's performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Comprehensive Motor Insurance",
                    policies: 3542,
                    revenue: 45600000,
                    avgPremium: 128000,
                    growth: 12,
                  },
                  { name: "Family Health Insurance", policies: 2156, revenue: 38400000, avgPremium: 178000, growth: 8 },
                  { name: "Home Protection Plus", policies: 1284, revenue: 28900000, avgPremium: 225000, growth: -3 },
                  { name: "Travel Insurance Pro", policies: 856, revenue: 15200000, avgPremium: 45000, growth: 22 },
                  {
                    name: "Business Liability Coverage",
                    policies: 428,
                    revenue: 12800000,
                    avgPremium: 299000,
                    growth: 5,
                  },
                ].map((product) => (
                  <div key={product.name} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {product.policies} active policies • Avg premium ₦{product.avgPremium.toLocaleString()}
                        </p>
                      </div>
                      <Badge variant={product.growth > 0 ? "secondary" : "destructive"}>
                        {product.growth > 0 ? "+" : ""}
                        {product.growth}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Total Revenue</p>
                        <p className="font-semibold">₦{(product.revenue / 1000000).toFixed(1)}M</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Market Share</p>
                        <p className="font-semibold">{((product.policies / 8542) * 100).toFixed(1)}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Growth Rate</p>
                        <p className={`font-semibold ${product.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                          {product.growth > 0 ? "+" : ""}
                          {product.growth}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Agents Tab */}
        <TabsContent value="agents" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Total Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">156</div>
                <p className="text-xs text-green-600 mt-1">+12 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Avg Revenue per Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₦439K</div>
                <p className="text-xs text-green-600 mt-1">+8.2% growth</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Top Performer Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₦2.89M</div>
                <p className="text-xs text-muted-foreground mt-1">Sarah Ibrahim</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agent Rank Distribution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { rank: "Platinum", count: 12, percentage: 8 },
                { rank: "Gold", count: 45, percentage: 29 },
                { rank: "Silver", count: 68, percentage: 44 },
                { rank: "Bronze", count: 31, percentage: 19 },
              ].map((item) => (
                <div key={item.rank}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={
                        item.rank === "Platinum"
                          ? "bg-purple-500/10 text-purple-700"
                          : item.rank === "Gold"
                            ? "bg-yellow-500/10 text-yellow-700"
                            : item.rank === "Silver"
                              ? "bg-gray-500/10 text-gray-700"
                              : "bg-orange-500/10 text-orange-700"
                      }
                    >
                      {item.rank}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {item.count} agents ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Gross Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦68.5M</div>
                <p className="text-xs text-green-600 mt-1">+15.2%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Claims Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦12.4M</div>
                <p className="text-xs text-muted-foreground mt-1">18.1% loss ratio</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Commission Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦9.6M</div>
                <p className="text-xs text-muted-foreground mt-1">14% avg rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Net Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦46.5M</div>
                <p className="text-xs text-green-600 mt-1">67.9% margin</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Summary</CardTitle>
              <CardDescription>Detailed breakdown of revenue and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Revenue Breakdown</h4>
                  <div className="space-y-3">
                    {[
                      { category: "New Policies", amount: 45200000, percentage: 66 },
                      { category: "Renewals", amount: 18300000, percentage: 27 },
                      { category: "Endorsements", amount: 5000000, percentage: 7 },
                    ].map((item) => (
                      <div key={item.category}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{item.category}</span>
                          <span className="text-sm font-semibold">₦{(item.amount / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Expense Breakdown</h4>
                  <div className="space-y-3">
                    {[
                      { category: "Claims", amount: 12400000, percentage: 56 },
                      { category: "Commissions", amount: 9600000, percentage: 44 },
                    ].map((item) => (
                      <div key={item.category}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{item.category}</span>
                          <span className="text-sm font-semibold">₦{(item.amount / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
