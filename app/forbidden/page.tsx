'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Lock } from 'lucide-react'

export default function ForbiddenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-auto">
          <CardContent className="pt-12 pb-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Lock className="h-8 w-8 text-destructive" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">403 - Forbidden</h1>
              <p className="text-muted-foreground">You do not have permission to access this resource.</p>
            </div>
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Back Home</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
}
