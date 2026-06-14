import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"

export default function PoliciesReportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/policies">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Policies Report</h1>
          <p className="text-muted-foreground">Detailed analysis of all policies</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Policy Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Comprehensive policy reports and analytics will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
