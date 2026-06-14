import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MessageSquare, CheckCircle, Clock, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support Tickets - WRAPA Admin",
  description: "Manage platform support requests",
}

export default function SupportPage() {
  const tickets = [
    {
      id: "TKT-2024-00125",
      title: "Unable to onboard new tenant",
      tenant: "AXA Mansard Insurance",
      requester: "John Admin",
      priority: "high",
      status: "open",
      created: "2 hours ago",
      category: "Technical",
    },
    {
      id: "TKT-2024-00124",
      title: "Payment gateway integration issue",
      tenant: "Leadway Assurance",
      requester: "Sarah Manager",
      priority: "high",
      status: "in_progress",
      created: "5 hours ago",
      category: "Integration",
    },
    {
      id: "TKT-2024-00123",
      title: "Request for custom branding colors",
      tenant: "AIICO Insurance",
      requester: "Mike Support",
      priority: "medium",
      status: "open",
      created: "1 day ago",
      category: "Feature Request",
    },
    {
      id: "TKT-2024-00122",
      title: "Data export not working",
      tenant: "Custodian Investment",
      requester: "Jane Analyst",
      priority: "low",
      status: "resolved",
      created: "2 days ago",
      category: "Technical",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground mt-1">Manage platform support requests</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="h-9 px-4">
            12 Open
          </Badge>
          <Badge variant="outline" className="h-9 px-4">
            8 In Progress
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="open" className="space-y-4">
        <TabsList>
          <TabsTrigger value="open">Open (12)</TabsTrigger>
          <TabsTrigger value="in_progress">In Progress (8)</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tickets..." className="pl-9" />
          </div>
          <Button variant="outline">Filter by Priority</Button>
          <Button variant="outline">Filter by Category</Button>
        </div>

        <TabsContent value="open" className="space-y-4">
          {tickets
            .filter((t) => t.status === "open")
            .map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            ticket.priority === "high"
                              ? "destructive"
                              : ticket.priority === "medium"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                        <Badge variant="outline">{ticket.category}</Badge>
                        <span className="text-sm text-muted-foreground">{ticket.id}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{ticket.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {ticket.requester}
                        </span>
                        <span>{ticket.tenant}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {ticket.created}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button size="sm">Assign</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="in_progress" className="space-y-4">
          {tickets
            .filter((t) => t.status === "in_progress")
            .map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            ticket.priority === "high"
                              ? "destructive"
                              : ticket.priority === "medium"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                        <Badge variant="outline">{ticket.category}</Badge>
                        <span className="text-sm text-muted-foreground">{ticket.id}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{ticket.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {ticket.requester}
                        </span>
                        <span>{ticket.tenant}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {ticket.created}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button size="sm">Resolve</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {tickets
            .filter((t) => t.status === "resolved")
            .map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Resolved
                        </Badge>
                        <Badge variant="outline">{ticket.category}</Badge>
                        <span className="text-sm text-muted-foreground">{ticket.id}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{ticket.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {ticket.requester}
                        </span>
                        <span>{ticket.tenant}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {ticket.created}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
