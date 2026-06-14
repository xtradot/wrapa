"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Upload, Eye, Globe, Mail, Phone, LinkIcon, Save, RotateCcw } from "lucide-react"
import { useBranding } from "@/lib/branding-context"

export default function TenantBrandingPage() {
  const { branding, updateBranding, resetBranding } = useBranding()
  const [previewMode, setPreviewMode] = useState(false)

  const handleColorChange = (field: string, value: string) => {
    updateBranding({ [field]: value })
  }

  const handleSocialLinkChange = (platform: string, value: string) => {
    updateBranding({
      socialLinks: {
        facebook: branding.socialLinks?.facebook || "",
        twitter: branding.socialLinks?.twitter || "",
        linkedin: branding.socialLinks?.linkedin || "",
        instagram: branding.socialLinks?.instagram || "",
        [platform]: value || "", // Ensure empty string instead of undefined
      },
    })
  }

  const handleSave = () => {
    // In production, save to database
    alert("Branding saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Brand Customization</h1>
          <p className="text-muted-foreground mt-1">Customize your insurance portal to match your brand</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setPreviewMode(!previewMode)}>
            <Eye className="h-4 w-4 mr-2" />
            {previewMode ? "Edit Mode" : "Preview"}
          </Button>
          <Button variant="outline" onClick={resetBranding}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="colors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="colors">Colors & Theme</TabsTrigger>
          <TabsTrigger value="logo">Logo & Images</TabsTrigger>
          <TabsTrigger value="login">Login Page</TabsTrigger>
          <TabsTrigger value="domain">Domain & URLs</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle>Brand Colors</CardTitle>
              </div>
              <CardDescription>Define your brand color palette</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={branding.primaryColor}
                      onChange={(e) => handleColorChange("primaryColor", e.target.value)}
                      className="w-20 h-10"
                    />
                    <Input
                      value={branding.primaryColor}
                      onChange={(e) => handleColorChange("primaryColor", e.target.value)}
                      className="flex-1"
                      placeholder="#0066cc"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Main buttons, links, and accents</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="secondary-color"
                      type="color"
                      value={branding.secondaryColor}
                      onChange={(e) => handleColorChange("secondaryColor", e.target.value)}
                      className="w-20 h-10"
                    />
                    <Input
                      value={branding.secondaryColor}
                      onChange={(e) => handleColorChange("secondaryColor", e.target.value)}
                      className="flex-1"
                      placeholder="#ff6600"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Secondary actions and highlights</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="accent-color"
                      type="color"
                      value={branding.accentColor}
                      onChange={(e) => handleColorChange("accentColor", e.target.value)}
                      className="w-20 h-10"
                    />
                    <Input
                      value={branding.accentColor}
                      onChange={(e) => handleColorChange("accentColor", e.target.value)}
                      className="flex-1"
                      placeholder="#00cc66"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Success states and notifications</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="border-radius">Border Radius</Label>
                  <Select
                    value={branding.borderRadius || "md"}
                    onValueChange={(value) => updateBranding({ borderRadius: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None (0px)</SelectItem>
                      <SelectItem value="sm">Small (4px)</SelectItem>
                      <SelectItem value="md">Medium (8px)</SelectItem>
                      <SelectItem value="lg">Large (16px)</SelectItem>
                      <SelectItem value="full">Full (Rounded)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Controls button and card roundness</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-4">Color Preview</h3>
                <div className="flex gap-4 flex-wrap">
                  <div className="h-20 w-20 rounded-lg border" style={{ backgroundColor: branding.primaryColor }} />
                  <div className="h-20 w-20 rounded-lg border" style={{ backgroundColor: branding.secondaryColor }} />
                  <div className="h-20 w-20 rounded-lg border" style={{ backgroundColor: branding.accentColor }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logo" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                <CardTitle>Logo & Brand Assets</CardTitle>
              </div>
              <CardDescription>Upload your company logo and brand images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Primary Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 bg-muted rounded-lg flex items-center justify-center overflow-hidden border">
                    {branding.logoUrl ? (
                      <img
                        src={branding.logoUrl || "/placeholder.svg"}
                        alt="Logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Palette className="h-10 w-10 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="Logo URL"
                      value={branding.logoUrl || ""}
                      onChange={(e) => updateBranding({ logoUrl: e.target.value })}
                    />
                    <Button variant="outline" className="w-full bg-transparent">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Logo
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommended: 400x400px PNG or SVG with transparent background
                </p>
              </div>

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden border">
                    {branding.faviconUrl ? (
                      <img
                        src={branding.faviconUrl || "/placeholder.svg"}
                        alt="Favicon"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Palette className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="Favicon URL"
                      value={branding.faviconUrl || ""}
                      onChange={(e) => updateBranding({ faviconUrl: e.target.value })}
                    />
                    <Button variant="outline" className="w-full bg-transparent">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Favicon
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">32x32px PNG or ICO format</p>
              </div>

              <div className="space-y-2">
                <Label>Login Background Image (Optional)</Label>
                <Input
                  placeholder="Background image URL"
                  value={branding.loginBackgroundUrl || ""}
                  onChange={(e) => updateBranding({ loginBackgroundUrl: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">High-resolution image for login page background</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="login" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Login Page Customization</CardTitle>
              <CardDescription>Customize the text and appearance of your login page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-title">Login Page Title</Label>
                <Input
                  id="login-title"
                  value={branding.loginTitle || ""}
                  onChange={(e) => updateBranding({ loginTitle: e.target.value })}
                  placeholder="Welcome Back"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-subtitle">Login Page Subtitle</Label>
                <Input
                  id="login-subtitle"
                  value={branding.loginSubtitle || ""}
                  onChange={(e) => updateBranding({ loginSubtitle: e.target.value })}
                  placeholder="Sign in to your account"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-footer">Login Footer Text</Label>
                <Textarea
                  id="login-footer"
                  value={branding.loginFooterText || ""}
                  onChange={(e) => updateBranding({ loginFooterText: e.target.value })}
                  placeholder="Additional information or legal text"
                  rows={3}
                />
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-2">Preview</h3>
                <div className="bg-muted/50 rounded-lg p-6 text-center space-y-2">
                  <h2 className="text-2xl font-bold">{branding.loginTitle || "Welcome Back"}</h2>
                  <p className="text-muted-foreground">{branding.loginSubtitle || "Sign in to your account"}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="domain" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <CardTitle>Domain Configuration</CardTitle>
              </div>
              <CardDescription>Set up your custom domain and subdomain</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subdomain">Subdomain</Label>
                <div className="flex gap-2">
                  <Input
                    id="subdomain"
                    value={branding.subdomain || ""}
                    onChange={(e) => updateBranding({ subdomain: e.target.value })}
                    placeholder="yourcompany"
                    className="flex-1"
                  />
                  <span className="flex items-center text-muted-foreground">.wrapa.ng</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your portal will be accessible at {branding.subdomain || "yourcompany"}.wrapa.ng
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-domain">Custom Domain (Optional)</Label>
                <Input
                  id="custom-domain"
                  value={branding.customDomain || ""}
                  onChange={(e) => updateBranding({ customDomain: e.target.value })}
                  placeholder="insurance.yourcompany.com"
                />
                <p className="text-xs text-muted-foreground">Use your own domain - requires DNS configuration</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website-url">Company Website</Label>
                <Input
                  id="website-url"
                  value={branding.websiteUrl || ""}
                  onChange={(e) => updateBranding({ websiteUrl: e.target.value })}
                  placeholder="https://www.yourcompany.com"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update support contact details and social links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <div className="flex gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground mt-2" />
                    <Input
                      id="support-email"
                      type="email"
                      value={branding.supportEmail || ""}
                      onChange={(e) => updateBranding({ supportEmail: e.target.value })}
                      placeholder="support@yourcompany.com"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="support-phone">Support Phone</Label>
                  <div className="flex gap-2">
                    <Phone className="h-5 w-5 text-muted-foreground mt-2" />
                    <Input
                      id="support-phone"
                      type="tel"
                      value={branding.supportPhone || ""}
                      onChange={(e) => updateBranding({ supportPhone: e.target.value })}
                      placeholder="+234 XXX XXX XXXX"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-4">Social Media Links</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <div className="flex gap-2">
                      <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                      <Input
                        id="facebook"
                        value={branding.socialLinks?.facebook || ""}
                        onChange={(e) => handleSocialLinkChange("facebook", e.target.value)}
                        placeholder="https://facebook.com/yourcompany"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <div className="flex gap-2">
                      <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                      <Input
                        id="twitter"
                        value={branding.socialLinks?.twitter || ""}
                        onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
                        placeholder="https://twitter.com/yourcompany"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <div className="flex gap-2">
                      <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                      <Input
                        id="linkedin"
                        value={branding.socialLinks?.linkedin || ""}
                        onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)}
                        placeholder="https://linkedin.com/company/yourcompany"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <div className="flex gap-2">
                      <LinkIcon className="h-5 w-5 text-muted-foreground mt-2" />
                      <Input
                        id="instagram"
                        value={branding.socialLinks?.instagram || ""}
                        onChange={(e) => handleSocialLinkChange("instagram", e.target.value)}
                        placeholder="https://instagram.com/yourcompany"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
