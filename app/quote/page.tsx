import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Get a Quote - WRAPA Insurance Marketplace",
  description:
    "Get instant insurance quotes from top Nigerian providers. Compare and save on motor, health, travel, home, life, and business insurance.",
}

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}
