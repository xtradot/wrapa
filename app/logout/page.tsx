'use client'

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LogOut } from 'lucide-react'

export default function LogoutPage() {
  const { logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      // Redirect will happen after logout
    } catch (error) {
      console.error('[v0] Logout failed:', error)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-auto">
          <CardContent className="pt-12 pb-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <LogOut className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Logout</h1>
              <p className="text-muted-foreground">Are you sure you want to sign out of your account?</p>
            </div>
            <div className="space-y-2">
              <Button onClick={handleLogout} className="w-full">
                Yes, Sign Me Out
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard">Cancel</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
