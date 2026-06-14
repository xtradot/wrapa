import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, FileText, User, Calendar, Globe, Hash } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audit Log Details - Platform Admin",
  description: "View audit log details",
}

export default function PlatformAuditDetailPage({ params }: { params: { id: string } }) {
  const log = {
    id: params.id,
    action: "User Created",
    actor: "admin@platform.com",
    actorRole: "Super Admin",
    target: "john.doe@email.com",
    targetType: "User",
    tenant: "AXA Mansard Insurance",
    tenantId: "TNT-001",
    timestamp: "12 Dec 2024 14:30:15",
    ipAddress: "197.210.76.45",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    location: "Lagos, Nigeria",
    status: "success",
    details: {
      userId: "USR-12345",
      userName: "John Doe",
      userEmail: "john.doe@email.com",
      userRole: "Policy Holder",
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/platform/audit">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{log.action}</h1>
            <Badge className="bg-green-500/10 text-green-700">Success</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Log ID: {log.id}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Action Information */}
        <Card>
          <CardHeader>
            <CardTitle>Action Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Action</p>
                <p className="font-semibold">{log.action}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Performed By</p>
                <p className="font-semibold">{log.actor}</p>
                <p className="text-sm text-muted-foreground">{log.actorRole}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Target</p>
                <p className="font-semibold">{log.target}</p>
                <p className="text-sm text-muted-foreground">{log.targetType}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Timestamp</p>
                <p className="font-semibold">{log.timestamp}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Session Information */}
        <Card>
          <CardHeader>
            <CardTitle>Session Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">IP Address</p>
                <p className="font-mono font-semibold">{log.ipAddress}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{log.location}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">User Agent</p>
                <p className="font-semibold text-sm break-all">{log.userAgent}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Tenant</p>
                <p className="font-semibold">{log.tenant}</p>
                <p className="text-sm text-muted-foreground font-mono">{log.tenantId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Details */}
      <Card>
        <CardHeader>
          <CardTitle>Action Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(log.details).map(([key, value]) => (
              <div key={key} className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                <p className="font-semibold break-all">{value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/platform/audit">Back to Audit Logs</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href={`/platform/tenants/${log.tenantId}`}>View Tenant</Link>
        </Button>
      </div>
    </div>
  )
}
