import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Lock, Shield, Mail, Phone, Smartphone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings - WRAPA Dashboard",
  description: "Configure your account preferences and security settings",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences and security</p>
      </div>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="currentPassword" type="password" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="newPassword" type="password" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="confirmPassword" type="password" className="pl-10" />
            </div>
          </div>

          <Button>Update Password</Button>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-muted-foreground">Get text message alerts</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Receive push notifications</p>
              </div>
            </div>
            <Switch />
          </div>

          <div className="pt-4 border-t space-y-3">
            <h4 className="font-medium">Notification Preferences</h4>

            <div className="flex items-center justify-between py-2">
              <p className="text-sm">Policy renewal reminders</p>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-sm">Payment due notifications</p>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-sm">Claim status updates</p>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between py-2">
              <p className="text-sm">Marketing communications</p>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>Control your data and privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium">Profile Visibility</p>
              <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium">Share Usage Data</p>
              <p className="text-sm text-muted-foreground">Help us improve by sharing usage data</p>
            </div>
            <Switch />
          </div>

          <div className="pt-4 border-t space-y-2">
            <Button variant="outline" className="w-full bg-transparent">
              Download My Data
            </Button>
            <Button variant="outline" className="w-full text-destructive hover:bg-destructive/10 bg-transparent">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
