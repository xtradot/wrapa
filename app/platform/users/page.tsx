import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Search, Eye, Shield, UserCheck } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Management - Platform Admin",
  description: "Manage all platform users",
}

export default function PlatformUsersPage() {
  const userStats = [
    { label: "Total Users", value: "22,570", change: "+1,245", icon: Users },
    { label: "Policy Holders", value: "18,420", change: "+980", icon: UserCheck },
    { label: "Agents", value: "3,250", change: "+185", icon: Shield },
    { label: "Admins", value: "900", change: "+80", icon: Shield },
  ]

  const recentUsers = [
    {
      id: "USR-12345",
      name: "John Okafor",
      email: "john.okafor@example.com",
      role: "Policy Holder",
      tenant: "AXA Mansard",
      status: "active",
      joinedDate: "Dec 15, 2024",
      policies: 3,
    },
    {
      id: "USR-12346",
      name: "Sarah Ibrahim",
      email: "sarah.ibrahim@example.com",
      role: "Agent",
      tenant: "Leadway Assurance",
      status: "active",
      joinedDate: "Dec 14, 2024",
      policies: 156,
    },
    {
      id: "USR-12347",
      name: "Emeka Nwosu",
      email: "emeka.nwosu@example.com",
      role: "Tenant Admin",
      tenant: "AIICO Insurance",
      status: "active",
      joinedDate: "Dec 13, 2024",
      policies: 0,
    },
    {
      id: "USR-12348",
      name: "Fatima Bello",
      email: "fatima.bello@example.com",
      role: "Policy Holder",
      tenant: "NEM Insurance",
      status: "pending",
      joinedDate: "Dec 12, 2024",
      policies: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-muted-foreground mt-1">Manage all users across the platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {userStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600">{stat.change} this month</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users by name, email, or ID..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Users
          </Button>
          <Button variant="outline" size="sm">
            Policy Holders
          </Button>
          <Button variant="outline" size="sm">
            Agents
          </Button>
          <Button variant="outline" size="sm">
            Admins
          </Button>
        </div>
      </div>

      {/* Recent Users */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>Latest user registrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{user.name}</h4>
                      <Badge variant={user.status === "active" ? "default" : "outline"}>{user.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.role} • {user.tenant}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-center sm:text-left">
                  <div>
                    <p className="text-xs text-muted-foreground">User ID</p>
                    <p className="text-sm font-semibold">{user.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Policies</p>
                    <p className="text-sm font-semibold">{user.policies}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{user.joinedDate}</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/platform/users/${user.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Distribution */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Users by Tenant</CardTitle>
            <CardDescription>Top tenants by user count</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { tenant: "AXA Mansard Insurance", users: 5234, percentage: 23 },
              { tenant: "Leadway Assurance", users: 4156, percentage: 18 },
              { tenant: "AIICO Insurance", users: 3542, percentage: 16 },
              { tenant: "Custodian Investment", users: 2890, percentage: 13 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.tenant}</p>
                  <div className="w-full bg-secondary h-2 rounded-full mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm font-semibold">{item.users.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users by Role</CardTitle>
            <CardDescription>User distribution across roles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { role: "Policy Holders", count: 18420, percentage: 81, color: "bg-blue-500" },
              { role: "Agents", count: 3250, percentage: 14, color: "bg-green-500" },
              { role: "Tenant Admins", count: 900, percentage: 4, color: "bg-purple-500" },
              { role: "Platform Admins", count: 42, percentage: 1, color: "bg-orange-500" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`h-3 w-3 rounded-full ${item.color}`} />
                  <p className="text-sm font-medium">{item.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{item.count.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
