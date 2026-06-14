import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, DollarSign, TrendingUp, AlertTriangle, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claims Officer Dashboard - WRAPA",
  description: "Manage and process insurance claims efficiently",
}

export default function OfficerDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Claims Officer Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Sarah. Here's your claims overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
            <Button size="sm" variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/officer/queue">
                View Queue <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">₦4.2M total value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rejected Today</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">-1 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <p className="text-xs text-green-600">-0.3 from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Priority Claims */}
      <Card>
        <CardHeader>
          <CardTitle>Priority Claims - Immediate Attention Required</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                id: "CLM-12345",
                type: "Motor - Total Loss",
                amount: 2500000,
                days: 5,
                provider: "AXA Mansard",
                urgent: true,
              },
              {
                id: "CLM-12346",
                type: "Health - Surgery",
                amount: 800000,
                days: 4,
                provider: "Leadway",
                urgent: true,
              },
              {
                id: "CLM-12347",
                type: "Home - Fire Damage",
                amount: 1200000,
                days: 6,
                provider: "AIICO",
                urgent: true,
              },
            ].map((claim) => (
              <div
                key={claim.id}
                className="flex items-center justify-between p-4 border rounded-lg bg-red-50/50 dark:bg-red-950/10"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-semibold text-sm">{claim.id}</span>
                      <Badge variant="destructive" className="text-xs">
                        {claim.days} days old
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {claim.type} • {claim.provider}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₦{claim.amount.toLocaleString()}</p>
                  <Button size="sm" className="mt-2" asChild>
                    <Link href={`/officer/review/${claim.id}`}>Review Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: "Approved",
                  claim: "CLM-12340",
                  amount: 450000,
                  time: "5 mins ago",
                  icon: CheckCircle,
                  color: "text-green-600",
                },
                {
                  action: "Requested Info",
                  claim: "CLM-12341",
                  amount: 320000,
                  time: "15 mins ago",
                  icon: FileText,
                  color: "text-blue-600",
                },
                {
                  action: "Rejected",
                  claim: "CLM-12342",
                  amount: 180000,
                  time: "1 hour ago",
                  icon: XCircle,
                  color: "text-red-600",
                },
                {
                  action: "Approved",
                  claim: "CLM-12343",
                  amount: 650000,
                  time: "2 hours ago",
                  icon: CheckCircle,
                  color: "text-green-600",
                },
              ].map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${activity.color}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.action} {activity.claim}
                      </p>
                      <p className="text-xs text-muted-foreground">₦{activity.amount.toLocaleString()}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Performance This Month */}
        <Card>
          <CardHeader>
            <CardTitle>Your Performance This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Claims Processed</span>
              <span className="text-2xl font-bold">156</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Approval Rate</span>
              <span className="text-2xl font-bold text-green-600">87%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg. Processing Time</span>
              <span className="text-2xl font-bold">2.4 days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Value Processed</span>
              <span className="text-2xl font-bold">₦68.5M</span>
            </div>
            <Button variant="outline" className="w-full bg-transparent mt-4" asChild>
              <Link href="/officer/analytics">View Detailed Analytics</Link>
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
          <div className="grid gap-3 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent" asChild>
              <Link href="/officer/queue">
                <Clock className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Process Claims Queue</div>
                  <div className="text-xs text-muted-foreground">12 pending reviews</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent" asChild>
              <Link href="/officer/approved">
                <DollarSign className="h-5 w-5 text-green-600" />
                <div className="text-left">
                  <div className="font-semibold">Process Payouts</div>
                  <div className="text-xs text-muted-foreground">5 approved awaiting payment</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2 bg-transparent" asChild>
              <Link href="/officer/analytics">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold">View Analytics</div>
                  <div className="text-xs text-muted-foreground">Performance insights</div>
                </div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
