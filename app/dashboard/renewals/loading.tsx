import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function RenewalsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-9 w-56 mb-2" />
        <Skeleton className="h-5 w-96" />
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 rounded" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Skeleton className="h-7 w-32" />
        {[1, 2].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <Skeleton className="h-16 w-16 rounded-lg" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-48" />
                  <div className="grid grid-cols-4 gap-4">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-9 w-28" />
                  <Skeleton className="h-9 w-28" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
