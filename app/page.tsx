import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProviders } from "@/components/featured-providers"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ProductCategories />
        <HowItWorks />
        <WhyChooseUs />
        <FeaturedProviders />
        <Testimonials />
        <TrustBadges />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
