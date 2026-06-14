import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Reviews - WRAPA",
  description: "Claims you've reviewed",
}

export default function MyReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Reviews</h1>
        <p className="text-muted-foreground mt-1">Claims you've processed and reviewed</p>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-30" />
          <p className="text-muted-foreground">Your reviewed claims will appear here</p>
        </CardContent>
      </Card>
    </div>
  )
}
