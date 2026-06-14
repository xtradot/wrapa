import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, Clock, FileText, Download, Upload, MessageSquare, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Claim Details - WRAPA Dashboard",
  description: "View detailed information about your insurance claim",
}

export default function ClaimDetailsPage({ params }: { params: { id: string } }) {
  // Mock claim data
  const claim = {
    id: params.id,
    type: "Motor Insurance",
    policyNumber: "POL-12345678",
    provider: "AXA Mansard",
    description: "Vehicle accident damage repair",
    amount: 500000,
    dateSubmitted: "10 Dec 2024",
    status: "under-review",
    lastUpdate: "15 Dec 2024",
    estimatedCompletion: "30 Dec 2024",
    progress: 60,
    incidentDate: "05 Dec 2024",
    incidentLocation: "Lekki-Epe Expressway, Lagos",
    timeline: [
      {
        date: "10 Dec 2024",
        time: "09:30 AM",
        status: "Submitted",
        description: "Claim submitted successfully",
        completed: true,
      },
      {
        date: "11 Dec 2024",
        time: "02:15 PM",
        status: "Documents Verified",
        description: "All required documents verified by our team",
        completed: true,
      },
      {
        date: "12 Dec 2024",
        time: "11:00 AM",
        status: "Assessment Scheduled",
        description: "Vehicle inspection scheduled with assessor",
        completed: true,
      },
      {
        date: "15 Dec 2024",
        time: "10:00 AM",
        status: "Under Review",
        description: "Claim is being reviewed by claims officer",
        completed: true,
        current: true,
      },
      {
        date: "Pending",
        time: "",
        status: "Approval",
        description: "Waiting for final approval",
        completed: false,
      },
      {
        date: "Pending",
        time: "",
        status: "Payment",
        description: "Payment will be processed",
        completed: false,
      },
    ],
    documents: [
      { name: "Accident Report", uploaded: "10 Dec 2024", size: "2.4 MB" },
      { name: "Police Report", uploaded: "10 Dec 2024", size: "1.8 MB" },
      { name: "Vehicle Photos", uploaded: "10 Dec 2024", size: "5.2 MB" },
      { name: "Repair Estimate", uploaded: "12 Dec 2024", size: "890 KB" },
    ],
    notes: [
      {
        date: "15 Dec 2024",
        time: "10:30 AM",
        author: "Claims Officer",
        message: "Assessment completed. Repair estimate approved. Claim is now under final review.",
      },
      {
        date: "12 Dec 2024",
        time: "02:00 PM",
        author: "System",
        message: "Vehicle assessment completed by approved assessor. Report uploaded.",
      },
    ],
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "under-review":
        return "bg-yellow-500/10 text-yellow-700"
      case "approved":
        return "bg-green-500/10 text-green-700"
      case "rejected":
        return "bg-red-500/10 text-red-700"
      default:
        return "bg-gray-500/10 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/dashboard/claims">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Claims
        </Link>
      </Button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold">{claim.description}</h1>
            <Badge className={getStatusColor(claim.status)}>
              <Clock className="h-3 w-3 mr-1" />
              Under Review
            </Badge>
          </div>
          <p className="text-muted-foreground">Claim ID: {claim.id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-transparent">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-medium">Claim Progress</p>
              <p className="text-sm text-muted-foreground">{claim.progress}% Complete</p>
            </div>
            <Progress value={claim.progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Estimated completion: <span className="font-medium text-foreground">{claim.estimatedCompletion}</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Claim Details */}
          <Card>
            <CardHeader>
              <CardTitle>Claim Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Claim Type</p>
                  <p className="font-semibold">{claim.type}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Policy Number</p>
                  <p className="font-mono font-semibold">{claim.policyNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Provider</p>
                  <p className="font-semibold">{claim.provider}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Claim Amount</p>
                  <p className="font-semibold">₦{claim.amount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Incident Date</p>
                  <p className="font-semibold">{claim.incidentDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Date Submitted</p>
                  <p className="font-semibold">{claim.dateSubmitted}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Incident Location</p>
                  <p className="font-semibold">{claim.incidentLocation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Claim Timeline</CardTitle>
              <CardDescription>Track the progress of your claim</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {claim.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          event.completed
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground border-2 border-border"
                        }`}
                      >
                        {event.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>
                      {index < claim.timeline.length - 1 && (
                        <div className={`w-0.5 h-16 ${event.completed ? "bg-primary" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{event.status}</h4>
                        {event.current && (
                          <Badge variant="secondary" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                      {event.date !== "Pending" && (
                        <p className="text-xs text-muted-foreground">
                          {event.date} {event.time && `• ${event.time}`}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activity Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Activity & Notes</CardTitle>
              <CardDescription>Communication history</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {claim.notes.map((note, index) => (
                <div key={index} className="flex gap-4 p-4 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm">{note.author}</p>
                      <span className="text-xs text-muted-foreground">
                        {note.date} • {note.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{note.message}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full bg-transparent text-destructive hover:bg-destructive/10">
                Cancel Claim
              </Button>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Supporting documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {claim.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.size} • {doc.uploaded}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Claims Support</p>
                  <p className="text-muted-foreground mb-2">Contact your provider for assistance with your claim</p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">{claim.provider}</p>
                    <p className="text-xs text-muted-foreground">+234 800 AXA CARE</p>
                    <p className="text-xs text-muted-foreground">claims@axamansard.com</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
