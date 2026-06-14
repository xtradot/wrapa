import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const providers = [
  { name: "AXA Mansard", rating: 4.8, policies: "250K+", verified: true },
  { name: "Leadway Assurance", rating: 4.7, policies: "180K+", verified: true },
  { name: "AIICO Insurance", rating: 4.6, policies: "150K+", verified: true },
  { name: "Custodian Insurance", rating: 4.5, policies: "120K+", verified: true },
  { name: "NEM Insurance", rating: 4.5, policies: "100K+", verified: true },
  { name: "Coronation Insurance", rating: 4.4, policies: "90K+", verified: true },
  { name: "Staco Insurance", rating: 4.4, policies: "85K+", verified: true },
  { name: "Zenith Insurance", rating: 4.3, policies: "80K+", verified: true },
]

export function FeaturedProviders() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Trusted Partners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nigeria&apos;s Top Insurance Providers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner exclusively with NAICOM-licensed insurance companies to bring you reliable coverage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {providers.map((provider) => (
            <Card key={provider.name} className="hover:shadow-md transition-shadow group">
              <CardContent className="p-5 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-xl font-bold text-primary">
                    {provider.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <p className="font-medium text-foreground mb-2">{provider.name}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-secondary font-medium">★ {provider.rating}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{provider.policies}</span>
                </div>
                {provider.verified && (
                  <Badge variant="secondary" className="mt-3 text-xs">
                    NAICOM Verified
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">And 12+ more NAICOM-licensed insurance providers</p>
        </div>
      </div>
    </section>
  )
}
