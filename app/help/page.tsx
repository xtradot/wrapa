import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Help Center - WRAPA Insurance Marketplace",
  description: "Get help with your insurance queries. FAQs, contact support, and comprehensive guides.",
}

const faqs = [
  {
    question: "How do I get an instant quote?",
    answer:
      "Simply select your insurance type on the homepage, fill in your details, and you'll receive multiple quotes instantly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use bank-level encryption and are fully NAICOM compliant. Your data is never shared without your consent.",
  },
  {
    question: "How long does claims processing take?",
    answer: "Most claims are processed within 3-5 business days. Approved claims are paid within 48 hours.",
  },
  {
    question: "Can I cancel my policy?",
    answer:
      "Yes, you can cancel within the cooling-off period (usually 14-30 days) for a full refund minus administrative fees.",
  },
]

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
                <CardDescription>Mon-Fri, 8AM-6PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">+234 800 WRAPA</p>
                <p className="text-sm text-muted-foreground">(97272)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Email Support</CardTitle>
                <CardDescription>24-48 hour response</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">support@wrapa.com.ng</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>Available now</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Documentation</CardTitle>
                <CardDescription>Guides & tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/docs">View Docs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
