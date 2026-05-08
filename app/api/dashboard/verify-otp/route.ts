import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { cleanField, isValidEmail, LIMITS } from '@/lib/form-utils'
import { createSessionToken, SESSION_COOKIE } from '@/lib/session'

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const email = cleanField(body.email, LIMITS.email)
  const otp   = cleanField(body.otp,   6)

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 })
  }
  if (!otp || !/^\d{6}$/.test(otp)) {
    return NextResponse.json({ error: 'Invalid code.' }, { status: 400 })
  }

  const supabase = createAdminClient()

  const { data: user } = await supabase
    .from('users')
    .select('id, email, is_super_admin')
    .eq('email', email)
    .single()

  if (!user) {
    return NextResponse.json({ error: 'Invalid code or code has expired.' }, { status: 401 })
  }

  const now = new Date().toISOString()
  const { data: tokenRow } = await supabase
    .from('otp_tokens')
    .select('id')
    .eq('user_id', user.id)
    .eq('token', otp)
    .eq('used', false)
    .gt('expires_at', now)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!tokenRow) {
    return NextResponse.json({ error: 'Invalid code or code has expired.' }, { status: 401 })
  }

  // Mark token as used
  await supabase.from('otp_tokens').update({ used: true }).eq('id', tokenRow.id)

  const sessionToken = await createSessionToken({
    userId: user.id,
    email: user.email,
    isSuperAdmin: user.is_super_admin,
  })

  const response = NextResponse.json({ success: true, isSuperAdmin: user.is_super_admin })
  response.cookies.set(SESSION_COOKIE, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  })

  return response
}
