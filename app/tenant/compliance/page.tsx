import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCheck, CheckCircle2, AlertTriangle, Clock, Download, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance Management - Tenant Dashboard",
  description: "Monitor NAICOM compliance and regulations",
}

export default function TenantCompliancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Compliance Management</h1>
          <p className="text-muted-foreground mt-1">Monitor NAICOM compliance and regulatory requirements</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Compliance Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-green-600">Excellent standing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Requirements Met</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47/50</div>
            <p className="text-xs text-muted-foreground">NAICOM standards</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Actions</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-orange-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Q3 2024</div>
            <p className="text-xs text-muted-foreground">Next: Q1 2025</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="naicom">NAICOM Requirements</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Categories</CardTitle>
              <CardDescription>Status across regulatory categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Product Approval", score: 100, status: "compliant", items: "12/12" },
                { name: "Agent Licensing", score: 96, status: "compliant", items: "150/156" },
                { name: "Claims Processing", score: 92, status: "compliant", items: "Standards met" },
                { name: "Financial Reporting", score: 88, status: "warning", items: "1 report pending" },
                { name: "Data Protection", score: 100, status: "compliant", items: "All requirements met" },
                { name: "Customer Protection", score: 94, status: "compliant", items: "Standards met" },
              ].map((category) => (
                <div key={category.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{category.name}</span>
                      <Badge
                        variant={
                          category.status === "compliant"
                            ? "default"
                            : category.status === "warning"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {category.status === "compliant" ? (
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                        ) : (
                          <AlertTriangle className="h-3 w-3 mr-1" />
                        )}
                        {category.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.items}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold">{category.score}%</div>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="naicom">
          <Card>
            <CardHeader>
              <CardTitle>NAICOM Requirements</CardTitle>
              <CardDescription>National Insurance Commission compliance standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    requirement: "Quarterly Financial Statements",
                    status: "met",
                    deadline: "Q4 2024 submitted",
                    description: "Regular financial reporting to NAICOM",
                  },
                  {
                    requirement: "Agent Verification Records",
                    status: "met",
                    deadline: "All current",
                    description: "Maintain up-to-date agent credentials",
                  },
                  {
                    requirement: "Product Filing Documentation",
                    status: "pending",
                    deadline: "Due: Jan 15, 2025",
                    description: "New product approval pending",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    {item.status === "met" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <Clock className="h-5 w-5 text-orange-500 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium">{item.requirement}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      <p className="text-sm font-medium mt-2">{item.deadline}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Reports</CardTitle>
              <CardDescription>Generated compliance documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Compliance reports content...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Compliance-related activity logs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Audit trail content...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
