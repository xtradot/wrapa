'use client'

import { useAuth } from '@/lib/auth-context'

export const useSession = () => {
  const { user, isAuthenticated, loading } = useAuth()

  return {
    user,
    isAuthenticated,
    loading,
    isAgent: user?.role === 'agent',
    isOfficer: user?.role === 'officer',
    isTenant: user?.role === 'tenant_admin',
    isPlatformAdmin: user?.role === 'platform_admin',
    isCustomer: user?.role === 'customer',
  }
}
