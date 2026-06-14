import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Search, Filter, Eye, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claims Management - Tenant Dashboard",
  description: "Monitor and oversee claims processing",
}

export default function TenantClaimsPage() {
  const claims = [
    {
      id: "CLM-2024-045",
      customer: "Adewale Johnson",
      policy: "POL-2024-001",
      type: "Motor - Accident",
      amount: 450000,
      status: "under-review",
      filedDate: "2024-12-20",
      officer: "Sarah Williams",
    },
    {
      id: "CLM-2024-046",
      customer: "Chioma Okafor",
      policy: "POL-2024-002",
      type: "Health - Medical",
      amount: 120000,
      status: "approved",
      filedDate: "2024-12-18",
      officer: "Mike Johnson",
    },
    {
      id: "CLM-2024-047",
      customer: "Ibrahim Musa",
      policy: "POL-2024-003",
      type: "Home - Burglary",
      amount: 850000,
      status: "pending",
      filedDate: "2024-12-22",
      officer: "Not assigned",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Claims Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and oversee all claims processing</p>
        </div>
        <Button asChild>
          <Link href="/officer/queue">
            <Shield className="mr-2 h-4 w-4" />
            Claims Dashboard
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-orange-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-green-600">72% approval rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Payout Amount</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦234M</div>
            <p className="text-xs text-muted-foreground">Total disbursed</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search claims..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Claims List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Claims</CardTitle>
          <CardDescription>Latest claims submitted for processing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {claims.map((claim) => (
              <div key={claim.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{claim.id}</span>
                    <Badge
                      variant={
                        claim.status === "approved"
                          ? "default"
                          : claim.status === "rejected"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {claim.status === "under-review" ? (
                        <Clock className="h-3 w-3 mr-1" />
                      ) : claim.status === "approved" ? (
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                      ) : claim.status === "rejected" ? (
                        <XCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      )}
                      {claim.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Customer</p>
                      <p className="font-medium">{claim.customer}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Type</p>
                      <p className="font-medium">{claim.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium">₦{claim.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Officer</p>
                      <p className="font-medium">{claim.officer}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Filed</p>
                      <p className="font-medium">{claim.filedDate}</p>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/officer/review/${claim.id}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
