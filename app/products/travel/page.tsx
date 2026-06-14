import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Plane, Globe, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Travel Insurance - Worldwide Coverage | WRAPA",
  description:
    "Comprehensive travel insurance for Nigerians traveling abroad. Medical coverage, trip cancellation, and emergency assistance.",
}

const plans = [
  {
    title: "Schengen Visa",
    price: "From ₦12,000",
    features: ["€30,000 medical cover", "Trip cancellation", "Lost baggage", "Flight delays", "Emergency repatriation"],
  },
  {
    title: "Worldwide Travel",
    price: "From ₦18,000",
    popular: true,
    features: [
      "$50,000 medical cover",
      "All Schengen benefits",
      "Adventure sports",
      "COVID-19 coverage",
      "24/7 global assistance",
    ],
  },
  {
    title: "Annual Multi-Trip",
    price: "From ₦45,000/year",
    features: [
      "Unlimited trips",
      "90 days per trip",
      "Worldwide coverage",
      "Business travel",
      "Family coverage option",
    ],
  },
]

export default function TravelInsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Travel Insurance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Travel with Confidence Worldwide</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Comprehensive travel insurance for visa applications and international trips. Medical coverage, trip
                protection, and 24/7 global assistance.
              </p>
              <Button size="lg" asChild>
                <Link href="/#quote-form">Get Travel Insurance</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card key={plan.title} className={plan.popular ? "border-primary shadow-lg" : ""}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      {plan.title.includes("Annual") ? (
                        <Globe className="h-6 w-6 text-primary" />
                      ) : (
                        <Plane className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <p className="text-2xl font-bold text-primary mt-2">{plan.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Get instant travel insurance certificates for visa applications
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#quote-form">
                Get Covered Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
