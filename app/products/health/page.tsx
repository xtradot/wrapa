"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Heart, Users, Building2, ArrowRight, MapPin, Star, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock HMO data
const hmoProviders = [
  {
    id: 1,
    name: "Axa Mansard HMO",
    logo: "/axa-mansard-insurance-logo.jpg",
    rating: 4.8,
    reviews: 2340,
    planCount: 12,
    plans: [
      {
        id: "axa-individual",
        name: "Individual Shield",
        type: "Individual",
        price: 28000,
        coverage: "Comprehensive",
        duration: "Annual",
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
        type: "Family",
        price: 95000,
        coverage: "Comprehensive",
        duration: "Annual",
        features: ["Coverage for up to 6 members", "All individual benefits", "Maternity care", "Pediatric care"],
      },
    ],
  },
  {
    id: 2,
    name: "Leadway Assurance",
    logo: "/leadway-assurance-insurance-logo.jpg",
    rating: 4.7,
    reviews: 1890,
    planCount: 10,
    plans: [
      {
        id: "leadway-individual",
        name: "Essential Care",
        type: "Individual",
        price: 25000,
        coverage: "Basic",
        duration: "Annual",
        features: ["Outpatient care", "Emergency services", "Prescription coverage"],
      },
    ],
  },
  {
    id: 3,
    name: "AIICO Insurance",
    logo: "/aiico-insurance-logo.jpg",
    rating: 4.6,
    reviews: 1560,
    planCount: 8,
    plans: [
      {
        id: "aiico-corporate",
        name: "Business Shield",
        type: "Corporate",
        price: 0,
        coverage: "Custom",
        duration: "Annual",
        features: ["Employee coverage", "Group discounts", "Customizable benefits"],
      },
    ],
  },
]

const allPlans = hmoProviders.flatMap((hmo) =>
  hmo.plans.map((plan) => ({
    ...plan,
    hmoId: hmo.id,
    hmoName: hmo.name,
    hmoRating: hmo.rating,
  })),
)

export default function HealthInsurancePage() {
  const [activeTab, setActiveTab] = useState("marketplace")
  const [priceRange, setPriceRange] = useState([0, 150000])
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPlans = allPlans.filter((plan) => {
    const matchesPrice = plan.price === 0 || (plan.price >= priceRange[0] && plan.price <= priceRange[1])
    const matchesType = !selectedType || plan.type === selectedType
    const matchesSearch = !searchQuery || plan.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesPrice && matchesType && matchesSearch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">HMO Marketplace</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Health Insurance Plans from Nigeria's Leading HMOs</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Browse, compare, and subscribe to health insurance plans from aggregated HMO providers. No login needed to explore.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="marketplace">Plan Marketplace</TabsTrigger>
                <TabsTrigger value="providers">Explore HMOs</TabsTrigger>
              </TabsList>

              <TabsContent value="marketplace" className="space-y-6 mt-8">
                {/* Filters */}
                <div className="bg-card rounded-lg border p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="h-5 w-5" />
                    <h3 className="font-semibold">Filter Plans</h3>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Plan Type</label>
                    <div className="flex gap-2 flex-wrap">
                      {["Individual", "Family", "Corporate"].map((type) => (
                        <Button
                          key={type}
                          variant={selectedType === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedType(selectedType === type ? null : type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Monthly Premium: ₦{(priceRange[0] / 1000).toFixed(0)}K - ₦{(priceRange[1] / 1000).toFixed(0)}K</label>
                    <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={150000} step={5000} />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Search plans..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                  </div>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlans.map((plan) => (
                    <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-lg">{plan.name}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">{plan.hmoName}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{plan.hmoRating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-2xl font-bold">
                            {plan.price === 0 ? "Custom" : `₦${(plan.price / 1000).toFixed(0)}K`}
                          </p>
                          <p className="text-xs text-muted-foreground">{plan.coverage} - {plan.duration}</p>
                        </div>

                        <ul className="space-y-2">
                          {plan.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex gap-2 pt-4">
                          <Button size="sm" variant="outline" className="flex-1" asChild>
                            <Link href="/compare">Compare</Link>
                          </Button>
                          <Button size="sm" className="flex-1" asChild>
                            <Link href={`/health/plans/${plan.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="providers" className="space-y-6 mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hmoProviders.map((hmo) => (
                    <Card key={hmo.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                        <img src={hmo.logo} alt={hmo.name} className="h-20 w-20 object-contain" />
                      </div>
                      <CardContent className="pt-4 space-y-4">
                        <div>
                          <h3 className="font-bold text-lg">{hmo.name}</h3>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{hmo.rating}</span>
                            <span className="text-xs text-muted-foreground">({hmo.reviews} reviews)</span>
                          </div>
                        </div>

                        <div className="py-2 px-3 bg-accent/5 rounded text-sm">
                          <p className="text-muted-foreground">{hmo.planCount} plans available</p>
                        </div>

                        <Button asChild className="w-full">
                          <Link href={`/health/hmo/${hmo.id}`}>Explore Plans</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Covered?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Sign in to get your personalized quote and subscribe to any plan in minutes.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/login">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
