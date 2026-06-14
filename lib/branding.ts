export interface TenantBranding {
  tenantId: string
  tenantName: string
  subdomain?: string
  customDomain?: string

  // Logo & Images
  logoUrl?: string
  logoLightUrl?: string
  logoDarkUrl?: string
  faviconUrl?: string
  loginBackgroundUrl?: string

  // Colors
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  foregroundColor: string

  // Typography
  fontFamily?: string
  headingFont?: string

  // Login Page Customization
  loginTitle?: string
  loginSubtitle?: string
  loginFooterText?: string

  // UI Preferences
  borderRadius?: "none" | "sm" | "md" | "lg" | "full"
  theme?: "light" | "dark" | "auto"

  // Contact & Social
  supportEmail?: string
  supportPhone?: string
  websiteUrl?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

export const DEFAULT_BRANDING: TenantBranding = {
  tenantId: "default",
  tenantName: "WRAPA Insurance",
  subdomain: "",
  customDomain: "",
  logoUrl: "",
  logoLightUrl: "",
  logoDarkUrl: "",
  faviconUrl: "",
  loginBackgroundUrl: "",
  primaryColor: "#0066cc",
  secondaryColor: "#ff6600",
  accentColor: "#00cc66",
  backgroundColor: "#ffffff",
  foregroundColor: "#000000",
  fontFamily: "",
  headingFont: "",
  borderRadius: "md",
  theme: "auto",
  loginTitle: "Welcome Back",
  loginSubtitle: "Sign in to your account",
  loginFooterText: "",
  supportEmail: "",
  supportPhone: "",
  websiteUrl: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
}

// Mock tenant branding data - in production, fetch from database
export const TENANT_BRANDINGS: Record<string, TenantBranding> = {
  "axa-mansard": {
    tenantId: "axa-mansard",
    tenantName: "AXA Mansard Insurance",
    subdomain: "axa",
    primaryColor: "#00008f",
    secondaryColor: "#ff1721",
    accentColor: "#00a3e0",
    backgroundColor: "#ffffff",
    foregroundColor: "#000000",
    logoUrl: "/axa-mansard-insurance-logo.jpg",
    loginTitle: "AXA Mansard Portal",
    loginSubtitle: "Your trusted insurance partner",
    supportEmail: "support@axamansard.com",
    supportPhone: "+234 1 234 5678",
    websiteUrl: "https://www.axamansard.com",
    borderRadius: "md",
    theme: "light",
  },
  leadway: {
    tenantId: "leadway",
    tenantName: "Leadway Assurance",
    subdomain: "leadway",
    primaryColor: "#c8102e",
    secondaryColor: "#1e3a8a",
    accentColor: "#fbbf24",
    backgroundColor: "#ffffff",
    foregroundColor: "#1f2937",
    logoUrl: "/leadway-assurance-insurance-logo.jpg",
    loginTitle: "Leadway Assurance",
    loginSubtitle: "Leading with assurance",
    supportEmail: "support@leadway.com",
    supportPhone: "+234 1 345 6789",
    websiteUrl: "https://www.leadway.com",
    borderRadius: "lg",
    theme: "light",
  },
  custodian: {
    tenantId: "custodian",
    tenantName: "Custodian Insurance",
    subdomain: "custodian",
    primaryColor: "#1e40af",
    secondaryColor: "#059669",
    accentColor: "#f59e0b",
    backgroundColor: "#f9fafb",
    foregroundColor: "#111827",
    logoUrl: "/custodian-insurance-logo.jpg",
    loginTitle: "Custodian Insurance Portal",
    loginSubtitle: "Your financial security partner",
    supportEmail: "support@custodianinsurance.com",
    supportPhone: "+234 1 456 7890",
    websiteUrl: "https://www.custodianinsurance.com",
    borderRadius: "md",
    theme: "light",
  },
}

export function getTenantBranding(tenantIdOrDomain?: string): TenantBranding {
  if (!tenantIdOrDomain) return DEFAULT_BRANDING

  // Check by tenant ID
  if (TENANT_BRANDINGS[tenantIdOrDomain]) {
    return TENANT_BRANDINGS[tenantIdOrDomain]
  }

  // Check by subdomain
  const tenant = Object.values(TENANT_BRANDINGS).find(
    (t) => t.subdomain === tenantIdOrDomain || t.customDomain === tenantIdOrDomain,
  )

  return tenant || DEFAULT_BRANDING
}

export function generateThemeCSS(branding: TenantBranding): string {
  return `
    :root {
      --primary: ${hexToHSL(branding.primaryColor)};
      --secondary: ${hexToHSL(branding.secondaryColor)};
      --accent: ${hexToHSL(branding.accentColor)};
      --background: ${hexToHSL(branding.backgroundColor)};
      --foreground: ${hexToHSL(branding.foregroundColor)};
    }
  `
}

function hexToHSL(hex: string): string {
  // Simple conversion - in production, use a proper color library
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return "0 0% 0%"

  const r = Number.parseInt(result[1], 16) / 255
  const g = Number.parseInt(result[2], 16) / 255
  const b = Number.parseInt(result[3], 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0,
    s = 0,
    l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}
