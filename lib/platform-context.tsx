"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { PlatformAdminRole, PlatformPermission } from "./rbac"
import { PLATFORM_ROLE_PERMISSIONS } from "./rbac"

interface PlatformUser {
  id: string
  name: string
  email: string
  role: PlatformAdminRole
  permissions: PlatformPermission[]
}

interface PlatformContextType {
  user: PlatformUser | null
  setUser: (user: PlatformUser | null) => void
  hasPermission: (permission: PlatformPermission) => boolean
  isRole: (role: PlatformAdminRole) => boolean
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined)

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PlatformUser | null>(null)

  useEffect(() => {
    // Mock platform admin user for demo
    const mockUser: PlatformUser = {
      id: "platform-admin-1",
      name: "Platform Administrator",
      email: "admin@wrapa.ng",
      role: "platform-super-admin",
      permissions: PLATFORM_ROLE_PERMISSIONS["platform-super-admin"],
    }
    setUser(mockUser)
  }, [])

  const hasPermission = (permission: PlatformPermission): boolean => {
    return user?.permissions.includes(permission) ?? false
  }

  const isRole = (role: PlatformAdminRole): boolean => {
    return user?.role === role
  }

  return (
    <PlatformContext.Provider value={{ user, setUser, hasPermission, isRole }}>{children}</PlatformContext.Provider>
  )
}

export function usePlatform() {
  const context = useContext(PlatformContext)
  if (context === undefined) {
    throw new Error("usePlatform must be used within a PlatformProvider")
  }
  return context
}
