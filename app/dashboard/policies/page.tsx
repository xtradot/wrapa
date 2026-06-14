import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Search, Download, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Policies - WRAPA Dashboard",
  description: "View and manage all your insurance policies",
}

const policies = [
  {
    id: "POL-12345678",
    type: "Motor Insurance",
    provider: "AXA Mansard",
    coverage: "Comprehensive",
    premium: 45000,
    startDate: "15 Mar 2024",
    endDate: "15 Mar 2025",
    status: "active",
    coverageAmount: 5000000,
  },
  {
    id: "POL-87654321",
    type: "Health Insurance",
    provider: "Leadway Assurance",
    coverage: "Family Plan",
    premium: 85000,
    startDate: "01 Jul 2024",
    endDate: "30 Jun 2025",
    status: "active",
    coverageAmount: 10000000,
  },
  {
    id: "POL-11223344",
    type: "Home Insurance",
    provider: "AIICO Insurance",
    coverage: "Property & Contents",
    premium: 28000,
    startDate: "20 Feb 2024",
    endDate: "20 Feb 2025",
    status: "expiring",
    coverageAmount: 8000000,
  },
  {
    id: "POL-99887766",
    type: "Travel Insurance",
    provider: "Custodian Insurance",
    coverage: "International",
    premium: 15000,
    startDate: "10 Oct 2023",
    endDate: "10 Oct 2024",
    status: "expired",
    coverageAmount: 2000000,
  },
]

export default function PoliciesPage() {
  const activePolicies = policies.filter((p) => p.status === "active")
  const expiringPolicies = policies.filter((p) => p.status === "expiring")
  const expiredPolicies = policies.filter((p) => p.status === "expired")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Policies</h1>
          <p className="text-muted-foreground mt-1">View and manage all your insurance policies</p>
        </div>
        <Button asChild>
          <Link href="/quote">Get New Quote</Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search policies by number, type, or provider..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Policy Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="motor">Motor</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="expiring">Expiring Soon</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Policies Tabs */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active ({activePolicies.length})</TabsTrigger>
          <TabsTrigger value="expiring">Expiring ({expiringPolicies.length})</TabsTrigger>
          <TabsTrigger value="expired">Expired ({expiredPolicies.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activePolicies.map((policy) => (
            <Card key={policy.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Policy Icon */}
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>

                  {/* Policy Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{policy.type}</h3>
                          <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                            {policy.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{policy.provider}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{policy.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Coverage</p>
                        <p className="font-medium">{policy.coverage}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Coverage Amount</p>
                        <p className="font-medium">₦{policy.coverageAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Annual Premium</p>
                        <p className="font-medium">₦{policy.premium.toLocaleString()}/year</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Valid from {policy.startDate} to {policy.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/dashboard/policies/${policy.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="expiring" className="space-y-4">
          {expiringPolicies.map((policy) => (
            <Card key={policy.id} className="border-orange-500/50">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="h-16 w-16 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{policy.type}</h3>
                          <Badge variant="destructive" className="text-xs">
                            Expiring Soon
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{policy.provider}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{policy.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Coverage</p>
                        <p className="font-medium">{policy.coverage}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Coverage Amount</p>
                        <p className="font-medium">₦{policy.coverageAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Annual Premium</p>
                        <p className="font-medium">₦{policy.premium.toLocaleString()}/year</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-orange-600">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Expires on {policy.endDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <Button size="sm">Renew Now</Button>
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/dashboard/policies/${policy.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {expiredPolicies.map((policy) => (
            <Card key={policy.id} className="opacity-75">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Shield className="h-8 w-8 text-muted-foreground" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{policy.type}</h3>
                          <Badge variant="secondary" className="text-xs">
                            Expired
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{policy.provider}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                        <p className="font-mono font-medium">{policy.id}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Coverage</p>
                        <p className="font-medium">{policy.coverage}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Expired On</p>
                        <p className="font-medium">{policy.endDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-1">Annual Premium</p>
                        <p className="font-medium">₦{policy.premium.toLocaleString()}/year</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <Button size="sm">Get New Quote</Button>
                    <Button variant="outline" size="sm" asChild className="bg-transparent">
                      <Link href={`/dashboard/policies/${policy.id}`}>View Details</Link>
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
