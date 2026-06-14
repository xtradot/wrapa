import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, Mail, FileText, Home } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Purchase Successful - WRAPA Insurance",
  description: "Your insurance policy has been activated successfully",
}

export default function CheckoutSuccessPage() {
  const policyNumber = `POL-${Date.now().toString().slice(-8)}`
  const currentDate = new Date().toLocaleDateString("en-NG", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                </div>

                {/* Success Message */}
                <div>
                  <Badge className="mb-4">Payment Successful</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">Congratulations!</h1>
                  <p className="text-lg text-muted-foreground">
                    Your insurance policy has been activated and is now in effect
                  </p>
                </div>

                {/* Policy Details */}
                <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Policy Number</span>
                    <span className="font-mono font-bold text-lg">{policyNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Effective Date</span>
                    <span className="font-semibold">{currentDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20">
                      Active
                    </Badge>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Policy Document
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Policy to Me
                  </Button>
                </div>

                {/* Next Steps */}
                <div className="pt-6 border-t text-left">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>You'll receive a confirmation email with your policy details within 5 minutes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Your policy certificate with NIID QR code will be sent within 24 hours</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>You can file claims anytime through your online dashboard</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>24/7 customer support is available at 0800-INSURE-NG</span>
                    </li>
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="/claims">
                      <FileText className="mr-2 h-4 w-4" />
                      File a Claim
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Card */}
          <Card className="mt-6 bg-muted/30">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">Our support team is here to assist you 24/7</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a href="tel:08001678735" className="text-primary hover:underline">
                    0800-INSURE-NG
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a href="mailto:support@wrapa.ng" className="text-primary hover:underline">
                    support@wrapa.ng
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/help" className="text-primary hover:underline">
                    Help Center
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
