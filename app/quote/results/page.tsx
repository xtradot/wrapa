"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Shield, Phone, Mail, ArrowRight, Loader2 } from "lucide-react"

// Mock quote generation based on insurance type
const generateQuotes = (type: string) => {
  const baseProviders = [
    { name: "AXA Mansard Insurance", rating: 4.8, policies: "20,000+", naicom: "NIC/001" },
    { name: "Leadway Assurance", rating: 4.7, policies: "18,000+", naicom: "NIC/002" },
    { name: "Custodian Insurance", rating: 4.6, policies: "15,000+", naicom: "NIC/003" },
    { name: "AIICO Insurance", rating: 4.5, policies: "12,000+", naicom: "NIC/004" },
  ]

  let priceMultiplier = 1
  switch (type) {
    case "motor":
      priceMultiplier = 1
      break
    case "health":
      priceMultiplier = 1.5
      break
    case "travel":
      priceMultiplier = 0.3
      break
    case "home":
      priceMultiplier = 1.2
      break
    default:
      priceMultiplier = 1
  }

  return baseProviders.map((provider, index) => ({
    ...provider,
    price: Math.round((35000 + index * 8000) * priceMultiplier),
    features: [
      "24/7 Customer Support",
      "Quick Claims Processing",
      "Nationwide Coverage",
      "Online Policy Management",
      "No Hidden Fees",
    ],
    popular: index === 1,
  }))
}

export default function QuoteResultsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [quoteType, setQuoteType] = useState("")
  const [quotes, setQuotes] = useState<any[]>([])

  useEffect(() => {
    const type = sessionStorage.getItem("quoteType")
    if (!type) {
      router.push("/quote/get-started")
      return
    }

    setQuoteType(type)

    // Simulate API call delay
    setTimeout(() => {
      const generatedQuotes = generateQuotes(type)
      setQuotes(generatedQuotes)
      setLoading(false)
    }, 2000)
  }, [router])

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Finding Your Best Quotes...</h2>
              <p className="text-muted-foreground">Comparing prices from top Nigerian insurers</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Badge className="mb-4 capitalize">{quoteType} Insurance</Badge>
            <h1 className="text-3xl font-bold mb-2">Your Personalized Quotes</h1>
            <p className="text-muted-foreground">We found {quotes.length} quotes from NAICOM-licensed providers</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {quotes.map((quote, index) => (
              <Card
                key={index}
                className={`relative ${quote.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {quote.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{quote.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span>{quote.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{quote.policies} policies</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Shield className="h-3 w-3" />
                        <span>NAICOM License: {quote.naicom}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground">
                      ₦{quote.price.toLocaleString()}
                      <span className="text-lg font-normal text-muted-foreground">/year</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Save up to ₦{Math.round(quote.price * 0.2).toLocaleString()} vs buying direct
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {quote.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <a href={`/checkout?provider=${encodeURIComponent(quote.name)}&price=${quote.price}`}>
                        Buy This Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      View Full Details
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" />
                      <span>0800-INSURE</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      <span>Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Need Help Choosing?</h3>
                <p className="text-muted-foreground mb-4">
                  Our insurance advisors are available 24/7 to help you find the perfect policy
                </p>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to an Advisor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
