"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, FileText, DollarSign, Mail, Phone } from "lucide-react"

const claimStatuses = [
  { id: "submitted", label: "Claim Submitted", icon: FileText },
  { id: "review", label: "Under Review", icon: Clock },
  { id: "approved", label: "Approved", icon: CheckCircle2 },
  { id: "paid", label: "Payment Processed", icon: DollarSign },
]

function TrackClaimContent() {
  const searchParams = useSearchParams()
  const [claimId, setClaimId] = useState("")
  const [currentStatus, setCurrentStatus] = useState("")

  useEffect(() => {
    const id = searchParams.get("id") || ""
    const status = searchParams.get("status") || "submitted"
    setClaimId(id)
    setCurrentStatus(status)
  }, [searchParams])

  const currentStatusIndex = claimStatuses.findIndex((s) => s.id === currentStatus)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4">Track Claim</Badge>
            <h1 className="text-3xl font-bold mb-2">Claim Status</h1>
            <p className="text-muted-foreground">Track the progress of your insurance claim</p>
          </div>

          {/* Claim ID Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Claim ID</div>
                  <div className="font-mono text-xl font-bold">{claimId || "CLM-12345678"}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Current Status</div>
                  <Badge variant="secondary" className="capitalize">
                    {currentStatus || "submitted"}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Submitted On</div>
                  <div className="font-semibold">
                    {new Date().toLocaleDateString("en-NG", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Timeline */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Claim Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {claimStatuses.map((status, index) => {
                  const Icon = status.icon
                  const isCompleted = index <= currentStatusIndex
                  const isCurrent = index === currentStatusIndex

                  return (
                    <div key={status.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        {index < claimStatuses.length - 1 && (
                          <div className={`w-0.5 h-12 ${isCompleted ? "bg-primary" : "bg-muted"}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center justify-between mb-1">
                          <div className={`font-semibold ${isCurrent ? "text-foreground" : "text-muted-foreground"}`}>
                            {status.label}
                          </div>
                          {isCompleted && (
                            <Badge variant={isCurrent ? "default" : "secondary"} className="text-xs">
                              {isCurrent ? "In Progress" : "Completed"}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {status.id === "submitted" && "Your claim has been received and is being processed"}
                          {status.id === "review" && "Our claims team is reviewing your documentation"}
                          {status.id === "approved" && "Your claim has been approved for payment"}
                          {status.id === "paid" && "Payment has been processed to your bank account"}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Claim Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Claim Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Policy Number</span>
                <span className="font-medium">POL-87654321</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Claim Type</span>
                <span className="font-medium">Vehicle Accident</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Incident Date</span>
                <span className="font-medium">15 Dec 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Amount</span>
                <span className="font-medium">₦500,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expected Resolution</span>
                <span className="font-medium">3-5 business days</span>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Need Help with Your Claim?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our claims support team is available to assist you with any questions
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 bg-background">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support
                </Button>
                <Button variant="outline" className="flex-1 bg-background">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function TrackClaimPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackClaimContent />
    </Suspense>
  )
}
