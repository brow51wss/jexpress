import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, organization, inquiryType, passengers, preferredDate, message } = body

    await Promise.all([
      // Notification to admin
      resend.emails.send({
        from: 'Jexpress Website <noreply@jexpresstransport.com>',
        to: ['inquire@jexpresstransport.com'],
        replyTo: email,
        subject: `New Inquiry — ${inquiryType || 'General'}`,
        html: `
          <h2>New Contact Inquiry from jexpresstransport.com</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
            <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
            <tr><td><strong>Organization / Agency</strong></td><td>${organization || '—'}</td></tr>
            <tr><td><strong>Inquiry Type</strong></td><td>${inquiryType || '—'}</td></tr>
            <tr><td><strong>Number of Passengers</strong></td><td>${passengers || '—'}</td></tr>
            <tr><td><strong>Preferred Date</strong></td><td>${preferredDate || '—'}</td></tr>
            <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message || '—'}</td></tr>
          </table>
        `,
      }),

      // Thank-you confirmation to visitor
      resend.emails.send({
        from: 'Jexpress Tourist Transport <noreply@jexpresstransport.com>',
        to: [email],
        subject: 'We received your inquiry — JTTC',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#383838;">
            <div style="background:#f58c23;padding:32px 40px;border-radius:12px 12px 0 0;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;">Thank You, ${fullName}!</h1>
            </div>
            <div style="background:#ffffff;padding:32px 40px;border:1px solid #e8e0d8;border-top:none;border-radius:0 0 12px 12px;">
              <p style="font-size:15px;line-height:1.6;margin-top:0;">
                We've received your inquiry and our team will get back to you within <strong>24 hours</strong>.
              </p>
              <div style="background:#f9f4ef;border-left:4px solid #f58c23;padding:16px 20px;border-radius:4px;margin:24px 0;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#f58c23;">Your Inquiry Summary</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Inquiry Type:</strong> ${inquiryType || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Preferred Date:</strong> ${preferredDate || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Passengers:</strong> ${passengers || '—'}</p>
                <p style="margin:4px 0;font-size:14px;white-space:pre-wrap;"><strong>Message:</strong> ${message || '—'}</p>
              </div>
              <p style="font-size:14px;line-height:1.6;">
                For urgent matters, call us directly:<br/>
                <strong>+63 916-611-2928</strong> &nbsp;|&nbsp; <strong>+63 919-009-1985</strong>
              </p>
              <p style="font-size:13px;color:#6b6b6b;margin-bottom:0;">
                — The Jexpress Tourist Transport Cooperative Team<br/>
                <a href="https://www.jexpresstransport.com" style="color:#f58c23;">www.jexpresstransport.com</a>
              </p>
            </div>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/inquiry]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
