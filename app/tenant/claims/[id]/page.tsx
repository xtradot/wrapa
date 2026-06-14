import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, User, Calendar, DollarSign, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claim Details - Tenant Admin",
  description: "View claim details",
}

export default function TenantClaimDetailPage({ params }: { params: { id: string } }) {
  const claim = {
    id: params.id,
    claimNumber: params.id,
    type: "Motor Insurance",
    status: "approved",
    customer: "John Doe",
    policyNumber: "POL-12345678",
    incidentDate: "01 Dec 2024",
    filedDate: "02 Dec 2024",
    approvedDate: "10 Dec 2024",
    claimAmount: 150000,
    approvedAmount: 145000,
    description: "Accident damage to front bumper and headlight",
    officer: "Officer Mike",
  }

  const timeline = [
    { date: "10 Dec 2024", event: "Claim Approved", description: "Approved for payout of ₦145,000" },
    { date: "05 Dec 2024", event: "Assessment Completed", description: "Vehicle inspection done" },
    { date: "03 Dec 2024", event: "Under Review", description: "Assigned to claims officer" },
    { date: "02 Dec 2024", event: "Claim Filed", description: "Claim submitted by customer" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/claims">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{claim.type} Claim</h1>
            <Badge className="bg-green-500/10 text-green-700">Approved</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Claim: {claim.claimNumber}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Claim Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Claim Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Claim Number</p>
                <p className="font-mono font-semibold">{claim.claimNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-mono font-semibold">{claim.policyNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Customer</p>
                <p className="font-semibold">{claim.customer}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Incident Date</p>
                <p className="font-semibold">{claim.incidentDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Filed Date</p>
                <p className="font-semibold">{claim.filedDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Claimed Amount</p>
                <p className="font-semibold">₦{claim.claimAmount.toLocaleString()}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Approved Amount</p>
                <p className="font-semibold">₦{claim.approvedAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details & Timeline */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="details">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="details" className="space-y-4 mt-0">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Description</p>
                  <p className="text-sm">{claim.description}</p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Claims Officer</p>
                  <p className="font-semibold">{claim.officer}</p>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Approval Date</p>
                  <p className="font-semibold">{claim.approvedDate}</p>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-3 mt-0">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{item.event}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
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
          <Link href="/tenant/claims">Back to Claims</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href={`/tenant/policies/${claim.policyNumber}`}>View Policy</Link>
        </Button>
      </div>
    </div>
  )
}
