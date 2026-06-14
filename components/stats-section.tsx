import { Users, FileCheck, Clock, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Customers",
    description: "Nigerians trust WRAPA",
  },
  {
    icon: FileCheck,
    value: "120,000+",
    label: "Policies Issued",
    description: "Across all products",
  },
  {
    icon: Clock,
    value: "< 5 mins",
    label: "Average Quote Time",
    description: "From start to finish",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Average Savings",
    description: "Compared to direct purchase",
  },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
