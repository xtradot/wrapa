import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Download, Camera, Shield, Bell, Fingerprint } from "lucide-react"

export default function MobileOnboardingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Mobile App</Badge>
            <h1 className="text-4xl font-bold mb-4">WRAPA Mobile App</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete insurance onboarding on-the-go with our mobile-optimized experience
            </p>
          </div>

          {/* App Preview */}
          <Card className="border-primary/20 mb-8">
            <CardHeader className="text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription>Native iOS and Android apps launching Q1 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <Button size="lg" disabled>
                  <Download className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button size="lg" disabled>
                  <Download className="mr-2 h-5 w-5" />
                  Play Store
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Sign up for early access at{" "}
                <a href="mailto:mobile@wrapa.com.ng" className="text-primary hover:underline">
                  mobile@wrapa.com.ng
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Mobile Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Mobile-First Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Document Scanning</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture and upload KYC documents directly from your camera
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Fingerprint className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Biometric Auth</h4>
                  <p className="text-sm text-muted-foreground">Secure login with fingerprint or face recognition</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Instant Verification</h4>
                  <p className="text-sm text-muted-foreground">Real-time NIN/BVN verification with government APIs</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Get instant alerts for policy renewals and claims updates
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Offline Mode</h4>
                  <p className="text-sm text-muted-foreground">Save quotes and complete forms even without internet</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Native Performance</h4>
                  <p className="text-sm text-muted-foreground">Fast, smooth experience optimized for mobile devices</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Progressive Web App */}
          <Card>
            <CardHeader>
              <CardTitle>Use Our Mobile Web App Today</CardTitle>
              <CardDescription>
                While waiting for native apps, enjoy our mobile-optimized web experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our website is fully responsive and works great on mobile browsers. You can even add it to your home
                  screen for an app-like experience:
                </p>
                <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                  <li>Visit wrapa.com.ng on your mobile browser</li>
                  <li>Tap the Share button (iOS) or Menu (Android)</li>
                  <li>Select "Add to Home Screen"</li>
                  <li>Enjoy quick access with an app icon</li>
                </ol>
                <Button className="w-full sm:w-auto">Start Mobile Onboarding</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
