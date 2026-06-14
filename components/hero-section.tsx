"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Heart, Plane, Home, ArrowRight, Shield, CheckCircle2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const insuranceTypes = [
  { id: "motor", label: "Motor", icon: Car },
  { id: "health", label: "Health", icon: Heart },
  { id: "travel", label: "Travel", icon: Plane },
  { id: "home", label: "Home", icon: Home },
]

const nigerianStates = ["Lagos", "Abuja (FCT)", "Rivers", "Kano", "Oyo", "Kaduna", "Enugu", "Delta", "Ogun", "Anambra"]

export function HeroSection() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("motor")
  const [formData, setFormData] = useState<Record<string, string>>({})

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleGetQuote = () => {
    sessionStorage.setItem("quoteType", activeTab)
    sessionStorage.setItem("quoteData", JSON.stringify(formData))
    router.push("/quote/results")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="gap-2 px-4 py-2">
                <Sparkles className="h-3.5 w-3.5" />
                Nigeria&apos;s Most Trusted Insurance Platform
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
                Get Insured in{" "}
                <span className="text-primary relative">
                  Minutes
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-secondary"
                    />
                  </svg>
                </span>
                , Not Days
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Compare quotes from 20+ NAICOM-licensed insurers. Save up to 40% on your premiums with Nigeria&apos;s #1
                insurance marketplace.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Instant Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">24/7 Support</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">
                      {star}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by 50,000+ Nigerians</p>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <Card className="shadow-2xl border-border/50 bg-card/80 backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-card-foreground">Get Your Free Quote</h2>
                <Badge variant="outline" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  NAICOM Verified
                </Badge>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-4 mb-6 h-auto p-1">
                  {insuranceTypes.map((type) => (
                    <TabsTrigger
                      key={type.id}
                      value={type.id}
                      className="flex flex-col gap-1.5 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <type.icon className="h-5 w-5" />
                      <span className="text-xs font-medium">{type.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="motor" className="space-y-4 mt-0">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-make">Vehicle Make</Label>
                        <Select onValueChange={(value) => updateFormData("vehicleMake", value)}>
                          <SelectTrigger id="vehicle-make">
                            <SelectValue placeholder="Select make" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="toyota">Toyota</SelectItem>
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                            <SelectItem value="lexus">Lexus</SelectItem>
                            <SelectItem value="ford">Ford</SelectItem>
                            <SelectItem value="nissan">Nissan</SelectItem>
                            <SelectItem value="hyundai">Hyundai</SelectItem>
                            <SelectItem value="kia">Kia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-year">Year</Label>
                        <Select onValueChange={(value) => updateFormData("vehicleYear", value)}>
                          <SelectTrigger id="vehicle-year">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-value">Vehicle Value (₦)</Label>
                      <Input
                        id="vehicle-value"
                        type="text"
                        placeholder="e.g. 15,000,000"
                        onChange={(e) => updateFormData("vehicleValue", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coverage-type">Coverage Type</Label>
                      <Select onValueChange={(value) => updateFormData("coverageType", value)}>
                        <SelectTrigger id="coverage-type">
                          <SelectValue placeholder="Select coverage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="comprehensive">Comprehensive</SelectItem>
                          <SelectItem value="third-party">Third Party Only</SelectItem>
                          <SelectItem value="third-party-fire-theft">Third Party, Fire & Theft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="health" className="space-y-4 mt-0">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Your Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="e.g. 35"
                          min="18"
                          max="100"
                          onChange={(e) => updateFormData("age", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dependents">Dependents</Label>
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
                      <Label htmlFor="plan-type">Plan Type</Label>
                      <Select onValueChange={(value) => updateFormData("planType", value)}>
                        <SelectTrigger id="plan-type">
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
                      <Label htmlFor="location">Location</Label>
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
                  </div>
                </TabsContent>

                <TabsContent value="travel" className="space-y-4 mt-0">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
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
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="travel-start">Departure Date</Label>
                        <Input
                          id="travel-start"
                          type="date"
                          onChange={(e) => updateFormData("departureDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travel-end">Return Date</Label>
                        <Input
                          id="travel-end"
                          type="date"
                          onChange={(e) => updateFormData("returnDate", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
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
                  </div>
                </TabsContent>

                <TabsContent value="home" className="space-y-4 mt-0">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select onValueChange={(value) => updateFormData("propertyType", value)}>
                        <SelectTrigger id="property-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment / Flat</SelectItem>
                          <SelectItem value="detached">Detached House</SelectItem>
                          <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                          <SelectItem value="duplex">Duplex</SelectItem>
                          <SelectItem value="bungalow">Bungalow</SelectItem>
                          <SelectItem value="terrace">Terrace House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="property-value">Property Value (₦)</Label>
                      <Input
                        id="property-value"
                        type="text"
                        placeholder="e.g. 50,000,000"
                        onChange={(e) => updateFormData("propertyValue", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="home-location">Location</Label>
                      <Select onValueChange={(value) => updateFormData("location", value)}>
                        <SelectTrigger id="home-location">
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
                  </div>
                </TabsContent>

                <Button className="w-full mt-6" size="lg" onClick={handleGetQuote}>
                  Compare Quotes Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
