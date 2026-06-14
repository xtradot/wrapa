import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, User, Mail, Phone, MapPin, DollarSign, Users, Trophy, Calendar } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agent Details - Tenant Admin",
  description: "View agent details and performance",
}

export default function TenantAgentDetailPage({ params }: { params: { id: string } }) {
  const agent = {
    id: params.id,
    name: "Adebayo Adeleke",
    email: "adebayo.adeleke@email.com",
    phone: "+234 803 123 4567",
    location: "Lagos, Nigeria",
    rank: "Gold Agent",
    joinDate: "15 Jan 2024",
    status: "active",
    nin: "12345678901",
    totalSales: 156,
    totalCommission: 4250000,
    activeCustomers: 124,
    avgMonthlyCommission: 385000,
  }

  const salesHistory = [
    {
      id: "1",
      policyNumber: "POL-12345678",
      customer: "John Doe",
      product: "Motor Insurance",
      premium: 85000,
      commission: 12750,
      date: "10 Dec 2024",
    },
    {
      id: "2",
      policyNumber: "POL-87654321",
      customer: "Jane Smith",
      product: "Health Insurance",
      premium: 125000,
      commission: 18750,
      date: "08 Dec 2024",
    },
    {
      id: "3",
      policyNumber: "POL-11223344",
      customer: "Bob Johnson",
      product: "Home Insurance",
      premium: 65000,
      commission: 9750,
      date: "05 Dec 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/agents">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{agent.name}</h1>
            <Badge className="bg-yellow-500/10 text-yellow-700">{agent.rank}</Badge>
            <Badge className="bg-green-500/10 text-green-700">Active</Badge>
          </div>
          <p className="text-muted-foreground mt-1">Agent ID: {agent.id}</p>
        </div>
        <Button variant="outline" className="bg-transparent">
          Suspend Agent
        </Button>
      </div>

      {/* Performance Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.totalSales}</div>
            <p className="text-xs text-muted-foreground mt-1">Policies sold</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{(agent.totalCommission / 1000000).toFixed(2)}M</div>
            <p className="text-xs text-muted-foreground mt-1">Lifetime earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{agent.activeCustomers}</div>
            <p className="text-xs text-muted-foreground mt-1">Customer base</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Avg</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{agent.avgMonthlyCommission.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Commission per month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Agent Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Agent Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-semibold">{agent.name}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-sm break-all">{agent.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">{agent.phone}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{agent.location}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">NIN</p>
                <p className="font-mono font-semibold">{agent.nin}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Join Date</p>
                <p className="font-semibold">{agent.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sales History */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="recent">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="recent">Recent Sales</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="recent" className="space-y-3 mt-0">
                {salesHistory.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{sale.product}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Customer: {sale.customer}</p>
                      <p className="text-xs text-muted-foreground font-mono">Policy: {sale.policyNumber}</p>
                      <p className="text-xs text-muted-foreground mt-1">{sale.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Premium</p>
                      <p className="font-semibold">₦{sale.premium.toLocaleString()}</p>
                      <p className="text-xs text-green-600 mt-1">Comm: ₦{sale.commission.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="performance" className="mt-0">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Policies Sold</p>
                    <p className="text-2xl font-bold">{agent.totalSales}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Total Commission Earned</p>
                    <p className="text-2xl font-bold">₦{agent.totalCommission.toLocaleString()}</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Average Monthly Commission</p>
                    <p className="text-2xl font-bold">₦{agent.avgMonthlyCommission.toLocaleString()}</p>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/tenant/agents">Back to Agents</Link>
        </Button>
        <Button variant="outline" className="bg-transparent">
          View Sales
        </Button>
        <Button variant="outline" className="bg-transparent">
          Adjust Commission
        </Button>
      </div>
    </div>
  )
}
