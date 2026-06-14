import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Calendar, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Renewals - WRAPA Dashboard",
  description: "Manage your policy renewals",
}

const renewals = [
  {
    id: "POL-11223344",
    type: "Home Insurance",
    provider: "AIICO Insurance",
    expiryDate: "20 Feb 2025",
    daysRemaining: 45,
    premium: 28000,
    status: "due-soon",
    autoRenew: false,
  },
  {
    id: "POL-12345678",
    type: "Motor Insurance",
    provider: "AXA Mansard",
    expiryDate: "15 Mar 2025",
    daysRemaining: 68,
    premium: 45000,
    status: "upcoming",
    autoRenew: true,
  },
  {
    id: "POL-87654321",
    type: "Health Insurance",
    provider: "Leadway Assurance",
    expiryDate: "30 Jun 2025",
    daysRemaining: 175,
    premium: 85000,
    status: "upcoming",
    autoRenew: false,
  },
]

export default function RenewalsPage() {
  const dueSoon = renewals.filter((r) => r.daysRemaining <= 60)
  const upcoming = renewals.filter((r) => r.daysRemaining > 60)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Policy Renewals</h1>
        <p className="text-muted-foreground mt-1">Manage your upcoming policy renewals</p>
      </div>

      {dueSoon.length > 0 && (
        <>
          <Card className="border-orange-500/50 bg-orange-500/5">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">Renewal Action Required</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    You have {dueSoon.length} {dueSoon.length === 1 ? "policy" : "policies"} expiring within the next 60
                    days. Renew now to avoid coverage gaps.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Due Soon</h2>
            {dueSoon.map((renewal) => (
              <Card key={renewal.id} className="border-orange-500/50">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="h-16 w-16 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="h-8 w-8 text-orange-600" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{renewal.type}</h3>
                            <Badge variant="destructive" className="text-xs">
                              {renewal.daysRemaining} days left
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{renewal.provider}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                          <p className="font-mono font-medium">{renewal.id}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Expires On</p>
                          <p className="font-medium text-orange-600">{renewal.expiryDate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Renewal Premium</p>
                          <p className="font-medium">₦{renewal.premium.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs mb-1">Auto-Renew</p>
                          <p className="font-medium">{renewal.autoRenew ? "Enabled" : "Disabled"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 shrink-0">
                      <Button size="sm">Renew Now</Button>
                      <Button variant="outline" size="sm" asChild className="bg-transparent">
                        <Link href={`/dashboard/policies/${renewal.id}`}>View Policy</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Renewals</h2>
        {upcoming.map((renewal) => (
          <Card key={renewal.id}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{renewal.type}</h3>
                        <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-700">
                          {renewal.daysRemaining} days
                        </Badge>
                        {renewal.autoRenew && (
                          <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Auto-Renew
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{renewal.provider}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Policy Number</p>
                      <p className="font-mono font-medium">{renewal.id}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Expires On</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <p className="font-medium">{renewal.expiryDate}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Renewal Premium</p>
                      <p className="font-medium">₦{renewal.premium.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Auto-Renew</p>
                      <p className="font-medium">{renewal.autoRenew ? "Enabled" : "Disabled"}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <Button variant="outline" size="sm" asChild className="bg-transparent">
                    <Link href={`/dashboard/policies/${renewal.id}`}>View Policy</Link>
                  </Button>
                  {!renewal.autoRenew && (
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Enable Auto-Renew
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
