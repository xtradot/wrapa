import { type NextRequest, NextResponse } from 'next/server'

// Mock storage for user profiles
const userProfiles: Record<string, any> = {}

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('wrapa_session')
    
    if (!sessionCookie?.value) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = JSON.parse(sessionCookie.value)
    const profile = userProfiles[user.id] || user

    return NextResponse.json({ user: profile })
  } catch (error) {
    console.error('[v0] Get profile error:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('wrapa_session')
    
    if (!sessionCookie?.value) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = JSON.parse(sessionCookie.value)
    const updates = await request.json()

    const updatedUser = { ...user, ...updates, updatedAt: new Date().toISOString() }
    userProfiles[user.id] = updatedUser

    // Update cookie
    const response = NextResponse.json({ user: updatedUser, success: true })
    response.cookies.set('wrapa_session', JSON.stringify(updatedUser), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('[v0] Update profile error:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}
