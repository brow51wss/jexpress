'use client'

import { useState } from 'react'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-white border border-[#e8e0d8] focus:border-[#f58c23] focus:ring-2 focus:ring-[#f58c23]/20 text-[#383838] placeholder:text-[#bbb] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

const labelClass =
  'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'

export default function BookForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    contactNumber: '',
    email: '',
    serviceNeeded: '',
    tripDate: '',
    pickupLocation: '',
    dropoffLocation: '',
    numberOfPassengers: '',
    preferredVehicle: '',
    additionalNotes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://testing.varakit.com/api/email/contact-forms', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminEmail: 'brow5187+jexpress@gmail.com',
          formData,
          userId: '1e14de5f-fc3a-41a4-a9d5-7e2bef44a435',
        }),
      })

      if (!response.ok) throw new Error('Submission failed. Please try again.')

      setFormState('success')
      setFormData({
        fullName: '',
        companyName: '',
        contactNumber: '',
        email: '',
        serviceNeeded: '',
        tripDate: '',
        pickupLocation: '',
        dropoffLocation: '',
        numberOfPassengers: '',
        preferredVehicle: '',
        additionalNotes: '',
      })
    } catch (err: unknown) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <section id="booking-form" className="py-20 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-l-4 border-[#f58c23] pl-3">
                Booking Request
              </span>
              <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
                Send a{' '}
                <span className="text-[#f58c23]">Booking Request</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                Complete the form and a member of our team will contact you regarding your
                transport request, vehicle availability, and service arrangements.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#e8e0d8] p-6 flex flex-col gap-4 shadow-sm">
              <p className="font-sans font-bold text-[#383838] text-sm uppercase tracking-wide">
                Services Available
              </p>
              {[
                'Tourist Transport Services',
                'Shuttle Services',
                'Logistic Transport Services',
                'Passenger Transport',
                'Other Transport Requirements',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f58c23] flex-shrink-0" />
                  <span className="font-inter text-[#6b6b6b] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#383838] rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-white font-bold text-sm">Need Help?</p>
              <p className="text-white/60 text-xs font-inter leading-relaxed">
                For urgent inquiries, you may also reach us directly by phone.
              </p>
              <div className="flex flex-col gap-1 pt-1">
                {['+63 916-611-2928', '+632 8700-600 42', '+63 919-009-1985'].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/[\s-]/g, '')}`}
                    className="text-[#f58c23] text-sm font-bold font-inter hover:text-[#fed16c] transition-colors"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e8e0d8] p-8 lg:p-10 shadow-sm">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans font-black text-[#383838] text-2xl">
                    Booking Request Sent!
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-base max-w-sm leading-relaxed">
                    Thank you for your interest in JTTC. Our team will review your request
                    and get in touch with you to discuss availability and service details.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <h3 className="font-sans font-black text-[#383838] text-xl mb-1">
                      Booking Request Form
                    </h3>
                    <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                      Please provide your contact details and trip requirements so we can better
                      assist you with the right transport solution.
                    </p>
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-inter">
                      <XCircle size={18} className="flex-shrink-0" strokeWidth={1.8} />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        Full Name <span className="text-[#f58c23]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className={labelClass}>
                        Company / Organization
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="e.g. DAR, OCD, Hospital"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactNumber" className={labelClass}>
                        Contact Number <span className="text-[#f58c23]">*</span>
                      </label>
                      <input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        required
                        placeholder="+63 000 000 0000"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-[#f58c23]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceNeeded" className={labelClass}>
                        Service Needed <span className="text-[#f58c23]">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        required
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        <option value="Tourist Transport Services">Tourist Transport Services</option>
                        <option value="Shuttle Services">Shuttle Services</option>
                        <option value="Logistic Transport Services">Logistic Transport Services</option>
                        <option value="Passenger Transport">Passenger Transport</option>
                        <option value="Other Transport Requirements">Other Transport Requirements</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="tripDate" className={labelClass}>
                        Date of Trip / Service
                      </label>
                      <input
                        id="tripDate"
                        name="tripDate"
                        type="date"
                        value={formData.tripDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupLocation" className={labelClass}>
                        Pickup Location
                      </label>
                      <input
                        id="pickupLocation"
                        name="pickupLocation"
                        type="text"
                        placeholder="e.g. Marikina City"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="dropoffLocation" className={labelClass}>
                        Drop-off Location
                      </label>
                      <input
                        id="dropoffLocation"
                        name="dropoffLocation"
                        type="text"
                        placeholder="e.g. Tagaytay City"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="numberOfPassengers" className={labelClass}>
                        Number of Passengers
                      </label>
                      <input
                        id="numberOfPassengers"
                        name="numberOfPassengers"
                        type="number"
                        min="1"
                        placeholder="e.g. 20"
                        value={formData.numberOfPassengers}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredVehicle" className={labelClass}>
                        Preferred Vehicle Type
                      </label>
                      <select
                        id="preferredVehicle"
                        name="preferredVehicle"
                        value={formData.preferredVehicle}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select vehicle type</option>
                        <option value="Toyota GL Grandia">Toyota GL Grandia</option>
                        <option value="Toyota Commuter">Toyota Commuter</option>
                        <option value="Nissan Commuter NV350">Nissan Commuter NV350</option>
                        <option value="Bus">Bus</option>
                        <option value="SUV">SUV</option>
                        <option value="Closed Van">Closed Van</option>
                        <option value="Sedan">Sedan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className={labelClass}>
                      Additional Notes / Special Requests
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={4}
                      placeholder="Any special requirements, additional trip details, or other information that may help us assist you better..."
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#f58c23] hover:bg-[#d97b1a] disabled:bg-[#f58c23]/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#f58c23]/30 mt-1"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" strokeWidth={2} />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send size={17} strokeWidth={2} />
                        Submit Booking Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
