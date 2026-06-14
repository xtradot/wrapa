"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, X, FileText, ArrowRight, ArrowLeft, AlertCircle, ImageIcon } from "lucide-react"

export default function FileClaimPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    policyNumber: "",
    claimType: "",
    incidentDate: "",
    incidentLocation: "",
    description: "",
    estimatedAmount: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  })

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || [])
    setFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    // Simulate claim submission
    const claimId = `CLM-${Date.now().toString().slice(-8)}`
    router.push(`/claims/track?id=${claimId}&status=submitted`)
  }

  const progress = (step / 3) * 100

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4">File Claim</Badge>
            <h1 className="text-3xl font-bold mb-2">Submit Your Insurance Claim</h1>
            <p className="text-muted-foreground">Complete all steps to submit your claim for review</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Step {step} of 3</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Policy & Incident Details"}
                {step === 2 && "Upload Supporting Documents"}
                {step === 3 && "Contact & Review"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Provide your policy information and describe the incident"}
                {step === 2 && "Upload photos, police reports, or other relevant documents"}
                {step === 3 && "Review your information and confirm submission"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Policy & Incident Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Policy Number *</Label>
                    <Input
                      id="policyNumber"
                      placeholder="e.g., POL-12345678"
                      value={formData.policyNumber}
                      onChange={(e) => updateFormData("policyNumber", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">Find this on your policy certificate</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimType">Type of Claim *</Label>
                    <Select onValueChange={(value) => updateFormData("claimType", value)}>
                      <SelectTrigger id="claimType">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accident">Vehicle Accident</SelectItem>
                        <SelectItem value="theft">Theft</SelectItem>
                        <SelectItem value="fire">Fire Damage</SelectItem>
                        <SelectItem value="medical">Medical Expense</SelectItem>
                        <SelectItem value="property">Property Damage</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="incidentDate">Date of Incident *</Label>
                      <Input
                        id="incidentDate"
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => updateFormData("incidentDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estimatedAmount">Estimated Claim Amount (₦) *</Label>
                      <Input
                        id="estimatedAmount"
                        type="text"
                        placeholder="e.g., 500,000"
                        value={formData.estimatedAmount}
                        onChange={(e) => updateFormData("estimatedAmount", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="incidentLocation">Location of Incident *</Label>
                    <Input
                      id="incidentLocation"
                      placeholder="e.g., Lekki-Epe Expressway, Lagos"
                      value={formData.incidentLocation}
                      onChange={(e) => updateFormData("incidentLocation", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description of Incident *</Label>
                    <Textarea
                      id="description"
                      rows={6}
                      placeholder="Please provide a detailed description of what happened, including any relevant circumstances..."
                      value={formData.description}
                      onChange={(e) => updateFormData("description", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      Include as much detail as possible to help us process your claim faster
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Upload Documents */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <input
                      type="file"
                      id="fileUpload"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <div className="mb-2">
                        <span className="text-primary font-medium">Click to upload</span>
                        <span className="text-muted-foreground"> or drag and drop</span>
                      </div>
                      <p className="text-xs text-muted-foreground">PNG, JPG, PDF, DOC up to 10MB each (max 5 files)</p>
                    </label>
                  </div>

                  {files.length > 0 && (
                    <div className="space-y-3">
                      <Label>Uploaded Files ({files.length})</Label>
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            {file.type.startsWith("image/") ? (
                              <ImageIcon className="h-5 w-5 text-primary" />
                            ) : (
                              <FileText className="h-5 w-5 text-primary" />
                            )}
                            <div>
                              <div className="text-sm font-medium">{file.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => removeFile(index)} className="h-8 w-8 p-0">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium text-blue-900 dark:text-blue-100 mb-1">Required Documents</div>
                        <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Photos of damage or incident scene</li>
                          <li>• Police report (if applicable)</li>
                          <li>• Medical reports (for health claims)</li>
                          <li>• Repair estimates or invoices</li>
                          <li>• Any other supporting evidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Review */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Full Name *</Label>
                        <Input
                          id="contactName"
                          placeholder="John Doe"
                          value={formData.contactName}
                          onChange={(e) => updateFormData("contactName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Phone Number *</Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          placeholder="+234 800 000 0000"
                          value={formData.contactPhone}
                          onChange={(e) => updateFormData("contactPhone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => updateFormData("contactEmail", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Review Your Claim</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Policy Number</span>
                        <span className="font-medium">{formData.policyNumber || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Claim Type</span>
                        <span className="font-medium capitalize">{formData.claimType || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Incident Date</span>
                        <span className="font-medium">{formData.incidentDate || "N/A"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Amount</span>
                        <span className="font-medium">₦{formData.estimatedAmount || "0"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Documents Uploaded</span>
                        <span className="font-medium">{files.length} file(s)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4 text-sm text-muted-foreground">
                    By submitting this claim, you confirm that all information provided is accurate and truthful. False
                    claims may result in policy cancellation and legal action.
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 gap-4">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button onClick={() => setStep(step + 1)} className="ml-auto">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="ml-auto">
                    Submit Claim
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
