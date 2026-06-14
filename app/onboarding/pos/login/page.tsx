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
import { Badge } from "@/components/ui/badge"
import { Building2, User, Lock } from "lucide-react"

export default function POSLoginPage() {
  const router = useRouter()
  const [agentId, setAgentId] = useState("")
  const [pin, setPin] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate agent authentication
    router.push("/onboarding/pos/dashboard")
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <Badge className="mb-4 mx-auto w-fit">POS / Agency Banking</Badge>
              <CardTitle>Agent Portal</CardTitle>
              <CardDescription>Sign in to assist customers with insurance onboarding</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="agentId">Agent ID</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="agentId"
                      placeholder="AGT-12345"
                      className="pl-10"
                      value={agentId}
                      onChange={(e) => setAgentId(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pin">PIN</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pin"
                      type="password"
                      placeholder="••••"
                      className="pl-10"
                      maxLength={4}
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Need help? Contact your supervisor or call:</p>
                <p className="font-semibold text-foreground">+234 800 WRAPA (97272)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
