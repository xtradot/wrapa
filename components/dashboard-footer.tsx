import Link from "next/link"
import { Shield } from "lucide-react"

export function DashboardFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background mt-auto">
      <div className="px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-3">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold">WRAPA</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your trusted insurance aggregation platform across Africa.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard/policies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/claims"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Claims
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/payments"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/claims/file" className="text-muted-foreground hover:text-foreground transition-colors">
                  File a Claim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} WRAPA Insurance. All rights reserved.</p>
          <p>Licensed and regulated by NAICOM</p>
        </div>
      </div>
    </footer>
  )
}
