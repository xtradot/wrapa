"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Shield, ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"

export default function OnboardingStep4Page() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })

    // Load user data from sessionStorage
    const step1Data = sessionStorage.getItem("onboarding_step1")
    if (step1Data) {
      setUserData(JSON.parse(step1Data))
    }
  }, [])

  const handleGoToDashboard = () => {
    // Clear onboarding data
    sessionStorage.removeItem("onboarding_step1")
    sessionStorage.removeItem("onboarding_step2")
    sessionStorage.removeItem("onboarding_step3")

    router.push("/dashboard")
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step 4 of 4</span>
              <span className="text-sm text-muted-foreground">Complete</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>

          <Card className="border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 relative">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
                <Sparkles className="h-5 w-5 text-primary absolute -top-1 -right-1" />
              </div>
              <Badge className="mb-4 mx-auto w-fit" variant="secondary">
                Onboarding Complete
              </Badge>
              <CardTitle className="text-3xl mb-2">Welcome to WRAPA!</CardTitle>
              <CardDescription className="text-base">
                {userData?.firstName}, your account is ready. You can now explore insurance options and get quotes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* What's Next */}
              <div>
                <h3 className="font-semibold mb-4">What's Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Account Verified</p>
                      <p className="text-xs text-muted-foreground">
                        Your identity has been verified and approved by NAICOM standards
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Payment Method Ready</p>
                      <p className="text-xs text-muted-foreground">
                        Your preferred payment method is set up and ready to use
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">Dashboard Access</p>
                      <p className="text-xs text-muted-foreground">
                        Manage policies, track claims, and view payments from your dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t space-y-3">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <Button className="w-full" size="lg" onClick={handleGoToDashboard}>
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="/quote">Get Your First Quote</a>
                </Button>
              </div>

              {/* Welcome Offer */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Welcome Offer</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Get 10% off your first insurance purchase. Use code <strong>WELCOME10</strong> at checkout.
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        Valid for 30 days
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NAICOM Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
                <Shield className="h-4 w-4" />
                <span>NAICOM Licensed & Regulated Platform</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
