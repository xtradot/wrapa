import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, CheckCircle, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claims Management - Track & File Claims | WRAPA",
  description:
    "File new insurance claims or track existing ones. Fast, transparent claims processing with real-time updates.",
}

export default function ClaimsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Claims</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Claims Management</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              File a new claim or track the status of your existing claim. We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>File a New Claim</CardTitle>
                <CardDescription>Start the claims process by submitting your details</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" asChild>
                  <Link href="/claims/file">Start New Claim</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Average processing time: 3-5 business days
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Track Existing Claim</CardTitle>
                <CardDescription>Check the status of your claim in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="/claims/track" method="get" className="space-y-4">
                  <div>
                    <Label htmlFor="claim-id">Claim ID or Policy Number</Label>
                    <Input id="claim-id" name="id" placeholder="e.g., CLM-2024-12345" className="mt-1.5" />
                  </div>
                  <Button type="submit" className="w-full bg-transparent" size="lg" variant="outline">
                    Track Claim
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">How Claims Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Submit Claim</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the claims form with incident details and upload supporting documents
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. Review Process</h3>
                <p className="text-sm text-muted-foreground">
                  Our claims team reviews your submission and may request additional information
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Approval & Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Once approved, receive your payout directly to your bank account within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
