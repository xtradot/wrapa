import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Building2, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Business Insurance - SME & Enterprise Coverage | WRAPA",
  description:
    "Comprehensive business insurance for Nigerian SMEs and enterprises. Protect your assets, employees, and operations.",
}

const plans = [
  {
    title: "SME Package",
    price: "From ₦75,000/year",
    features: [
      "Public liability",
      "Property damage",
      "Employers' liability",
      "Business interruption",
      "Equipment cover",
    ],
  },
  {
    title: "Professional Indemnity",
    price: "From ₦120,000/year",
    popular: true,
    features: [
      "Professional liability",
      "Errors & omissions",
      "Legal defense costs",
      "Breach of duty",
      "Flexible coverage limits",
    ],
  },
  {
    title: "Enterprise Package",
    price: "Custom pricing",
    features: [
      "All-in-one coverage",
      "Cyber insurance",
      "Directors & officers",
      "Marine cargo",
      "Customizable modules",
    ],
  },
]

export default function BusinessInsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Business Insurance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Protect Your Business Assets</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Comprehensive insurance solutions for Nigerian businesses. From SMEs to large enterprises, we've got you
                covered.
              </p>
              <Button size="lg" asChild>
                <Link href="/#quote-form">Get Business Insurance Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Coverage for Every Business Type</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Retail & Hospitality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Public liability insurance</li>
                      <li>• Stock and inventory cover</li>
                      <li>• Business premises protection</li>
                      <li>• Employers' liability</li>
                      <li>• Loss of earnings coverage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Professional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Professional indemnity</li>
                      <li>• Cyber liability insurance</li>
                      <li>• Legal expenses cover</li>
                      <li>• Office equipment protection</li>
                      <li>• Data breach response</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Manufacturing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Machinery breakdown cover</li>
                      <li>• Product liability insurance</li>
                      <li>• Raw materials protection</li>
                      <li>• Business interruption</li>
                      <li>• Workers' compensation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Startups</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Cyber and data protection</li>
                      <li>• Errors & omissions cover</li>
                      <li>• Directors & officers liability</li>
                      <li>• Intellectual property protection</li>
                      <li>• Equipment and tech cover</li>
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
                      <Building2 className="h-6 w-6 text-primary" />
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
            <h2 className="text-3xl font-bold mb-4">Secure Your Business Today</h2>
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
