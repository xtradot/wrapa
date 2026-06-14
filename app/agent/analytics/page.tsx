import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Target, Download, BarChart3, LineChart } from "lucide-react"

export default function AgentAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Insights</h1>
          <p className="text-muted-foreground mt-1">Deep dive into your performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦8,450,000</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+24.5% vs last period</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Target: ₦10M (84.5%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦845,000</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+18.2% vs last period</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Avg Rate: 10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Policies Sold</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingDown className="h-3 w-3 mr-1" />
              <span>-5.3% vs last period</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Target: 180 (78.9%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5%</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+3.2% vs last period</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">207 quotes → 142 sales</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
          <TabsTrigger value="products">Product Mix</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>By product category (Last 30 days)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { product: "Motor Insurance", revenue: 3200000, percentage: 37.9, trend: "+12%" },
                    { product: "Health Insurance", revenue: 2800000, percentage: 33.1, trend: "+24%" },
                    { product: "Travel Insurance", revenue: 1450000, percentage: 17.2, trend: "+8%" },
                    { product: "Home Insurance", revenue: 1000000, percentage: 11.8, trend: "+15%" },
                  ].map((item) => (
                    <div key={item.product} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.product}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {item.trend}
                          </Badge>
                          <span className="text-sm font-semibold">₦{item.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Performance</CardTitle>
                <CardDescription>Sales and commission over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <LineChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Line chart visualization</p>
                    <p className="text-xs">(Recharts integration recommended)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Hourly Sales Pattern</CardTitle>
              <CardDescription>Identify your most productive hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-40">
                {[20, 15, 10, 8, 12, 25, 35, 45, 50, 48, 42, 38, 40, 35, 30, 28, 25, 30, 35, 32, 28, 25, 22, 18].map(
                  (height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                      {i % 3 === 0 && (
                        <span className="text-xs text-muted-foreground">{i.toString().padStart(2, "0")}h</span>
                      )}
                    </div>
                  ),
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Peak hours: 8-10 AM and 2-4 PM. Consider focusing outreach during these times.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Matrix</CardTitle>
              <CardDescription>Compare volume vs. value by product type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Motor - Comprehensive",
                    volume: 45,
                    avgValue: 85000,
                    commission: 8500,
                    rate: "10%",
                    trend: "hot",
                  },
                  {
                    name: "Motor - Third Party",
                    volume: 62,
                    avgValue: 15000,
                    commission: 1500,
                    rate: "10%",
                    trend: "stable",
                  },
                  {
                    name: "Health - Individual",
                    volume: 28,
                    avgValue: 120000,
                    commission: 14400,
                    rate: "12%",
                    trend: "hot",
                  },
                  {
                    name: "Travel - Single Trip",
                    volume: 35,
                    avgValue: 8000,
                    commission: 800,
                    rate: "10%",
                    trend: "stable",
                  },
                ].map((product) => (
                  <div key={product.name} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.volume} policies sold this month</p>
                      </div>
                      <Badge variant={product.trend === "hot" ? "default" : "secondary"}>
                        {product.trend === "hot" ? "🔥 Hot Seller" : "Stable"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Avg Policy Value</p>
                        <p className="font-semibold">₦{product.avgValue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Avg Commission</p>
                        <p className="font-semibold text-green-600">₦{product.commission.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Commission Rate</p>
                        <p className="font-semibold">{product.rate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customers over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">156</span>
                    <Badge>Total Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">New this month</span>
                      <span className="font-semibold">+32</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Repeat customers</span>
                      <span className="font-semibold">89 (57%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Churn rate</span>
                      <span className="font-semibold text-red-600">4.2%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average value by customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { segment: "Premium", customers: 18, ltv: 450000, color: "bg-purple-500" },
                    { segment: "Regular", customers: 92, ltv: 180000, color: "bg-blue-500" },
                    { segment: "Basic", customers: 46, ltv: 75000, color: "bg-gray-500" },
                  ].map((seg) => (
                    <div key={seg.segment} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${seg.color}`} />
                          <span className="text-sm font-medium">{seg.segment}</span>
                        </div>
                        <span className="text-sm font-semibold">₦{seg.ltv.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-5">{seg.customers} customers</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Peer Comparison</CardTitle>
              <CardDescription>How you rank against other agents in your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div>
                    <p className="font-semibold">Your Rank</p>
                    <p className="text-2xl font-bold">#12</p>
                    <p className="text-sm text-muted-foreground">Out of 287 agents in Lagos</p>
                  </div>
                  <Badge className="bg-yellow-500">Top 5%</Badge>
                </div>

                <div className="space-y-4">
                  {[
                    { metric: "Total Sales Volume", your: 8450000, avg: 4200000, percentile: 92 },
                    { metric: "Conversion Rate", your: 68.5, avg: 52.3, percentile: 88, suffix: "%" },
                    { metric: "Customer Retention", your: 95.8, avg: 78.5, percentile: 96, suffix: "%" },
                    { metric: "Avg Response Time", your: 2.5, avg: 4.8, percentile: 94, suffix: "hrs" },
                  ].map((item) => (
                    <div key={item.metric} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.metric}</span>
                        <Badge variant="outline">{item.percentile}th percentile</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">You</span>
                            <span className="font-semibold">
                              {item.suffix && item.suffix === "%" ? item.your : `₦${item.your.toLocaleString()}`}
                              {item.suffix && item.suffix !== "%" ? item.suffix : ""}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Average</span>
                            <span className="font-semibold">
                              {item.suffix && item.suffix === "%" ? item.avg : `₦${item.avg.toLocaleString()}`}
                              {item.suffix && item.suffix !== "%" ? item.suffix : ""}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-gray-400 h-2 rounded-full" style={{ width: "50%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
