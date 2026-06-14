import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, Mail, Shield, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team Member Details - Tenant Admin",
  description: "View team member details",
}

export default function TenantTeamMemberDetailPage({ params }: { params: { id: string } }) {
  const member = {
    id: params.id,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Product Manager",
    status: "active",
    joinDate: "15 Jan 2024",
    lastActive: "12 Dec 2024",
    permissions: ["Manage Products", "View Analytics", "Manage Agents", "View Reports"],
  }

  const activityLog = [
    { date: "12 Dec 2024", action: "Updated product: Motor Insurance", time: "14:30" },
    { date: "11 Dec 2024", action: "Approved new agent application", time: "10:15" },
    { date: "10 Dec 2024", action: "Generated monthly report", time: "16:45" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/team">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <Badge className="bg-blue-500/10 text-blue-700">{member.role}</Badge>
            <Badge className="bg-green-500/10 text-green-700">Active</Badge>
          </div>
          <p className="text-muted-foreground mt-1">{member.email}</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          Edit Access
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Member Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Member Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-semibold">{member.name}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-sm break-all">{member.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-semibold">{member.role}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Join Date</p>
                <p className="font-semibold">{member.joinDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Last Active</p>
                <p className="font-semibold">{member.lastActive}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permissions & Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              {member.permissions.map((permission, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <p className="text-sm font-medium">{permission}</p>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div>
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {activityLog.map((activity, index) => (
                  <div key={index} className="flex gap-4 pb-3 border-b last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.date} at {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/tenant/team">Back to Team</Link>
        </Button>
        <Button variant="outline" className="bg-transparent">
          Edit Permissions
        </Button>
        <Button variant="destructive">Deactivate</Button>
      </div>
    </div>
  )
}
