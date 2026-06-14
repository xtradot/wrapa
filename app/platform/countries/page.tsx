import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Settings } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Countries Management - WRAPA Admin",
  description: "Manage platform countries and regional settings",
}

export default function CountriesPage() {
  const countries = [
    {
      name: "Nigeria",
      code: "NG",
      flag: "🇳🇬",
      currency: "NGN",
      status: "active",
      tenants: 28,
      users: 12500,
      policies: 45000,
      regulatoryBody: "NAICOM",
    },
    {
      name: "Ghana",
      code: "GH",
      flag: "🇬🇭",
      currency: "GHS",
      status: "active",
      tenants: 6,
      users: 3200,
      policies: 8500,
      regulatoryBody: "NIC",
    },
    {
      name: "Kenya",
      code: "KE",
      flag: "🇰🇪",
      currency: "KES",
      status: "active",
      tenants: 5,
      users: 5600,
      policies: 15000,
      regulatoryBody: "IRA",
    },
    {
      name: "South Africa",
      code: "ZA",
      flag: "🇿🇦",
      currency: "ZAR",
      status: "active",
      tenants: 2,
      users: 850,
      policies: 2100,
      regulatoryBody: "FSB",
    },
    {
      name: "Rwanda",
      code: "RW",
      flag: "🇷🇼",
      currency: "RWF",
      status: "active",
      tenants: 1,
      users: 420,
      policies: 950,
      regulatoryBody: "BNR",
    },
    {
      name: "Uganda",
      code: "UG",
      flag: "🇺🇬",
      currency: "UGX",
      status: "coming_soon",
      tenants: 0,
      users: 0,
      policies: 0,
      regulatoryBody: "IRA-UG",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Countries Management</h1>
          <p className="text-muted-foreground mt-1">Manage platform availability and regional settings</p>
        </div>
        <Button>
          <Globe className="mr-2 h-4 w-4" />
          Add New Country
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <CardTitle className="text-lg">{country.name}</CardTitle>
                    <CardDescription>{country.regulatoryBody}</CardDescription>
                  </div>
                </div>
                <Badge variant={country.status === "active" ? "default" : "secondary"}>
                  {country.status === "active" ? "Active" : "Coming Soon"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Currency</p>
                  <p className="text-sm font-semibold">{country.currency}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Country Code</p>
                  <p className="text-sm font-semibold">{country.code}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tenants</span>
                  <span className="font-medium">{country.tenants}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Users</span>
                  <span className="font-medium">{country.users.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Policies</span>
                  <span className="font-medium">{country.policies.toLocaleString()}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent" disabled={country.status !== "active"}>
                <Settings className="mr-2 h-4 w-4" />
                Configure Settings
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
