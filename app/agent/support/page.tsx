"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, FileText, HelpCircle, Book } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SupportPage() {
  const { toast } = useToast()
  const [subject, setSubject] = useState("")
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")

  const handleStartChat = () => {
    toast({
      title: "Starting Live Chat",
      description: "Connecting you to a support agent...",
    })
  }

  const handleSubmitTicket = () => {
    if (!subject || !category || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }
    toast({
      title: "Ticket Submitted",
      description: "Your support ticket has been created. We'll respond within 24-48 hours.",
    })
    setSubject("")
    setCategory("")
    setMessage("")
  }

  const handleViewResource = (resourceTitle: string) => {
    toast({
      title: "Opening Resource",
      description: `Loading ${resourceTitle}...`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground mt-1">Get assistance and find answers to your questions</p>
      </div>

      {/* Contact Options */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Mon-Fri, 8am-6pm</p>
              <p className="font-semibold">+234 800 WRAPA (97272)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-3">24-48 hour response</p>
              <p className="font-semibold">agents@wrapa.ng</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Instant assistance</p>
              <Button size="sm" onClick={handleStartChat}>
                Start Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submit Ticket */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Support Ticket</CardTitle>
          <CardDescription>Describe your issue and we'll get back to you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              placeholder="Brief description of your issue"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <select
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="technical">Technical Issue</option>
              <option value="commission">Commission Query</option>
              <option value="customer">Customer Support</option>
              <option value="product">Product Information</option>
              <option value="account">Account Issue</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Describe your issue in detail..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmitTicket}>Submit Ticket</Button>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              question: "How do I withdraw my commission?",
              answer: "Go to Wallet & Commission page, click 'Request Withdrawal', and follow the steps.",
            },
            {
              question: "When do I receive commission payments?",
              answer: "Commissions are processed within 24-48 hours after policy activation.",
            },
            {
              question: "How can I increase my agent rank?",
              answer:
                "Earn performance points by selling policies and meeting targets. Check the Performance page for details.",
            },
            {
              question: "What documents do customers need for KYC?",
              answer: "Customers need NIN, BVN, or Driver's License for identity verification.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">{faq.question}</h4>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Training Resources
          </CardTitle>
          <CardDescription>Learn and improve your sales skills</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { title: "Agent Onboarding Guide", type: "PDF", size: "2.4 MB" },
            { title: "Product Knowledge Training", type: "Video", size: "15 mins" },
            { title: "Sales Techniques Handbook", type: "PDF", size: "1.8 MB" },
            { title: "Customer Service Best Practices", type: "Article", size: "5 min read" },
          ].map((resource, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-sm">{resource.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {resource.type} • {resource.size}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline" onClick={() => handleViewResource(resource.title)}>
                View
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
