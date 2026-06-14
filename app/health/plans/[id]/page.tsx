"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowLeft, Star, MapPin, Shield, Heart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PlanDetailPage({ params }: { params: { id: string } }) {
  // Mock plan data - in production would fetch from API
  const plan = {
    id: params.id,
    name: "Family Guard Premium",
    hmoName: "Axa Mansard HMO",
    hmoRating: 4.8,
    price: 95000,
    coverage: "Comprehensive",
    duration: "Annual",
    description: "Complete family health protection with premium benefits for up to 6 members.",
    features: [
      "Coverage for up to 6 family members",
      "Outpatient consultations unlimited",
      "Inpatient hospitalization",
      "Emergency care 24/7",
      "Prescription drugs coverage",
      "Diagnostic tests & imaging",
      "Maternity & newborn care",
      "Pediatric care",
      "Mental health support",
      "Telemedicine services",
      "Wellness programs",
      "Annual health checkups",
    ],
    exclusions: [
      "Pre-existing conditions (waiting period applies)",
      "Cosmetic procedures",
      "Alternative medicine",
    ],
    hospitals: [
      { name: "Lagos University Teaching Hospital", distance: "2.3km" },
      { name: "National Hospital Abuja", distance: "1.8km" },
      { name: "Reddington Hospital", distance: "3.1km" },
    ],
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b sticky top-16 z-40 bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products/health" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Plans
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Plan Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{plan.name}</h1>
                <div className="flex items-center gap-4">
                  <Badge>{plan.coverage}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{plan.hmoRating}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">₦{(plan.price / 1000).toFixed(0)}K</p>
                <p className="text-sm text-muted-foreground">per {plan.duration.toLowerCase()}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">{plan.description}</p>
            <div className="mt-4 flex gap-2">
              <Button size="lg" asChild>
                <Link href={`/health/plans/${plan.id}/subscribe`}>
                  Subscribe Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/compare">Compare with Other Plans</Link>
              </Button>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="benefits" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="kyc">KYC Info</TabsTrigger>
            </TabsList>

            <TabsContent value="benefits" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Coverage Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exclusions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Not Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.exclusions.map((exclusion) => (
                      <li key={exclusion} className="flex items-start gap-3">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-muted-foreground">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="network" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Healthcare Network
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Access to 500+ hospitals, clinics, and pharmacies nationwide
                  </p>
                  <div className="space-y-2">
                    {plan.hospitals.map((hospital) => (
                      <div
                        key={hospital.name}
                        className="p-3 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
                      >
                        <p className="font-medium">{hospital.name}</p>
                        <p className="text-xs text-muted-foreground">{hospital.distance} from your location</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://maps.google.com" target="_blank">
                      View All on Google Maps
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="kyc" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    KYC Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    To subscribe to this plan, we need to verify your identity and collect some information:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Valid Government ID (National ID, Driver's License, or International Passport)",
                      "Phone number and email address",
                      "Address information",
                      "Next of kin contact information",
                      "Proof of address (utility bill or bank statement)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <Link href={`/health/plans/${plan.id}/subscribe`}>Proceed to Subscription</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
