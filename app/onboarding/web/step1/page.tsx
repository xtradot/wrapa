"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, Lock, ArrowRight, Shield } from "lucide-react"

export default function OnboardingStep1Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }
    // Store data in sessionStorage
    sessionStorage.setItem("onboarding_step1", JSON.stringify(formData))
    router.push("/onboarding/web/step2")
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step 1 of 4</span>
              <span className="text-sm text-muted-foreground">Account Creation</span>
            </div>
            <Progress value={25} className="h-2" />
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Create Your Account</CardTitle>
              <CardDescription>Let's start with your basic information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContinue} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Adebayo"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.adebayo@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={8}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Minimum 8 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-4">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <a href="/terms" target="_blank" className="text-primary hover:underline" rel="noreferrer">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" target="_blank" className="text-primary hover:underline" rel="noreferrer">
                      Privacy Policy
                    </a>
                    . I consent to WRAPA collecting and processing my data for insurance services in compliance with
                    NAICOM regulations.
                  </Label>
                </div>

                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Your information is encrypted and protected in compliance with Nigerian Data Protection Regulations
                    (NDPR) and NAICOM guidelines.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={!agreedToTerms}>
                  Continue to Verification
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="text-center mt-6 text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <a href="/login" className="text-primary font-semibold hover:underline">
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
