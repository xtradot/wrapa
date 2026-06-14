"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, UserPlus, Phone, Mail, FileText, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CustomersPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")

  const handleContactCustomer = (customerName: string, phone: string) => {
    toast({
      title: "Contacting Customer",
      description: `Initiating call to ${customerName} at ${phone}`,
    })
  }

  const customers = [
    {
      id: "CUST001",
      name: "Chioma Okafor",
      phone: "+234 800 123 4567",
      email: "chioma@example.com",
      policies: 2,
      status: "active",
      lastContact: "2 days ago",
      totalValue: 245000,
    },
    {
      id: "CUST002",
      name: "Emeka Nwosu",
      phone: "+234 800 234 5678",
      email: "emeka@example.com",
      policies: 1,
      status: "active",
      lastContact: "1 week ago",
      totalValue: 120000,
    },
    {
      id: "CUST003",
      name: "Fatima Ibrahim",
      phone: "+234 800 345 6789",
      email: "fatima@example.com",
      policies: 3,
      status: "renewal-due",
      lastContact: "3 days ago",
      totalValue: 380000,
    },
    {
      id: "CUST004",
      name: "Adeola Williams",
      phone: "+234 800 456 7890",
      email: "adeola@example.com",
      policies: 1,
      status: "inactive",
      lastContact: "2 months ago",
      totalValue: 75000,
    },
  ]

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Customers</h1>
          <p className="text-muted-foreground mt-1">Manage your customer relationships</p>
        </div>
        <Button asChild>
          <Link href="/agent/new-sale">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, phone, or email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Renewal Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">23</div>
          </CardContent>
        </Card>
      </div>

      {/* Customer List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Directory</CardTitle>
          <CardDescription>{filteredCustomers.length} customers found</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Customers</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="renewal">Renewal Due</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {filteredCustomers.map((customer) => (
                <div key={customer.id} className="p-4 border rounded-lg hover:border-primary transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{customer.name}</h4>
                        <Badge
                          variant={
                            customer.status === "active"
                              ? "default"
                              : customer.status === "renewal-due"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {customer.status === "renewal-due" ? "Renewal Due" : customer.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          {customer.policies} active {customer.policies === 1 ? "policy" : "policies"}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          Last contact: {customer.lastContact}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                      <p className="text-xl font-bold">₦{customer.totalValue.toLocaleString()}</p>
                      <div className="flex gap-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => router.push(`/agent/customers/${customer.id}`)}
                        >
                          View
                        </Button>
                        <Button size="sm" onClick={() => handleContactCustomer(customer.name, customer.phone)}>
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
