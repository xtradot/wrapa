import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageSquare, HelpCircle } from "lucide-react"

export default function TenantSupportPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Support & Help</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Phone Support</CardTitle>
            <CardDescription>Available 24/7 for urgent matters</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-lg">+234 1 270 1000</p>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Call Now
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Email Support</CardTitle>
            <CardDescription>Response within 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">support@wrapa.ng</p>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Chat with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Available Now</p>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Submit a Support Ticket
          </CardTitle>
          <CardDescription>
            Fill out the form below and our support team will get back to you as soon as possible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Brief description of your issue" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={6} placeholder="Describe your issue in detail..." required />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Submit Ticket
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
