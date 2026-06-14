import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Shield, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Country Management - WRAPA Admin",
  description: "Manage multi-country operations and configurations",
}

export default function AdminCountryPage() {
  const countries = [
    { code: "NG", name: "Nigeria", flag: "🇳🇬", status: "active", users: 12500, policies: 45000 },
    { code: "GH", name: "Ghana", flag: "🇬🇭", status: "active", users: 3200, policies: 8500 },
    { code: "KE", name: "Kenya", flag: "🇰🇪", status: "active", users: 5600, policies: 15000 },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", status: "beta", users: 850, policies: 2100 },
    { code: "RW", name: "Rwanda", flag: "🇷🇼", status: "beta", users: 420, policies: 950 },
    { code: "UG", name: "Uganda", flag: "🇺🇬", status: "coming-soon", users: 0, policies: 0 },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Country Management</h1>
        <p className="text-muted-foreground mt-1">Manage multi-country operations across Africa</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Countries</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground mt-1">Across Africa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22,570</div>
            <p className="text-xs text-muted-foreground mt-1">All markets</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">71,550</div>
            <p className="text-xs text-muted-foreground mt-1">Active coverage</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24%</div>
            <p className="text-xs text-muted-foreground mt-1">Last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Card key={country.code}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{country.name}</h3>
                    <p className="text-sm text-muted-foreground">{country.code}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    country.status === "active" ? "secondary" : country.status === "beta" ? "default" : "outline"
                  }
                  className={
                    country.status === "active"
                      ? "bg-green-500/10 text-green-700"
                      : country.status === "beta"
                        ? "bg-yellow-500/10 text-yellow-700"
                        : ""
                  }
                >
                  {country.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Users</span>
                  <span className="font-medium">{country.users.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Policies</span>
                  <span className="font-medium">{country.policies.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
