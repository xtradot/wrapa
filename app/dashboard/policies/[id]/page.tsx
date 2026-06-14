import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, DollarSign, FileText, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Policy Details - WRAPA Dashboard",
  description: "View detailed information about your insurance policy",
}

export default function PolicyDetailsPage({ params }: { params: { id: string } }) {
  // Mock policy data - in real app this would come from API
  const policy = {
    id: params.id,
    type: "Motor Insurance",
    provider: "AXA Mansard",
    coverage: "Comprehensive",
    premium: 45000,
    startDate: "15 Mar 2024",
    endDate: "15 Mar 2025",
    status: "active",
    coverageAmount: 5000000,
    vehicleDetails: {
      make: "Toyota",
      model: "Camry 2020",
      plate: "ABC-123-XY",
      vin: "1HGBH41JXMN109186",
    },
    benefits: [
      "Third-party liability coverage up to ₦5,000,000",
      "Own damage coverage with ₦50,000 excess",
      "Theft and fire protection",
      "24/7 roadside assistance",
      "Free towing service within Lagos",
      "Accident emergency medical expenses up to ₦100,000",
    ],
    exclusions: [
      "Wear and tear",
      "Mechanical or electrical breakdown",
      "Driving under influence of alcohol/drugs",
      "Use for commercial purposes (ride-sharing)",
    ],
    documents: [
      { name: "Policy Certificate", size: "245 KB", date: "15 Mar 2024" },
      { name: "Insurance Schedule", size: "180 KB", date: "15 Mar 2024" },
      { name: "Terms & Conditions", size: "1.2 MB", date: "15 Mar 2024" },
    ],
    paymentHistory: [{ date: "15 Mar 2024", amount: 45000, method: "Card", status: "Paid", ref: "PAY-12345" }],
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link href="/dashboard/policies">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Policies
        </Link>
      </Button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold">{policy.type}</h1>
            <Badge variant="secondary" className="bg-green-500/10 text-green-700">
              {policy.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">{policy.provider}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" className="bg-transparent">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
          <Button>Renew Policy</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Policy Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Policy Number</p>
                  <p className="font-mono font-semibold">{policy.id}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Coverage Type</p>
                  <p className="font-semibold">{policy.coverage}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Coverage Amount</p>
                  <p className="font-semibold">₦{policy.coverageAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Annual Premium</p>
                  <p className="font-semibold">₦{policy.premium.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Effective Date</p>
                  <p className="font-semibold">{policy.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Expiry Date</p>
                  <p className="font-semibold">{policy.endDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Details */}
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Make & Model</p>
                  <p className="font-semibold">
                    {policy.vehicleDetails.make} {policy.vehicleDetails.model}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">License Plate</p>
                  <p className="font-mono font-semibold">{policy.vehicleDetails.plate}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">VIN Number</p>
                  <p className="font-mono font-semibold">{policy.vehicleDetails.vin}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coverage Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Coverage Benefits</CardTitle>
              <CardDescription>What's included in your policy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {policy.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Exclusions */}
          <Card>
            <CardHeader>
              <CardTitle>Exclusions</CardTitle>
              <CardDescription>What's not covered</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {policy.exclusions.map((exclusion, index) => (
                  <li key={index} className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {policy.paymentHistory.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">₦{payment.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          {payment.date} • {payment.method}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                      {payment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" asChild>
                <Link href="/claims/file">File a Claim</Link>
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Request Changes
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                Cancel Policy
              </Button>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Download policy documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {policy.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Contact your insurance provider for policy-related queries
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-medium">{policy.provider}</p>
                <p className="text-muted-foreground">+234 800 AXA CARE</p>
                <p className="text-muted-foreground">support@axamansard.com</p>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
