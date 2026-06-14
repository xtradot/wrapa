import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Home, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Home Insurance - Property Protection | WRAPA",
  description:
    "Protect your home and belongings with comprehensive home insurance. Coverage for building, contents, and liability.",
}

const plans = [
  {
    title: "Building Only",
    price: "From ₦35,000/year",
    features: ["Fire & lightning", "Flood & storm", "Earthquake", "Explosion", "Riot & strike", "Malicious damage"],
  },
  {
    title: "Contents Insurance",
    price: "From ₦28,000/year",
    features: ["Furniture & electronics", "Personal belongings", "Valuables", "Theft coverage", "Accidental damage"],
  },
  {
    title: "Comprehensive Home",
    price: "From ₦55,000/year",
    popular: true,
    features: [
      "Building + contents",
      "All above benefits",
      "Personal liability",
      "Alternative accommodation",
      "Home emergency",
    ],
  },
]

export default function HomeInsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Home Insurance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Protect Your Home & Belongings</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Comprehensive coverage for your property, contents, and peace of mind. Get quotes from trusted Nigerian
                insurers.
              </p>
              <Button size="lg" asChild>
                <Link href="/#quote-form">Get Home Insurance Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What's Covered?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Building Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Walls, roof, and foundations</li>
                      <li>• Plumbing and electrical systems</li>
                      <li>• Built-in fixtures and fittings</li>
                      <li>• Boundary walls and gates</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Contents & Belongings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Furniture and appliances</li>
                      <li>• Electronics and gadgets</li>
                      <li>• Clothing and personal items</li>
                      <li>• Valuables and jewelry</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Natural Disasters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Flood and storm damage</li>
                      <li>• Fire and lightning strikes</li>
                      <li>• Earthquake coverage</li>
                      <li>• Wind and hail damage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Liability Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Third-party injury claims</li>
                      <li>• Property damage liability</li>
                      <li>• Legal defense costs</li>
                      <li>• Guest accident coverage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                      <Home className="h-6 w-6 text-primary" />
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
            <h2 className="text-3xl font-bold mb-4">Secure Your Home Today</h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#quote-form">
                Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
