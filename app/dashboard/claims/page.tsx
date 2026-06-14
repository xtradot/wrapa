import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Search, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Claims - WRAPA Dashboard",
  description: "View and track all your insurance claims",
}

const claims = [
  {
    id: "CLM-12345678",
    type: "Motor Insurance",
    policyNumber: "POL-12345678",
    provider: "AXA Mansard",
    description: "Vehicle accident damage repair",
    amount: 500000,
    dateSubmitted: "10 Dec 2024",
    status: "under-review",
    lastUpdate: "15 Dec 2024",
  },
  {
    id: "CLM-87654321",
    type: "Health Insurance",
    policyNumber: "POL-87654321",
    provider: "Leadway Assurance",
    description: "Hospital treatment expenses",
    amount: 250000,
    dateSubmitted: "05 Nov 2024",
    status: "approved",
    lastUpdate: "20 Nov 2024",
    paidDate: "25 Nov 2024",
  },
  {
    id: "CLM-11223344",
    type: "Home Insurance",
    policyNumber: "POL-11223344",
    provider: "AIICO Insurance",
    description: "Water damage repair",
    amount: 150000,
    dateSubmitted: "15 Oct 2024",
    status: "rejected",
    lastUpdate: "30 Oct 2024",
    reason: "Damage occurred before policy start date",
  },
]

export default function ClaimsPage() {
  const activeClaims = claims.filter((c) => c.status === "under-review")
  const approvedClaims = claims.filter((c) => c.status === "approved")
  const rejectedClaims = claims.filter((c) => c.status === "rejected")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "under-review":
        return <Clock className="h-4 w-4" />
      case "approved":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "under-review":
        return "bg-yellow-500/10 text-yellow-700"
      case "approved":
        return "bg-green-500/10 text-green-700"
      case "rejected":
        return "bg-red-500/10 text-red-700"
      default:
        return "bg-gray-500/10 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Claims</h1>
          <p className="text-muted-foreground mt-1">Track and manage your insurance claims</p>
        </div>
        <Button asChild>
          <Link href="/claims/file">File New Claim</Link>
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search claims by ID, type, or policy..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Claim Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="motor">Motor</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="home">Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active ({activeClaims.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({approvedClaims.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedClaims.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeClaims.map((claim) => (
            <Card key={claim.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="h-16 w-16 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{claim.type}</h3>
                          <Badge className={getStatusColor(claim.status)}>
                            {getStatusIcon(claim.status)}
                            <span className="ml-1">Under Review</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.provider}</p>
                      </div>
                    </div>

                    <p className="text-sm">{claim.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Claim ID</p>
                        <p className="font-mono font-medium">{claim.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{claim.policyNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Claim Amount</p>
                        <p className="font-medium">₦{claim.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Submitted</p>
                        <p className="font-medium">{claim.dateSubmitted}</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">Last updated: {claim.lastUpdate}</p>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/claims/track?id=${claim.id}`}>Track Claim</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {activeClaims.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-30" />
                <p className="text-muted-foreground">No active claims</p>
                <Button className="mt-4" asChild>
                  <Link href="/claims/file">File a New Claim</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="approved" className="space-y-4">
          {approvedClaims.map((claim) => (
            <Card key={claim.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="h-16 w-16 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{claim.type}</h3>
                          <Badge className={getStatusColor(claim.status)}>
                            {getStatusIcon(claim.status)}
                            <span className="ml-1">Approved</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.provider}</p>
                      </div>
                    </div>

                    <p className="text-sm">{claim.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Claim ID</p>
                        <p className="font-mono font-medium">{claim.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{claim.policyNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Paid Amount</p>
                        <p className="font-medium text-green-600">₦{claim.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Paid On</p>
                        <p className="font-medium">{claim.paidDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/claims/track?id=${claim.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {rejectedClaims.map((claim) => (
            <Card key={claim.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="h-16 w-16 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{claim.type}</h3>
                          <Badge className={getStatusColor(claim.status)}>
                            {getStatusIcon(claim.status)}
                            <span className="ml-1">Rejected</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{claim.provider}</p>
                      </div>
                    </div>

                    <p className="text-sm">{claim.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Claim ID</p>
                        <p className="font-mono font-medium">{claim.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{claim.policyNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Claim Amount</p>
                        <p className="font-medium">₦{claim.amount.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-red-700 mb-1">Reason for Rejection:</p>
                      <p className="text-sm text-muted-foreground">{claim.reason}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/claims/track?id=${claim.id}`}>View Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="bg-transparent">
                      <Link href="/help">Appeal Decision</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
