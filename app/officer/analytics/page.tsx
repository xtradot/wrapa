import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, CheckCircle, Clock, DollarSign, FileText, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claims Analytics - WRAPA",
  description: "Performance metrics and claims processing analytics",
}

export default function ClaimsAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Claims Analytics</h1>
          <p className="text-muted-foreground mt-1">Performance metrics and processing insights</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
              <SelectItem value="365">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Processed</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingDown className="h-3 w-3" />
              <span>-0.3 days improved</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value Processed</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦68.5M</div>
            <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
              <TrendingUp className="h-3 w-3" />
              <span>+8% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Claims by Status */}
        <Card>
          <CardHeader>
            <CardTitle>Claims by Status (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Approved</span>
                  <span className="font-semibold">136 (87%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-green-600" style={{ width: "87%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Rejected</span>
                  <span className="font-semibold">15 (10%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-red-600" style={{ width: "10%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pending</span>
                  <span className="font-semibold">5 (3%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-yellow-600" style={{ width: "3%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claims by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Claims by Type</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Motor Insurance</span>
                  <span className="font-semibold">68 (44%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "44%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Health Insurance</span>
                  <span className="font-semibold">52 (33%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: "33%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Home Insurance</span>
                  <span className="font-semibold">24 (15%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-purple-600" style={{ width: "15%" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Travel Insurance</span>
                  <span className="font-semibold">12 (8%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-orange-600" style={{ width: "8%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processing Time Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Time Distribution</CardTitle>
            <CardDescription>How long claims take to process</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Within 24 hours</p>
                  <p className="text-xs text-muted-foreground">35 claims</p>
                </div>
                <Badge variant="secondary">22%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">1-3 days</p>
                  <p className="text-xs text-muted-foreground">78 claims</p>
                </div>
                <Badge variant="secondary">50%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">3-5 days</p>
                  <p className="text-xs text-muted-foreground">30 claims</p>
                </div>
                <Badge variant="secondary">19%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Over 5 days</p>
                  <p className="text-xs text-muted-foreground">13 claims</p>
                </div>
                <Badge variant="destructive">9%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Claim Value Distribution</CardTitle>
            <CardDescription>Total ₦68.5M processed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Under ₦100k</p>
                  <p className="text-xs text-muted-foreground">45 claims</p>
                </div>
                <p className="font-semibold">₦2.8M</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">₦100k - ₦500k</p>
                  <p className="text-xs text-muted-foreground">67 claims</p>
                </div>
                <p className="font-semibold">₦18.5M</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">₦500k - ₦1M</p>
                  <p className="text-xs text-muted-foreground">28 claims</p>
                </div>
                <p className="font-semibold">₦21.2M</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Over ₦1M</p>
                  <p className="text-xs text-muted-foreground">16 claims</p>
                </div>
                <p className="font-semibold text-green-600">₦26.0M</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Providers */}
      <Card>
        <CardHeader>
          <CardTitle>Claims by Insurance Provider</CardTitle>
          <CardDescription>Top 5 providers by claim volume</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "AXA Mansard", claims: 42, value: 24500000, approved: 38 },
              { name: "Leadway Assurance", claims: 36, value: 18200000, approved: 32 },
              { name: "AIICO Insurance", claims: 28, value: 12800000, approved: 24 },
              { name: "Custodian Insurance", claims: 24, value: 8600000, approved: 21 },
              { name: "Mutual Benefits", claims: 20, value: 4400000, approved: 18 },
            ].map((provider, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <p className="font-semibold">{provider.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {provider.claims} claims • {provider.approved} approved
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">₦{(provider.value / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((provider.approved / provider.claims) * 100)}% approval
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Officer Performance Comparison</CardTitle>
          <CardDescription>Your performance vs team average</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-green-600">87%</p>
                <p className="text-sm text-muted-foreground mt-1">Your Approval Rate</p>
                <Badge variant="secondary" className="mt-2">
                  +5% vs team avg
                </Badge>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-blue-600">2.4 days</p>
                <p className="text-sm text-muted-foreground mt-1">Avg Processing Time</p>
                <Badge variant="secondary" className="mt-2">
                  -0.6 days vs team avg
                </Badge>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-purple-600">156</p>
                <p className="text-sm text-muted-foreground mt-1">Claims Processed</p>
                <Badge variant="secondary" className="mt-2">
                  +18 vs team avg
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
