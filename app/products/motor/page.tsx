import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, ArrowRight, Car, AlertCircle, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Motor Insurance - Comprehensive Vehicle Coverage | WRAPA",
  description:
    "Get the best motor insurance quotes in Nigeria. Comprehensive, third-party, and theft coverage for your vehicle.",
}

const coverageTypes = [
  {
    title: "Comprehensive",
    price: "From ₦45,000/year",
    popular: true,
    features: [
      "Own damage coverage",
      "Third-party liability",
      "Theft & fire protection",
      "Flood & natural disaster",
      "Windscreen coverage",
      "24/7 roadside assistance",
      "Free towing service",
      "Personal accident cover",
    ],
  },
  {
    title: "Third Party",
    price: "From ₦8,500/year",
    popular: false,
    features: [
      "Third-party bodily injury",
      "Third-party property damage",
      "Legal liability coverage",
      "NAICOM compliant",
    ],
  },
  {
    title: "Third Party Fire & Theft",
    price: "From ₦18,000/year",
    popular: false,
    features: ["All third-party benefits", "Fire damage coverage", "Theft protection", "Vandalism coverage"],
  },
]

const providers = [
  { name: "AXA Mansard", rating: 4.5, policies: "15,000+" },
  { name: "Leadway Assurance", rating: 4.8, policies: "20,000+" },
  { name: "Custodian Insurance", rating: 4.6, policies: "12,000+" },
  { name: "AIICO Insurance", rating: 4.7, policies: "18,000+" },
]

export default function MotorInsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Motor Insurance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Comprehensive Vehicle Insurance Coverage
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Protect your vehicle with Nigeria's most trusted motor insurance. Compare quotes from top insurers and
                get covered in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base" asChild>
                  <Link href="#quote-form">Get Instant Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  Compare Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Coverage Level</h2>
              <p className="text-muted-foreground">Select the plan that best fits your needs and budget</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {coverageTypes.map((coverage) => (
                <Card key={coverage.title} className={coverage.popular ? "border-primary shadow-lg" : ""}>
                  {coverage.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{coverage.title}</CardTitle>
                    <CardDescription className="text-xl font-bold text-foreground mt-2">
                      {coverage.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {coverage.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={coverage.popular ? "default" : "outline"}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Providers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Insurance Providers</h2>
              <p className="text-muted-foreground">Compare quotes from Nigeria's top-rated insurers</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {providers.map((provider) => (
                <Card key={provider.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>⭐ {provider.rating}</span>
                      <span>•</span>
                      <span>{provider.policies} policies</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      View Plans
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Covered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What's Covered?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Own Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Covers damage to your vehicle from accidents, vandalism, natural disasters, and other unforeseen
                      events.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Third-Party Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Protection against legal liability for injury or death to third parties and damage to third-party
                      property.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Car className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Theft & Fire</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Complete protection against vehicle theft and fire damage, including recovery assistance.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Roadside Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      24/7 emergency roadside support, towing service, and breakdown assistance across Nigeria.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get instant quotes from multiple insurers and save up to 40% on your motor insurance premium.
            </p>
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
