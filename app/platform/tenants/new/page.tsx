import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Onboard New Tenant - WRAPA Admin",
  description: "Add new insurance company to the platform",
}

export default function NewTenantPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/platform/tenants">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Onboard New Tenant</h1>
          <p className="text-muted-foreground mt-1">Add a new insurance company to the platform</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>Basic details about the insurance company</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name *</Label>
              <Input id="company-name" placeholder="e.g., AXA Mansard Insurance" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registration-number">Registration Number *</Label>
              <Input id="registration-number" placeholder="e.g., RC123456" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Operating Country *</Label>
              <Select>
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ng">Nigeria</SelectItem>
                  <SelectItem value="gh">Ghana</SelectItem>
                  <SelectItem value="ke">Kenya</SelectItem>
                  <SelectItem value="za">South Africa</SelectItem>
                  <SelectItem value="rw">Rwanda</SelectItem>
                  <SelectItem value="ug">Uganda</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="license-number">Insurance License Number *</Label>
              <Input id="license-number" placeholder="e.g., INS-2024-001" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Contact Email *</Label>
              <Input id="email" type="email" placeholder="contact@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Phone *</Label>
              <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Company Address *</Label>
            <Textarea id="address" placeholder="Enter full address" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Company Description</Label>
            <Textarea id="description" placeholder="Brief description of the company" rows={4} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Administrator Account</CardTitle>
          <CardDescription>Create the primary admin account for this tenant</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="admin-name">Full Name *</Label>
              <Input id="admin-name" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-email">Email Address *</Label>
              <Input id="admin-email" type="email" placeholder="admin@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-phone">Phone Number *</Label>
              <Input id="admin-phone" type="tel" placeholder="+234 800 000 0000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-role">Role *</Label>
              <Select defaultValue="super_admin">
                <SelectTrigger id="admin-role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Platform Settings</CardTitle>
          <CardDescription>Configure tenant-specific platform settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="subdomain">Subdomain *</Label>
              <div className="flex">
                <Input id="subdomain" placeholder="company-name" className="rounded-r-none" />
                <div className="flex items-center px-3 border border-l-0 rounded-r-md bg-muted text-muted-foreground text-sm">
                  .wrapa.ng
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-users">Maximum Users</Label>
              <Input id="max-users" type="number" placeholder="100" defaultValue="100" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-agents">Maximum Agents</Label>
              <Input id="max-agents" type="number" placeholder="50" defaultValue="50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subscription-plan">Subscription Plan</Label>
              <Select defaultValue="enterprise">
                <SelectTrigger id="subscription-plan">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" asChild>
          <Link href="/platform/tenants">Cancel</Link>
        </Button>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Create Tenant
        </Button>
      </div>
    </div>
  )
}
