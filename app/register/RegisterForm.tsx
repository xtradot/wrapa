"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would create account
    // For now, simulate successful registration
    window.location.href = "/dashboard"
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Join thousands of Nigerians saving on insurance</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 800 000 0000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
