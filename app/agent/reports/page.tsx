"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Calendar, FileText, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ReportsPage() {
  const { toast } = useToast()
  const [reportType, setReportType] = useState("")
  const [dateRange, setDateRange] = useState("")

  const handleGenerateReport = () => {
    if (!reportType || !dateRange) {
      toast({
        title: "Missing Information",
        description: "Please select report type and date range",
        variant: "destructive",
      })
      return
    }
    toast({
      title: "Generating Report",
      description: `Your ${reportType} report for ${dateRange} is being generated...`,
    })
  }

  const handleDownloadReport = (reportName: string) => {
    toast({
      title: "Downloading Report",
      description: `${reportName} is being downloaded...`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Generate and download detailed reports</p>
        </div>
        <Button onClick={handleGenerateReport}>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* Report Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Custom Report</CardTitle>
          <CardDescription>Select report type and date range</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Report Type</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Summary</SelectItem>
                  <SelectItem value="commission">Commission Report</SelectItem>
                  <SelectItem value="customers">Customer Report</SelectItem>
                  <SelectItem value="performance">Performance Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full" onClick={handleGenerateReport}>
            Generate Report
          </Button>
        </CardContent>
      </Card>

      {/* Quick Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reports</CardTitle>
          <CardDescription>Access pre-generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales">
            <TabsList>
              <TabsTrigger value="sales">Sales Reports</TabsTrigger>
              <TabsTrigger value="commission">Commission</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-3 mt-4">
              {[
                { name: "December 2024 Sales Summary", date: "2024-12-07", size: "245 KB" },
                { name: "November 2024 Sales Summary", date: "2024-12-01", size: "238 KB" },
                { name: "Q4 2024 Sales Report", date: "2024-11-01", size: "512 KB" },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-sm">{report.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Generated: {new Date(report.date).toLocaleDateString()} • {report.size}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleDownloadReport(report.name)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="commission">
              <p className="text-sm text-muted-foreground">Commission reports will appear here</p>
            </TabsContent>

            <TabsContent value="performance">
              <p className="text-sm text-muted-foreground">Performance reports will appear here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Analytics Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sales Trend
            </CardTitle>
            <CardDescription>Last 6 months performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { month: "Dec 2024", amount: 2400000, growth: 18 },
                { month: "Nov 2024", amount: 2100000, growth: 12 },
                { month: "Oct 2024", amount: 1900000, growth: 8 },
                { month: "Sep 2024", amount: 1750000, growth: 5 },
                { month: "Aug 2024", amount: 1680000, growth: 3 },
                { month: "Jul 2024", amount: 1620000, growth: -2 },
              ].map((data, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="text-right">
                    <span className="font-semibold">₦{(data.amount / 1000000).toFixed(1)}M</span>
                    <span className={`ml-2 text-xs ${data.growth >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {data.growth >= 0 ? "+" : ""}
                      {data.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { product: "Motor Insurance", sales: 1080000, percentage: 45 },
                { product: "Health Insurance", sales: 720000, percentage: 30 },
                { product: "Travel Insurance", sales: 360000, percentage: 15 },
                { product: "Home Insurance", sales: 240000, percentage: 10 },
              ].map((data, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{data.product}</span>
                    <span className="font-semibold">₦{(data.sales / 1000).toLocaleString()}K</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${data.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
