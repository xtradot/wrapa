import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Heart, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Life Insurance - Financial Security | WRAPA",
  description:
    "Secure your family's future with life insurance. Term life, whole life, and endowment policies from trusted Nigerian insurers.",
}

const plans = [
  {
    title: "Term Life",
    price: "From ₦15,000/year",
    features: [
      "Pure protection",
      "Affordable premiums",
      "Flexible terms (5-30 years)",
      "Death benefit payout",
      "Optional critical illness rider",
    ],
  },
  {
    title: "Whole Life",
    price: "From ₦45,000/year",
    popular: true,
    features: ["Lifetime coverage", "Cash value accumulation", "Loan facility", "Guaranteed payout", "Estate planning"],
  },
  {
    title: "Endowment",
    price: "From ₦60,000/year",
    features: [
      "Savings + protection",
      "Maturity benefit",
      "Death benefit",
      "Educational planning",
      "Retirement supplement",
    ],
  },
]

export default function LifeInsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Life Insurance</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Secure Your Family's Future</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Life insurance that provides financial protection for your loved ones. Compare plans and get covered
                today.
              </p>
              <Button size="lg" asChild>
                <Link href="/#quote-form">Get Life Insurance Quote</Link>
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
                      <Heart className="h-6 w-6 text-primary" />
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Life Insurance Matters</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Family Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ensure your family's financial security and maintain their standard of living if the unexpected
                      happens.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Debt Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Pay off mortgages, loans, and outstanding debts so your loved ones aren't burdened.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Education Fund</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Guarantee your children's education expenses are covered, regardless of what happens.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Income Replacement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Replace lost income to help your family meet daily expenses and financial obligations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Retirement Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Build cash value that can supplement your retirement income or serve as an emergency fund.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estate Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Leave a legacy and cover estate taxes, ensuring your assets are preserved for heirs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect What Matters Most</h2>
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
