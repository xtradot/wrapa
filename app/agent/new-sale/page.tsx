"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, UserPlus, Shield, CheckCircle2 } from "lucide-react"

export default function NewSalePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [customerType, setCustomerType] = useState<"existing" | "new">("new")
  const [searchQuery, setSearchQuery] = useState("")
  const [productType, setProductType] = useState("")

  const handleContinue = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Complete sale
      router.push("/agent?sale=success")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">New Sale</h1>
        <p className="text-muted-foreground mt-1">Process a new policy sale</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center flex-1">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > num ? <CheckCircle2 className="h-5 w-5" /> : num}
            </div>
            {num < 4 && <div className={`flex-1 h-1 ${step > num ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Customer Selection"}
            {step === 2 && "Product Selection"}
            {step === 3 && "Policy Details"}
            {step === 4 && "Payment & Confirmation"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Find existing customer or create new account"}
            {step === 2 && "Choose insurance product"}
            {step === 3 && "Enter policy coverage details"}
            {step === 4 && "Complete payment and issue policy"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Customer Selection */}
          {step === 1 && (
            <>
              <RadioGroup value={customerType} onValueChange={(v) => setCustomerType(v as "existing" | "new")}>
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-primary">
                  <RadioGroupItem value="existing" id="existing" />
                  <Label htmlFor="existing" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Existing Customer</p>
                        <p className="text-sm text-muted-foreground">Search by phone, email, or policy number</p>
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:border-primary">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <UserPlus className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">New Customer</p>
                        <p className="text-sm text-muted-foreground">Create new customer account</p>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              {customerType === "existing" ? (
                <div className="space-y-2">
                  <Label htmlFor="search">Search Customer</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Phone, email, or policy number..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  {searchQuery && (
                    <div className="border rounded-lg p-4 mt-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-sm text-muted-foreground">+234 800 123 4567</p>
                          <Badge className="mt-1" variant="secondary">
                            2 Active Policies
                          </Badge>
                        </div>
                        <Button size="sm">Select</Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="customer@example.com" />
                  </div>
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3">
                    <Shield className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">KYC Required</p>
                      <p className="text-xs text-muted-foreground">
                        Identity verification will be required before policy activation
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Step 2: Product Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="productType">Select Insurance Product *</Label>
                <Select value={productType} onValueChange={setProductType}>
                  <SelectTrigger id="productType">
                    <SelectValue placeholder="Choose product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="motor">Motor Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="travel">Travel Insurance</SelectItem>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {productType === "motor" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="coverageType">Coverage Type *</Label>
                    <Select>
                      <SelectTrigger id="coverageType">
                        <SelectValue placeholder="Select coverage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="third-party">Third Party Only</SelectItem>
                        <SelectItem value="fire-theft">Third Party Fire & Theft</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleMake">Vehicle Make *</Label>
                      <Input id="vehicleMake" placeholder="e.g., Toyota" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleModel">Vehicle Model *</Label>
                      <Input id="vehicleModel" placeholder="e.g., Camry" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleYear">Year *</Label>
                      <Input id="vehicleYear" type="number" placeholder="2020" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleValue">Vehicle Value (₦) *</Label>
                      <Input id="vehicleValue" type="number" placeholder="5000000" />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 3: Policy Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <h4 className="font-semibold">Policy Summary</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-medium">Motor Insurance - Comprehensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle</span>
                    <span className="font-medium">2020 Toyota Camry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle Value</span>
                    <span className="font-medium">₦5,000,000</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Select Provider *</Label>
                <Select>
                  <SelectTrigger id="provider">
                    <SelectValue placeholder="Choose insurance provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="axa">AXA Mansard - ₦175,000</SelectItem>
                    <SelectItem value="leadway">Leadway Assurance - ₦165,000</SelectItem>
                    <SelectItem value="custodian">Custodian Insurance - ₦170,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Policy Start Date *</Label>
                <Input id="startDate" type="date" />
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold">Premium Amount</span>
                  <span className="text-2xl font-bold">₦165,000</span>
                </div>
                <div className="text-sm space-y-1 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Your Commission (10%)</span>
                    <span className="text-green-600 font-semibold">+₦16,500</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment & Confirmation */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-semibold mb-2">Ready to Process</h4>
                <p className="text-sm text-muted-foreground">Review the details below and select payment method</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method *</Label>
                <Select>
                  <SelectTrigger id="paymentMethod">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Card Payment (Paystack)</SelectItem>
                    <SelectItem value="transfer">Bank Transfer</SelectItem>
                    <SelectItem value="ussd">USSD Code</SelectItem>
                    <SelectItem value="pos">POS Terminal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 border rounded-lg space-y-3">
                <h4 className="font-semibold">Final Summary</h4>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Customer</span>
                    <span className="font-medium">John Doe</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product</span>
                    <span className="font-medium">Motor - Comprehensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="font-medium">Leadway Assurance</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Total Premium</span>
                    <span className="text-xl font-bold">₦165,000</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span className="font-semibold">Your Commission</span>
                    <span className="font-bold">+₦16,500</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 pt-4 border-t">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button className="ml-auto" onClick={handleContinue}>
              {step < 4 ? (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Complete Sale"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
