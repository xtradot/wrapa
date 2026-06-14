import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Car, Heart, Plane, Home, Building2, Shield, Calculator, FileText } from "lucide-react"

export default function ProductCatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Catalog</h1>
          <p className="text-muted-foreground mt-1">Browse and compare insurance products to offer your customers</p>
        </div>
        <Button variant="outline">
          <Calculator className="h-4 w-4 mr-2" />
          Premium Calculator
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products by name, coverage, or features..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="motor" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="motor">
            <Car className="h-4 w-4 mr-2" />
            Motor
          </TabsTrigger>
          <TabsTrigger value="health">
            <Heart className="h-4 w-4 mr-2" />
            Health
          </TabsTrigger>
          <TabsTrigger value="travel">
            <Plane className="h-4 w-4 mr-2" />
            Travel
          </TabsTrigger>
          <TabsTrigger value="home">
            <Home className="h-4 w-4 mr-2" />
            Home
          </TabsTrigger>
          <TabsTrigger value="life">
            <Shield className="h-4 w-4 mr-2" />
            Life
          </TabsTrigger>
          <TabsTrigger value="business">
            <Building2 className="h-4 w-4 mr-2" />
            Business
          </TabsTrigger>
        </TabsList>

        <TabsContent value="motor" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Third Party Motor Insurance",
                provider: "Multiple Providers",
                premium: { min: 5000, max: 15000 },
                commission: "10%",
                coverage: ["Legal liability", "Death/bodily injury", "Property damage"],
                popular: true,
                features: "Meets NAICOM minimum requirements",
              },
              {
                name: "Comprehensive Motor Insurance",
                provider: "Multiple Providers",
                premium: { min: 25000, max: 150000 },
                commission: "12%",
                coverage: ["All Third Party", "Own damage", "Theft", "Fire", "Windscreen", "Roadside assistance"],
                popular: true,
                features: "Full vehicle protection",
              },
              {
                name: "Motor Plus (Enhanced)",
                provider: "Premium Providers",
                premium: { min: 80000, max: 300000 },
                commission: "15%",
                coverage: [
                  "All Comprehensive",
                  "Replacement vehicle",
                  "Flood damage",
                  "Riot & strike",
                  "Personal accident",
                ],
                popular: false,
                features: "Premium coverage with extras",
              },
            ].map((product) => (
              <Card key={product.name} className="relative">
                {product.popular && <Badge className="absolute top-4 right-4 bg-yellow-500">Popular</Badge>}
                <CardHeader>
                  <CardTitle className="pr-20">{product.name}</CardTitle>
                  <CardDescription>{product.provider}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      ₦{product.premium.min.toLocaleString()} - ₦{product.premium.max.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Commission: {product.commission}</Badge>
                    <span className="text-sm text-green-600 font-medium">
                      Earn ₦{(((product.premium.min + product.premium.max) / 2) * 0.1).toLocaleString()} avg
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Coverage Includes:</h4>
                    <ul className="space-y-1">
                      {product.coverage.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground border-t pt-3">{product.features}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <Calculator className="h-4 w-4 mr-2" />
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Basic Health Plan",
                provider: "Multiple Providers",
                premium: { min: 30000, max: 80000 },
                commission: "12%",
                coverage: ["Outpatient care", "Basic lab tests", "Generic medications", "Annual checkup"],
                popular: false,
                features: "Essential health coverage",
              },
              {
                name: "Comprehensive Health Plan",
                provider: "Multiple Providers",
                premium: { min: 100000, max: 250000 },
                commission: "15%",
                coverage: [
                  "All Basic coverage",
                  "Hospitalization",
                  "Surgery",
                  "Specialist consultations",
                  "Diagnostic tests",
                  "Maternity care",
                ],
                popular: true,
                features: "Complete healthcare protection",
              },
              {
                name: "Family Health Plan",
                provider: "Premium Providers",
                premium: { min: 200000, max: 500000 },
                commission: "15%",
                coverage: [
                  "All Comprehensive",
                  "Dental care",
                  "Eye care",
                  "Physiotherapy",
                  "Mental health",
                  "Emergency evacuation",
                ],
                popular: true,
                features: "Full family coverage up to 6 members",
              },
            ].map((product) => (
              <Card key={product.name} className="relative">
                {product.popular && <Badge className="absolute top-4 right-4 bg-yellow-500">Popular</Badge>}
                <CardHeader>
                  <CardTitle className="pr-20">{product.name}</CardTitle>
                  <CardDescription>{product.provider}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      ₦{product.premium.min.toLocaleString()} - ₦{product.premium.max.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Commission: {product.commission}</Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Coverage Includes:</h4>
                    <ul className="space-y-1">
                      {product.coverage.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground border-t pt-3">{product.features}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <Calculator className="h-4 w-4 mr-2" />
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="travel">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">Travel insurance products loading...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="home">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">Home insurance products loading...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="life">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">Life insurance products loading...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground py-8">Business insurance products loading...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Commission Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Commission Calculator</CardTitle>
          <CardDescription>Estimate your earnings on any sale</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Premium Amount</label>
              <Input type="number" placeholder="₦" defaultValue="50000" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Commission Rate</label>
              <Input type="number" placeholder="%" defaultValue="10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Your Commission</label>
              <div className="h-10 flex items-center px-3 border rounded-md bg-muted font-semibold">₦5,000</div>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Calculate</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
