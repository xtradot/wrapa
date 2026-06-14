import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Search, DollarSign, Eye } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Approved Claims - WRAPA",
  description: "Manage approved claims and process payouts",
}

const approvedClaims = [
  {
    id: "CLM-12340",
    customer: "John Adebayo",
    type: "Motor Insurance",
    provider: "AXA Mansard",
    amount: 450000,
    approvedDate: "15 Dec 2024",
    paymentStatus: "pending",
  },
  {
    id: "CLM-12341",
    customer: "Fatima Mohammed",
    type: "Health Insurance",
    provider: "Leadway",
    amount: 320000,
    approvedDate: "14 Dec 2024",
    paymentStatus: "pending",
  },
  {
    id: "CLM-12342",
    customer: "Chidi Okafor",
    type: "Home Insurance",
    provider: "AIICO",
    amount: 680000,
    approvedDate: "13 Dec 2024",
    paymentStatus: "processing",
  },
  {
    id: "CLM-12343",
    customer: "Aisha Ibrahim",
    type: "Motor Insurance",
    provider: "Custodian",
    amount: 150000,
    approvedDate: "12 Dec 2024",
    paymentStatus: "paid",
  },
]

export default function ApprovedClaimsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Approved Claims</h1>
          <p className="text-muted-foreground mt-1">Manage approved claims and process payouts</p>
        </div>
        <Button>
          <DollarSign className="h-4 w-4 mr-2" />
          Process Batch Payout (5)
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by claim ID or customer name..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending Payment</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {approvedClaims.map((claim) => (
          <Card key={claim.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono font-semibold">{claim.id}</span>
                        <Badge
                          variant={
                            claim.paymentStatus === "paid"
                              ? "secondary"
                              : claim.paymentStatus === "processing"
                                ? "default"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {claim.paymentStatus === "paid"
                            ? "Paid"
                            : claim.paymentStatus === "processing"
                              ? "Processing"
                              : "Pending Payment"}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{claim.type}</p>
                      <p className="text-xs text-muted-foreground">{claim.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">₦{claim.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Approved {claim.approvedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Customer: {claim.customer}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent" asChild>
                        <Link href={`/officer/review/${claim.id}`}>
                          <Eye className="h-3 w-3 mr-1" />
                          View Details
                        </Link>
                      </Button>
                      {claim.paymentStatus === "pending" && (
                        <Button size="sm">
                          <DollarSign className="h-3 w-3 mr-1" />
                          Process Payment
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
