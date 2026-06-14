"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import type { Role } from "@/lib/rbac"
import { Skeleton } from "@/components/ui/skeleton"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles?: Role | Role[]
  requiredPermission?: string | string[]
  fallback?: React.ReactNode
}

export function ProtectedRoute({
  children,
  requiredRoles,
  requiredPermission,
  fallback,
}: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isLoading, isAuthenticated, hasRole, hasPermission } = useAuth()

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // Check role requirement
    if (requiredRoles && !hasRole(requiredRoles)) {
      router.push("/forbidden")
      return
    }

    // Check permission requirement
    if (requiredPermission) {
      const permissions = Array.isArray(requiredPermission) ? requiredPermission : [requiredPermission]
      const hasAnyPermission = permissions.some((p) => hasPermission(p))
      if (!hasAnyPermission) {
        router.push("/forbidden")
        return
      }
    }
  }, [isLoading, isAuthenticated, requiredRoles, requiredPermission, user, hasRole, hasPermission, router])

  if (isLoading) {
    return fallback || <LoadingFallback />
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredRoles && !hasRole(requiredRoles)) {
    return null
  }

  if (requiredPermission) {
    const permissions = Array.isArray(requiredPermission) ? requiredPermission : [requiredPermission]
    const hasAnyPermission = permissions.some((p) => hasPermission(p))
    if (!hasAnyPermission) {
      return null
    }
  }

  return <>{children}</>
}

function LoadingFallback() {
  return (
    <div className="min-h-screen p-8 space-y-4">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-64 w-full" />
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  )
}
