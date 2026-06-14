import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Card className="w-full max-w-md p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">You do not have permission to access this resource.</p>
        </div>

        <div className="space-y-2 bg-destructive/5 border border-destructive/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-destructive">403 Forbidden</p>
          <p className="text-xs text-muted-foreground">
            Your account does not have the required permissions for this action.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Return to Login</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          If you believe this is an error, please contact support at support@wrapa.com
        </p>
      </Card>
    </div>
  )
}
