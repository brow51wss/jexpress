import { NextResponse } from 'next/server'

async function computeToken(secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode('franchise_authorized')
  )
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    const secret = process.env.FRANCHISE_PASSWORD ?? 'jexpress2026'

    if (password !== secret) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
    }

    const token = await computeToken(secret)
    const response = NextResponse.json({ success: true })

    response.cookies.set('jfr_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
