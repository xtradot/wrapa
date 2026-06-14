import { Shield, Lock, Headphones, FileCheck } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "NAICOM Licensed",
    description: "All providers regulated by National Insurance Commission",
  },
  {
    icon: FileCheck,
    title: "NIID Verified",
    description: "Every policy comes with NIID verification QR code",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "PCI-DSS compliant payments via Paystack & Flutterwave",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support via phone, WhatsApp & email",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                <badge.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold mb-2">{badge.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
