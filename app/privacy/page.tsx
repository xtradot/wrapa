import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - WRAPA Insurance Marketplace",
  description: "Learn how WRAPA protects your personal information and privacy.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Privacy Policy</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2024</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  WRAPA Insurance Marketplace ("we," "our," or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                  our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, phone number, and address</li>
                  <li>National Identity Number (NIN) and Bank Verification Number (BVN) for KYC</li>
                  <li>Vehicle registration details for motor insurance quotes</li>
                  <li>Health information for health insurance applications</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide insurance quotes and policy recommendations</li>
                  <li>Process insurance applications and claims</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate with you about your policies and account</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-3">We share your information only with:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Insurance providers to generate quotes and process policies</li>
                  <li>Payment processors for secure transaction handling</li>
                  <li>Regulatory authorities when required by law (e.g., NAICOM)</li>
                  <li>Service providers who assist in our operations (under strict confidentiality)</li>
                </ul>
                <p className="text-muted-foreground mt-3">We never sell your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your information, including: encryption,
                  secure servers, regular security audits, and strict access controls. However, no method of
                  transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-3">
                  Under Nigerian data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Withdraw consent for data processing</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@wrapa.com.ng
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
