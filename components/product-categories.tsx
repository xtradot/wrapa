import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Heart, Plane, Home, Briefcase, Users, ArrowRight, Star } from "lucide-react"

const categories = [
  {
    id: "motor",
    title: "Motor Insurance",
    description: "Comprehensive and third-party coverage for cars, motorcycles, and commercial vehicles.",
    icon: Car,
    href: "/products/motor",
    features: ["Comprehensive Cover", "Third Party Only", "Fire & Theft", "Fleet Insurance"],
    startingPrice: "₦15,000",
    popular: true,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "health",
    title: "Health Insurance",
    description: "Access quality healthcare across 1,000+ hospitals nationwide for you and your family.",
    icon: Heart,
    href: "/products/health",
    features: ["In/Out-Patient Care", "Maternity Cover", "Dental & Optical", "Mental Health"],
    startingPrice: "₦25,000",
    popular: true,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    id: "travel",
    title: "Travel Insurance",
    description: "Travel worry-free with coverage for medical emergencies, trip cancellation, and more.",
    icon: Plane,
    href: "/products/travel",
    features: ["Medical Coverage", "Trip Cancellation", "Lost Luggage", "Visa Support"],
    startingPrice: "₦5,000",
    popular: false,
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    id: "home",
    title: "Home Insurance",
    description: "Protect your property and belongings against fire, theft, floods, and natural disasters.",
    icon: Home,
    href: "/products/home",
    features: ["Building Cover", "Contents Cover", "Liability Cover", "Rent Protection"],
    startingPrice: "₦20,000",
    popular: false,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "life",
    title: "Life Insurance",
    description: "Secure your family's future with term life, whole life, and endowment policies.",
    icon: Users,
    href: "/products/life",
    features: ["Term Life", "Whole Life", "Endowment", "Group Life"],
    startingPrice: "₦10,000",
    popular: false,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: "business",
    title: "Business Insurance",
    description: "Comprehensive coverage for SMEs and enterprises including liability and asset protection.",
    icon: Briefcase,
    href: "/products/business",
    features: ["Public Liability", "Professional Indemnity", "Asset Protection", "Employee Cover"],
    startingPrice: "₦50,000",
    popular: false,
    color: "bg-violet-500/10 text-violet-600",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
            Insurance Products for Every Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our wide range of NAICOM-approved insurance products tailored for Nigerian individuals and
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group relative hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden"
            >
              {category.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className={`h-14 w-14 rounded-xl ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="h-7 w-7" />
                </div>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-lg font-bold text-foreground">
                      {category.startingPrice}
                      <span className="text-sm font-normal text-muted-foreground">/year</span>
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={category.href}>
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
