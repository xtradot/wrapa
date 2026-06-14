import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UserCog, Search, UserPlus, Mail, Shield, Edit } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Team Management - Tenant Dashboard",
  description: "Manage your admin team members",
}

export default function TenantTeamPage() {
  const teamMembers = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@axamansard.com",
      role: "tenant-super-admin",
      status: "active",
      joinedDate: "2023-01-15",
    },
    {
      id: "2",
      name: "John Product Manager",
      email: "john@axamansard.com",
      role: "tenant-product-manager",
      status: "active",
      joinedDate: "2023-03-20",
    },
    {
      id: "3",
      name: "Sarah Agent Manager",
      email: "sarah@axamansard.com",
      role: "tenant-agent-manager",
      status: "active",
      joinedDate: "2023-05-10",
    },
    {
      id: "4",
      name: "Mike Finance Manager",
      email: "mike@axamansard.com",
      role: "tenant-finance-manager",
      status: "active",
      joinedDate: "2023-06-15",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-muted-foreground mt-1">Manage your admin team and roles</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <UserCog className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">4 roles assigned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <UserCog className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11</div>
            <p className="text-xs text-green-600">91.7% active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Invites</CardTitle>
            <Mail className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-orange-600">Awaiting acceptance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Super admins</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search team members..." className="pl-9" />
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage roles and permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCog className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{member.name}</span>
                      <Badge variant={member.status === "active" ? "default" : "secondary"}>{member.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {member.role.replace("tenant-", "").replace("-", " ")}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Joined {member.joinedDate}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
