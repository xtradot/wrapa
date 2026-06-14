"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, User, CreditCard, CheckCircle2, ChevronRight, Globe, Smartphone, Code, Building } from "lucide-react"

const channels = [
  {
    id: "web",
    name: "Web Portal",
    description: "Full-featured onboarding with all verification options",
    icon: Globe,
    badge: "Most Popular",
  },
  {
    id: "mobile",
    name: "Mobile App",
    description: "Optimized mobile experience with camera integration",
    icon: Smartphone,
    badge: "Coming Soon",
  },
  {
    id: "api",
    name: "API Integration",
    description: "Partner API for third-party integrations",
    icon: Code,
  },
  {
    id: "pos",
    name: "Agency/POS",
    description: "Agent-assisted onboarding for walk-in customers",
    icon: Building,
  },
]

const steps = [
  { id: 1, name: "Account Creation", icon: User, description: "Basic information" },
  { id: 2, name: "Verification", icon: Shield, description: "KYC compliance" },
  { id: 3, name: "Payment Setup", icon: CreditCard, description: "Payment methods" },
  { id: 4, name: "Completion", icon: CheckCircle2, description: "Ready to insure" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [selectedChannel, setSelectedChannel] = useState("web")

  const handleStartOnboarding = () => {
    if (selectedChannel === "web") {
      router.push("/onboarding/web/step1")
    } else if (selectedChannel === "api") {
      router.push("/onboarding/api-docs")
    } else if (selectedChannel === "pos") {
      router.push("/onboarding/pos/login")
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">NAICOM Compliant Onboarding</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Welcome to WRAPA Insurance</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Experience seamless, secure, and compliant onboarding across multiple channels. Choose your preferred
              method below.
            </p>
          </div>

          {/* Onboarding Process Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Onboarding Journey</CardTitle>
              <CardDescription>Four simple steps to get you insured</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.id} className="relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">{step.name}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {index < steps.length - 1 && (
                        <ChevronRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Channel Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Choose Your Onboarding Channel</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {channels.map((channel) => {
                const Icon = channel.icon
                return (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left relative ${
                      selectedChannel === channel.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {channel.badge && (
                      <Badge className="absolute top-4 right-4" variant="secondary">
                        {channel.badge}
                      </Badge>
                    )}
                    <Icon
                      className={`h-10 w-10 mb-3 ${selectedChannel === channel.id ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <h3 className="font-semibold text-lg mb-2">{channel.name}</h3>
                    <p className="text-sm text-muted-foreground">{channel.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* NAICOM Compliance Info */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">NAICOM Compliant Verification</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our onboarding process complies with the National Insurance Commission (NAICOM) regulations,
                    ensuring secure and verified customer data.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>NIN Verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>BVN Verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Document Upload</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Biometric Data</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" onClick={handleStartOnboarding} className="px-8">
              Start Onboarding via {channels.find((c) => c.id === selectedChannel)?.name}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-primary font-semibold hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
