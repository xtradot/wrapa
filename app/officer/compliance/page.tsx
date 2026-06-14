import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, FileCheck, Download, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NAICOM Compliance - WRAPA",
  description: "Regulatory compliance and audit reports",
}

export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">NAICOM Compliance Center</h1>
        <p className="text-muted-foreground mt-1">Regulatory compliance monitoring and reporting</p>
      </div>

      {/* Compliance Status */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">100%</div>
            <p className="text-xs text-muted-foreground">All requirements met</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Audits</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Due this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Nov</div>
            <p className="text-xs text-muted-foreground">Passed with no issues</p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>NAICOM Regulatory Requirements</CardTitle>
          <CardDescription>Mandatory compliance checks for insurance operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                requirement: "Claims Processing Time",
                description: "Average processing time must not exceed 14 days",
                status: "compliant",
                value: "2.4 days average",
              },
              {
                requirement: "Dual Approval for High-Value Claims",
                description: "Claims above ₦2M require maker-checker approval",
                status: "compliant",
                value: "100% compliance rate",
              },
              {
                requirement: "Audit Trail Completeness",
                description: "All claim actions must be logged with actor information",
                status: "compliant",
                value: "Immutable logs maintained",
              },
              {
                requirement: "Customer Identity Verification",
                description: "NIN/BVN verification required for all policyholders",
                status: "compliant",
                value: "98.7% verification rate",
              },
              {
                requirement: "Claims Rejection Documentation",
                description: "All rejections must include detailed reason and evidence review",
                status: "compliant",
                value: "100% documented",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{item.requirement}</p>
                    <Badge
                      variant={
                        item.status === "compliant"
                          ? "secondary"
                          : item.status === "warning"
                            ? "default"
                            : "destructive"
                      }
                      className={
                        item.status === "compliant"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : ""
                      }
                    >
                      {item.status === "compliant" ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Compliant
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Action Required
                        </>
                      )}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quarterly Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Compliance Reports</CardTitle>
          <CardDescription>Download NAICOM submission-ready reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { quarter: "Q4 2024", period: "Oct - Dec 2024", status: "current", claims: 487 },
              { quarter: "Q3 2024", period: "Jul - Sep 2024", status: "submitted", claims: 523 },
              { quarter: "Q2 2024", period: "Apr - Jun 2024", status: "approved", claims: 498 },
              { quarter: "Q1 2024", period: "Jan - Mar 2024", status: "approved", claims: 445 },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{report.quarter}</p>
                    <Badge
                      variant={
                        report.status === "current"
                          ? "default"
                          : report.status === "submitted"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{report.period}</p>
                  <p className="text-sm mt-1">{report.claims} claims processed</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download CSV
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs Export */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Logs Export</CardTitle>
          <CardDescription>Generate comprehensive audit trail reports for regulatory review</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <p className="font-semibold mb-1">Claims Audit Trail</p>
              <p className="text-sm text-muted-foreground mb-3">
                Complete history of all claim actions including maker-checker approvals
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Export Last 30 Days
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <FileCheck className="h-8 w-8 text-blue-600 mb-2" />
              <p className="font-semibold mb-1">Maker-Checker Report</p>
              <p className="text-sm text-muted-foreground mb-3">
                Dual approval workflow compliance for high-value claims
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Export This Quarter
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Data Security & Compliance</p>
                <p className="text-sm text-muted-foreground">
                  All audit logs are cryptographically signed and immutable. Exports are encrypted and include
                  verification checksums for regulatory submission.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
