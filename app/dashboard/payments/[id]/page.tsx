import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, CheckCircle, CreditCard, Calendar, Hash, Building } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payment Details - WRAPA Dashboard",
  description: "View payment transaction details",
}

export default function PaymentDetailPage({ params }: { params: { id: string } }) {
  const payment = {
    id: params.id,
    policyNumber: "POL-12345678",
    policyType: "Motor Insurance",
    provider: "AXA Mansard",
    amount: 45000,
    date: "15 Mar 2024",
    time: "14:32:15",
    status: "completed",
    method: "Card",
    cardLast4: "4242",
    cardBrand: "Visa",
    reference: "REF-ABC123",
    transactionId: "TXN-12345678",
    narration: "Premium payment for Motor Insurance policy",
    receiptNumber: "RCP-2024-001",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/payments">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Payment Details</h1>
          <p className="text-muted-foreground mt-1">Transaction reference: {payment.reference}</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
      </div>

      {/* Status Card */}
      <Card className="border-green-500/50 bg-green-500/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold">₦{payment.amount.toLocaleString()}</h2>
                <Badge className="bg-green-500/10 text-green-700">Payment Successful</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Paid on {payment.date} at {payment.time}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-mono font-semibold">{payment.transactionId}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Payment Date</p>
                <p className="font-semibold">{payment.date}</p>
                <p className="text-sm text-muted-foreground">{payment.time}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-semibold">
                  {payment.cardBrand} •••• {payment.cardLast4}
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Payment Reference</p>
                <p className="font-mono font-semibold">{payment.reference}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Receipt Number</p>
                <p className="font-mono font-semibold">{payment.receiptNumber}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Information */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-mono font-semibold">{payment.policyNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Insurance Provider</p>
                <p className="font-semibold">{payment.provider}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Type</p>
                <p className="font-semibold">{payment.policyType}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Payment Purpose</p>
                <p className="font-semibold">{payment.narration}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href={`/dashboard/policies/${payment.policyNumber}`}>View Policy Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Amount Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Amount Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Premium Amount</span>
            <span className="font-semibold">₦{payment.amount.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Processing Fee</span>
            <span className="font-semibold">₦0</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span className="font-semibold">Total Paid</span>
            <span className="text-xl font-bold">₦{payment.amount.toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/dashboard/payments">Back to Payments</Link>
        </Button>
        <Button variant="outline" className="bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
      </div>
    </div>
  )
}
