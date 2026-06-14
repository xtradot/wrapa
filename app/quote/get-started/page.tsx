"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, Car, Heart, Plane, Home, Users, Briefcase } from "lucide-react"

const insuranceTypes = [
  { id: "motor", label: "Motor Insurance", icon: Car },
  { id: "health", label: "Health Insurance", icon: Heart },
  { id: "travel", label: "Travel Insurance", icon: Plane },
  { id: "home", label: "Home Insurance", icon: Home },
  { id: "life", label: "Life Insurance", icon: Users },
  { id: "business", label: "Business Insurance", icon: Briefcase },
]

const nigerianStates = ["Lagos", "Abuja (FCT)", "Rivers", "Kano", "Oyo", "Kaduna", "Enugu", "Delta", "Ogun", "Anambra"]

export default function GetQuoteStartPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState("")
  const [formData, setFormData] = useState<Record<string, string>>({})

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleContinue = () => {
    if (step === 1 && selectedType) {
      setStep(2)
    } else if (step === 2) {
      // Store form data and navigate to results
      sessionStorage.setItem("quoteType", selectedType)
      sessionStorage.setItem("quoteData", JSON.stringify(formData))
      router.push("/quote/results")
    }
  }

  const renderFormFields = () => {
    switch (selectedType) {
      case "motor":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleMake">Vehicle Make *</Label>
                <Select onValueChange={(value) => updateFormData("vehicleMake", value)}>
                  <SelectTrigger id="vehicleMake">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="lexus">Lexus</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleYear">Vehicle Year *</Label>
                <Select onValueChange={(value) => updateFormData("vehicleYear", value)}>
                  <SelectTrigger id="vehicleYear">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleValue">Vehicle Value (₦) *</Label>
              <Input
                id="vehicleValue"
                type="text"
                placeholder="e.g. 15,000,000"
                onChange={(e) => updateFormData("vehicleValue", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverageType">Coverage Type *</Label>
              <Select onValueChange={(value) => updateFormData("coverageType", value)}>
                <SelectTrigger id="coverageType">
                  <SelectValue placeholder="Select coverage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comprehensive">Comprehensive</SelectItem>
                  <SelectItem value="third-party">Third Party Only</SelectItem>
                  <SelectItem value="third-party-fire-theft">Third Party, Fire & Theft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>
          </div>
        )
      case "health":
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Your Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="35"
                  min="18"
                  max="100"
                  onChange={(e) => updateFormData("age", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dependents">Dependents *</Label>
                <Select onValueChange={(value) => updateFormData("dependents", value)}>
                  <SelectTrigger id="dependents">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Just me</SelectItem>
                    <SelectItem value="1">+ Spouse</SelectItem>
                    <SelectItem value="2">+ 1 Child</SelectItem>
                    <SelectItem value="3">+ 2 Children</SelectItem>
                    <SelectItem value="4">+ 3+ Children</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="planType">Plan Type *</Label>
              <Select onValueChange={(value) => updateFormData("planType", value)}>
                <SelectTrigger id="planType">
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (₦250K cover)</SelectItem>
                  <SelectItem value="standard">Standard (₦500K cover)</SelectItem>
                  <SelectItem value="premium">Premium (₦1M cover)</SelectItem>
                  <SelectItem value="executive">Executive (₦2M+ cover)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Select onValueChange={(value) => updateFormData("location", value)}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>
          </div>
        )
      case "travel":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination *</Label>
              <Select onValueChange={(value) => updateFormData("destination", value)}>
                <SelectTrigger id="destination">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="africa">Africa (excl. Nigeria)</SelectItem>
                  <SelectItem value="europe">Europe / Schengen</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="usa">USA / Canada</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="worldwide">Worldwide</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departureDate">Departure Date *</Label>
                <Input
                  id="departureDate"
                  type="date"
                  onChange={(e) => updateFormData("departureDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="returnDate">Return Date *</Label>
                <Input id="returnDate" type="date" onChange={(e) => updateFormData("returnDate", e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers *</Label>
              <Select onValueChange={(value) => updateFormData("travelers", value)}>
                <SelectTrigger id="travelers">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5">5+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>
          </div>
        )
      case "home":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select onValueChange={(value) => updateFormData("propertyType", value)}>
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment / Flat</SelectItem>
                  <SelectItem value="detached">Detached House</SelectItem>
                  <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="bungalow">Bungalow</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyValue">Property Value (₦) *</Label>
              <Input
                id="propertyValue"
                type="text"
                placeholder="e.g. 50,000,000"
                onChange={(e) => updateFormData("propertyValue", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Select onValueChange={(value) => updateFormData("location", value)}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  onChange={(e) => updateFormData("fullName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const progress = step === 1 ? 33 : 66

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Get Your Insurance Quote</h1>
            <p className="text-muted-foreground">Compare quotes from top Nigerian insurers in minutes</p>
          </div>

          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Step {step} of 2</span>
              <span>{progress}% Complete</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{step === 1 ? "Choose Insurance Type" : "Your Details"}</CardTitle>
              <CardDescription>
                {step === 1
                  ? "Select the type of insurance you need"
                  : "Fill in your information to get personalized quotes"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {insuranceTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`p-6 rounded-lg border-2 transition-all text-left ${
                          selectedType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 mb-3 ${selectedType === type.id ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <div className="font-semibold mb-1">{type.label}</div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                renderFormFields()
              )}

              <div className="flex justify-between mt-6 gap-4">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleContinue}
                  disabled={step === 1 && !selectedType}
                  className={step === 1 ? "ml-auto" : "ml-auto"}
                >
                  {step === 2 ? "Get Quotes" : "Continue"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
