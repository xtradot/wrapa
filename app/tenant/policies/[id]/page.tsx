import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, User, Calendar, DollarSign, FileText } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Policy Details - Tenant Admin",
  description: "View policy details",
}

export default function TenantPolicyDetailPage({ params }: { params: { id: string } }) {
  const policy = {
    id: params.id,
    policyNumber: params.id,
    type: "Motor Insurance",
    status: "active",
    customer: "John Doe",
    customerEmail: "john.doe@email.com",
    customerPhone: "+234 803 123 4567",
    agent: "Adebayo Adeleke",
    agentId: "AGT-001",
    premium: 85000,
    startDate: "15 Mar 2024",
    endDate: "14 Mar 2025",
    issueDate: "15 Mar 2024",
    vehicle: "Toyota Corolla 2020",
    vehicleReg: "ABC-123-XY",
    sumInsured: 2500000,
  }

  const paymentHistory = [{ id: "1", date: "15 Mar 2024", amount: 85000, method: "Card", status: "completed" }]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/policies">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{policy.type}</h1>
            <Badge className="bg-green-500/10 text-green-700">Active</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Policy: {policy.policyNumber}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Policy Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Policy Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-mono font-semibold">{policy.policyNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Type</p>
                <p className="font-semibold">{policy.type}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-semibold">{policy.startDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-semibold">{policy.endDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Premium</p>
                <p className="font-semibold">₦{policy.premium.toLocaleString()}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Sum Insured</p>
                <p className="font-semibold">₦{policy.sumInsured.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer & Agent Information */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="customer">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="agent">Agent</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="customer" className="space-y-4 mt-0">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Customer Name</p>
                    <p className="font-semibold">{policy.customer}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold text-sm">{policy.customerEmail}</p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-semibold">{policy.customerPhone}</p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Vehicle</p>
                  <p className="font-semibold">{policy.vehicle}</p>
                  <p className="text-sm text-muted-foreground font-mono mt-1">{policy.vehicleReg}</p>
                </div>
              </TabsContent>

              <TabsContent value="agent" className="space-y-4 mt-0">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Agent Name</p>
                  <p className="font-semibold">{policy.agent}</p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Agent ID</p>
                  <p className="font-mono font-semibold">{policy.agentId}</p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={`/tenant/agents/${policy.agentId}`}>View Agent Profile</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="payments" className="space-y-3 mt-0">
                {paymentHistory.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{payment.date}</p>
                      <p className="text-xs text-muted-foreground">Method: {payment.method}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₦{payment.amount.toLocaleString()}</p>
                      <Badge className="bg-green-500/10 text-green-700 text-xs mt-1">Completed</Badge>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/tenant/policies">Back to Policies</Link>
        </Button>
        <Button variant="outline" className="bg-transparent">
          Cancel Policy
        </Button>
      </div>
    </div>
  )
}
