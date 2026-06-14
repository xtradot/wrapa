"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, Wallet, CheckCircle2, Clock } from "lucide-react"

export default function POSDashboardPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const recentTransactions = [
    {
      id: "TXN001",
      customer: "Chioma Okafor",
      type: "Motor Insurance",
      amount: 75000,
      status: "completed",
      time: "10 mins ago",
    },
    {
      id: "TXN002",
      customer: "Emeka Nwosu",
      type: "Health Insurance",
      amount: 120000,
      status: "pending",
      time: "1 hour ago",
    },
    {
      id: "TXN003",
      customer: "Fatima Ibrahim",
      type: "Travel Insurance",
      amount: 25000,
      status: "completed",
      time: "2 hours ago",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Agent Dashboard</h1>
              <p className="text-muted-foreground">Agent ID: AGT-12345 | Victoria Island Branch</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Commission Balance</p>
                  <p className="font-semibold">₦45,250</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card
              className="cursor-pointer hover:border-primary transition-colors"
              onClick={() => router.push("/onboarding/pos/new-customer")}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">New Customer</h3>
                    <p className="text-sm text-muted-foreground">Start onboarding process</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Search Customer</h3>
                    <p className="text-sm text-muted-foreground">Find existing accounts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="recent" className="w-full">
            <TabsList>
              <TabsTrigger value="recent">Recent Transactions</TabsTrigger>
              <TabsTrigger value="pending">Pending Verification</TabsTrigger>
              <TabsTrigger value="reports">Daily Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Transactions</CardTitle>
                  <CardDescription>3 transactions processed today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTransactions.map((txn) => (
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
                            <p className="font-semibold">{txn.customer}</p>
                            <p className="text-sm text-muted-foreground">
                              {txn.type} • {txn.time}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₦{txn.amount.toLocaleString()}</p>
                          <Badge variant={txn.status === "completed" ? "default" : "secondary"} className="text-xs">
                            {txn.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending">
              <Card>
                <CardHeader>
                  <CardTitle>Pending KYC Verification</CardTitle>
                  <CardDescription>2 customers awaiting verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Customer verification queue will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Summary</CardTitle>
                  <CardDescription>Today's metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Customers Onboarded</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Sales</p>
                      <p className="text-2xl font-bold">₦520K</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Commission Earned</p>
                      <p className="text-2xl font-bold">₦15,600</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
