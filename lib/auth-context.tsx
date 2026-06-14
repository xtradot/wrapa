"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { Role } from "./rbac"
import { ROLE_PERMISSIONS } from "./rbac"

export interface User {
  id: string
  email: string
  name: string
  role: Role
  phone?: string
  avatar?: string
  createdAt: string
  isVerified: boolean
  tenantId?: string
  agentId?: string
  lastLogin: string
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
  error: string | null
  hasPermission: (permission: string) => boolean
  hasRole: (roles: Role | Role[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database with proper roles
const MOCK_USERS: Record<string, { user: User; password: string }> = {
  "customer@wrapa.com": {
    password: "password123",
    user: {
      id: "user-customer-001",
      email: "customer@wrapa.com",
      name: "John Adeyemi",
      role: "claims-officer",
      phone: "+234 802 123 4567",
      avatar: "/nigerian-man-professional-portrait.jpg",
      isVerified: true,
      createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date().toISOString(),
    },
  },
  "agent@wrapa.com": {
    password: "password123",
    user: {
      id: "agent-001",
      email: "agent@wrapa.com",
      name: "Chioma Okafor",
      role: "tenant-agent-manager",
      phone: "+234 803 456 7890",
      avatar: "/nigerian-woman-professional-portrait.png",
      isVerified: true,
      tenantId: "tenant-axa-001",
      agentId: "WRAPA-AGT-001",
      createdAt: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date().toISOString(),
    },
  },
  "officer@wrapa.com": {
    password: "password123",
    user: {
      id: "officer-001",
      email: "officer@wrapa.com",
      name: "Amara Nwosu",
      role: "claims-officer",
      phone: "+234 804 789 0123",
      avatar: "/nigerian-woman-hijab-professional-portrait.jpg",
      isVerified: true,
      createdAt: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date().toISOString(),
    },
  },
  "admin@wrapa.com": {
    password: "password123",
    user: {
      id: "tenant-admin-001",
      email: "admin@wrapa.com",
      name: "Oluwaseun Adebayo",
      role: "tenant-super-admin",
      phone: "+234 805 234 5678",
      avatar: "/nigerian-man-professional-portrait.jpg",
      isVerified: true,
      tenantId: "tenant-axa-001",
      createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date().toISOString(),
    },
  },
  "platform@wrapa.com": {
    password: "password123",
    user: {
      id: "platform-admin-001",
      email: "platform@wrapa.com",
      name: "Akanbi Okafor",
      role: "platform-super-admin",
      phone: "+234 806 567 8901",
      avatar: "/nigerian-man-professional-portrait.jpg",
      isVerified: true,
      createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      lastLogin: new Date().toISOString(),
    },
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      try {
        const sessionData = localStorage.getItem("wrapa_session")
        if (sessionData) {
          const parsedUser = JSON.parse(sessionData)
          setUser(parsedUser)
        }
      } catch (err) {
        console.error("[v0] Error initializing auth:", err)
        localStorage.removeItem("wrapa_session")
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      const mockUserData = MOCK_USERS[email.toLowerCase()]
      if (!mockUserData || mockUserData.password !== password) {
        throw new Error("Invalid email or password")
      }

      const sessionUser = {
        ...mockUserData.user,
        lastLogin: new Date().toISOString(),
      }

      setUser(sessionUser)
      localStorage.setItem("wrapa_session", JSON.stringify(sessionUser))
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed"
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setIsLoading(true)
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      setUser(null)
      localStorage.removeItem("wrapa_session")
      localStorage.removeItem("wrapa_permissions")
      setError(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Logout failed"
      setError(message)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const updateProfile = useCallback(
    async (data: Partial<User>) => {
      if (!user) throw new Error("No user logged in")

      setIsLoading(true)
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800))

        const updatedUser = { ...user, ...data }
        setUser(updatedUser)
        localStorage.setItem("wrapa_session", JSON.stringify(updatedUser))
      } catch (err) {
        const message = err instanceof Error ? err.message : "Update failed"
        setError(message)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    [user],
  )

  const hasPermission = useCallback(
    (permission: string) => {
      if (!user) return false
      const permissions = ROLE_PERMISSIONS[user.role] || []
      return permissions.includes(permission as any)
    },
    [user],
  )

  const hasRole = useCallback(
    (roles: Role | Role[]) => {
      if (!user) return false
      const roleArray = Array.isArray(roles) ? roles : [roles]
      return roleArray.includes(user.role)
    },
    [user],
  )

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateProfile,
        error,
        hasPermission,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
