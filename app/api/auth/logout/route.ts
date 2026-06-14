import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true })
    response.cookies.delete('wrapa_session')
    return response
  } catch (error) {
    console.error('[v0] Logout error:', error)
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
