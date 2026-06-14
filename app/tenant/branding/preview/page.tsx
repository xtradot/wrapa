"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useBranding } from "@/lib/branding-context"

export default function BrandingPreviewPage() {
  const { branding } = useBranding()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tenant/branding">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Branding Preview</h1>
          <p className="text-muted-foreground mt-1">Preview how your branding looks on the login page</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Current Branding Settings</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tenant Name:</span>
              <span className="font-medium">{branding.tenantName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subdomain:</span>
              <span className="font-medium">{branding.subdomain || "Not set"}.wrapa.ng</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Primary Color:</span>
              <span className="flex items-center gap-2">
                <div className="h-6 w-6 rounded border" style={{ backgroundColor: branding.primaryColor }} />
                {branding.primaryColor}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Login Title:</span>
              <span className="font-medium">{branding.loginTitle || "Welcome Back"}</span>
            </div>
          </div>

          <div className="pt-4">
            <Button asChild className="w-full">
              <Link href={`/login/branded/${branding.tenantId}`} target="_blank">
                Open Branded Login Page
              </Link>
            </Button>
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-muted/50">
          <h3 className="text-sm font-semibold mb-4">Preview URL Structure</h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 bg-background rounded border">
              <span className="text-muted-foreground">Subdomain:</span>
              <br />
              https://{branding.subdomain || "yourcompany"}.wrapa.ng/login
            </div>
            {branding.customDomain && (
              <div className="p-2 bg-background rounded border">
                <span className="text-muted-foreground">Custom Domain:</span>
                <br />
                https://{branding.customDomain}/login
              </div>
            )}
            <div className="p-2 bg-background rounded border">
              <span className="text-muted-foreground">Tenant-specific:</span>
              <br />
              https://wrapa.ng/login/branded/{branding.tenantId}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
