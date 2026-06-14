"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type TenantUser, type TenantRole, type TenantPermission, TENANT_ROLE_PERMISSIONS } from "./rbac"

interface TenantContextType {
  user: TenantUser | null
  setUser: (user: TenantUser | null) => void
  hasPermission: (permission: TenantPermission) => boolean
  isRole: (role: TenantRole) => boolean
}

const TenantContext = createContext<TenantContextType | undefined>(undefined)

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TenantUser | null>(null)

  useEffect(() => {
    // Mock user for demo - in production, fetch from auth session
    const mockUser: TenantUser = {
      id: "tenant-user-1",
      name: "Admin User",
      email: "admin@axamansard.com",
      role: "tenant-super-admin",
      permissions: TENANT_ROLE_PERMISSIONS["tenant-super-admin"],
      tenantId: "tenant-axa-mansard",
      tenantName: "AXA Mansard Insurance",
    }
    setUser(mockUser)
  }, [])

  const hasPermission = (permission: TenantPermission): boolean => {
    return user?.permissions.includes(permission) ?? false
  }

  const isRole = (role: TenantRole): boolean => {
    return user?.role === role
  }

  return <TenantContext.Provider value={{ user, setUser, hasPermission, isRole }}>{children}</TenantContext.Provider>
}

export function useTenant() {
  const context = useContext(TenantContext)
  if (context === undefined) {
    throw new Error("useTenant must be used within a TenantProvider")
  }
  return context
}
