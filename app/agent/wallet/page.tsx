"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight, Calendar, Download, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AgentWalletPage() {
  const { toast } = useToast()
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  const handleWithdrawal = () => {
    const amount = Number.parseFloat(withdrawalAmount)
    if (!amount || amount < 5000) {
      toast({
        title: "Invalid Amount",
        description: "Minimum withdrawal amount is ₦5,000",
        variant: "destructive",
      })
      return
    }
    if (!selectedBank) {
      toast({
        title: "Select Bank Account",
        description: "Please select a bank account for withdrawal",
        variant: "destructive",
      })
      return
    }
    toast({
      title: "Withdrawal Requested",
      description: `Your withdrawal of ₦${amount.toLocaleString()} has been submitted for processing.`,
    })
    setWithdrawalAmount("")
    setSelectedBank("")
  }

  const handleDownloadStatement = () => {
    toast({
      title: "Downloading Statement",
      description: "Your transaction statement is being prepared...",
    })
  }

  const handleAddBankAccount = () => {
    toast({
      title: "Add Bank Account",
      description: "Bank account setup feature coming soon",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Wallet & Commission</h1>
          <p className="text-muted-foreground mt-1">Manage your earnings and withdrawals</p>
        </div>
        <Button onClick={handleWithdrawal}>
          <Plus className="mr-2 h-4 w-4" />
          Request Withdrawal
        </Button>
      </div>

      {/* Wallet Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦125,430</div>
            <p className="text-xs text-muted-foreground mt-1">Ready for withdrawal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Commission</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦48,200</div>
            <p className="text-xs text-muted-foreground mt-1">From 3 pending policies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦320,500</div>
            <p className="text-xs text-green-600 mt-1">+24% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦4.52M</div>
            <p className="text-xs text-muted-foreground mt-1">Lifetime earnings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your wallet</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" size="lg" onClick={handleWithdrawal}>
              <ArrowDownRight className="mr-2 h-4 w-4" />
              Withdraw Funds
            </Button>
            <Button
              className="w-full justify-start bg-transparent"
              variant="outline"
              size="lg"
              onClick={handleDownloadStatement}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Statement
            </Button>
            <Button
              className="w-full justify-start bg-transparent"
              variant="outline"
              size="lg"
              onClick={handleAddBankAccount}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Bank Account
            </Button>
          </CardContent>
        </Card>

        {/* Withdrawal Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Request Withdrawal</CardTitle>
            <CardDescription>Transfer funds to your bank account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₦)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">Available balance: ₦125,430 • Min withdrawal: ₦5,000</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bank">Bank Account</Label>
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger id="bank">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gtb">GTBank - 0123456789</SelectItem>
                  <SelectItem value="access">Access Bank - 9876543210</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-muted rounded-lg space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Withdrawal amount</span>
                <span className="font-medium">
                  ₦{withdrawalAmount ? Number.parseFloat(withdrawalAmount).toLocaleString() : "0.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Processing fee (1%)</span>
                <span className="font-medium">
                  ₦{withdrawalAmount ? (Number.parseFloat(withdrawalAmount) * 0.01).toLocaleString() : "0.00"}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-semibold">You will receive</span>
                <span className="font-semibold">
                  ₦{withdrawalAmount ? (Number.parseFloat(withdrawalAmount) * 0.99).toLocaleString() : "0.00"}
                </span>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handleWithdrawal}>
              Confirm Withdrawal
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Withdrawals are processed within 24 hours on business days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your commission and withdrawal records</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="commission">Commission</TabsTrigger>
              <TabsTrigger value="withdrawal">Withdrawals</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {[
                {
                  id: "TXN001",
                  type: "commission",
                  description: "Commission - Motor Insurance (Chioma Okafor)",
                  amount: 7500,
                  date: "12 Dec 2024",
                  status: "completed",
                },
                {
                  id: "TXN002",
                  type: "withdrawal",
                  description: "Withdrawal to GTBank",
                  amount: -50000,
                  date: "10 Dec 2024",
                  status: "completed",
                },
                {
                  id: "TXN003",
                  type: "commission",
                  description: "Commission - Health Insurance (Emeka Nwosu)",
                  amount: 12000,
                  date: "10 Dec 2024",
                  status: "pending",
                },
                {
                  id: "TXN004",
                  type: "commission",
                  description: "Commission - Travel Insurance (Fatima Ibrahim)",
                  amount: 2500,
                  date: "09 Dec 2024",
                  status: "completed",
                },
              ].map((txn) => (
                <div key={txn.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                        txn.type === "commission" ? "bg-green-500/10" : "bg-blue-500/10"
                      }`}
                    >
                      {txn.type === "commission" ? (
                        <ArrowUpRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{txn.description}</p>
                      <p className="text-xs text-muted-foreground">{txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${txn.amount > 0 ? "text-green-600" : "text-foreground"}`}>
                      {txn.amount > 0 ? "+" : ""}₦{Math.abs(txn.amount).toLocaleString()}
                    </p>
                    <Badge variant={txn.status === "completed" ? "default" : "secondary"} className="text-xs">
                      {txn.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="commission" className="mt-4">
              <p className="text-sm text-muted-foreground">Commission transactions will appear here</p>
            </TabsContent>

            <TabsContent value="withdrawal" className="mt-4">
              <p className="text-sm text-muted-foreground">Withdrawal transactions will appear here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
