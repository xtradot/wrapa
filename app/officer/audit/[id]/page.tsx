import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, User, Clock, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AuditTrailPage({ params }: { params: { id: string } }) {
  const auditLog = [
    {
      id: "AUD-001",
      timestamp: "15 Dec 2024, 02:45 PM",
      action: "Second Approval",
      actor: { name: "Michael Obi", role: "Claims Approver", id: "USR-002" },
      fromStatus: "pending-second-approval",
      toStatus: "approved",
      notes: "All documentation verified. Approved for payout.",
      ipAddress: "197.210.xxx.xxx",
      amount: 2500000,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: "AUD-002",
      timestamp: "15 Dec 2024, 11:30 AM",
      action: "First Approval",
      actor: { name: "David Eze", role: "Claims Officer", id: "USR-001" },
      fromStatus: "pending-approval",
      toStatus: "pending-second-approval",
      notes: "Claim validated. Assessment report confirms total loss. Forwarding for second approval.",
      ipAddress: "197.210.xxx.xxx",
      amount: 2500000,
      icon: Shield,
      color: "text-blue-600",
    },
    {
      id: "AUD-003",
      timestamp: "14 Dec 2024, 04:15 PM",
      action: "Review Completed",
      actor: { name: "David Eze", role: "Claims Officer", id: "USR-001" },
      fromStatus: "under-review",
      toStatus: "pending-approval",
      notes: "Evidence reviewed. Police report verified. Damage assessment completed.",
      ipAddress: "197.210.xxx.xxx",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      id: "AUD-004",
      timestamp: "12 Dec 2024, 09:00 AM",
      action: "Claim Assigned",
      actor: { name: "System", role: "Auto-Assignment", id: "SYS-001" },
      fromStatus: "submitted",
      toStatus: "under-review",
      notes: "Automatically assigned to David Eze based on workload distribution.",
      ipAddress: "System",
      icon: User,
      color: "text-gray-600",
    },
    {
      id: "AUD-005",
      timestamp: "10 Dec 2024, 09:30 AM",
      action: "Claim Submitted",
      actor: { name: "John Adebayo", role: "Customer", id: "CUST-12345" },
      fromStatus: "draft",
      toStatus: "submitted",
      notes: "Customer submitted claim with all required documents.",
      ipAddress: "105.112.xxx.xxx",
      icon: Clock,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="space-y-6 pb-8">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/officer/maker-checker">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Maker-Checker
        </Link>
      </Button>

      <div>
        <h1 className="text-3xl font-bold mb-2">Audit Trail</h1>
        <p className="text-muted-foreground">
          Complete immutable history for Claim ID: <span className="font-mono font-semibold">{params.id}</span>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Claim Lifecycle Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {auditLog.map((entry, index) => {
              const Icon = entry.icon
              return (
                <div key={entry.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-10 w-10 rounded-full bg-${entry.color.split("-")[1]}-100 dark:bg-${entry.color.split("-")[1]}-900/20 flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`h-5 w-5 ${entry.color}`} />
                    </div>
                    {index < auditLog.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-lg">{entry.action}</p>
                        <p className="text-sm text-muted-foreground">{entry.timestamp}</p>
                      </div>
                      {entry.amount && <p className="text-lg font-bold">₦{entry.amount.toLocaleString()}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Performed by</p>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{entry.actor.name}</p>
                          <Badge variant="outline" className="text-xs">
                            {entry.actor.role}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">ID: {entry.actor.id}</p>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Status Transition</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{entry.fromStatus}</Badge>
                          <span>→</span>
                          <Badge variant="default">{entry.toStatus}</Badge>
                        </div>
                      </div>
                    </div>

                    {entry.notes && (
                      <div className="bg-muted/50 rounded-lg p-3 mb-2">
                        <p className="text-sm">{entry.notes}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Audit ID: {entry.id}</span>
                      <span>IP: {entry.ipAddress}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mb-2" />
              <p className="font-semibold mb-1">Maker-Checker Verified</p>
              <p className="text-sm text-muted-foreground">Dual approval completed by independent officers</p>
            </div>

            <div className="p-4 border rounded-lg">
              <FileText className="h-8 w-8 text-blue-600 mb-2" />
              <p className="font-semibold mb-1">Audit Log Immutable</p>
              <p className="text-sm text-muted-foreground">All entries cryptographically signed</p>
            </div>

            <div className="p-4 border rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-2" />
              <p className="font-semibold mb-1">NAICOM Compliant</p>
              <p className="text-sm text-muted-foreground">Meets regulatory audit requirements</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="bg-transparent">
              Export Audit Trail (PDF)
            </Button>
            <Button variant="outline" className="bg-transparent">
              Download Compliance Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
