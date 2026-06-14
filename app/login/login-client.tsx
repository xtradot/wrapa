"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, User, Users, ClipboardCheck, Building2, Settings, AlertCircle, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"

export function LoginPageClient() {
  const router = useRouter()
  const { login, isLoading, error } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [localError, setLocalError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError(null)
    try {
      await login(email, password)
      // Role-based routing
      const sessionData = localStorage.getItem('wrapa_session')
      if (sessionData) {
        const user = JSON.parse(sessionData)
        // Map roles to their dashboard paths
        const roleRoutes: Record<string, string> = {
          "claims-officer": "/officer",
          "claims-manager": "/officer",
          "claims-reviewer": "/officer",
          "claims-approver": "/officer",
          "tenant-super-admin": "/tenant",
          "tenant-admin": "/tenant",
          "tenant-product-manager": "/tenant",
          "tenant-agent-manager": "/tenant",
          "tenant-finance-manager": "/tenant",
          "tenant-compliance-officer": "/tenant",
          "tenant-analyst": "/tenant",
          "platform-super-admin": "/platform",
          "platform-tenant-manager": "/platform",
          "platform-support": "/platform",
          "platform-analyst": "/platform",
        }
        const redirectPath = roleRoutes[user.role] || "/dashboard"
        router.push(redirectPath)
      }
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : "Login failed")
    }
  }

  const handleDemoLogin = async (demoEmail: string, demoPassword: string) => {
    setLocalError(null)
    try {
      await login(demoEmail, demoPassword)
      // Role-based routing
      const sessionData = localStorage.getItem('wrapa_session')
      if (sessionData) {
        const user = JSON.parse(sessionData)
        // Map roles to their dashboard paths
        const roleRoutes: Record<string, string> = {
          "claims-officer": "/officer",
          "claims-manager": "/officer",
          "claims-reviewer": "/officer",
          "claims-approver": "/officer",
          "tenant-super-admin": "/tenant",
          "tenant-admin": "/tenant",
          "tenant-product-manager": "/tenant",
          "tenant-agent-manager": "/tenant",
          "tenant-finance-manager": "/tenant",
          "tenant-compliance-officer": "/tenant",
          "tenant-analyst": "/tenant",
          "platform-super-admin": "/platform",
          "platform-tenant-manager": "/platform",
          "platform-support": "/platform",
          "platform-analyst": "/platform",
        }
        const redirectPath = roleRoutes[user.role] || "/dashboard"
        router.push(redirectPath)
      }
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : "Login failed")
    }
  }

  const demoLogins = [
    {
      role: "Policy Holder",
      email: "customer@wrapa.com",
      password: "password123",
      icon: User,
      description: "View policies, file claims, manage payments",
    },
    {
      role: "Agent",
      email: "agent@wrapa.com",
      password: "password123",
      icon: Users,
      description: "Manage sales, customers, and commissions",
    },
    {
      role: "Claims Officer",
      email: "officer@wrapa.com",
      password: "password123",
      icon: ClipboardCheck,
      description: "Process claims and adjudication",
    },
    {
      role: "Tenant Admin",
      email: "admin@wrapa.com",
      password: "password123",
      icon: Building2,
      description: "Manage products, agents, and analytics",
    },
    {
      role: "Platform Admin",
      email: "platform@wrapa.com",
      password: "password123",
      icon: Settings,
      description: "Manage all tenants and system configuration",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="w-full max-w-5xl space-y-6">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
              <CardDescription>Sign in to your WRAPA account</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {(error || localError) && (
                  <div className="flex gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error || localError}</p>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Don't have an account? </span>
                <Link href="/register" className="text-primary font-semibold hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Quick Demo Access</CardTitle>
              <CardDescription className="text-center">
                Try WRAPA with one-click demo accounts for each user role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {demoLogins.map((demo) => {
                  const Icon = demo.icon
                  return (
                    <Button
                      key={demo.role}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start gap-2 hover:bg-accent/50 bg-transparent"
                      onClick={() => handleDemoLogin(demo.email, demo.password)}
                      disabled={isLoading}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-semibold">{demo.role}</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-left">{demo.description}</p>
                      <p className="text-xs text-primary font-mono mt-1">{demo.email}</p>
                    </Button>
                  )
                })}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Demo accounts are pre-populated with sample data for testing purposes
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
