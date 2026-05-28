import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'
import { cleanField, isValidEmail, display, LIMITS } from '@/lib/form-utils'
import { createAdminClient } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const ip = getClientIp(request)
  if (!checkRateLimit(ip).allowed) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const fullName    = cleanField(body.fullName,    LIMITS.name)
  const email       = cleanField(body.email,       LIMITS.email)
  const phone       = cleanField(body.phone,       LIMITS.phone)
  const agency      = cleanField(body.agency,      LIMITS.short)
  const serviceType = cleanField(body.serviceType, LIMITS.short)
  const travelDate  = cleanField(body.travelDate,  LIMITS.short)
  const passengers  = cleanField(body.passengers,  LIMITS.number)
  const message     = cleanField(body.message,     LIMITS.message)

  if (!fullName) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 })
  if (!email || !isValidEmail(email)) return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  if (!message) return NextResponse.json({ error: 'Message is required.' }, { status: 400 })

  const supabase = createAdminClient()
  await supabase.from('submissions').insert({
    form_type: 'booking',
    data: { fullName, email, phone, agency, serviceType, travelDate, passengers, message },
  })

  try {
    await Promise.all([
      resend.emails.send({
        from: 'Jexpress Website <noreply@jexpresstransport.com>',
        to: ['booking@jexpresstransport.com'],
        replyTo: email,
        subject: `New Booking Request — ${display(serviceType)}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#383838;">
            <div style="background:#383838;padding:32px 40px;border-radius:12px 12px 0 0;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#d4a53a;">New Submission</p>
              <h1 style="color:#f5f5f5;margin:0;font-size:22px;">Booking Request</h1>
              <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">From jexpresstransport.com</p>
            </div>
            <div style="background:#f5f5f5;padding:32px 40px;border:1px solid #f5f5f5;border-top:none;border-radius:0 0 12px 12px;">
              <div style="background:#f5f5f5;border-left:4px solid #d4a53a;padding:16px 20px;border-radius:4px;margin-bottom:24px;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#d4a53a;">Submitted By</p>
                <p style="margin:4px 0;font-size:15px;font-weight:700;">${display(fullName)}</p>
                <p style="margin:4px 0;font-size:14px;"><a href="mailto:${display(email)}" style="color:#d4a53a;">${display(email)}</a></p>
                <p style="margin:4px 0;font-size:14px;">${display(phone)}</p>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr style="border-bottom:1px solid #f5f5f5;">
                  <td style="padding:10px 4px;color:#6b6b6b;width:40%;font-weight:600;">Agency / Organization</td>
                  <td style="padding:10px 4px;">${display(agency)}</td>
                </tr>
                <tr style="border-bottom:1px solid #f5f5f5;">
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;">Service Type</td>
                  <td style="padding:10px 4px;">${display(serviceType)}</td>
                </tr>
                <tr style="border-bottom:1px solid #f5f5f5;">
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;">Travel Date</td>
                  <td style="padding:10px 4px;">${display(travelDate)}</td>
                </tr>
                <tr style="border-bottom:1px solid #f5f5f5;">
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;">Passengers</td>
                  <td style="padding:10px 4px;">${display(passengers)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;vertical-align:top;">Message</td>
                  <td style="padding:10px 4px;white-space:pre-wrap;">${display(message)}</td>
                </tr>
              </table>
              <p style="font-size:13px;color:#6b6b6b;margin:24px 0 0;padding-top:16px;border-top:1px solid #f5f5f5;">
                Reply directly to this email to contact <strong>${display(fullName)}</strong>.
              </p>
            </div>
          </div>
        `,
      }),
      resend.emails.send({
        from: 'Jexpress Tourist Transport <noreply@jexpresstransport.com>',
        to: [email],
        subject: 'We received your booking request — JTTC',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#383838;">
            <div style="background:#d4a53a;padding:32px 40px;border-radius:12px 12px 0 0;">
              <h1 style="color:#f5f5f5;margin:0;font-size:24px;">Thank You, ${display(fullName)}!</h1>
            </div>
            <div style="background:#f5f5f5;padding:32px 40px;border:1px solid #f5f5f5;border-top:none;border-radius:0 0 12px 12px;">
              <p style="font-size:15px;line-height:1.6;margin-top:0;">
                We've received your booking request and our team will review it shortly.
                We'll get back to you within <strong>24 hours</strong> to confirm availability and discuss your transport arrangements.
              </p>
              <div style="background:#f5f5f5;border-left:4px solid #d4a53a;padding:16px 20px;border-radius:4px;margin:24px 0;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#d4a53a;">Your Request Summary</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Service:</strong> ${display(serviceType)}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Travel Date:</strong> ${display(travelDate)}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Passengers:</strong> ${display(passengers)}</p>
              </div>
              <p style="font-size:14px;line-height:1.6;">
                For urgent inquiries, call us directly:<br/>
                <strong>+63 919 009 1985</strong> (Booking) &nbsp;|&nbsp; <strong>+63 2 8743 9021</strong> (Office)|<strong>+63 919 009 1985</strong> (Booking) &nbsp;|&nbsp; <strong>+63 2 8743 9021</strong> (Office)|<strong>+63 919 009 1985</strong> (Booking) &nbsp;|&nbsp; <strong>+63 2 8743 9021</strong> (Office)
              </p>
              <p style="font-size:13px;color:#6b6b6b;margin-bottom:0;">
                — The Jexpress Tourist Transport Cooperative Team<br/>
                <a href="https://www.jexpresstransport.com" style="color:#d4a53a;">www.jexpresstransport.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    ])
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/contact]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
