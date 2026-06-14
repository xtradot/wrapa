"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

export default function SubscribePage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState(1)

  const handleSubscribe = async () => {
    setIsProcessing(true)
    try {
      // Simulate subscription
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast({
        title: "Success",
        description: "You have successfully subscribed to this plan!",
      })
      setStep(2)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b sticky top-16 z-40 bg-card">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/health/plans/${params.id}`} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Plan
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-2xl">
          {step === 1 ? (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Complete Your Subscription</h1>
                <p className="text-muted-foreground">Review and confirm your plan details</p>
              </div>

              {/* Plan Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Plan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Plan</p>
                    <p className="font-semibold">Family Guard Premium</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Annual Premium</p>
                    <p className="text-2xl font-bold">₦95,000</p>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Details */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Outpatient consultations (unlimited)",
                      "Inpatient hospitalization",
                      "Prescription drugs",
                      "Diagnostic tests",
                      "Emergency care 24/7",
                      "Maternity & newborn care",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Terms */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="pt-6 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-yellow-900">Important Information</p>
                    <p className="text-xs text-yellow-800">
                      By subscribing, you confirm that you have read and agree to the terms and conditions. Your subscription
                      will auto-renew annually unless cancelled.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" asChild className="flex-1">
                  <Link href={`/health/plans/${params.id}`}>Cancel</Link>
                </Button>
                <Button className="flex-1" onClick={handleSubscribe} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Confirm & Subscribe"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Subscription Successful!</h2>
                <p className="text-muted-foreground">
                  Your health insurance plan is now active. You can start using your coverage immediately.
                </p>
              </div>
              <div className="space-y-2 text-left bg-accent/5 p-4 rounded-lg">
                <p className="text-sm font-medium">What's Next:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Policy documents will be sent to your email</li>
                  <li>✓ Download the mobile app for easy claims filing</li>
                  <li>✓ Access your healthcare network immediately</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" asChild className="flex-1">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/products/health">Browse More Plans</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
