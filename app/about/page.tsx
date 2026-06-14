import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About WRAPA - Nigeria's Leading Insurance Marketplace",
  description:
    "Learn about WRAPA's mission to make insurance accessible and affordable for all Nigerians. NAICOM approved and trusted by thousands.",
}

const stats = [
  { label: "Active Customers", value: "50,000+", icon: Users },
  { label: "Policies Issued", value: "120,000+", icon: Shield },
  { label: "Partner Insurers", value: "25+", icon: Award },
  { label: "Claims Processed", value: "₦2.5B+", icon: TrendingUp },
]

const values = [
  {
    title: "Transparency",
    description: "No hidden fees, clear terms, and honest pricing. What you see is what you get.",
  },
  {
    title: "Customer First",
    description: "Your needs drive our innovation. We're here to serve you, not the other way around.",
  },
  {
    title: "Innovation",
    description: "Leveraging technology to make insurance simple, fast, and accessible to everyone.",
  },
  {
    title: "Trust",
    description: "NAICOM approved and regulated. Your data and premiums are secure with us.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">About WRAPA</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Making Insurance Simple & Accessible for Every Nigerian
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                WRAPA is Nigeria's premier insurance marketplace, connecting customers with the best insurance products
                from trusted providers. We believe insurance should be transparent, affordable, and easy to understand.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
                To democratize access to quality insurance products across Nigeria by providing a transparent,
                technology-driven marketplace that empowers customers to make informed decisions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value) => (
                  <Card key={value.title}>
                    <CardHeader>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Regulated & Trusted</h2>
              <p className="text-muted-foreground mb-8">
                WRAPA is approved and regulated by the National Insurance Commission (NAICOM). All our partner insurers
                are licensed and vetted to ensure you receive quality service and protection.
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">NAICOM Approved</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold">ISO Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
