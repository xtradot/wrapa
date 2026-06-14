"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { UserPlus, TrendingUp, Wallet, Users, FileText, CheckCircle2, Clock, AlertCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export function AgentDashboardClient() {
  const { user } = useAuth()

  const firstName = user?.name?.split(" ")[0] || "Agent"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Agent Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back, {firstName}! Here's your sales overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦325,000</div>
            <p className="text-xs text-green-600 mt-1">+12% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦32,500</div>
            <p className="text-xs text-muted-foreground mt-1">10% avg commission</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Policies Sold</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">3 pending activation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground mt-1">12 need renewal</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/agent/new-sale">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">New Sale</h3>
                  <p className="text-sm text-muted-foreground">Start selling a policy</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/agent/customers">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Find Customer</h3>
                  <p className="text-sm text-muted-foreground">Search existing records</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors" asChild>
          <Link href="/agent/wallet">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Wallet</h3>
                  <p className="text-sm text-muted-foreground">₦125,430 available</p>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest sales activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                id: "TXN001",
                customer: "Chioma Okafor",
                type: "Motor Insurance",
                amount: 75000,
                commission: 7500,
                status: "completed",
                time: "10 mins ago",
              },
              {
                id: "TXN002",
                customer: "Emeka Nwosu",
                type: "Health Insurance",
                amount: 120000,
                commission: 12000,
                status: "pending",
                time: "1 hour ago",
              },
              {
                id: "TXN003",
                customer: "Fatima Ibrahim",
                type: "Travel Insurance",
                amount: 25000,
                commission: 2500,
                status: "completed",
                time: "2 hours ago",
              },
            ].map((txn) => (
              <div key={txn.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    {txn.status === "completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{txn.customer}</p>
                    <p className="text-xs text-muted-foreground">
                      {txn.type} • {txn.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">₦{txn.amount.toLocaleString()}</p>
                  <Badge variant={txn.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {txn.status}
                  </Badge>
                  <p className="text-xs text-green-600 mt-1">+₦{txn.commission.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>This Month's Performance</CardTitle>
            <CardDescription>Track your goals and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Sales Target</span>
                <span className="text-sm font-semibold">₦2.4M / ₦3M</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">80% completed - ₦600K to go</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">New Customers</span>
                <span className="text-sm font-semibold">45 / 50</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "90%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">90% completed - 5 more to hit target</p>
            </div>

            <div className="pt-4 border-t space-y-2">
              <h4 className="font-semibold text-sm">Rank & Rewards</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Rank</span>
                <Badge className="bg-yellow-500">Gold Agent</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Points to Platinum</span>
                <span className="text-sm font-semibold">1,250 pts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Actions</CardTitle>
          <CardDescription>Items requiring your attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">3 KYC Verifications Pending</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete identity verification for recent customers
                </p>
                <Link href="/agent/customers?filter=pending-kyc">
                  <Button size="sm" variant="outline" className="mt-3 bg-transparent">
                    Review Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">12 Customers Due for Renewal</h4>
                <p className="text-sm text-muted-foreground mt-1">Reach out to customers with expiring policies</p>
                <Link href="/agent/customers?filter=due-renewal">
                  <Button size="sm" variant="outline" className="mt-3 bg-transparent">
                    View List
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
