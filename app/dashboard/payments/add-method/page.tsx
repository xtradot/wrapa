"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Building2, Smartphone, Wallet, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCountry } from "@/lib/country-context"

export default function AddPaymentMethodPage() {
  const router = useRouter()
  const { country } = useCountry() // Fix: useCountry returns 'country' not 'currentCountry'
  const [methodType, setMethodType] = useState("card")
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    // Simulate API call
    setTimeout(() => {
      router.push("/dashboard/payments")
    }, 2000)
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/payments">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Payments
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Add Payment Method</h1>
        <p className="text-muted-foreground mt-1">Add a new payment method for faster checkouts</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Payment Method Type</CardTitle>
          <CardDescription>Choose how you'd like to pay for your premiums</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={methodType} onValueChange={setMethodType}>
            <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Card (Debit/Credit)</div>
                  <div className="text-xs text-muted-foreground">Save your card for future payments</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="virtual_account" id="virtual_account" />
              <Label htmlFor="virtual_account" className="flex items-center gap-2 cursor-pointer flex-1">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Virtual Account</div>
                  <div className="text-xs text-muted-foreground">Get a dedicated account for all payments</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
              <RadioGroupItem value="instant_account" id="instant_account" />
              <Label htmlFor="instant_account" className="flex items-center gap-2 cursor-pointer flex-1">
                <Wallet className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Instant Bank Transfer</div>
                  <div className="text-xs text-muted-foreground">Link your bank account</div>
                </div>
              </Label>
            </div>

            {country.paymentMethods.includes("mobile_money") && (
              <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="mobile_money" id="mobile_money" />
                <Label htmlFor="mobile_money" className="flex items-center gap-2 cursor-pointer flex-1">
                  <Smartphone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Mobile Money</div>
                    <div className="text-xs text-muted-foreground">M-Pesa, MTN MoMo, etc.</div>
                  </div>
                </Label>
              </div>
            )}
          </RadioGroup>

          {methodType === "card" && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name *</Label>
                <Input id="cardName" placeholder="John Doe" />
              </div>
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

          {methodType === "virtual_account" && (
            <div className="space-y-4 pt-4">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <h4 className="font-semibold text-sm">How Virtual Accounts Work:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Get a unique account number dedicated to your profile</li>
                  <li>• Use it for all policy payments and renewals</li>
                  <li>• Automatic payment confirmation and policy activation</li>
                  <li>• No manual reconciliation needed</li>
                </ul>
              </div>
              <Button type="button" variant="outline" className="w-full bg-transparent">
                Generate Virtual Account
              </Button>
            </div>
          )}

          {methodType === "instant_account" && (
            <div className="space-y-4 pt-4">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <h4 className="font-semibold text-sm">Link Your Bank Account:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• One-time secure authorization with your bank</li>
                  <li>• Pay directly from your account with a single click</li>
                  <li>• No need to enter card details every time</li>
                  <li>• Instant confirmation</li>
                </ul>
              </div>
              <Button type="button" variant="outline" className="w-full bg-transparent">
                Connect Bank Account
              </Button>
            </div>
          )}

          {methodType === "mobile_money" && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input id="mobileNumber" placeholder={country.phoneCode + " 800 000 0000"} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="provider">Provider *</Label>
                <Input id="provider" placeholder="e.g., M-Pesa, MTN MoMo" />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} disabled={saving} className="flex-1">
              {saving ? "Saving..." : "Save Payment Method"}
            </Button>
            <Button variant="outline" className="bg-transparent" asChild>
              <Link href="/dashboard/payments">Cancel</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
