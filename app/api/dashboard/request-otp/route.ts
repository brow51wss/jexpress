import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { cleanField, isValidEmail, LIMITS } from '@/lib/form-utils'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

function generateOtp(): string {
  const arr = new Uint32Array(1)
  crypto.getRandomValues(arr)
  return String(100000 + (arr[0] % 900000))
}

export async function POST(request: Request) {
  const ip = getClientIp(request)
  if (!checkRateLimit(ip).allowed) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const email = cleanField(body.email, LIMITS.email)
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  const supabase = createAdminClient()

  // Check if this email is a registered dashboard user
  const { data: user, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single()

  if (userError) {
    console.error('[request-otp] Supabase user lookup error:', userError.message, userError.code)
  }

  // Always respond with success to avoid email enumeration
  if (!user) {
    console.warn('[request-otp] No user found for email:', email)
    return NextResponse.json({ success: true })
  }

  // Expire all previous unused OTPs for this user
  await supabase
    .from('otp_tokens')
    .update({ used: true })
    .eq('user_id', user.id)
    .eq('used', false)

  const otp = generateOtp()
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString()

  const { error: insertError } = await supabase.from('otp_tokens').insert({
    user_id: user.id,
    token: otp,
    expires_at: expiresAt,
  })

  if (insertError) {
    console.error('[request-otp] OTP insert error:', insertError.message)
  }

  console.log('[request-otp] Sending OTP email to:', email)

  const { error: emailError } = await resend.emails.send({
    from: 'J Express Transport <noreply@jexpresstransport.com>',
    to: [email],
    subject: `Your login code: ${otp}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;color:#383838;">
        <div style="background:#383838;padding:32px 40px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700;">Dashboard Login Code</h1>
          <p style="color:rgba(255,255,255,0.6);margin:8px 0 0;font-size:13px;">J Express Transport Cooperative</p>
        </div>
        <div style="background:#ffffff;padding:40px;border:1px solid #e8e0d8;border-top:none;border-radius:0 0 12px 12px;text-align:center;">
          <p style="font-size:15px;color:#6b6b6b;margin:0 0 24px;">Enter this code to log in to the dashboard:</p>
          <div style="background:#f9f4ef;border:2px solid #f58c23;border-radius:12px;padding:24px 40px;display:inline-block;margin-bottom:24px;">
            <span style="font-size:40px;font-weight:900;letter-spacing:12px;color:#383838;">${otp}</span>
          </div>
          <p style="font-size:13px;color:#6b6b6b;margin:0;">This code expires in <strong>15 minutes</strong>.</p>
          <p style="font-size:12px;color:#aaa;margin:16px 0 0;">If you did not request this, you can safely ignore this email.</p>
        </div>
      </div>
    `,
  })

  if (emailError) {
    console.error('[request-otp] Resend error:', emailError.message)
  } else {
    console.log('[request-otp] OTP email sent successfully to:', email)
  }

  return NextResponse.json({ success: true })
}
