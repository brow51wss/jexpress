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

    await resend.emails.send({
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
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/booking]', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
