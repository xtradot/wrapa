import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Building, Mail, Phone, Users, Shield, DollarSign, Calendar, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tenant Details - Platform Admin",
  description: "View tenant insurance company details",
}

export default function PlatformTenantDetailPage({ params }: { params: { id: string } }) {
  const tenant = {
    id: params.id,
    name: "AXA Mansard Insurance",
    email: "contact@axamansard.com",
    phone: "+234 1 234 5678",
    country: "Nigeria",
    status: "active",
    onboardedDate: "15 Jan 2024",
    totalUsers: 156,
    totalAgents: 89,
    totalPolicies: 12450,
    totalRevenue: 2500000000,
    monthlyRevenue: 185000000,
    subscription: "Enterprise",
  }

  const stats = [
    { label: "Active Policies", value: "12,450", icon: Shield },
    { label: "Total Users", value: "156", icon: Users },
    { label: "Agents", value: "89", icon: Users },
    { label: "Monthly Revenue", value: "₦185M", icon: DollarSign },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/platform/tenants">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{tenant.name}</h1>
            <Badge className="bg-green-500/10 text-green-700">Active</Badge>
            <Badge variant="secondary">{tenant.subscription}</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Tenant ID: {tenant.id}</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          Manage Access
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Tenant Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Tenant Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Company Name</p>
                <p className="font-semibold">{tenant.name}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-sm break-all">{tenant.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">{tenant.phone}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Country</p>
                <p className="font-semibold">{tenant.country}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Onboarded</p>
                <p className="font-semibold">{tenant.onboardedDate}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Subscription</p>
                <p className="font-semibold">{tenant.subscription}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance & Analytics */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="overview" className="space-y-4 mt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Policies</p>
                    <p className="text-2xl font-bold">{tenant.totalPolicies.toLocaleString()}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                    <p className="text-2xl font-bold">{tenant.totalUsers}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Active Agents</p>
                    <p className="text-2xl font-bold">{tenant.totalAgents}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <Badge className="bg-green-500/10 text-green-700">Active</Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="revenue" className="space-y-4 mt-0">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-2xl font-bold">₦{(tenant.totalRevenue / 1000000000).toFixed(2)}B</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold">₦{(tenant.monthlyRevenue / 1000000).toFixed(1)}M</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/platform/tenants">Back to Tenants</Link>
        </Button>
        <Button variant="outline" className="bg-transparent">
          View Users
        </Button>
        <Button variant="outline" className="bg-transparent">
          View Analytics
        </Button>
      </div>
    </div>
  )
}
