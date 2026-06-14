"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, CreditCard, Lock, CheckCircle2, Building2, Smartphone, Wallet, Globe } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCountry } from "@/lib/country-context"

function CheckoutContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { country } = useCountry()
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [showVirtualAccount, setShowVirtualAccount] = useState(false)
  const [virtualAccountNumber, setVirtualAccountNumber] = useState("")

  const provider = searchParams.get("provider") || "Insurance Provider"
  const price = Number.parseInt(searchParams.get("price") || "0")

  const generateVirtualAccount = () => {
    const accountNumber = `30${Math.floor(Math.random() * 100000000)
      .toString()
      .padStart(8, "0")}`
    setVirtualAccountNumber(accountNumber)
    setShowVirtualAccount(true)
  }

  const handlePurchase = async () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setProcessing(true)

    setTimeout(() => {
      router.push("/checkout/success")
    }, 3000)
  }

  const availablePaymentMethods = country.paymentMethods || []

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Badge className="mb-4">Secure Checkout</Badge>
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-muted-foreground">You're just a few steps away from being insured</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Personal Information
                  </CardTitle>
                  <CardDescription>Provide your details for the policy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" placeholder="123 Victoria Island, Lagos" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Lagos" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja (FCT)</SelectItem>
                          <SelectItem value="rivers">Rivers</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    Payment Method
                  </CardTitle>
                  <CardDescription>Choose how you'd like to pay (Available in {country.name})</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    {availablePaymentMethods.includes("card") && (
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Debit / Credit Card</div>
                            <div className="text-xs text-muted-foreground">Visa, Mastercard, Verve</div>
                          </div>
                        </Label>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="virtual_account" id="virtual_account" />
                      <Label htmlFor="virtual_account" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">Dedicated Virtual Account</div>
                          <div className="text-xs text-muted-foreground">
                            Get a unique account number for this policy
                          </div>
                        </div>
                      </Label>
                      <Badge className="bg-green-500/10 text-green-700 text-xs">Recommended</Badge>
                    </div>

                    {(availablePaymentMethods.includes("instant_eft") || country.code === "NG") && (
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="instant_account" id="instant_account" />
                        <Label htmlFor="instant_account" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Wallet className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Instant Account Transfer</div>
                            <div className="text-xs text-muted-foreground">
                              Pay directly from your bank app (Recommended)
                            </div>
                          </div>
                        </Label>
                        <Badge className="bg-blue-500/10 text-blue-700 text-xs">Fast</Badge>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="pos" id="pos" />
                      <Label htmlFor="pos" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Smartphone className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">POS / Agent Payment</div>
                          <div className="text-xs text-muted-foreground">
                            Visit any agent location to complete payment
                          </div>
                        </div>
                      </Label>
                    </div>

                    {availablePaymentMethods.includes("bank_transfer") && (
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Bank Transfer</div>
                            <div className="text-xs text-muted-foreground">Manual transfer to our account</div>
                          </div>
                        </Label>
                      </div>
                    )}

                    {availablePaymentMethods.includes("ussd") && (
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="ussd" id="ussd" />
                        <Label htmlFor="ussd" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">USSD</div>
                            <div className="text-xs text-muted-foreground">Pay with your mobile phone (*737#)</div>
                          </div>
                        </Label>
                      </div>
                    )}

                    {availablePaymentMethods.includes("mobile_money") && (
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="mobile_money" id="mobile_money" />
                        <Label htmlFor="mobile_money" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Mobile Money</div>
                            <div className="text-xs text-muted-foreground">
                              {country.code === "KE" && "M-Pesa, Airtel Money"}
                              {country.code === "GH" && "MTN MoMo, Vodafone Cash"}
                              {country.code === "RW" && "MTN Mobile Money"}
                              {country.code === "UG" && "MTN MoMo, Airtel Money"}
                            </div>
                          </div>
                        </Label>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="international" id="international" />
                      <Label htmlFor="international" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">International Payment</div>
                          <div className="text-xs text-muted-foreground">PayPal, Stripe, Wise (Non-African cards)</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date *</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "virtual_account" && (
                    <div className="space-y-4 pt-4">
                      {!showVirtualAccount ? (
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={generateVirtualAccount}
                        >
                          Generate Virtual Account Number
                        </Button>
                      ) : (
                        <div className="p-4 bg-muted rounded-lg space-y-3">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-2">Your Dedicated Virtual Account</p>
                            <p className="text-2xl font-bold font-mono">{virtualAccountNumber}</p>
                            <p className="text-sm text-muted-foreground mt-2">Bank: Wema Bank</p>
                            <p className="text-sm text-muted-foreground">Account Name: WRAPA Insurance - {provider}</p>
                          </div>
                          <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t">
                            <p>• Transfer the exact amount to this account</p>
                            <p>• Your policy will be activated automatically once payment is confirmed</p>
                            <p>• This account is unique to your policy and can be used for renewals</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {paymentMethod === "instant_account" && (
                    <div className="space-y-4 pt-4">
                      <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg space-y-2">
                        <h4 className="font-semibold text-sm">How it works:</h4>
                        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                          <li>Click "Complete Purchase" to continue</li>
                          <li>Select your bank from the list</li>
                          <li>You'll be redirected to your bank's secure login</li>
                          <li>Authorize the payment in your bank app</li>
                          <li>Return here for instant confirmation</li>
                        </ol>
                        <p className="text-xs text-muted-foreground pt-2">
                          ✓ No card details needed • ✓ Instant confirmation • ✓ Secure bank-grade encryption
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "pos" && (
                    <div className="space-y-4 pt-4">
                      <div className="p-4 bg-muted rounded-lg space-y-3">
                        <h4 className="font-semibold text-sm">Visit any of our agent locations:</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>
                            • Show this reference number:{" "}
                            <span className="font-mono font-bold">REF-{Date.now().toString().slice(-8)}</span>
                          </li>
                          <li>• Payment can be made via POS terminal at any agent</li>
                          <li>• Policy will be activated immediately after payment</li>
                        </ul>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Find Nearest Agent
                        </Button>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "mobile_money" && (
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobileNumber">Mobile Number *</Label>
                        <Input id="mobileNumber" placeholder={country.phoneCode + " 800 000 0000"} />
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Mobile Money Provider" />
                        </SelectTrigger>
                        <SelectContent>
                          {country.code === "KE" && (
                            <>
                              <SelectItem value="mpesa">M-Pesa</SelectItem>
                              <SelectItem value="airtel">Airtel Money</SelectItem>
                            </>
                          )}
                          {country.code === "GH" && (
                            <>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="vodafone">Vodafone Cash</SelectItem>
                            </>
                          )}
                          {country.code === "RW" && <SelectItem value="mtn">MTN Mobile Money</SelectItem>}
                          {country.code === "UG" && (
                            <>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="airtel">Airtel Money</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {paymentMethod === "international" && (
                    <div className="space-y-4 pt-4">
                      <div className="p-4 bg-muted rounded-lg space-y-2">
                        <h4 className="font-semibold text-sm">International Payment Options:</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• PayPal - Pay with your PayPal account or international cards</p>
                          <p>• Stripe - Secure payment with any international card</p>
                          <p>• Wise - Bank transfer from 50+ countries</p>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">
                          Exchange rates and fees will be displayed before final confirmation
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2 pt-4">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Provider</div>
                    <div className="font-semibold">{provider}</div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Policy Premium</span>
                      <span className="font-medium">₦{price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span className="font-medium">₦500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT (7.5%)</span>
                      <span className="font-medium">₦{Math.round((price + 500) * 0.075).toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">
                      ₦{(price + 500 + Math.round((price + 500) * 0.075)).toLocaleString()}
                    </span>
                  </div>

                  <Button className="w-full" size="lg" onClick={handlePurchase} disabled={!agreedToTerms || processing}>
                    {processing ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Complete Purchase
                      </>
                    )}
                  </Button>

                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      <span>NAICOM Licensed Provider</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lock className="h-3 w-3" />
                      <span>Secure 256-bit SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Instant Policy Activation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
