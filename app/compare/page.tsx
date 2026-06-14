import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Compare Insurance Plans | WRAPA",
  description:
    "Compare insurance plans side-by-side from Nigeria's top insurers. Find the best coverage at the best price.",
}

const mockComparison = [
  {
    provider: "AXA Mansard",
    plan: "Comprehensive Motor",
    price: "₦48,500/year",
    rating: 4.8,
    features: {
      ownDamage: true,
      thirdParty: true,
      theft: true,
      roadside: true,
      windscreen: true,
      towing: true,
      excess: "₦25,000",
    },
  },
  {
    provider: "Leadway Assurance",
    plan: "Premium Motor",
    price: "₦45,000/year",
    rating: 4.7,
    popular: true,
    features: {
      ownDamage: true,
      thirdParty: true,
      theft: true,
      roadside: true,
      windscreen: true,
      towing: false,
      excess: "₦30,000",
    },
  },
  {
    provider: "Custodian Insurance",
    plan: "Classic Motor",
    price: "₦52,000/year",
    rating: 4.6,
    features: {
      ownDamage: true,
      thirdParty: true,
      theft: true,
      roadside: true,
      windscreen: true,
      towing: true,
      excess: "₦20,000",
    },
  },
]

const featureLabels = {
  ownDamage: "Own Damage Coverage",
  thirdParty: "Third-Party Liability",
  theft: "Theft & Fire Protection",
  roadside: "24/7 Roadside Assistance",
  windscreen: "Windscreen Coverage",
  towing: "Free Towing Service",
  excess: "Excess Amount",
}

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Compare Plans</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compare Insurance Plans</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare coverage, benefits, and pricing from multiple insurers side-by-side to find the perfect plan for
              you.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {mockComparison.map((item) => (
                <Card key={item.provider} className={item.popular ? "border-primary shadow-lg" : ""}>
                  {item.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Best Value
                    </div>
                  )}
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.provider}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.plan}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs">⭐ {item.rating}</span>
                    </div>
                    <p className="text-2xl font-bold text-primary mt-4">{item.price}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {Object.entries(item.features).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {featureLabels[key as keyof typeof featureLabels]}
                          </span>
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground" />
                            )
                          ) : (
                            <span className="font-medium">{value}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant={item.popular ? "default" : "outline"}>
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Need help choosing the right plan?</p>
              <Button variant="outline" size="lg">
                Speak to an Insurance Advisor
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
