"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, Filter, CheckCircle2, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SalesHistoryPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [filterPeriod, setFilterPeriod] = useState("this-month")

  const handleExportReport = () => {
    toast({
      title: "Exporting Report",
      description: "Your sales report is being generated...",
    })
  }

  const handleMoreFilters = () => {
    toast({
      title: "Advanced Filters",
      description: "Filter options coming soon",
    })
  }

  const sales = [
    {
      id: "POL-2024-001",
      date: "2024-12-07",
      customer: "Chioma Okafor",
      product: "Motor Insurance - Comprehensive",
      provider: "Leadway Assurance",
      premium: 165000,
      commission: 16500,
      status: "active",
      policyNumber: "LW-MTR-2024-12345",
    },
    {
      id: "POL-2024-002",
      date: "2024-12-06",
      customer: "Emeka Nwosu",
      product: "Health Insurance - Family",
      provider: "AXA Mansard",
      premium: 120000,
      commission: 12000,
      status: "active",
      policyNumber: "AXA-HLT-2024-67890",
    },
    {
      id: "POL-2024-003",
      date: "2024-12-05",
      customer: "Fatima Ibrahim",
      product: "Travel Insurance - Schengen",
      provider: "Custodian Insurance",
      premium: 25000,
      commission: 2500,
      status: "active",
      policyNumber: "CUS-TRV-2024-11111",
    },
    {
      id: "POL-2024-004",
      date: "2024-12-03",
      customer: "Adeola Williams",
      product: "Motor Insurance - Third Party",
      provider: "Leadway Assurance",
      premium: 15000,
      commission: 1500,
      status: "pending",
      policyNumber: "Pending activation",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales History</h1>
          <p className="text-muted-foreground mt-1">Track your policy sales and commissions</p>
        </div>
        <Button variant="outline" onClick={handleExportReport}>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦3.85M</div>
            <p className="text-xs text-green-600 mt-1">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Policies Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦385K</div>
            <p className="text-xs text-green-600 mt-1">10% avg rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Activation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting payment</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                <SelectTrigger>
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" onClick={handleMoreFilters}>
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sales Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>Your policy sales history</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Sales</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {sales.map((sale) => (
                <div key={sale.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{sale.customer}</h4>
                        <Badge variant={sale.status === "active" ? "default" : "secondary"}>
                          {sale.status === "active" ? (
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {sale.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{sale.product}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Policy: {sale.policyNumber}</span>
                        <span>•</span>
                        <span>Provider: {sale.provider}</span>
                        <span>•</span>
                        <span>Date: {new Date(sale.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">₦{sale.premium.toLocaleString()}</p>
                      <p className="text-sm text-green-600 font-semibold">+₦{sale.commission.toLocaleString()}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 bg-transparent"
                        onClick={() => router.push(`/agent/sales/${sale.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
