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
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#383838;">
            <div style="background:#383838;padding:32px 40px;border-radius:12px 12px 0 0;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#f58c23;">New Submission</p>
              <h1 style="color:#ffffff;margin:0;font-size:22px;">Contact Inquiry</h1>
              <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">From jexpresstransport.com</p>
            </div>
            <div style="background:#ffffff;padding:32px 40px;border:1px solid #e8e0d8;border-top:none;border-radius:0 0 12px 12px;">
              <div style="background:#f9f4ef;border-left:4px solid #f58c23;padding:16px 20px;border-radius:4px;margin-bottom:24px;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#f58c23;">Submitted By</p>
                <p style="margin:4px 0;font-size:15px;font-weight:700;">${fullName}</p>
                <p style="margin:4px 0;font-size:14px;"><a href="mailto:${email}" style="color:#f58c23;">${email}</a></p>
                <p style="margin:4px 0;font-size:14px;">${phone || '—'}</p>
                ${organization ? `<p style="margin:4px 0;font-size:14px;color:#6b6b6b;">${organization}</p>` : ''}
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr style="border-bottom:1px solid #e8e0d8;">
                  <td style="padding:10px 4px;color:#6b6b6b;width:40%;font-weight:600;">Inquiry Type</td>
                  <td style="padding:10px 4px;">${inquiryType || '—'}</td>
                </tr>
                <tr style="border-bottom:1px solid #e8e0d8;">
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;">Preferred Date</td>
                  <td style="padding:10px 4px;">${preferredDate || '—'}</td>
                </tr>
                <tr style="border-bottom:1px solid #e8e0d8;">
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;">Passengers</td>
                  <td style="padding:10px 4px;">${passengers || '—'}</td>
                </tr>
                <tr>
                  <td style="padding:10px 4px;color:#6b6b6b;font-weight:600;vertical-align:top;">Message</td>
                  <td style="padding:10px 4px;white-space:pre-wrap;">${message || '—'}</td>
                </tr>
              </table>
              <p style="font-size:13px;color:#6b6b6b;margin:24px 0 0;padding-top:16px;border-top:1px solid #e8e0d8;">
                Reply directly to this email to contact <strong>${fullName}</strong>.
              </p>
            </div>
          </div>
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
                <strong>+63 916 611 2928</strong> &nbsp;|&nbsp; <strong>+63 919 009 1985</strong> &nbsp;|&nbsp; <strong>+63 2 8743 9021</strong>
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
