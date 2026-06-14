import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Plus, Search, Eye, Edit, ToggleLeft, ToggleRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Management - Tenant Dashboard",
  description: "Manage your insurance products",
}

export default function TenantProductsPage() {
  const products = [
    {
      id: "PROD-001",
      name: "Comprehensive Motor Insurance",
      category: "Motor",
      status: "active",
      policies: 1234,
      premium: "₦45,000 - ₦250,000",
      commission: "12%",
      lastUpdated: "2 days ago",
    },
    {
      id: "PROD-002",
      name: "Family Health Insurance",
      category: "Health",
      status: "active",
      policies: 856,
      premium: "₦120,000 - ₦500,000",
      commission: "15%",
      lastUpdated: "1 week ago",
    },
    {
      id: "PROD-003",
      name: "Home Protection Plus",
      category: "Home",
      status: "active",
      policies: 642,
      premium: "₦85,000 - ₦400,000",
      commission: "10%",
      lastUpdated: "3 days ago",
    },
    {
      id: "PROD-004",
      name: "Travel Insurance Pro",
      category: "Travel",
      status: "active",
      policies: 521,
      premium: "₦15,000 - ₦75,000",
      commission: "18%",
      lastUpdated: "5 days ago",
    },
    {
      id: "PROD-005",
      name: "Business Liability Coverage",
      category: "Business",
      status: "draft",
      policies: 0,
      premium: "₦200,000 - ₦2,000,000",
      commission: "8%",
      lastUpdated: "1 day ago",
    },
    {
      id: "PROD-006",
      name: "Whole Life Insurance",
      category: "Life",
      status: "active",
      policies: 389,
      premium: "₦50,000 - ₦300,000",
      commission: "20%",
      lastUpdated: "1 week ago",
    },
  ]

  const categories = [
    { name: "All Products", count: 24 },
    { name: "Motor", count: 8 },
    { name: "Health", count: 5 },
    { name: "Home", count: 4 },
    { name: "Travel", count: 3 },
    { name: "Business", count: 2 },
    { name: "Life", count: 2 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Management</h1>
          <p className="text-muted-foreground mt-1">Manage your insurance products and pricing</p>
        </div>
        <Button asChild>
          <Link href="/tenant/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Create Product
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">18 active, 6 draft</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,542</div>
            <p className="text-xs text-green-600">+12% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Commission</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.2%</div>
            <p className="text-xs text-muted-foreground">Across all products</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦68.5M</div>
            <p className="text-xs text-green-600">+15% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={cat.name === "All Products" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {cat.name} ({cat.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="mt-1">ID: {product.id}</CardDescription>
                </div>
                <Badge variant={product.status === "active" ? "default" : "outline"}>
                  {product.status === "active" ? (
                    <>
                      <ToggleRight className="h-3 w-3 mr-1" />
                      Active
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="h-3 w-3 mr-1" />
                      Draft
                    </>
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Policies</span>
                  <span className="font-medium">{product.policies.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premium Range</span>
                  <span className="font-medium">{product.premium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Commission</span>
                  <span className="font-medium text-green-600">{product.commission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">{product.lastUpdated}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                  <Link href={`/tenant/products/${product.id}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Link>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                  <Link href={`/tenant/products/${product.id}/edit`}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
