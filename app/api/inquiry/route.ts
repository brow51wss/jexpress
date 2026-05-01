import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, organization, inquiryType, passengers, preferredDate, message } = body

    await resend.emails.send({
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
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/inquiry]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
