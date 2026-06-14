import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Calendar, CheckCircle, Clock, AlertCircle, CreditCard, Plus } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payments - WRAPA Dashboard",
  description: "Manage your premium payments and transaction history",
}

const upcomingPayments = [
  {
    id: "PAY-001",
    policyNumber: "POL-12345678",
    type: "Motor Insurance",
    provider: "AXA Mansard",
    amount: 45000,
    dueDate: "30 Dec 2024",
    status: "pending",
    daysUntilDue: 15,
  },
  {
    id: "PAY-002",
    policyNumber: "POL-87654321",
    type: "Health Insurance",
    provider: "Leadway Assurance",
    amount: 85000,
    dueDate: "15 Jan 2025",
    status: "pending",
    daysUntilDue: 30,
  },
]

const paymentHistory = [
  {
    id: "TXN-12345678",
    policyNumber: "POL-12345678",
    type: "Motor Insurance",
    provider: "AXA Mansard",
    amount: 45000,
    date: "15 Mar 2024",
    status: "completed",
    method: "Card",
    reference: "REF-ABC123",
  },
  {
    id: "TXN-87654321",
    policyNumber: "POL-87654321",
    type: "Health Insurance",
    provider: "Leadway Assurance",
    amount: 85000,
    date: "01 Jul 2024",
    status: "completed",
    method: "Bank Transfer",
    reference: "REF-XYZ789",
  },
  {
    id: "TXN-11223344",
    policyNumber: "POL-11223344",
    type: "Home Insurance",
    provider: "AIICO Insurance",
    amount: 28000,
    date: "20 Feb 2024",
    status: "completed",
    method: "Card",
    reference: "REF-DEF456",
  },
]

const savedPaymentMethods = [
  {
    id: "PM-001",
    type: "card",
    last4: "4242",
    brand: "Visa",
    expiryMonth: "12",
    expiryYear: "2025",
    isDefault: true,
  },
  {
    id: "PM-002",
    type: "virtual_account",
    accountNumber: "3012345678",
    bankName: "Wema Bank",
    isDefault: false,
  },
]

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>
        <p className="text-muted-foreground mt-1">Manage your premium payments and transaction history</p>
      </div>

      {/* Payment Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦45,000</div>
            <p className="text-xs text-muted-foreground mt-1">Due in 15 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Paid This Year</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦158,000</div>
            <p className="text-xs text-muted-foreground mt-1">3 transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Due</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦130,000</div>
            <p className="text-xs text-muted-foreground mt-1">2 pending payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Payments</CardTitle>
          <CardDescription>Premium payments due soon</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingPayments.map((payment) => (
            <div
              key={payment.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{payment.type}</h4>
                  <Badge
                    variant={payment.daysUntilDue <= 15 ? "destructive" : "secondary"}
                    className={payment.daysUntilDue <= 15 ? "" : "bg-yellow-500/10 text-yellow-700"}
                  >
                    Due in {payment.daysUntilDue} days
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{payment.provider}</p>
                <p className="text-xs text-muted-foreground font-mono">Policy: {payment.policyNumber}</p>
                <div className="flex items-center gap-1 mt-2 text-sm">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs">Due: {payment.dueDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Amount Due</p>
                  <p className="text-xl font-bold">₦{payment.amount.toLocaleString()}</p>
                </div>
                <Button size="sm">Pay Now</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Saved Payment Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Saved Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods for faster checkout</CardDescription>
            </div>
            <Button size="sm" asChild>
              <Link href="/dashboard/payments/add-method">
                <Plus className="h-4 w-4 mr-2" />
                Add Method
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {savedPaymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  {method.type === "card" && (
                    <>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          {method.brand} •••• {method.last4}
                        </p>
                        {method.isDefault && (
                          <Badge variant="secondary" className="bg-green-500/10 text-green-700 text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </>
                  )}
                  {method.type === "virtual_account" && (
                    <>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold font-mono">{method.accountNumber}</p>
                        {method.isDefault && (
                          <Badge variant="secondary" className="bg-green-500/10 text-green-700 text-xs">
                            Default
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{method.bankName}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!method.isDefault && (
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Set as Default
                  </Button>
                )}
                <Button variant="ghost" size="sm">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Your past premium payments</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search payments..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{payment.type}</h4>
                      <Badge className="bg-green-500/10 text-green-700 text-xs">Completed</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{payment.provider}</p>
                    <p className="text-xs text-muted-foreground font-mono">Policy: {payment.policyNumber}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span>Paid: {payment.date}</span>
                      <span>•</span>
                      <span>Method: {payment.method}</span>
                      <span>•</span>
                      <span>Ref: {payment.reference}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-lg font-bold">₦{payment.amount.toLocaleString()}</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
