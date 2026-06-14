"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, CreditCard, AlertCircle, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export function DashboardClient() {
  const { user } = useAuth()

  const firstName = user?.name?.split(" ")[0] || "User"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {firstName}!</h1>
        <p className="text-muted-foreground mt-1">Here's an overview of your insurance portfolio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">2 expiring in 60 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">Under review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦15.2M</div>
            <p className="text-xs text-muted-foreground mt-1">Across all policies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45,000</div>
            <p className="text-xs text-muted-foreground mt-1">Due in 15 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="border-orange-500/50 bg-orange-500/5">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Action Required: Renewal Reminder</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your Motor Insurance policy expires in 45 days. Renew now to avoid coverage gaps.
              </p>
              <Button size="sm" className="mt-3">
                Renew Policy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Policies */}
        <Card>
          <CardHeader>
            <CardTitle>Active Policies</CardTitle>
            <CardDescription>Your current insurance coverage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                type: "Motor Insurance",
                provider: "AXA Mansard",
                policyNumber: "POL-12345678",
                expires: "15 Mar 2025",
                status: "active",
              },
              {
                type: "Health Insurance",
                provider: "Leadway Assurance",
                policyNumber: "POL-87654321",
                expires: "30 Jun 2025",
                status: "active",
              },
              {
                type: "Home Insurance",
                provider: "AIICO Insurance",
                policyNumber: "POL-11223344",
                expires: "20 Feb 2025",
                status: "expiring",
              },
            ].map((policy) => (
              <div key={policy.policyNumber} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{policy.type}</h4>
                    <Badge variant={policy.status === "expiring" ? "destructive" : "secondary"} className="text-xs">
                      {policy.status === "expiring" ? "Expiring Soon" : "Active"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{policy.provider}</p>
                  <p className="text-xs text-muted-foreground">Policy: {policy.policyNumber}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Expires {policy.expires}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/dashboard/policies/${policy.policyNumber}`}>View</Link>
                </Button>
              </div>
            ))}

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/dashboard/policies">View All Policies</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Claims */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Claims</CardTitle>
            <CardDescription>Track your claim submissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm">Vehicle Accident</h4>
                  <Badge variant="secondary" className="text-xs bg-yellow-500/10 text-yellow-700">
                    Under Review
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Claim ID: CLM-12345678</p>
                <p className="text-xs text-muted-foreground">Submitted: 10 Dec 2024</p>
                <p className="text-xs text-muted-foreground mt-2">Amount: ₦500,000</p>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/claims/CLM-12345678">Track</Link>
              </Button>
            </div>

            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No other active claims</p>
            </div>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/claims/file">File New Claim</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent" asChild>
              <Link href="/quote">
                <Shield className="h-6 w-6" />
                <span className="text-sm">Get New Quote</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent" asChild>
              <Link href="/claims/file">
                <FileText className="h-6 w-6" />
                <span className="text-sm">File Claim</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent" asChild>
              <Link href="/dashboard/payments">
                <CreditCard className="h-6 w-6" />
                <span className="text-sm">Make Payment</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent" asChild>
              <Link href="/help">
                <AlertCircle className="h-6 w-6" />
                <span className="text-sm">Get Support</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
