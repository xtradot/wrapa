import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, ArrowRight } from "lucide-react"

export default function USSDOnboardingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">USSD Channel</Badge>
            <h1 className="text-4xl font-bold mb-4">USSD Insurance Onboarding</h1>
            <p className="text-muted-foreground text-lg">
              Access insurance services from any mobile phone without internet
            </p>
          </div>

          {/* Main USSD Code Card */}
          <Card className="border-primary/20 mb-8">
            <CardHeader className="text-center pb-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Dial Our USSD Code</CardTitle>
              <CardDescription>Available on all Nigerian networks (MTN, Airtel, Glo, 9mobile)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="inline-block p-8 bg-primary/10 rounded-2xl">
                  <p className="text-5xl font-bold text-primary">*347*97#</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Press SEND/CALL after dialing</p>
              </div>
            </CardContent>
          </Card>

          {/* USSD Menu Flow */}
          <Card>
            <CardHeader>
              <CardTitle>USSD Menu Navigation</CardTitle>
              <CardDescription>Follow these simple steps to onboard and get insured</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Main Menu</p>
                    <p className="text-sm text-muted-foreground mb-2">Select service option</p>
                    <div className="bg-muted p-3 rounded text-sm font-mono">
                      <p>1. Register New Account</p>
                      <p>2. Buy Insurance</p>
                      <p>3. Check Policy</p>
                      <p>4. File Claim</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Registration Process</p>
                    <p className="text-sm text-muted-foreground mb-2">Enter your details</p>
                    <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                      <p>Enter First Name: ____</p>
                      <p>Enter Last Name: ____</p>
                      <p>Enter NIN: ___________</p>
                      <p>Confirm: 1=Yes 2=No</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Select Insurance Product</p>
                    <p className="text-sm text-muted-foreground mb-2">Choose your coverage</p>
                    <div className="bg-muted p-3 rounded text-sm font-mono">
                      <p>1. Motor - From ₦5,000</p>
                      <p>2. Health - From ₦8,000</p>
                      <p>3. Travel - From ₦3,500</p>
                      <p>4. Home - From ₦12,000</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Payment & Confirmation</p>
                    <p className="text-sm text-muted-foreground mb-2">Complete your purchase</p>
                    <div className="bg-muted p-3 rounded text-sm font-mono space-y-1">
                      <p>Premium: ₦15,000</p>
                      <p>Pay via:</p>
                      <p>1. Wallet</p>
                      <p>2. Card</p>
                      <p>3. Bank Transfer</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">No Internet Required</h4>
                <p className="text-sm text-muted-foreground">Works on any phone, even feature phones</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Instant Registration</h4>
                <p className="text-sm text-muted-foreground">Complete onboarding in under 3 minutes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">NAICOM Compliant</h4>
                <p className="text-sm text-muted-foreground">Full KYC verification via NIN</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
