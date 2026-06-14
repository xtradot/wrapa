import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog Post - WRAPA Insurance",
  description: "Read our latest insurance insights and guides.",
}

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <article>
              <div className="mb-8">
                <Badge className="mb-4">Motor Insurance</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Understanding Motor Insurance in Nigeria: A Complete Guide
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    December 5, 2024
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />8 min read
                  </span>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Motor insurance is not just a legal requirement in Nigeria—it's a crucial financial protection that
                  every vehicle owner needs. This comprehensive guide will help you understand the different types of
                  motor insurance available and how to choose the right coverage for your needs.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Types of Motor Insurance in Nigeria</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">1. Third-Party Only Insurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This is the minimum legal requirement in Nigeria. It covers damage or injury to third parties but does
                  not cover damage to your own vehicle. Prices start from around ₦8,500 per year.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2. Third-Party, Fire and Theft</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This policy includes all third-party benefits plus coverage for your vehicle if it's stolen or damaged
                  by fire. It's a popular middle-ground option for many Nigerian drivers.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">3. Comprehensive Insurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The most complete coverage available, protecting your vehicle against almost all risks including
                  accidents, theft, fire, and natural disasters. It also includes third-party coverage and additional
                  benefits like windscreen replacement and roadside assistance.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Factors Affecting Your Premium</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Vehicle make, model, and age</li>
                  <li>Vehicle value and replacement cost</li>
                  <li>Your driving history and claims record</li>
                  <li>Your age and years of driving experience</li>
                  <li>Where you live and park your vehicle</li>
                  <li>Type of coverage selected</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Choosing the Right Policy</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                  <li>Assess the value of your vehicle and choose appropriate coverage</li>
                  <li>Compare quotes from multiple insurers to find the best deal</li>
                  <li>Check the insurer's claims settlement reputation</li>
                  <li>Read the policy terms carefully, especially exclusions</li>
                  <li>Consider additional benefits like roadside assistance</li>
                  <li>Verify that the insurer is licensed by NAICOM</li>
                </ol>

                <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r">
                  <p className="text-foreground font-medium mb-2">Pro Tip:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Using an insurance marketplace like WRAPA allows you to compare quotes from 20+ NAICOM-licensed
                    insurers in minutes, potentially saving you up to 40% on your premium while ensuring you get the
                    best coverage for your needs.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding motor insurance helps you make informed decisions about protecting your vehicle and
                  finances. Whether you choose basic third-party coverage or comprehensive protection, ensure you're
                  buying from a NAICOM-licensed provider and that you understand exactly what's covered.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Ready to get covered?</p>
                <Button size="lg" asChild>
                  <Link href="/">Get Your Free Quote</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
