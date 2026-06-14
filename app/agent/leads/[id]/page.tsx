"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  MapPin,
  User,
  Briefcase,
  DollarSign,
  MessageSquare,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function LeadDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [note, setNote] = useState("")

  const lead = {
    id: params.id,
    name: "Chioma Okafor",
    email: "chioma.okafor@email.com",
    phone: "+234 803 123 4567",
    company: "Technovate Solutions",
    position: "Business Owner",
    location: "Lagos, Nigeria",
    score: 85,
    stage: "qualified",
    source: "Website Form",
    assignedDate: "10 Dec 2024",
    lastContact: "12 Dec 2024",
    estimatedValue: 150000,
    productInterest: "Business Insurance",
    notes: "Interested in comprehensive business coverage. Has 20 employees.",
  }

  const activities = [
    {
      id: "1",
      type: "note",
      title: "Follow-up call completed",
      description: "Discussed coverage options and pricing. Client interested in comprehensive package.",
      date: "12 Dec 2024",
      time: "14:30",
    },
    {
      id: "2",
      type: "email",
      title: "Quote sent",
      description: "Sent detailed quote for business insurance package.",
      date: "11 Dec 2024",
      time: "10:15",
    },
    {
      id: "3",
      type: "call",
      title: "Initial call",
      description: "Introduced services and gathered business details.",
      date: "10 Dec 2024",
      time: "16:45",
    },
  ]

  const handleAddNote = () => {
    if (!note.trim()) return
    toast({
      title: "Note added",
      description: "Your note has been added to the lead timeline",
    })
    setNote("")
  }

  const handleScheduleCall = () => {
    toast({
      title: "Call scheduled",
      description: "A call has been scheduled with this lead",
    })
  }

  const handleConvertToSale = () => {
    toast({
      title: "Converting to sale",
      description: "Lead is being converted to a sale opportunity",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/agent/leads">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{lead.name}</h1>
          <p className="text-muted-foreground mt-1">{lead.company}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleScheduleCall} className="bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Call
          </Button>
          <Button onClick={handleConvertToSale}>Convert to Sale</Button>
        </div>
      </div>

      {/* Lead Score & Status */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lead Score</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lead.score}/100</div>
            <p className="text-xs text-muted-foreground mt-1">High quality lead</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Estimated Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{lead.estimatedValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Annual premium</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Stage</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge className="bg-blue-500/10 text-blue-700">Qualified</Badge>
            <p className="text-xs text-muted-foreground mt-2">Last contact: {lead.lastContact}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Contact Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-semibold">{lead.name}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">{lead.phone}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-sm break-all">{lead.email}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Position</p>
                <p className="font-semibold">{lead.position}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{lead.location}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button className="flex-1" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button className="flex-1 bg-transparent" size="sm" variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Details & Activity */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="details">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="details" className="space-y-4 mt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Source</p>
                    <p className="font-semibold">{lead.source}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Product Interest</p>
                    <p className="font-semibold">{lead.productInterest}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Assigned Date</p>
                    <p className="font-semibold">{lead.assignedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Last Contact</p>
                    <p className="font-semibold">{lead.lastContact}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Lead Notes</p>
                  <p className="text-sm">{lead.notes}</p>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4 mt-0">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {activity.type === "call" && <Phone className="h-5 w-5 text-primary" />}
                      {activity.type === "email" && <Mail className="h-5 w-5 text-primary" />}
                      {activity.type === "note" && <MessageSquare className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>
                          {activity.date} at {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="notes" className="space-y-4 mt-0">
                <div className="space-y-3">
                  <Textarea
                    placeholder="Add a note about this lead..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={4}
                  />
                  <Button onClick={handleAddNote}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/agent/leads">Back to Leads</Link>
        </Button>
        <Button onClick={handleConvertToSale}>Convert to Sale</Button>
      </div>
    </div>
  )
}
