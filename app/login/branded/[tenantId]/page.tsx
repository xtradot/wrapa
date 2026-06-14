import { LoginBrandedClient } from "./login-branded-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In - Insurance Portal",
  description: "Sign in to your insurance account",
}

export default function BrandedLoginPage({ params }: { params: { tenantId: string } }) {
  return <LoginBrandedClient tenantId={params.tenantId} />
}
