import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, CheckCircle, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compliance - WRAPA Admin",
  description: "Platform compliance and regulatory reporting",
}

export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Compliance & Reporting</h1>
          <p className="text-muted-foreground mt-1">Regulatory compliance across all countries</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Generate Q4 Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <Progress value={98.5} className="mt-2" />
            <p className="text-xs text-green-600 mt-2">Excellent compliance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Reports Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-2">Reports pending submission</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 days</div>
            <p className="text-xs text-muted-foreground mt-2">Next audit in 275 days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Compliance Requirements by Country</CardTitle>
          <CardDescription>Regulatory status across all operating countries</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              country: "Nigeria",
              flag: "🇳🇬",
              regulator: "NAICOM",
              status: "compliant",
              lastReport: "2024-01-10",
              nextDue: "2024-04-10",
            },
            {
              country: "Ghana",
              flag: "🇬🇭",
              regulator: "NIC",
              status: "compliant",
              lastReport: "2024-01-08",
              nextDue: "2024-04-08",
            },
            {
              country: "Kenya",
              flag: "🇰🇪",
              regulator: "IRA",
              status: "pending",
              lastReport: "2023-12-15",
              nextDue: "2024-01-20",
            },
            {
              country: "South Africa",
              flag: "🇿🇦",
              regulator: "FSB",
              status: "compliant",
              lastReport: "2024-01-05",
              nextDue: "2024-04-05",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{item.country}</h4>
                    <Badge variant={item.status === "compliant" ? "default" : "outline"}>
                      {item.status === "compliant" ? (
                        <>
                          <CheckCircle className="mr-1 h-3 w-3" /> Compliant
                        </>
                      ) : (
                        <>
                          <Clock className="mr-1 h-3 w-3" /> Pending
                        </>
                      )}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.regulator}</p>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-muted-foreground">Last: {item.lastReport}</p>
                <p className="font-medium">Due: {item.nextDue}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Compliance Reports</CardTitle>
          <CardDescription>Generated regulatory reports</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: "Q4 2023 NAICOM Report",
              country: "Nigeria",
              date: "2024-01-10",
              status: "submitted",
            },
            {
              title: "Annual Ghana NIC Report",
              country: "Ghana",
              date: "2024-01-08",
              status: "submitted",
            },
            {
              title: "Kenya IRA Quarterly",
              country: "Kenya",
              date: "2023-12-15",
              status: "draft",
            },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h4 className="font-semibold text-sm">{report.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {report.country} • {report.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={report.status === "submitted" ? "default" : "outline"}>
                  {report.status === "submitted" ? "Submitted" : "Draft"}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
