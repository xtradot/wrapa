import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, Mail, Phone, Building, Shield, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Details - Platform Admin",
  description: "View platform user details",
}

export default function PlatformUserDetailPage({ params }: { params: { id: string } }) {
  const user = {
    id: params.id,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+234 803 123 4567",
    role: "Policy Holder",
    tenant: "AXA Mansard Insurance",
    tenantId: "TNT-001",
    country: "Nigeria",
    status: "active",
    joinDate: "15 Mar 2024",
    lastActive: "12 Dec 2024",
    totalPolicies: 3,
    totalClaims: 1,
  }

  const activityLog = [
    { date: "12 Dec 2024", action: "Logged in", time: "14:30" },
    { date: "10 Dec 2024", action: "Filed a claim", time: "10:15" },
    { date: "01 Dec 2024", action: "Purchased policy", time: "16:45" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/platform/users">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <Badge variant="secondary">{user.role}</Badge>
            <Badge className="bg-green-500/10 text-green-700">Active</Badge>
          </div>
          <p className="text-muted-foreground mt-1">User ID: {user.id}</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          Suspend User
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* User Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-sm break-all">{user.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">{user.phone}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Country</p>
                <p className="font-semibold">{user.country}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-semibold">{user.role}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Tenant</p>
                <p className="font-semibold">{user.tenant}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Join Date</p>
                <p className="font-semibold">{user.joinDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Last Active</p>
                <p className="font-semibold">{user.lastActive}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity & Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Policies</p>
                <p className="text-2xl font-bold">{user.totalPolicies}</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Total Claims</p>
                <p className="text-2xl font-bold">{user.totalClaims}</p>
              </div>
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
          <Link href="/platform/users">Back to Users</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href={`/platform/tenants/${user.tenantId}`}>View Tenant</Link>
        </Button>
        <Button variant="destructive">Suspend User</Button>
      </div>
    </div>
  )
}
