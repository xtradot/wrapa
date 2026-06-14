import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Maker-Checker Approvals - WRAPA",
  description: "Dual approval workflow for high-value claims",
}

export default function MakerCheckerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Maker-Checker Approvals</h1>
        <p className="text-muted-foreground mt-1">Dual approval workflow for claims above ₦2M</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Awaiting First Approval</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">₦18.5M total value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Awaiting Second Approval</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">₦12.3M total value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Dual Approved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">₦8.7M total value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Manager Escalations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Above ₦5M threshold</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="first-approval" className="space-y-4">
        <TabsList>
          <TabsTrigger value="first-approval">First Approval (7)</TabsTrigger>
          <TabsTrigger value="second-approval">Second Approval (4)</TabsTrigger>
          <TabsTrigger value="manager-approval">Manager Review (2)</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="first-approval" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Awaiting First Approval</CardTitle>
              <CardDescription>You are the maker - provide first level approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    id: "CLM-12350",
                    type: "Motor - Total Loss",
                    amount: 3200000,
                    customer: "Chidi Okafor",
                    reviewedBy: "David Eze",
                    reviewedAt: "2 hours ago",
                    requiresSecond: true,
                  },
                  {
                    id: "CLM-12351",
                    type: "Health - Surgery",
                    amount: 2800000,
                    customer: "Amina Bello",
                    reviewedBy: "Sarah Adebayo",
                    reviewedAt: "4 hours ago",
                    requiresSecond: true,
                  },
                ].map((claim) => (
                  <div key={claim.id} className="p-4 border rounded-lg bg-card">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold">{claim.id}</span>
                          {claim.requiresSecond && (
                            <Badge variant="secondary" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              Requires 2nd Approval
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{claim.type}</p>
                        <p className="text-sm">
                          <span className="text-muted-foreground">Customer:</span> {claim.customer}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">₦{claim.amount.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Reviewed by:</span> {claim.reviewedBy} • {claim.reviewedAt}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/officer/maker-checker/review/${claim.id}`}>Review Details</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/officer/maker-checker/approve/${claim.id}`}>Approve</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="second-approval" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Awaiting Second Approval</CardTitle>
              <CardDescription>You are the checker - provide independent second approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    id: "CLM-12348",
                    type: "Motor - Total Loss",
                    amount: 4500000,
                    customer: "Ibrahim Musa",
                    firstApprovedBy: "Michael Obi",
                    firstApprovedAt: "1 hour ago",
                    firstApprovedAmount: 4200000,
                  },
                  {
                    id: "CLM-12349",
                    type: "Home - Fire Damage",
                    amount: 3800000,
                    customer: "Grace Nwosu",
                    firstApprovedBy: "David Eze",
                    firstApprovedAt: "3 hours ago",
                    firstApprovedAmount: 3800000,
                  },
                ].map((claim) => (
                  <div key={claim.id} className="p-4 border rounded-lg bg-blue-50/50 dark:bg-blue-950/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold">{claim.id}</span>
                          <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900">
                            <Users className="h-3 w-3 mr-1" />
                            Awaiting 2nd Approval
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{claim.type}</p>
                        <p className="text-sm mb-1">
                          <span className="text-muted-foreground">Customer:</span> {claim.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">First approved by:</span> {claim.firstApprovedBy} •{" "}
                          {claim.firstApprovedAt}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Claimed</p>
                        <p className="text-lg font-bold">₦{claim.amount.toLocaleString()}</p>
                        <p className="text-sm text-green-600 mt-1">
                          Approved: ₦{claim.firstApprovedAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        ⚠️ Provide independent review - do not consult first approver
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/officer/maker-checker/review/${claim.id}`}>Review Details</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/officer/maker-checker/approve-second/${claim.id}`}>Second Approval</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manager-approval" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Claims Requiring Manager Approval</CardTitle>
              <CardDescription>High-value claims above ₦5M threshold</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    id: "CLM-12352",
                    type: "Motor - Total Loss (Fleet)",
                    amount: 8500000,
                    customer: "TransLogistics Ltd",
                    firstApprovedBy: "Michael Obi",
                    reviewHistory: "2 approvals completed",
                  },
                ].map((claim) => (
                  <div key={claim.id} className="p-4 border rounded-lg bg-orange-50/50 dark:bg-orange-950/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold">{claim.id}</span>
                          <Badge variant="destructive" className="text-xs">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Manager Approval Required
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{claim.type}</p>
                        <p className="text-sm mb-1">
                          <span className="text-muted-foreground">Customer:</span> {claim.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">{claim.reviewHistory}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-red-600">₦{claim.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground mt-1">Above ₦5M threshold</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-sm font-medium">Requires Claims Manager or Super Admin approval</div>
                      <Button size="sm" asChild>
                        <Link href={`/officer/maker-checker/review/${claim.id}`}>Review & Approve</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Dual Approvals</CardTitle>
              <CardDescription>Successfully processed with maker-checker workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    id: "CLM-12345",
                    type: "Health - Surgery",
                    amount: 2500000,
                    approvedAmount: 2500000,
                    customer: "Funke Adeyemi",
                    firstApprover: "David Eze",
                    secondApprover: "Michael Obi",
                    completedAt: "Today, 10:30 AM",
                  },
                  {
                    id: "CLM-12346",
                    type: "Motor - Comprehensive",
                    amount: 3200000,
                    approvedAmount: 2900000,
                    customer: "Tunde Bakare",
                    firstApprover: "Sarah Adebayo",
                    secondApprover: "David Eze",
                    completedAt: "Today, 09:15 AM",
                  },
                ].map((claim) => (
                  <div key={claim.id} className="p-4 border rounded-lg bg-green-50/50 dark:bg-green-950/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold">{claim.id}</span>
                          <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Dual Approved
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{claim.type}</p>
                        <p className="text-sm mb-1">
                          <span className="text-muted-foreground">Customer:</span> {claim.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Approved by: {claim.firstApprover} & {claim.secondApprover}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Claimed: ₦{claim.amount.toLocaleString()}</p>
                        <p className="text-lg font-bold text-green-600">₦{claim.approvedAmount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground mt-1">{claim.completedAt}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end pt-3 border-t">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/officer/audit/${claim.id}`}>View Audit Trail</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
