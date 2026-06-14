"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { ArrowLeft, Save, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PlatformAdminProfilePage() {
  const { user, updateProfile, isLoading, error } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveChanges = async () => {
    setIsSaving(true)
    try {
      await updateProfile(formData)
      setIsEditing(false)
      setSuccessMessage("Profile updated successfully!")
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (err) {
      console.error("Failed to update profile:", err)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        <Footer />
      </>
    )
  }

  if (!user) return null

  const stats = [
    { label: "Total Tenants", value: "24" },
    { label: "Active Users", value: "1,247" },
    { label: "System Health", value: "99.8%" },
    { label: "Support Tickets", value: "12" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="border-b sticky top-16 z-40 bg-card">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/platform" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Platform Administrator Profile</h1>
              <p className="text-muted-foreground">Manage system configuration and account settings</p>
            </div>
            <Badge variant="outline" className="text-lg px-3 py-1">
              Super Admin
            </Badge>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Administrator Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <img
                        src={user.avatar || "/nigerian-man-professional-portrait.jpg"}
                        alt={user.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Admin ID</p>
                      <p className="font-mono font-semibold">{user.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Name</p>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-semibold">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Role</p>
                      <Badge className="w-fit">{user.role}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Status</p>
                      <Badge className="w-fit bg-green-600">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Details</CardTitle>
                  {!isEditing && (
                    <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                      Edit
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {successMessage && (
                    <div className="flex gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-green-600">{successMessage}</p>
                    </div>
                  )}

                  {error && (
                    <div className="flex gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                      <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing || isSaving}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} disabled className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing || isSaving}
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSaveChanges} disabled={isSaving} className="gap-2">
                        {isSaving ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4" />
                            Save Changes
                          </>
                        )}
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Permissions Tab */}
            <TabsContent value="permissions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Permissions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Tenant Management", permissions: ["Create", "Edit", "Delete", "Suspend"] },
                    { name: "User Management", permissions: ["Create", "Edit", "Delete", "Deactivate"] },
                    { name: "System Configuration", permissions: ["View", "Manage", "Export"] },
                    { name: "Analytics & Reports", permissions: ["View", "Export", "Schedule"] },
                    { name: "Audit & Compliance", permissions: ["View", "Export", "Configure"] },
                    { name: "Support Management", permissions: ["View", "Assign", "Resolve"] },
                  ].map((category) => (
                    <div key={category.name} className="p-4 border rounded-lg">
                      <p className="font-semibold mb-2">{category.name}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.permissions.map((perm) => (
                          <Badge key={perm} variant="secondary">
                            {perm}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: "Today, 3:45 PM", action: "Approved new tenant: Leadway Assurance" },
                      { time: "Today, 2:20 PM", action: "Updated system configuration" },
                      { time: "Today, 10:30 AM", action: "Generated compliance report" },
                      { time: "Yesterday, 5:15 PM", action: "Suspended inactive tenant" },
                      { time: "Yesterday, 2:00 PM", action: "Reviewed audit logs" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium text-sm">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
