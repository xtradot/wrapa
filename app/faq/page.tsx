import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - WRAPA",
  description: "Find answers to common questions about insurance, quotes, claims, and more.",
}

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get an insurance quote?",
        a: "Simply select your insurance type on our homepage, fill in your details, and you'll receive multiple quotes instantly from top Nigerian insurers. The process takes less than 5 minutes.",
      },
      {
        q: "Is WRAPA an insurance company?",
        a: "No, WRAPA is an insurance marketplace that connects you with licensed Nigerian insurance providers. We help you compare quotes and find the best coverage at the best price.",
      },
      {
        q: "Do I need to pay to get quotes?",
        a: "No, getting quotes on WRAPA is completely free. You only pay when you decide to purchase a policy.",
      },
    ],
  },
  {
    category: "Policies & Coverage",
    questions: [
      {
        q: "How long does it take to get my policy certificate?",
        a: "Once payment is confirmed, most policies are issued within 24 hours. Travel insurance certificates are typically issued within 2 hours for urgent visa applications.",
      },
      {
        q: "Can I cancel my policy after purchase?",
        a: "Yes, most policies have a cooling-off period (usually 14-30 days) during which you can cancel for a full refund minus administrative fees.",
      },
      {
        q: "What documents do I need to buy insurance?",
        a: "Required documents vary by insurance type. Generally, you'll need valid ID (NIN, Driver's License, or Int'l Passport), proof of address, and specific documents like vehicle registration for motor insurance.",
      },
    ],
  },
  {
    category: "Claims",
    questions: [
      {
        q: "How do I file a claim?",
        a: "Log into your account, go to the Claims section, and submit your claim with supporting documents. Our team will guide you through the process and keep you updated on the status.",
      },
      {
        q: "How long does claims processing take?",
        a: "Most claims are processed within 3-5 business days. Once approved, payment is made within 48 hours to your registered bank account.",
      },
      {
        q: "What documents do I need for a claim?",
        a: "Typical documents include: police report (for theft/accidents), photos of damage, hospital bills (for health claims), policy certificate, and valid ID. Specific requirements depend on the claim type.",
      },
    ],
  },
  {
    category: "Payments & Billing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, debit cards (Visa, Mastercard, Verve), Paystack, Flutterwave, and USSD payments.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes, many insurers offer monthly or quarterly payment plans. This option is available during checkout for eligible policies.",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use bank-level encryption and never store your card details. All payments are processed through secure, PCI-DSS compliant payment gateways.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about insurance, policies, claims, and more.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="/contact" className="text-primary font-semibold hover:underline">
              Contact our support team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
