import type { Metadata } from "next"
import { RegisterForm } from "./RegisterForm"

export const metadata: Metadata = {
  title: "Create Account - WRAPA Insurance Marketplace",
  description: "Create your WRAPA account and start comparing insurance quotes from Nigeria's top providers.",
}

export default function RegisterPage() {
  return <RegisterForm />
}
