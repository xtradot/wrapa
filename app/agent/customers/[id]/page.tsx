import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, MapPin, Shield, FileText, Edit } from "lucide-react"

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  // Mock customer data
  const customer = {
    id: params.id,
    name: "Adaeze Okonkwo",
    email: "adaeze.okonkwo@example.com",
    phone: "+234 803 456 7890",
    address: "15 Victoria Island, Lagos, Nigeria",
    joinDate: "2024-01-15",
    status: "Active",
    totalPolicies: 2,
    totalPremium: "₦450,000",
  }

  const policies = [
    {
      id: "POL-001",
      type: "Motor Insurance",
      premium: "₦250,000",
      status: "Active",
      expiryDate: "2025-06-30",
    },
    {
      id: "POL-002",
      type: "Health Insurance",
      premium: "₦200,000",
      status: "Active",
      expiryDate: "2025-08-15",
    },
  ]

  const activities = [
    { date: "2024-12-01", action: "Policy Renewed", detail: "Motor Insurance - POL-001" },
    { date: "2024-11-15", action: "Payment Received", detail: "₦250,000" },
    { date: "2024-10-20", action: "Claim Filed", detail: "CLM-456 - Approved" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/agent/customers">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{customer.name}</h1>
            <p className="text-muted-foreground">Customer ID: {customer.id}</p>
          </div>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Edit Customer
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="default">{customer.status}</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{customer.totalPolicies}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{customer.totalPremium}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Customer Since</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{new Date(customer.joinDate).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{customer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{customer.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{customer.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-4">
          {policies.map((policy) => (
            <Card key={policy.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>{policy.type}</CardTitle>
                      <p className="text-sm text-muted-foreground">{policy.id}</p>
                    </div>
                  </div>
                  <Badge>{policy.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Annual Premium</p>
                    <p className="text-lg font-semibold">{policy.premium}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Expiry Date</p>
                    <p className="text-lg font-semibold">{policy.expiryDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No notes added yet. Add notes to track important customer information.
              </p>
              <Button className="mt-4">Add Note</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
