"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth-context"
import { User, Mail, Phone, MapPin, Building2, Award, Calendar, Shield, Edit, Loader2, Save, AlertCircle, CheckCircle } from "lucide-react"

export default function AgentProfilePage() {
  const { user, updateProfile, isLoading, error } = useAuth()
  const [editMode, setEditMode] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    email: user?.email || "",
    phone: user?.phone || "",
    agentId: "AGT-NG-12345",
    rank: "Gold Agent",
    branch: "Victoria Island",
    joinDate: "Jan 2024",
    totalSales: "₦45.2M",
  })

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      await updateProfile({
        name: fullName,
        phone: formData.phone,
      })
      setEditMode(false)
      setSuccessMessage("Profile updated successfully!")
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("[v0] Failed to save profile:", error)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  const initials = formData.firstName.charAt(0) + (formData.lastName.charAt(0) || "")

  return (
    <div className="space-y-6">
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

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agent Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your personal information and agent credentials</p>
        </div>
        {!editMode && (
          <Button onClick={() => setEditMode(true)} variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Summary Card */}
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{initials || "UA"}</span>
              </div>
              <h3 className="font-bold text-xl">{user?.name || "Agent"}</h3>
              <p className="text-sm text-muted-foreground">{formData.agentId}</p>
              <Badge className="mt-3 bg-yellow-500">{formData.rank}</Badge>

              <Separator className="my-4" />

              <div className="w-full space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Branch</span>
                  <span className="font-medium">{formData.branch}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Joined</span>
                  <span className="font-medium">{formData.joinDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Sales</span>
                  <span className="font-semibold">{formData.totalSales}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your contact and identification details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  disabled={!editMode}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  disabled={!editMode}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" value={formData.email} className="pl-10 bg-muted" disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!editMode}
                  className="pl-10"
                />
              </div>
            </div>

            {editMode && (
              <div className="flex gap-2 pt-4">
                <Button onClick={handleSave} disabled={isSaving} className="flex-1 gap-2">
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
                <Button onClick={() => setEditMode(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Agent Credentials */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Credentials</CardTitle>
          <CardDescription>Your official agent information and verification status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Agent ID</Label>
              <Input value={formData.agentId} disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label>Agent Rank</Label>
              <Input value={formData.rank} disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label>NAICOM License</Label>
              <Input value="NAICOM-AG-2024-001" disabled className="bg-muted" />
            </div>
            <div className="space-y-2">
              <Label>License Expiry</Label>
              <Input value="2025-12-31" disabled className="bg-muted" />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <h4 className="font-semibold mb-3">Commission & Earnings</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-accent/5 rounded-lg border">
                <p className="text-sm text-muted-foreground">Commission Rate</p>
                <p className="text-2xl font-bold mt-1">5%</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border">
                <p className="text-sm text-muted-foreground">Current Month Earnings</p>
                <p className="text-2xl font-bold mt-1">₦2.45M</p>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg border">
                <p className="text-sm text-muted-foreground">Total Lifetime Earnings</p>
                <p className="text-2xl font-bold mt-1">₦12.8M</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
