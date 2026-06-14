import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service - WRAPA Insurance Marketplace",
  description: "Terms and conditions for using the WRAPA insurance marketplace platform.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Terms of Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using WRAPA Insurance Marketplace, you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
                <p className="text-muted-foreground">
                  WRAPA is an online insurance marketplace that connects customers with licensed insurance providers in
                  Nigeria. We facilitate the comparison, quotation, and purchase of insurance policies but are not an
                  insurance provider ourselves.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground mb-3">As a user of WRAPA, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to interfere with the platform's operation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Insurance Policies</h2>
                <p className="text-muted-foreground">
                  All insurance policies purchased through WRAPA are contracts between you and the respective insurance
                  provider. WRAPA acts as an intermediary and is not party to the insurance contract. Terms, conditions,
                  and coverage details are determined by the insurance provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Payments and Refunds</h2>
                <p className="text-muted-foreground">
                  Payments for insurance policies are processed securely through our payment partners. Refund
                  eligibility is determined by the insurance provider's policy terms and the cooling-off period. WRAPA
                  facilitates but does not control refund processes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  WRAPA provides the marketplace platform "as is" without warranties of any kind. We are not liable for
                  any claims, damages, or losses arising from insurance policies purchased through our platform. Your
                  recourse for policy disputes is with the insurance provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
                <p className="text-muted-foreground">
                  WRAPA operates under the regulatory oversight of the National Insurance Commission (NAICOM). All
                  insurance providers on our platform are licensed by NAICOM and comply with Nigerian insurance
                  regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting. Your continued use of the platform constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at:
                  <br />
                  Email: legal@wrapa.com.ng
                  <br />
                  Phone: +234 800 WRAPA (97272)
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
