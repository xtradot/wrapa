import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertCircle, Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-destructive" />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-2">404</h1>
              <p className="text-xl font-semibold text-muted-foreground">Page Not Found</p>
            </div>

            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or may have been moved. Please check the URL and try again.
            </p>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link href="/help" className="gap-2">
                  Help & Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
