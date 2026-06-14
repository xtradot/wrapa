import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Shield, User, CheckCircle, XCircle, FileText } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audit Trail - WRAPA",
  description: "Complete audit trail of all claim actions",
}

export default function AuditTrailPage() {
  const auditEntries = [
    {
      id: "CLM-12350",
      timestamp: "15 Dec 2024, 02:45 PM",
      action: "Second Approval",
      actor: "Michael Obi",
      role: "Claims Approver",
      amount: 2500000,
      status: "approved",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: "CLM-12350",
      timestamp: "15 Dec 2024, 11:30 AM",
      action: "First Approval",
      actor: "David Eze",
      role: "Claims Officer",
      amount: 2500000,
      status: "pending-second-approval",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      id: "CLM-12351",
      timestamp: "15 Dec 2024, 10:15 AM",
      action: "Claim Rejected",
      actor: "Sarah Okonkwo",
      role: "Claims Officer",
      amount: 180000,
      status: "rejected",
      icon: XCircle,
      color: "text-red-600",
    },
    {
      id: "CLM-12349",
      timestamp: "14 Dec 2024, 04:30 PM",
      action: "Review Completed",
      actor: "David Eze",
      role: "Claims Officer",
      amount: 3200000,
      status: "pending-approval",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      id: "CLM-12348",
      timestamp: "14 Dec 2024, 02:00 PM",
      action: "Claim Assigned",
      actor: "System",
      role: "Auto-Assignment",
      amount: 4500000,
      status: "under-review",
      icon: User,
      color: "text-gray-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Audit Trail</h1>
        <p className="text-muted-foreground mt-1">Complete immutable record of all claim processing actions</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by Claim ID, Actor, or Action..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Action Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="approve">Approvals</SelectItem>
                <SelectItem value="reject">Rejections</SelectItem>
                <SelectItem value="review">Reviews</SelectItem>
                <SelectItem value="assign">Assignments</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Log Entries</CardTitle>
          <CardDescription>All entries are cryptographically signed and immutable</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditEntries.map((entry, index) => {
              const Icon = entry.icon
              return (
                <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`h-10 w-10 rounded-full bg-${entry.color.split("-")[1]}-100 dark:bg-${entry.color.split("-")[1]}-900/20 flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`h-5 w-5 ${entry.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono font-semibold text-sm">{entry.id}</span>
                          <Badge variant="outline" className="text-xs">
                            {entry.action}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{entry.timestamp}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm">
                            <span className="font-medium">{entry.actor}</span>
                            <span className="text-muted-foreground"> • {entry.role}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₦{entry.amount.toLocaleString()}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {entry.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/officer/audit/${entry.id}`}>View Full Audit Trail</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle>Export Audit Data</CardTitle>
          <CardDescription>Generate compliance-ready audit reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button variant="outline">Export Current View (PDF)</Button>
            <Button variant="outline">Export Current View (CSV)</Button>
            <Button variant="outline">Export Full Audit Trail</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
