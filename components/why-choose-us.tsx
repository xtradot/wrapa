import { Shield, Zap, HeadphonesIcon, PiggyBank, Lock, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Zap,
    title: "Instant Quotes",
    description: "Get quotes from 20+ insurers in seconds. No waiting, no paperwork, no hassle.",
  },
  {
    icon: PiggyBank,
    title: "Save Up to 40%",
    description: "Compare prices and find the best deals. Our users save an average of ₦45,000 annually.",
  },
  {
    icon: Shield,
    title: "NAICOM Licensed",
    description: "All our partner insurers are fully licensed and regulated by the National Insurance Commission.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Bank-grade security with PCI-DSS compliant payment processing via Paystack & Flutterwave.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated support team is available round-the-clock via phone, WhatsApp, and email.",
  },
  {
    icon: Award,
    title: "Claims Assistance",
    description: "We help you navigate the claims process and advocate on your behalf with insurers.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Why WRAPA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
              Nigeria&apos;s Most Trusted Insurance Marketplace
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;ve built the easiest way for Nigerians to compare, buy, and manage insurance. Our platform
              connects you with the best insurers while ensuring transparency, security, and exceptional service.
            </p>

            <div className="grid grid-cols-3 gap-6 p-6 bg-muted/50 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-xs text-muted-foreground">Insurance Partners</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl font-bold text-primary mb-1">₦2B+</div>
                <div className="text-xs text-muted-foreground">Premiums Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                <div className="text-xs text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
