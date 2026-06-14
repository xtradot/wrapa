"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, X, Save, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NewProductPage() {
  const [coverageItems, setCoverageItems] = useState([{ id: 1, name: "", limit: "", description: "" }])
  const [exclusions, setExclusions] = useState([{ id: 1, text: "" }])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create New Product</h1>
          <p className="text-muted-foreground mt-1">Define your insurance product details</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/tenant/products">Cancel</Link>
          </Button>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Product
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList>
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Commission</TabsTrigger>
          <TabsTrigger value="coverage">Coverage & Benefits</TabsTrigger>
          <TabsTrigger value="underwriting">Underwriting</TabsTrigger>
        </TabsList>

        {/* Basic Info Tab */}
        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>Basic details about your insurance product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" placeholder="e.g. Comprehensive Motor Insurance" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-code">Product Code</Label>
                  <Input id="product-code" placeholder="e.g. MOTOR-001" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="motor">Motor Insurance</SelectItem>
                      <SelectItem value="health">Health Insurance</SelectItem>
                      <SelectItem value="home">Home Insurance</SelectItem>
                      <SelectItem value="travel">Travel Insurance</SelectItem>
                      <SelectItem value="business">Business Insurance</SelectItem>
                      <SelectItem value="life">Life Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger id="status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Product Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what this product covers and who it's for..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Key Features (comma separated)</Label>
                <Input id="features" placeholder="24/7 Claims Support, Nationwide Coverage, ..." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Configuration</CardTitle>
              <CardDescription>Set premium ranges and commission structures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="min-premium">Minimum Premium (₦)</Label>
                  <Input id="min-premium" type="number" placeholder="45000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-premium">Maximum Premium (₦)</Label>
                  <Input id="max-premium" type="number" placeholder="250000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="base-premium">Base Premium (₦)</Label>
                  <Input id="base-premium" type="number" placeholder="75000" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="commission-rate">Agent Commission Rate (%)</Label>
                  <Input id="commission-rate" type="number" placeholder="12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="payment-frequency">Payment Frequency</Label>
                  <Select defaultValue="annual">
                    <SelectTrigger id="payment-frequency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annual">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-sm">Pricing Factors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="age-factor" className="h-4 w-4" />
                      <Label htmlFor="age-factor" className="text-sm">
                        Age Factor
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="location-factor" className="h-4 w-4" />
                      <Label htmlFor="location-factor" className="text-sm">
                        Location Factor
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="risk-factor" className="h-4 w-4" />
                      <Label htmlFor="risk-factor" className="text-sm">
                        Risk Assessment
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="checkbox" id="claims-factor" className="h-4 w-4" />
                      <Label htmlFor="claims-factor" className="text-sm">
                        Claims History
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Coverage Tab */}
        <TabsContent value="coverage" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Coverage Items</CardTitle>
                  <CardDescription>Define what this product covers</CardDescription>
                </div>
                <Button
                  size="sm"
                  onClick={() =>
                    setCoverageItems([...coverageItems, { id: Date.now(), name: "", limit: "", description: "" }])
                  }
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Coverage
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {coverageItems.map((item, index) => (
                <Card key={item.id} className="bg-muted/50">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="space-y-1">
                            <Label className="text-xs">Coverage Name</Label>
                            <Input placeholder="e.g. Third Party Liability" />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Coverage Limit</Label>
                            <Input placeholder="e.g. ₦5,000,000" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Description</Label>
                          <Textarea placeholder="What does this coverage include?" rows={2} />
                        </div>
                      </div>
                      {coverageItems.length > 1 && (
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setCoverageItems(coverageItems.filter((c) => c.id !== item.id))}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Exclusions</CardTitle>
                  <CardDescription>What is not covered by this product</CardDescription>
                </div>
                <Button size="sm" onClick={() => setExclusions([...exclusions, { id: Date.now(), text: "" }])}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Exclusion
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {exclusions.map((exclusion, index) => (
                <div key={exclusion.id} className="flex items-center gap-2">
                  <Input placeholder="e.g. Damage caused by drunk driving" />
                  {exclusions.length > 1 && (
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setExclusions(exclusions.filter((e) => e.id !== exclusion.id))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Underwriting Tab */}
        <TabsContent value="underwriting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Underwriting Requirements</CardTitle>
              <CardDescription>Define requirements for policy approval</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Required Documents</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Valid ID (NIN/Driver's License/Passport)",
                    "Proof of Address",
                    "Vehicle Registration (for Motor)",
                    "Medical Report (for Health)",
                    "Business Registration (for Business)",
                    "Property Valuation (for Home)",
                  ].map((doc) => (
                    <div key={doc} className="flex items-center gap-2">
                      <Input type="checkbox" className="h-4 w-4" />
                      <Label className="text-sm">{doc}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Eligibility Criteria</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-age">Minimum Age</Label>
                    <Input id="min-age" type="number" placeholder="18" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-age">Maximum Age</Label>
                    <Input id="max-age" type="number" placeholder="65" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Approval Workflow</h4>
                <div className="space-y-2">
                  <Label htmlFor="auto-approve">Auto-Approve Threshold (₦)</Label>
                  <Input id="auto-approve" type="number" placeholder="100000" />
                  <p className="text-xs text-muted-foreground">
                    Policies below this amount will be auto-approved if all criteria are met
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-sm">Risk Assessment</h4>
                <div className="space-y-2">
                  <Label htmlFor="risk-notes">Risk Assessment Notes</Label>
                  <Textarea id="risk-notes" placeholder="Guidelines for underwriters when assessing risk..." rows={4} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
