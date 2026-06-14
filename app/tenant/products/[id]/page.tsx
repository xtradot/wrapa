import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, DollarSign, Users, FileText, Edit } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Details - Tenant Admin",
  description: "View insurance product details",
}

export default function TenantProductDetailPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: "Comprehensive Motor Insurance",
    category: "Motor",
    status: "active",
    description: "Full coverage motor insurance with third-party and own damage protection",
    totalPolicies: 1245,
    totalPremium: 125000000,
    avgPremium: 100000,
    commissionRate: 15,
    minPremium: 50000,
    maxPremium: 500000,
    created: "15 Jan 2024",
    lastModified: "10 Dec 2024",
  }

  const coverageItems = [
    "Third Party Liability up to ₦1,000,000",
    "Own Damage up to vehicle value",
    "Theft and Fire Protection",
    "Flood Damage Coverage",
    "Personal Accident cover for driver",
    "Medical expenses up to ₦500,000",
  ]

  const exclusions = [
    "Wear and tear",
    "Mechanical or electrical breakdown",
    "Driving under influence of alcohol/drugs",
    "Use for commercial purposes without disclosure",
    "War and nuclear risks",
  ]

  const requirements = [
    "Valid driver's license",
    "Vehicle registration papers",
    "Vehicle inspection certificate",
    "Proof of identity (NIN/Passport)",
    "Proof of address",
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tenant/products">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground mt-1">{product.category} Insurance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-transparent">
            <Edit className="h-4 w-4 mr-2" />
            Edit Product
          </Button>
          <Badge className="bg-green-500/10 text-green-700">Active</Badge>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{product.totalPolicies.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Total policies sold</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Premium</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{(product.totalPremium / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground mt-1">Annual premium volume</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Premium</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦{product.avgPremium.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Per policy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Commission</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{product.commissionRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">Agent commission rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Product Details */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="text-sm">{product.description}</p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-1">Category</p>
              <p className="font-semibold">{product.category}</p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-1">Premium Range</p>
              <p className="font-semibold">
                ₦{product.minPremium.toLocaleString()} - ₦{product.maxPremium.toLocaleString()}
              </p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-1">Commission Rate</p>
              <p className="font-semibold">{product.commissionRate}%</p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-1">Created</p>
              <p className="font-semibold">{product.created}</p>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground mb-1">Last Modified</p>
              <p className="font-semibold">{product.lastModified}</p>
            </div>
          </CardContent>
        </Card>

        {/* Coverage & Requirements */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="coverage">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="coverage">Coverage</TabsTrigger>
                <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="coverage" className="space-y-3 mt-0">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="exclusions" className="space-y-3 mt-0">
                {exclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="requirements" className="space-y-3 mt-0">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                    <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/tenant/products">Back to Products</Link>
        </Button>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Edit Product
        </Button>
      </div>
    </div>
  )
}
