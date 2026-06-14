"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowLeft, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const hmoData = {
  1: {
    name: "Axa Mansard HMO",
    logo: "/axa-mansard-insurance-logo.jpg",
    rating: 4.8,
    reviews: 2340,
    description: "Leading health insurance provider with 20+ years of experience",
    plans: [
      {
        id: "axa-individual",
        name: "Individual Shield",
        price: 28000,
        type: "Individual",
        features: [
          "Outpatient consultations",
          "Inpatient hospitalization",
          "Prescription drugs",
          "Diagnostic tests",
          "Emergency care",
        ],
      },
      {
        id: "axa-family",
        name: "Family Guard",
        price: 95000,
        type: "Family",
        features: [
          "Coverage for up to 6 members",
          "All individual benefits",
          "Maternity care",
          "Pediatric care",
          "Annual checkups",
        ],
      },
    ],
  },
  2: {
    name: "Leadway Assurance",
    logo: "/leadway-assurance-insurance-logo.jpg",
    rating: 4.7,
    reviews: 1890,
    description: "Trusted insurance partner for millions of Nigerians",
    plans: [
      {
        id: "leadway-individual",
        name: "Essential Care",
        price: 25000,
        type: "Individual",
        features: ["Outpatient care", "Emergency services", "Prescription coverage"],
      },
    ],
  },
}

export default function HMODetailPage({ params }: { params: { id: string } }) {
  const hmo = hmoData[params.id as keyof typeof hmoData]

  if (!hmo) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">HMO Not Found</h1>
          <Button asChild>
            <Link href="/products/health">Back to Plans</Link>
          </Button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b sticky top-16 z-40 bg-card">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products/health" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Plans
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* HMO Header */}
          <div className="mb-8 p-6 bg-card border rounded-lg">
            <div className="flex items-start gap-6 mb-4">
              <div className="w-24 h-24 bg-accent/5 rounded-lg flex items-center justify-center">
                <img src={hmo.logo} alt={hmo.name} className="w-20 h-20 object-contain" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{hmo.name}</h1>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{hmo.rating}</span>
                    <span className="text-sm text-muted-foreground">({hmo.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{hmo.description}</p>
              </div>
            </div>
          </div>

          {/* Plans from this HMO */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Plans</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {hmo.plans.map((plan) => (
                <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{plan.name}</CardTitle>
                        <Badge className="mt-2">{plan.type}</Badge>
                      </div>
                      <p className="text-2xl font-bold">₦{(plan.price / 1000).toFixed(0)}K</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href={`/health/plans/${plan.id}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
