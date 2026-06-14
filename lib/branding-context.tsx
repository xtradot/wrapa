"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type TenantBranding, DEFAULT_BRANDING, getTenantBranding, generateThemeCSS } from "./branding"

interface BrandingContextType {
  branding: TenantBranding
  setBranding: (branding: TenantBranding) => void
  updateBranding: (updates: Partial<TenantBranding>) => void
  resetBranding: () => void
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined)

export function BrandingProvider({ children, tenantId }: { children: React.ReactNode; tenantId?: string }) {
  const [branding, setBranding] = useState<TenantBranding>(() => getTenantBranding(tenantId))

  useEffect(() => {
    // Apply branding to document
    applyBranding(branding)
  }, [branding])

  const updateBranding = (updates: Partial<TenantBranding>) => {
    const sanitizedUpdates = { ...updates }

    // Recursively ensure no undefined values in nested objects
    Object.keys(sanitizedUpdates).forEach((key) => {
      const value = sanitizedUpdates[key as keyof TenantBranding]
      if (value === undefined) {
        delete sanitizedUpdates[key as keyof TenantBranding]
      } else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        // Handle nested objects like socialLinks
        const nestedObj = value as Record<string, any>
        Object.keys(nestedObj).forEach((nestedKey) => {
          if (nestedObj[nestedKey] === undefined) {
            nestedObj[nestedKey] = ""
          }
        })
      }
    })

    setBranding((prev) => ({ ...prev, ...sanitizedUpdates }))
  }

  const resetBranding = () => {
    setBranding(DEFAULT_BRANDING)
  }

  return (
    <BrandingContext.Provider value={{ branding, setBranding, updateBranding, resetBranding }}>
      {children}
    </BrandingContext.Provider>
  )
}

function applyBranding(branding: TenantBranding) {
  // Apply CSS custom properties
  const style = document.createElement("style")
  style.id = "tenant-branding"
  style.textContent = generateThemeCSS(branding)

  const existingStyle = document.getElementById("tenant-branding")
  if (existingStyle) {
    existingStyle.remove()
  }
  document.head.appendChild(style)

  // Apply favicon if provided
  if (branding.faviconUrl) {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement
    if (favicon) {
      favicon.href = branding.faviconUrl
    }
  }

  // Apply font family if provided
  if (branding.fontFamily) {
    document.documentElement.style.setProperty("--font-sans", branding.fontFamily)
  }

  // Apply border radius
  if (branding.borderRadius) {
    const radiusMap = {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    }
    document.documentElement.style.setProperty("--radius", radiusMap[branding.borderRadius])
  }
}

export function useBranding() {
  const context = useContext(BrandingContext)
  if (context === undefined) {
    throw new Error("useBranding must be used within a BrandingProvider")
  }
  return context
}
