"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Key, FileText, CheckCircle2, Copy } from "lucide-react"
import { useState } from "react"

const codeExamples = {
  createCustomer: `// POST /api/v1/customers/create
const response = await fetch('https://api.wrapa.com.ng/v1/customers/create', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
    'X-Tenant-ID': 'your_tenant_id'
  },
  body: JSON.stringify({
    firstName: "John",
    lastName: "Adebayo",
    email: "john.adebayo@example.com",
    phone: "+2348012345678",
    dateOfBirth: "1990-05-15"
  })
});

const data = await response.json();
// Response:
// {
//   "success": true,
//   "customerId": "cust_abc123xyz",
//   "verificationStatus": "pending",
//   "nextStep": "kyc_verification"
// }`,

  verifyKYC: `// POST /api/v1/customers/{customerId}/verify
const response = await fetch('https://api.wrapa.com.ng/v1/customers/cust_abc123xyz/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    verificationType: "nin",
    verificationNumber: "12345678901",
    documents: {
      utilityBill: "base64_encoded_file",
      idCard: "base64_encoded_file"
    }
  })
});

const data = await response.json();
// Response:
// {
//   "success": true,
//   "verificationStatus": "verified",
//   "verifiedAt": "2024-12-07T10:30:00Z",
//   "naicomCompliant": true
// }`,

  getQuote: `// POST /api/v1/quotes/generate
const response = await fetch('https://api.wrapa.com.ng/v1/quotes/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customerId: "cust_abc123xyz",
    productType: "motor",
    coverageType: "comprehensive",
    vehicleDetails: {
      make: "Toyota",
      model: "Camry",
      year: 2023,
      value: 15000000
    }
  })
});

const data = await response.json();
// Response:
// {
//   "success": true,
//   "quotes": [
//     {
//       "providerId": "provider_123",
//       "providerName": "AXA Mansard",
//       "premium": 75000,
//       "currency": "NGN",
//       "quoteId": "quote_xyz789"
//     }
//   ]
// }`,

  webhook: `// Webhook payload example (sent to your configured endpoint)
{
  "event": "customer.verified",
  "timestamp": "2024-12-07T10:30:00Z",
  "data": {
    "customerId": "cust_abc123xyz",
    "verificationType": "nin",
    "status": "verified",
    "naicomCompliant": true
  },
  "signature": "sha256_hmac_signature"
}

// Verify webhook signature
const crypto = require('crypto');
const signature = crypto
  .createHmac('sha256', YOUR_WEBHOOK_SECRET)
  .update(JSON.stringify(payload))
  .digest('hex');`,
}

export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4">API Documentation</Badge>
            <h1 className="text-4xl font-bold mb-4">WRAPA Partner API</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Integrate WRAPA's insurance platform into your application. Our RESTful API provides complete access to
              customer onboarding, KYC verification, quote generation, and policy management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Getting Started */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    Getting Started
                  </CardTitle>
                  <CardDescription>Obtain your API credentials and start integrating</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Get API Credentials</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Contact our partner team at partners@wrapa.com.ng or apply through the partner portal. You'll
                      receive:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>API Key (live and test modes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Tenant ID for multi-tenant access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Webhook secret for event notifications</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <code className="text-sm">
                      Base URL: <span className="text-primary">https://api.wrapa.com.ng/v1</span>
                    </code>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">2. Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Include your API key in the Authorization header:
                    </p>
                    <div className="relative">
                      <pre className="p-4 bg-slate-950 text-slate-50 dark:bg-slate-900 rounded-lg text-sm overflow-x-auto">
                        <code>Authorization: Bearer sk_live_abc123xyz...</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* API Endpoints */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Core Endpoints
                  </CardTitle>
                  <CardDescription>Complete customer onboarding workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="create" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="create">Create</TabsTrigger>
                      <TabsTrigger value="verify">Verify</TabsTrigger>
                      <TabsTrigger value="quote">Quote</TabsTrigger>
                      <TabsTrigger value="webhook">Webhooks</TabsTrigger>
                    </TabsList>

                    <TabsContent value="create" className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Create Customer</h4>
                          <Badge variant="secondary">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Create a new customer account in the WRAPA system
                        </p>
                        <div className="relative">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyCode(codeExamples.createCustomer, "create")}
                          >
                            {copiedCode === "create" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <pre className="p-4 bg-slate-950 text-slate-50 dark:bg-slate-900 rounded-lg text-xs overflow-x-auto">
                            <code>{codeExamples.createCustomer}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="verify" className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Verify KYC</h4>
                          <Badge variant="secondary">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Verify customer identity via NIN, BVN, or driver's license (NAICOM compliant)
                        </p>
                        <div className="relative">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyCode(codeExamples.verifyKYC, "verify")}
                          >
                            {copiedCode === "verify" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <pre className="p-4 bg-slate-950 text-slate-50 dark:bg-slate-900 rounded-lg text-xs overflow-x-auto">
                            <code>{codeExamples.verifyKYC}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="quote" className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Generate Quote</h4>
                          <Badge variant="secondary">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Get insurance quotes from multiple providers
                        </p>
                        <div className="relative">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyCode(codeExamples.getQuote, "quote")}
                          >
                            {copiedCode === "quote" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <pre className="p-4 bg-slate-950 text-slate-50 dark:bg-slate-900 rounded-lg text-xs overflow-x-auto">
                            <code>{codeExamples.getQuote}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="webhook" className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Webhook Events</h4>
                          <Badge variant="secondary">POST</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Receive real-time notifications about customer events
                        </p>
                        <div className="relative">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0"
                            onClick={() => copyCode(codeExamples.webhook, "webhook")}
                          >
                            {copiedCode === "webhook" ? (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <pre className="p-4 bg-slate-950 text-slate-50 dark:bg-slate-900 rounded-lg text-xs overflow-x-auto">
                            <code>{codeExamples.webhook}</code>
                          </pre>
                        </div>
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium">Available Events:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• customer.created</li>
                            <li>• customer.verified</li>
                            <li>• quote.generated</li>
                            <li>• policy.purchased</li>
                            <li>• claim.filed</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Rate Limits */}
              <Card>
                <CardHeader>
                  <CardTitle>Rate Limits & Best Practices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rate Limits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Test Mode: 100 requests per minute</li>
                      <li>• Live Mode: 1000 requests per minute</li>
                      <li>• Burst allowance: 50 requests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Practices</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use idempotency keys for POST requests</li>
                      <li>• Implement exponential backoff for retries</li>
                      <li>• Cache verification results (valid for 24 hours)</li>
                      <li>• Verify webhook signatures before processing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="#getting-started">
                      <Key className="mr-2 h-4 w-4" />
                      Getting Started
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="#endpoints">
                      <Code className="mr-2 h-4 w-4" />
                      API Endpoints
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="#webhooks">
                      <FileText className="mr-2 h-4 w-4" />
                      Webhooks
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-base">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Our integration team is here to help you get started.</p>
                  <div className="space-y-2">
                    <Button className="w-full" size="sm" asChild>
                      <a href="mailto:partners@wrapa.com.ng">Contact Partner Team</a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
                      <a href="/help">View Documentation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">API Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Production API</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Test API</span>
                    <Badge className="bg-green-500">Operational</Badge>
                  </div>
                  <Button variant="link" className="h-auto p-0 text-xs" asChild>
                    <a href="https://status.wrapa.com.ng">View Full Status</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
