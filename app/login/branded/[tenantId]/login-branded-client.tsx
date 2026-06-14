"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Mail, Phone } from "lucide-react"
import { BrandingProvider, useBranding } from "@/lib/branding-context"

function BrandedLoginForm() {
  const { branding } = useBranding()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, validate credentials
    window.location.href = "/tenant"
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background: branding.loginBackgroundUrl
          ? `url(${branding.loginBackgroundUrl}) center/cover`
          : `linear-gradient(135deg, ${branding.primaryColor}15 0%, ${branding.backgroundColor} 50%, ${branding.accentColor}15 100%)`,
      }}
    >
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {branding.logoUrl ? (
                <img
                  src={branding.logoUrl || "/placeholder.svg"}
                  alt={branding.tenantName}
                  className="h-16 object-contain"
                />
              ) : (
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">{branding.loginTitle || "Welcome Back"}</CardTitle>
            <CardDescription>{branding.loginSubtitle || "Sign in to your account"}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-xs hover:underline"
                    style={{ color: branding.primaryColor }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" size="lg" style={{ backgroundColor: branding.primaryColor }}>
                Sign In
              </Button>
            </form>

            {branding.loginFooterText && (
              <div className="mt-6 text-center text-xs text-muted-foreground border-t pt-4">
                {branding.loginFooterText}
              </div>
            )}

            {(branding.supportEmail || branding.supportPhone) && (
              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-center text-muted-foreground mb-2">Need help?</p>
                <div className="flex justify-center gap-4 text-xs">
                  {branding.supportEmail && (
                    <a
                      href={`mailto:${branding.supportEmail}`}
                      className="flex items-center gap-1 hover:underline"
                      style={{ color: branding.primaryColor }}
                    >
                      <Mail className="h-3 w-3" />
                      {branding.supportEmail}
                    </a>
                  )}
                  {branding.supportPhone && (
                    <a
                      href={`tel:${branding.supportPhone}`}
                      className="flex items-center gap-1 hover:underline"
                      style={{ color: branding.primaryColor }}
                    >
                      <Phone className="h-3 w-3" />
                      {branding.supportPhone}
                    </a>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>Powered by WRAPA Insurance Platform</p>
          {branding.websiteUrl && (
            <a
              href={branding.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline mt-1 block"
              style={{ color: branding.primaryColor }}
            >
              Visit {branding.tenantName}
            </a>
          )}
        </div>
      </div>
    </main>
  )
}

export function LoginBrandedClient({ tenantId }: { tenantId: string }) {
  return (
    <BrandingProvider tenantId={tenantId}>
      <BrandedLoginForm />
    </BrandingProvider>
  )
}
