import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Download, User, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Audit Logs - WRAPA Admin",
  description: "View platform audit trail and activity logs",
}

export default function AuditPage() {
  const auditLogs = [
    {
      id: "AL-2024-001245",
      action: "Tenant Created",
      actor: "John Admin",
      role: "Super Admin",
      target: "NEM Insurance",
      timestamp: "2024-01-15 14:32:15",
      ipAddress: "197.210.52.143",
      status: "success",
    },
    {
      id: "AL-2024-001244",
      action: "User Role Changed",
      actor: "Sarah Manager",
      role: "Tenant Manager",
      target: "user@aiico.com.ng",
      timestamp: "2024-01-15 13:18:42",
      ipAddress: "105.112.34.87",
      status: "success",
    },
    {
      id: "AL-2024-001243",
      action: "Config Updated",
      actor: "Mike Support",
      role: "Support",
      target: "Payment Gateway Settings",
      timestamp: "2024-01-15 11:45:28",
      ipAddress: "197.210.52.143",
      status: "success",
    },
    {
      id: "AL-2024-001242",
      action: "Failed Login Attempt",
      actor: "Unknown",
      role: "N/A",
      target: "Platform Admin",
      timestamp: "2024-01-15 10:22:15",
      ipAddress: "41.203.78.91",
      status: "failed",
    },
    {
      id: "AL-2024-001241",
      action: "Report Generated",
      actor: "Jane Analyst",
      role: "Analyst",
      target: "Q4 Compliance Report",
      timestamp: "2024-01-15 09:15:33",
      ipAddress: "197.210.52.143",
      status: "success",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Audit Logs</h1>
          <p className="text-muted-foreground mt-1">Complete audit trail of platform activities</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Logs
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Activity Logs</CardTitle>
              <CardDescription>All platform actions and events</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search logs..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="login">Login</SelectItem>
                <SelectItem value="tenant">Tenant</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="config">Config</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={log.status === "success" ? "default" : "destructive"}>{log.action}</Badge>
                    <span className="text-sm font-medium">{log.target}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {log.actor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" /> {log.role}
                    </span>
                    <span>{log.timestamp}</span>
                    <span>IP: {log.ipAddress}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
