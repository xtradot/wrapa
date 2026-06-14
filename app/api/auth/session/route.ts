import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('wrapa_session')
    
    if (!sessionCookie?.value) {
      // Try localStorage data from client - in real app would use proper session
      return NextResponse.json({ user: null }, { status: 401 })
    }

    const user = JSON.parse(sessionCookie.value)
    return NextResponse.json({ user })
  } catch (error) {
    console.error('[v0] Session error:', error)
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
