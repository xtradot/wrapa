import { Skeleton } from "@/components/ui/skeleton"

export default function HealthLoadingPage() {
  return (
    <div className="min-h-screen">
      <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/5" />
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-48 mb-6" />
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
