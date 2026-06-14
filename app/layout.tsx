import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CountryProvider } from "@/lib/country-context"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "WRAPA Insurance | Africa's Leading Insurance Marketplace",
  description:
    "Compare and purchase motor, health, travel, and home insurance from top licensed providers across Africa. Get instant quotes, secure payments, and 24/7 support.",
  keywords: [
    "insurance Africa",
    "motor insurance",
    "health insurance",
    "insurance quotes",
    "WRAPA",
    "Nigeria insurance",
    "Ghana insurance",
    "Kenya insurance",
  ],
  openGraph: {
    title: "WRAPA Insurance | Africa's Leading Insurance Marketplace",
    description: "Compare insurance quotes from Africa's top providers. Get covered in minutes.",
    type: "website",
    locale: "en",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#047857" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <CountryProvider>{children}</CountryProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
