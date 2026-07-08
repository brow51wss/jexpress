import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken, SESSION_COOKIE } from '@/lib/session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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
  matcher: ['/dashboard/:path*'],
}
