"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Shield, Smartphone } from "lucide-react"

export default function POSNewCustomerPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nin: "",
    productType: "",
  })

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Process and redirect to payment
      router.push("/onboarding/pos/payment")
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" onClick={() => router.back()} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>

          <div className="mb-6">
            <Badge className="mb-2">POS Onboarding</Badge>
            <h1 className="text-3xl font-bold mb-2">New Customer Registration</h1>
            <p className="text-muted-foreground">Step {step} of 3</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Customer Information"}
                {step === 2 && "Identity Verification"}
                {step === 3 && "Product Selection"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Collect basic customer details"}
                {step === 2 && "Verify customer identity (NAICOM required)"}
                {step === 3 && "Select insurance product"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={customerData.firstName}
                        onChange={(e) => setCustomerData({ ...customerData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={customerData.lastName}
                        onChange={(e) => setCustomerData({ ...customerData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="p-4 bg-muted/50 rounded-lg flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm mb-1">NAICOM Compliance Required</p>
                      <p className="text-xs text-muted-foreground">
                        All customers must complete identity verification before purchasing insurance
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nin">National Identity Number (NIN) *</Label>
                    <Input
                      id="nin"
                      placeholder="12345678901"
                      maxLength={11}
                      value={customerData.nin}
                      onChange={(e) => setCustomerData({ ...customerData, nin: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">Enter customer's 11-digit NIN</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Scan ID Card
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Capture Biometrics
                    </Button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="productType">Select Insurance Product *</Label>
                    <Select onValueChange={(value) => setCustomerData({ ...customerData, productType: value })}>
                      <SelectTrigger id="productType">
                        <SelectValue placeholder="Choose product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="motor">Motor Insurance</SelectItem>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="travel">Travel Insurance</SelectItem>
                        <SelectItem value="home">Home Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 border rounded-lg space-y-2">
                    <h4 className="font-semibold text-sm">Customer Summary</h4>
                    <div className="text-sm space-y-1 text-muted-foreground">
                      <p>
                        Name: {customerData.firstName} {customerData.lastName}
                      </p>
                      <p>Phone: {customerData.phone}</p>
                      <p>NIN: {customerData.nin ? `***${customerData.nin.slice(-4)}` : "Not provided"}</p>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between gap-4 pt-4">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                <Button onClick={handleContinue} className="ml-auto">
                  {step < 3 ? "Continue" : "Generate Quote"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
