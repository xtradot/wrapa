import type { Metadata } from "next"
import { LoginPageClient } from "./login-client"

export const metadata: Metadata = {
  title: "Sign In - WRAPA Insurance Marketplace",
  description: "Sign in to your WRAPA account to manage policies, file claims, and access your insurance dashboard.",
}

export default function LoginPage() {
  return <LoginPageClient />
}
