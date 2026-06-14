import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, ArrowDownLeft, ArrowUpRight, Calendar, Hash, User } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transaction Details - Agent Wallet",
  description: "View transaction details",
}

export default function WalletTransactionDetailPage({ params }: { params: { id: string } }) {
  const transaction = {
    id: params.id,
    type: "commission",
    amount: 12500,
    description: "Commission from Motor Insurance sale",
    date: "10 Dec 2024",
    time: "14:30:00",
    status: "completed",
    saleId: "SALE-001",
    policyNumber: "POL-45678901",
    customer: "John Doe",
    premium: 250000,
    commissionRate: 5,
    reference: "TXN-12345678",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/agent/wallet">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Transaction Details</h1>
          <p className="text-muted-foreground mt-1">Reference: {transaction.reference}</p>
        </div>
      </div>

      {/* Status Card */}
      <Card className="border-green-500/50 bg-green-500/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
              {transaction.type === "commission" ? (
                <ArrowDownLeft className="h-8 w-8 text-green-600" />
              ) : (
                <ArrowUpRight className="h-8 w-8 text-orange-600" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold">₦{transaction.amount.toLocaleString()}</h2>
                <Badge className="bg-green-500/10 text-green-700">Completed</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {transaction.date} at {transaction.time}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Transaction Information */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-mono font-semibold">{transaction.id}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Reference</p>
                <p className="font-mono font-semibold">{transaction.reference}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold">{transaction.date}</p>
                <p className="text-sm text-muted-foreground">{transaction.time}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge className="bg-green-500/10 text-green-700">Completed</Badge>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-semibold capitalize">{transaction.type}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sale Information */}
        <Card>
          <CardHeader>
            <CardTitle>Sale Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Sale ID</p>
                <p className="font-mono font-semibold">{transaction.saleId}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-mono font-semibold">{transaction.policyNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Customer</p>
                <p className="font-semibold">{transaction.customer}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="font-semibold">{transaction.description}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href={`/agent/sales/${transaction.saleId}`}>View Sale Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Commission Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Commission Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Premium Amount</span>
            <span className="font-semibold">₦{transaction.premium.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Commission Rate</span>
            <span className="font-semibold">{transaction.commissionRate}%</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span className="font-semibold">Commission Earned</span>
            <span className="text-xl font-bold">₦{transaction.amount.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/agent/wallet">Back to Wallet</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href={`/agent/sales/${transaction.saleId}`}>View Sale</Link>
        </Button>
      </div>
    </div>
  )
}
