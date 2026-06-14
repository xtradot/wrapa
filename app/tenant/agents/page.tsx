import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, UserPlus, Search, TrendingUp, Award, DollarSign, Eye, Mail } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agent Management - Tenant Dashboard",
  description: "Manage your insurance agents",
}

export default function TenantAgentsPage() {
  const agents = [
    {
      id: "AGT-001",
      name: "John Okafor",
      email: "john.okafor@example.com",
      phone: "+234 803 123 4567",
      rank: "Gold",
      status: "active",
      policies: 234,
      revenue: 12500000,
      commission: 1250000,
      joinedDate: "Jan 2024",
    },
    {
      id: "AGT-002",
      name: "Sarah Ibrahim",
      email: "sarah.ibrahim@example.com",
      phone: "+234 805 234 5678",
      rank: "Platinum",
      status: "active",
      policies: 456,
      revenue: 28900000,
      commission: 2890000,
      joinedDate: "Nov 2023",
    },
    {
      id: "AGT-003",
      name: "Emeka Nwosu",
      email: "emeka.nwosu@example.com",
      phone: "+234 807 345 6789",
      rank: "Silver",
      status: "active",
      policies: 128,
      revenue: 5400000,
      commission: 540000,
      joinedDate: "Mar 2024",
    },
    {
      id: "AGT-004",
      name: "Fatima Bello",
      email: "fatima.bello@example.com",
      phone: "+234 809 456 7890",
      rank: "Gold",
      status: "pending",
      policies: 0,
      revenue: 0,
      commission: 0,
      joinedDate: "Dec 2024",
    },
  ]

  const stats = [
    { label: "Total Agents", value: 156, change: "+12", icon: Users },
    { label: "Active Agents", value: 142, change: "91%", icon: TrendingUp },
    { label: "Total Revenue", value: "₦68.5M", change: "+15%", icon: DollarSign },
    { label: "Avg Performance", value: "87%", change: "+3%", icon: Award },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agent Management</h1>
          <p className="text-muted-foreground mt-1">Manage your sales agents and track performance</p>
        </div>
        <Button asChild>
          <Link href="/tenant/agents/invite">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Agent
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search agents by name, email, or ID..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Agents
          </Button>
          <Button variant="outline" size="sm">
            Active
          </Button>
          <Button variant="outline" size="sm">
            Pending
          </Button>
          <Button variant="outline" size="sm">
            Inactive
          </Button>
        </div>
      </div>

      {/* Agents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Agents</CardTitle>
          <CardDescription>Your registered insurance agents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {agent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">{agent.name}</h4>
                      <Badge
                        variant="secondary"
                        className={
                          agent.rank === "Platinum"
                            ? "bg-purple-500/10 text-purple-700"
                            : agent.rank === "Gold"
                              ? "bg-yellow-500/10 text-yellow-700"
                              : "bg-gray-500/10 text-gray-700"
                        }
                      >
                        {agent.rank}
                      </Badge>
                      <Badge variant={agent.status === "active" ? "default" : "outline"}>{agent.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{agent.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {agent.phone} • Joined {agent.joinedDate}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
                  <div>
                    <p className="text-xs text-muted-foreground">Policies</p>
                    <p className="text-sm font-semibold">{agent.policies}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-sm font-semibold">
                      {agent.revenue > 0 ? `₦${(agent.revenue / 1000000).toFixed(1)}M` : "₦0"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Commission</p>
                    <p className="text-sm font-semibold text-green-600">
                      {agent.commission > 0 ? `₦${(agent.commission / 1000000).toFixed(1)}M` : "₦0"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/tenant/agents/${agent.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
