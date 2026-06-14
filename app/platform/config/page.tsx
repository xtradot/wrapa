import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platform Configuration - WRAPA Admin",
  description: "Configure platform settings and features",
}

export default function ConfigPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Platform Configuration</h1>
        <p className="text-muted-foreground mt-1">Manage system-wide settings and features</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="WRAPA Insurance Platform" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@wrapa.ng" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-tenants">Maximum Tenants</Label>
                <Input id="max-tenants" type="number" defaultValue="100" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Temporarily disable platform access</p>
                </div>
                <Switch />
              </div>

              <Button className="w-full">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature Toggles</CardTitle>
              <CardDescription>Enable or disable platform features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  title: "Multi-tenant Support",
                  description: "Allow multiple insurance companies on the platform",
                  enabled: true,
                },
                {
                  title: "Agent Portal",
                  description: "Enable agent sales and commission tracking",
                  enabled: true,
                },
                {
                  title: "Claims Processing",
                  description: "Built-in claims management system",
                  enabled: true,
                },
                {
                  title: "White-label Branding",
                  description: "Allow tenants to customize their branding",
                  enabled: true,
                },
                {
                  title: "API Access",
                  description: "RESTful API for third-party integrations",
                  enabled: true,
                },
                {
                  title: "Mobile App",
                  description: "Native mobile applications",
                  enabled: false,
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{feature.title}</Label>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                  <Switch defaultChecked={feature.enabled} />
                </div>
              ))}

              <Button className="w-full">Update Features</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third-party Integrations</CardTitle>
              <CardDescription>Configure external service connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="payment-gateway">Payment Gateway</Label>
                <Input id="payment-gateway" defaultValue="Paystack" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sms-provider">SMS Provider</Label>
                <Input id="sms-provider" defaultValue="Termii" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-provider">Email Provider</Label>
                <Input id="email-provider" defaultValue="SendGrid" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storage-provider">Storage Provider</Label>
                <Input id="storage-provider" defaultValue="AWS S3" />
              </div>

              <Button className="w-full">Save Integration Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and access control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Whitelisting</Label>
                  <p className="text-sm text-muted-foreground">Restrict admin access by IP address</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-min-length">Minimum Password Length</Label>
                <Input id="password-min-length" type="number" defaultValue="8" />
              </div>

              <Button className="w-full">Update Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
