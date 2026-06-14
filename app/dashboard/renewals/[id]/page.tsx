import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Shield, Calendar, AlertCircle, CheckCircle, CreditCard } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Renewal Details - WRAPA Dashboard",
  description: "View policy renewal details",
}

export default function RenewalDetailPage({ params }: { params: { id: string } }) {
  const renewal = {
    id: params.id,
    policyNumber: params.id,
    type: "Motor Insurance",
    provider: "AXA Mansard",
    currentExpiryDate: "15 Mar 2025",
    renewalDate: "16 Mar 2025",
    daysRemaining: 68,
    currentPremium: 45000,
    renewalPremium: 47000,
    increase: 2000,
    increasePercentage: 4.4,
    autoRenew: true,
    paymentMethod: "Visa •••• 4242",
    status: "upcoming",
    coverageDetails: {
      thirdParty: "₦1,000,000",
      ownDamage: "₦2,500,000",
      personalAccident: "₦500,000",
    },
  }

  const statusColor =
    renewal.daysRemaining <= 30 ? "destructive" : renewal.daysRemaining <= 60 ? "default" : "secondary"

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/renewals">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Renewal Details</h1>
          <p className="text-muted-foreground mt-1">Policy: {renewal.policyNumber}</p>
        </div>
        <Button>Renew Now</Button>
      </div>

      {/* Status Card */}
      <Card className={renewal.daysRemaining <= 30 ? "border-orange-500/50 bg-orange-500/5" : ""}>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div
              className={`h-16 w-16 rounded-full flex items-center justify-center ${
                renewal.daysRemaining <= 30 ? "bg-orange-500/10" : "bg-primary/10"
              }`}
            >
              {renewal.daysRemaining <= 30 ? (
                <AlertCircle className="h-8 w-8 text-orange-600" />
              ) : (
                <Shield className="h-8 w-8 text-primary" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold">{renewal.type}</h2>
                <Badge variant={statusColor}>{renewal.daysRemaining} days until renewal</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Current policy expires on {renewal.currentExpiryDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Auto-Renew Setting */}
      <Card>
        <CardHeader>
          <CardTitle>Auto-Renewal Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">Automatic Renewal</h3>
                {renewal.autoRenew && (
                  <Badge className="bg-green-500/10 text-green-700">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Enabled
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Your policy will automatically renew on {renewal.renewalDate}
              </p>
            </div>
            <Switch checked={renewal.autoRenew} />
          </div>

          {renewal.autoRenew && (
            <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">Auto-renewal is active</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your policy will be automatically renewed using {renewal.paymentMethod}. You'll receive a confirmation
                  7 days before renewal.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Renewal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Renewal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Current Expiry Date</p>
                <p className="font-semibold">{renewal.currentExpiryDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Renewal Date</p>
                <p className="font-semibold">{renewal.renewalDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Insurance Provider</p>
                <p className="font-semibold">{renewal.provider}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <p className="font-semibold">{renewal.paymentMethod}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Premium Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current Premium</span>
                <span className="font-semibold">₦{renewal.currentPremium.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Renewal Premium</span>
                <span className="font-semibold">₦{renewal.renewalPremium.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-semibold">Increase</span>
                <div className="text-right">
                  <p className="font-bold">₦{renewal.increase.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">({renewal.increasePercentage}%)</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Total renewal amount</p>
              <p className="text-2xl font-bold">₦{renewal.renewalPremium.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coverage Details */}
      <Card>
        <CardHeader>
          <CardTitle>Coverage Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Third Party Liability</p>
              <p className="text-xl font-bold">{renewal.coverageDetails.thirdParty}</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Own Damage</p>
              <p className="text-xl font-bold">{renewal.coverageDetails.ownDamage}</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Personal Accident</p>
              <p className="text-xl font-bold">{renewal.coverageDetails.personalAccident}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/dashboard/renewals">Back to Renewals</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href={`/dashboard/policies/${renewal.policyNumber}`}>View Policy</Link>
        </Button>
        <Button>Renew Now</Button>
      </div>
    </div>
  )
}
