import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, agency, serviceType, travelDate, passengers, message } = body

    await resend.emails.send({
      from: 'Jexpress Website <noreply@jexpresstransport.com>',
      to: ['booking@jexpresstransport.com'],
      replyTo: email,
      subject: `New Booking Request — ${serviceType || 'General'}`,
      html: `
        <h2>New Booking Request from jexpresstransport.com</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
          <tr><td><strong>Agency / Organization</strong></td><td>${agency || '—'}</td></tr>
          <tr><td><strong>Service Type</strong></td><td>${serviceType || '—'}</td></tr>
          <tr><td><strong>Travel Date</strong></td><td>${travelDate || '—'}</td></tr>
          <tr><td><strong>Passengers</strong></td><td>${passengers || '—'}</td></tr>
          <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message || '—'}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/contact]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
