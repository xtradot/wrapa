"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, FileText, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react"

export default function OnboardingStep2Page() {
  const router = useRouter()
  const [verificationType, setVerificationType] = useState("nin")
  const [verificationData, setVerificationData] = useState({
    nin: "",
    bvn: "",
    driverLicense: "",
  })
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")
  const [documents, setDocuments] = useState<{ [key: string]: File | null }>({
    utilityBill: null,
    idCard: null,
  })

  const handleVerify = async () => {
    setVerificationStatus("verifying")

    // Simulate API call to NIMC/BVN verification service
    setTimeout(() => {
      setVerificationStatus("success")
    }, 2000)
  }

  const handleContinue = () => {
    if (verificationStatus !== "success") {
      alert("Please complete verification before continuing")
      return
    }

    // Store verification data
    sessionStorage.setItem(
      "onboarding_step2",
      JSON.stringify({
        verificationType,
        verificationData,
        documents: Object.keys(documents).map((key) => documents[key]?.name),
      }),
    )

    router.push("/onboarding/web/step3")
  }

  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments({ ...documents, [key]: e.target.files[0] })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Step 2 of 4</span>
              <span className="text-sm text-muted-foreground">KYC Verification</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Verify Your Identity</CardTitle>
              <CardDescription>Required by NAICOM for insurance purchases in Nigeria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Verification Method Selection */}
              <div className="space-y-3">
                <Label>Choose Verification Method *</Label>
                <RadioGroup value={verificationType} onValueChange={setVerificationType}>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="nin" id="nin" />
                    <Label htmlFor="nin" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">National Identity Number (NIN)</div>
                        <div className="text-xs text-muted-foreground">Instant verification via NIMC</div>
                      </div>
                      <Badge className="ml-auto">Recommended</Badge>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="bvn" id="bvn" />
                    <Label htmlFor="bvn" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Bank Verification Number (BVN)</div>
                        <div className="text-xs text-muted-foreground">Verify through your bank</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="license" id="license" />
                    <Label htmlFor="license" className="flex items-center gap-2 cursor-pointer flex-1">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Driver's License</div>
                        <div className="text-xs text-muted-foreground">For motor insurance verification</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Verification Input */}
              <div className="space-y-4">
                {verificationType === "nin" && (
                  <div className="space-y-2">
                    <Label htmlFor="ninInput">Enter Your NIN *</Label>
                    <Input
                      id="ninInput"
                      placeholder="12345678901"
                      maxLength={11}
                      value={verificationData.nin}
                      onChange={(e) => setVerificationData({ ...verificationData, nin: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">Your 11-digit National Identity Number</p>
                  </div>
                )}

                {verificationType === "bvn" && (
                  <div className="space-y-2">
                    <Label htmlFor="bvnInput">Enter Your BVN *</Label>
                    <Input
                      id="bvnInput"
                      placeholder="12345678901"
                      maxLength={11}
                      value={verificationData.bvn}
                      onChange={(e) => setVerificationData({ ...verificationData, bvn: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">Your 11-digit Bank Verification Number</p>
                  </div>
                )}

                {verificationType === "license" && (
                  <div className="space-y-2">
                    <Label htmlFor="licenseInput">Enter Your Driver's License Number *</Label>
                    <Input
                      id="licenseInput"
                      placeholder="ABC123456789"
                      value={verificationData.driverLicense}
                      onChange={(e) => setVerificationData({ ...verificationData, driverLicense: e.target.value })}
                    />
                  </div>
                )}

                {verificationStatus === "idle" && (
                  <Button
                    onClick={handleVerify}
                    className="w-full"
                    disabled={
                      (verificationType === "nin" && !verificationData.nin) ||
                      (verificationType === "bvn" && !verificationData.bvn) ||
                      (verificationType === "license" && !verificationData.driverLicense)
                    }
                  >
                    Verify Identity
                  </Button>
                )}

                {verificationStatus === "verifying" && (
                  <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                    <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-3" />
                    <span className="text-sm text-muted-foreground">Verifying with NIMC/BVN system...</span>
                  </div>
                )}

                {verificationStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900 dark:text-green-100">Verification Successful</p>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Identity confirmed. You can proceed to the next step.
                      </p>
                    </div>
                  </div>
                )}

                {verificationStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <div>
                      <p className="font-medium text-destructive">Verification Failed</p>
                      <p className="text-sm text-destructive/80">Please check your details and try again.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Document Upload Section */}
              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-4">Supporting Documents (Optional)</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="utilityBill">Utility Bill (Proof of Address)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="utilityBill"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload("utilityBill", e)}
                        className="cursor-pointer"
                      />
                      {documents.utilityBill && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idCard">ID Card / Passport Photo</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="idCard"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleFileUpload("idCard", e)}
                        className="cursor-pointer"
                      />
                      {documents.idCard && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 pt-6">
                <Button variant="outline" onClick={() => router.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleContinue} disabled={verificationStatus !== "success"}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">NAICOM Compliant</h4>
                    <p className="text-xs text-muted-foreground">
                      All verifications meet Nigerian insurance regulatory requirements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Secure Processing</h4>
                    <p className="text-xs text-muted-foreground">
                      Your data is encrypted and never shared without consent
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
