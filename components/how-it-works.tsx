import { FileSearch, ClipboardCheck, CreditCard, Shield, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Compare Quotes",
    description: "Enter your details once and instantly receive quotes from multiple trusted insurance providers.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Choose Your Plan",
    description: "Compare coverage details, benefits, exclusions, and pricing side-by-side to find your perfect match.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Pay Securely",
    description: "Complete your purchase with secure payment options - Paystack, Flutterwave, bank transfer, or USSD.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Get Covered Instantly",
    description: "Receive your NAICOM-compliant policy documents instantly via email and SMS with NIID verification.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get Insured in 4 Easy Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our streamlined process gets you covered in minutes, not days
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center p-6">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
