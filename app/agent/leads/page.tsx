"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Search, Phone, Mail, MessageSquare, Calendar, Clock, TrendingUp, AlertCircle } from "lucide-react"

export default function LeadsManagementPage() {
  const handleAddLead = () => {
    alert("Add new lead dialog would open here")
  }

  const handleCall = (name: string) => {
    alert(`Initiating call to ${name}...`)
  }

  const handleMessage = (name: string) => {
    alert(`Opening message dialog for ${name}...`)
  }

  const handleEmail = (name: string) => {
    alert(`Opening email composer for ${name}...`)
  }

  const handleSchedule = (name: string) => {
    alert(`Opening scheduler for ${name}...`)
  }

  const handleConvertToSale = (name: string) => {
    alert(`Converting ${name} to sale...`)
    window.location.href = "/agent/new-sale"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Lead Management</h1>
          <p className="text-muted-foreground mt-1">Track and convert your sales opportunities</p>
        </div>
        <Button onClick={handleAddLead}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Lead
        </Button>
      </div>

      {/* Lead Pipeline Overview */}
      <div className="grid gap-4 md:grid-cols-5">
        {[
          { stage: "New", count: 24, value: 1200000, color: "bg-blue-500" },
          { stage: "Contacted", count: 18, value: 900000, color: "bg-purple-500" },
          { stage: "Qualified", count: 12, value: 720000, color: "bg-yellow-500" },
          { stage: "Proposal", count: 8, value: 480000, color: "bg-orange-500" },
          { stage: "Won", count: 15, value: 1500000, color: "bg-green-500" },
        ].map((stage) => (
          <Card key={stage.stage} className="relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 ${stage.color}`} />
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{stage.stage}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stage.count}</div>
              <p className="text-xs text-muted-foreground mt-1">₦{stage.value.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search leads by name, phone, or email..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="proposal">Proposal Sent</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="value">Highest Value</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Leads (62)</TabsTrigger>
          <TabsTrigger value="converted">Converted (15)</TabsTrigger>
          <TabsTrigger value="lost">Lost (8)</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {[
            {
              name: "Adebayo Thompson",
              phone: "+234 803 456 7890",
              email: "adebayo.t@email.com",
              product: "Motor Insurance",
              value: 85000,
              stage: "Qualified",
              priority: "high",
              lastContact: "2 hours ago",
              nextAction: "Send quote",
              score: 85,
            },
            {
              name: "Blessing Okoro",
              phone: "+234 805 123 4567",
              email: "blessing.o@email.com",
              product: "Health Insurance",
              value: 150000,
              stage: "Proposal",
              priority: "high",
              lastContact: "1 day ago",
              nextAction: "Follow up on quote",
              score: 92,
            },
            {
              name: "Chukwudi Eze",
              phone: "+234 807 890 1234",
              email: "chukwudi.e@email.com",
              product: "Travel Insurance",
              value: 25000,
              stage: "Contacted",
              priority: "medium",
              lastContact: "3 days ago",
              nextAction: "Schedule callback",
              score: 68,
            },
          ].map((lead) => (
            <Card key={lead.email} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{lead.name}</h3>
                      <Badge variant={lead.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                        {lead.priority} priority
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {lead.stage}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {lead.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {lead.email}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Product Interest:</span>
                        <span className="font-medium ml-2">{lead.product}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Est. Value:</span>
                        <span className="font-medium ml-2">₦{lead.value.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Lead Score:</span>
                        <span className="font-medium ml-2">{lead.score}/100</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-sm text-right">
                      <p className="text-muted-foreground">Last Contact</p>
                      <p className="font-medium">{lead.lastContact}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{lead.nextAction}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  <Button size="sm" variant="default" onClick={() => handleCall(lead.name)}>
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleMessage(lead.name)}>
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEmail(lead.name)}>
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleSchedule(lead.name)}>
                    <Calendar className="h-3 w-3 mr-1" />
                    Schedule
                  </Button>
                  <Button size="sm" className="ml-auto" onClick={() => handleConvertToSale(lead.name)}>
                    Convert to Sale
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="converted">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">
                15 leads successfully converted to customers this month
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lost">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">8 leads marked as lost</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Lead Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Insights & Recommendations</CardTitle>
          <CardDescription>AI-powered insights to help you convert more leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">High Conversion Opportunity</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  3 leads in "Proposal" stage for over 5 days. Consider sending a follow-up offer with a small discount
                  to close the deal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Action Required</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  7 new leads haven't been contacted yet. Reach out within 24 hours to maximize conversion rates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
