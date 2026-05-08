import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'

// --- Franchise portal auth ---

async function computeFranchiseToken(secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode('franchise_authorized'))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// --- Middleware ---

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Franchise portal — redirect to /franchise/login if no valid session
  if (
    pathname.startsWith('/franchise') &&
    !pathname.startsWith('/franchise/login')
  ) {
    const secret = process.env.FRANCHISE_PASSWORD ?? 'jexpress2026'
    const expected = await computeFranchiseToken(secret)
    const cookie = request.cookies.get('jfr_session')?.value

    if (cookie !== expected) {
      const loginUrl = new URL('/franchise/login', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Dashboard — redirect to /dashboard/login if no valid session
  if (
    pathname.startsWith('/dashboard') &&
    !pathname.startsWith('/dashboard/login')
  ) {
    const token = request.cookies.get(SESSION_COOKIE)?.value
    const session = token ? await verifySessionToken(token) : null

    if (!session) {
      const loginUrl = new URL('/dashboard/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/franchise/:path*', '/dashboard/:path*'],
}
