import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/franchise') &&
    !pathname.startsWith('/franchise/login')
  ) {
    const secret = process.env.FRANCHISE_PASSWORD ?? 'jexpress2026'
    const expected = await computeToken(secret)
    const cookie = request.cookies.get('jfr_session')?.value

    if (cookie !== expected) {
      const loginUrl = new URL('/franchise/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/franchise/:path*'],
}
