import { type NextRequest, NextResponse } from 'next/server'

const MOCK_USERS: Record<string, { user: any; password: string }> = {
  'customer@wrapa.com': {
    password: 'password123',
    user: {
      id: 'user-1',
      email: 'customer@wrapa.com',
      name: 'John Adeleke',
      role: 'customer',
      phone: '+234 802 XXX XXXX',
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  },
  'agent@wrapa.com': {
    password: 'password123',
    user: {
      id: 'agent-1',
      email: 'agent@wrapa.com',
      name: 'Chioma Okafor',
      role: 'agent',
      agentId: 'WRAPA-AGT-001',
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  },
  'admin@wrapa.com': {
    password: 'password123',
    user: {
      id: 'tenant-1',
      email: 'admin@wrapa.com',
      name: 'Grace Mensah',
      role: 'tenant-admin',
      tenantId: 'tenant-1',
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  },
  'officer@wrapa.com': {
    password: 'password123',
    user: {
      id: 'officer-1',
      email: 'officer@wrapa.com',
      name: 'David Kwame',
      role: 'officer',
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  },
  'platform@wrapa.com': {
    password: 'password123',
    user: {
      id: 'admin-1',
      email: 'platform@wrapa.com',
      name: 'Dr. Amara Okonkwo',
      role: 'platform-admin',
      isVerified: true,
      createdAt: new Date().toISOString(),
    },
  },
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const mockUserData = MOCK_USERS[email?.toLowerCase()]
    if (!mockUserData || mockUserData.password !== password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Set session in cookie and localStorage
    const response = NextResponse.json({ user: mockUserData.user, success: true })
    response.cookies.set('wrapa_session', JSON.stringify(mockUserData.user), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
