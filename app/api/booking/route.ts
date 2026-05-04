import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      fullName, companyName, contactNumber, email,
      serviceNeeded, tripDate, pickupLocation, dropoffLocation,
      numberOfPassengers, preferredVehicle, additionalNotes,
    } = body

    await Promise.all([
      // Notification to admin
      resend.emails.send({
        from: 'Jexpress Website <noreply@jexpresstransport.com>',
        to: ['booking@jexpresstransport.com'],
        replyTo: email,
        subject: `Booking Request — ${serviceNeeded || 'Transport'}`,
        html: `
          <h2>New Booking Request from jexpresstransport.com</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
            <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Company / Organization</strong></td><td>${companyName || '—'}</td></tr>
            <tr><td><strong>Contact Number</strong></td><td>${contactNumber}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Service Needed</strong></td><td>${serviceNeeded || '—'}</td></tr>
            <tr><td><strong>Trip Date</strong></td><td>${tripDate || '—'}</td></tr>
            <tr><td><strong>Pickup Location</strong></td><td>${pickupLocation || '—'}</td></tr>
            <tr><td><strong>Drop-off Location</strong></td><td>${dropoffLocation || '—'}</td></tr>
            <tr><td><strong>Number of Passengers</strong></td><td>${numberOfPassengers || '—'}</td></tr>
            <tr><td><strong>Preferred Vehicle</strong></td><td>${preferredVehicle || '—'}</td></tr>
            <tr><td><strong>Additional Notes</strong></td><td style="white-space:pre-wrap">${additionalNotes || '—'}</td></tr>
          </table>
        `,
      }),

      // Thank-you confirmation to visitor
      resend.emails.send({
        from: 'Jexpress Tourist Transport <noreply@jexpresstransport.com>',
        to: [email],
        subject: 'We received your booking request — JTTC',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#383838;">
            <div style="background:#f58c23;padding:32px 40px;border-radius:12px 12px 0 0;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;">Thank You, ${fullName}!</h1>
            </div>
            <div style="background:#ffffff;padding:32px 40px;border:1px solid #e8e0d8;border-top:none;border-radius:0 0 12px 12px;">
              <p style="font-size:15px;line-height:1.6;margin-top:0;">
                We've received your booking request and our team will review it shortly.
                We'll get back to you within <strong>24 hours</strong> to confirm availability and discuss your transport arrangements.
              </p>
              <div style="background:#f9f4ef;border-left:4px solid #f58c23;padding:16px 20px;border-radius:4px;margin:24px 0;">
                <p style="margin:0 0 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#f58c23;">Your Request Summary</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Service:</strong> ${serviceNeeded || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Trip Date:</strong> ${tripDate || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Pickup:</strong> ${pickupLocation || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Drop-off:</strong> ${dropoffLocation || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Passengers:</strong> ${numberOfPassengers || '—'}</p>
                <p style="margin:4px 0;font-size:14px;"><strong>Vehicle:</strong> ${preferredVehicle || '—'}</p>
                <p style="margin:4px 0;font-size:14px;white-space:pre-wrap;"><strong>Additional Notes:</strong> ${additionalNotes || '—'}</p>
              </div>
              <p style="font-size:14px;line-height:1.6;">
                For urgent inquiries, call us directly:<br/>
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
    console.error('[/api/booking]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
