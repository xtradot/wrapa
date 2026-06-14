"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  FileText,
  Download,
  Eye,
  MessageSquare,
  AlertTriangle,
  Clock,
  User,
  Shield,
  MapPin,
  Calendar,
  Send,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ClaimReviewPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [decision, setDecision] = useState<"" | "approve" | "reject" | "request-info">("")
  const [approvedAmount, setApprovedAmount] = useState("")
  const [rejectionReason, setRejectionReason] = useState("")
  const [officerNotes, setOfficerNotes] = useState("")
  const [requestedInfo, setRequestedInfo] = useState("")

  const [isProcessing, setIsProcessing] = useState(false)
  const currentOfficer = {
    id: "USR-001",
    name: "Sarah Adebayo",
    role: "claims-officer",
    approvalLimit: 5000000,
  }

  const claim = {
    id: params.id,
    type: "Motor Insurance",
    subtype: "Total Loss",
    policyNumber: "POL-12345678",
    provider: "AXA Mansard",
    customer: {
      name: "John Adebayo",
      phone: "+234 810 123 4567",
      email: "john.adebayo@example.com",
      nin: "12345678901",
    },
    amount: 2500000,
    dateSubmitted: "10 Dec 2024",
    incidentDate: "05 Dec 2024",
    incidentLocation: "Lekki-Epe Expressway, Lagos",
    description:
      "Vehicle was involved in a multi-car collision during heavy traffic. The front end of the vehicle sustained severe damage. The driver's side airbag deployed and there was significant damage to the engine compartment. Vehicle was towed to approved repair facility.",
    daysOpen: 5,
    priority: "high",
    status: "pending-review",
    policyDetails: {
      coverageType: "Comprehensive",
      premium: 85000,
      startDate: "01 Jan 2024",
      endDate: "31 Dec 2024",
      vehicleMake: "Toyota",
      vehicleModel: "Camry",
      vehicleYear: 2020,
      plateNumber: "LAG-ABC-123",
      sumInsured: 3500000,
    },
    documents: [
      {
        name: "Police Report",
        type: "PDF",
        size: "1.8 MB",
        uploaded: "10 Dec 2024",
        verified: true,
      },
      {
        name: "Accident Scene Photos",
        type: "Images",
        size: "5.2 MB",
        uploaded: "10 Dec 2024",
        verified: true,
        count: 12,
      },
      {
        name: "Vehicle Registration",
        type: "PDF",
        size: "890 KB",
        uploaded: "10 Dec 2024",
        verified: true,
      },
      {
        name: "Damage Assessment Report",
        type: "PDF",
        size: "2.1 MB",
        uploaded: "12 Dec 2024",
        verified: true,
      },
      {
        name: "Repair Estimate",
        type: "PDF",
        size: "1.2 MB",
        uploaded: "12 Dec 2024",
        verified: false,
      },
    ],
    timeline: [
      {
        date: "10 Dec 2024",
        time: "09:30 AM",
        event: "Claim Submitted",
        actor: "Customer",
      },
      {
        date: "11 Dec 2024",
        time: "02:15 PM",
        event: "Documents Verified",
        actor: "System",
      },
      {
        date: "12 Dec 2024",
        time: "11:00 AM",
        event: "Assessment Completed",
        actor: "Inspector - David Ogun",
      },
      {
        date: "15 Dec 2024",
        time: "10:00 AM",
        event: "Assigned to Officer",
        actor: "System",
      },
    ],
    assessorNotes:
      "Vehicle sustained significant front-end damage. Engine compartment damage is extensive. Frame damage confirmed. Recommend total loss settlement. Estimated repair cost exceeds 80% of vehicle value.",
  }

  const requiresDualApproval = claim.amount > 2000000
  const requiresManagerApproval = claim.amount > 5000000
  const canOfficerApprove = claim.amount <= currentOfficer.approvalLimit

  const handleApprove = async () => {
    setIsProcessing(true)

    const approvalAmount = approvedAmount ? Number.parseInt(approvedAmount) : claim.amount

    try {
      if (requiresDualApproval) {
        // First approval - moves to pending-second-approval
        console.log("[v0] Maker-Checker: Submitting first approval")
        console.log("[v0] Amount:", approvalAmount)
        console.log("[v0] Requires second approval:", requiresDualApproval)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        router.push("/officer/maker-checker")
      } else {
        // Direct approval for claims under ₦2M
        console.log("[v0] Direct approval for claim under ₦2M")
        router.push("/officer/approved")
      }
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReject = () => {
    // Process rejection
    router.push("/officer/queue")
  }

  const handleRequestInfo = () => {
    // Request additional information
    router.push("/officer/queue")
  }

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/officer/queue">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Queue
          </Link>
        </Button>
        <Badge variant="destructive">{claim.daysOpen} days old - Priority</Badge>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Claim Review & Adjudication</h1>
          <p className="text-muted-foreground">
            Claim ID: <span className="font-mono font-semibold">{claim.id}</span>
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="documents">Documents ({claim.documents.length})</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="policy">Policy Info</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Claim Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Claim Type</p>
                      <p className="font-semibold">
                        {claim.type} - {claim.subtype}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Provider</p>
                      <p className="font-semibold">{claim.provider}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Claimed Amount</p>
                      <p className="font-bold text-lg">₦{claim.amount.toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Date Submitted</p>
                      <p className="font-semibold">{claim.dateSubmitted}</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Incident Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Incident Date</p>
                          <p className="font-medium">{claim.incidentDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium">{claim.incidentLocation}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Description</p>
                        <p className="text-sm">{claim.description}</p>
                      </div>
                    </div>
                  </div>

                  {claim.assessorNotes && (
                    <div className="border-t pt-4">
                      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Assessor's Notes</p>
                            <p className="text-sm text-blue-800 dark:text-blue-200">{claim.assessorNotes}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-semibold">{claim.customer.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Contact</p>
                      <p className="font-medium">{claim.customer.phone}</p>
                      <p className="text-sm text-muted-foreground">{claim.customer.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">NIN</p>
                      <p className="font-mono font-medium">{claim.customer.nin}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        Verified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Supporting Documents</CardTitle>
                  <CardDescription>Review all uploaded evidence and documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {claim.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg bg-background hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <FileText className="h-8 w-8 text-primary shrink-0" />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold truncate">{doc.name}</p>
                            {doc.verified && (
                              <Badge variant="secondary" className="text-xs shrink-0">
                                Verified
                              </Badge>
                            )}
                            {doc.count && (
                              <Badge variant="outline" className="text-xs shrink-0">
                                {doc.count} files
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {doc.type} • {doc.size} • Uploaded {doc.uploaded}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Claim Timeline</CardTitle>
                  <CardDescription>Complete history of claim processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {claim.timeline.map((event, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          {index < claim.timeline.length - 1 && <div className="w-0.5 h-16 bg-border" />}
                        </div>
                        <div className="flex-1 pb-8">
                          <p className="font-semibold">{event.event}</p>
                          <p className="text-sm text-muted-foreground">
                            {event.date} • {event.time}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">By: {event.actor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="policy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Policy Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Policy Number</p>
                      <p className="font-mono font-semibold">{claim.policyNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Coverage Type</p>
                      <p className="font-semibold">{claim.policyDetails.coverageType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Premium</p>
                      <p className="font-semibold">₦{claim.policyDetails.premium.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Sum Insured</p>
                      <p className="font-semibold">₦{claim.policyDetails.sumInsured.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Policy Period</p>
                      <p className="font-semibold">
                        {claim.policyDetails.startDate} - {claim.policyDetails.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">Vehicle Details</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Make & Model</p>
                        <p className="font-medium">
                          {claim.policyDetails.vehicleMake} {claim.policyDetails.vehicleModel}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Year</p>
                        <p className="font-medium">{claim.policyDetails.vehicleYear}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Plate Number</p>
                        <p className="font-mono font-medium">{claim.policyDetails.plateNumber}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Decision Panel */}
        <div className="space-y-4">
          {requiresDualApproval && (
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                {requiresManagerApproval ? (
                  <span className="font-medium">
                    High-value claim (₦{claim.amount.toLocaleString()}). Requires manager approval after initial review.
                  </span>
                ) : (
                  <span className="font-medium">
                    This claim requires dual approval (Maker-Checker). Your approval will be the first step.
                  </span>
                )}
              </AlertDescription>
            </Alert>
          )}

          {!canOfficerApprove && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <span className="font-medium">
                  This claim (₦{claim.amount.toLocaleString()}) exceeds your approval limit (₦
                  {currentOfficer.approvalLimit.toLocaleString()}). It will be escalated to a senior approver.
                </span>
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Adjudication Decision</CardTitle>
              <CardDescription>Review and make your decision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="decision">Decision *</Label>
                <Select value={decision} onValueChange={(value: any) => setDecision(value)}>
                  <SelectTrigger id="decision">
                    <SelectValue placeholder="Select decision" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approve">Approve Claim</SelectItem>
                    <SelectItem value="reject">Reject Claim</SelectItem>
                    <SelectItem value="request-info">Request More Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {decision === "approve" && (
                <div className="space-y-2">
                  <Label htmlFor="approved-amount">Approved Amount (₦) *</Label>
                  <Input
                    id="approved-amount"
                    type="text"
                    placeholder={claim.amount.toString()}
                    value={approvedAmount}
                    onChange={(e) => setApprovedAmount(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Claimed: ₦{claim.amount.toLocaleString()}</p>

                  {requiresDualApproval && (
                    <p className="text-xs text-blue-600 font-medium">
                      ℹ️ This will move to {requiresManagerApproval ? "Manager Approval Queue" : "Second Approval Queue"}
                    </p>
                  )}
                </div>
              )}

              {decision === "reject" && (
                <div className="space-y-2">
                  <Label htmlFor="rejection-reason">Rejection Reason *</Label>
                  <Select value={rejectionReason} onValueChange={setRejectionReason}>
                    <SelectTrigger id="rejection-reason">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="insufficient-evidence">Insufficient Evidence</SelectItem>
                      <SelectItem value="policy-exclusion">Policy Exclusion</SelectItem>
                      <SelectItem value="fraudulent">Suspected Fraud</SelectItem>
                      <SelectItem value="pre-existing">Pre-existing Damage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {decision === "request-info" && (
                <div className="space-y-2">
                  <Label htmlFor="requested-info">Information Needed *</Label>
                  <Textarea
                    id="requested-info"
                    placeholder="Describe what additional information or documentation is required..."
                    rows={4}
                    value={requestedInfo}
                    onChange={(e) => setRequestedInfo(e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="officer-notes">Officer Notes</Label>
                <Textarea
                  id="officer-notes"
                  placeholder="Add internal notes about your decision..."
                  rows={4}
                  value={officerNotes}
                  onChange={(e) => setOfficerNotes(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">These notes will be included in the audit trail</p>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                {decision === "approve" && (
                  <Button onClick={handleApprove} className="w-full" disabled={!officerNotes || isProcessing}>
                    {isProcessing ? (
                      "Processing..."
                    ) : requiresDualApproval ? (
                      <>
                        <Shield className="mr-2 h-4 w-4" />
                        Submit for {requiresManagerApproval ? "Manager" : "Second"} Approval
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve & Process Payment
                      </>
                    )}
                  </Button>
                )}

                {decision === "reject" && (
                  <Button variant="destructive" className="w-full" size="lg" onClick={handleReject}>
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject Claim
                  </Button>
                )}

                {decision === "request-info" && (
                  <Button variant="outline" className="w-full bg-transparent" size="lg" onClick={handleRequestInfo}>
                    <Send className="h-4 w-4 mr-2" />
                    Request Information
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {requiresDualApproval && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Approval Workflow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">First Approval (You)</p>
                    <p className="text-xs text-muted-foreground">Initial review and assessment</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {requiresManagerApproval ? "Manager Approval" : "Second Approval"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {requiresManagerApproval
                        ? "Claims Manager or Super Admin"
                        : "Independent verification by another officer"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Payment Processing</p>
                    <p className="text-xs text-muted-foreground">Payout initiated after dual approval</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
