'use client'

import { useState, useEffect } from 'react'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'
type FormErrors = Partial<Record<'fullName' | 'contactNumber' | 'email' | 'serviceNeeded', string>>

interface ServiceItem {
  name: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const inputClass =
  'w-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

const labelClass =
  'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'
const inputErrorClass =
  'w-full bg-[#f5f5f5] border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

export default function BookForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [serviceNames, setServiceNames] = useState<string[]>([])
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

  useEffect(() => {
    const handler = (e: Event) => {
      const service = (e as CustomEvent<string>).detail
      setFormData((prev) => ({ ...prev, serviceNeeded: service }))
    }
    window.addEventListener('selectService', handler)
    return () => window.removeEventListener('selectService', handler)
  }, [])

  useEffect(() => {
    fetch('/api/services')
      .then((r) => r.json())
      .then((d) => {
        const names = (d.services ?? [])
          .filter((s: ServiceItem & { is_active: boolean }) => s.is_active)
          .map((s: ServiceItem) => s.name)
        setServiceNames(names)
      })
      .catch(() => {})
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!formData.contactNumber.trim()) errs.contactNumber = 'Contact number is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!isValidEmail(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.serviceNeeded) errs.serviceNeeded = 'Please select a service.'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setFormState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
    <section id="booking-form" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4 border-l-4 border-[#d4a53a] pl-3">
                Booking Request
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
                Send a{' '}
                <span className="text-[#d4a53a]">Booking Request</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                Complete the form and a member of our team will contact you regarding your
                transport request, vehicle availability, and service arrangements.
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] p-6 flex flex-col gap-4 shadow-sm">
              <p className="font-heading text-[#383838] text-sm uppercase tracking-wide">
                Services Available
              </p>
              {serviceNames.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4a53a] flex-shrink-0" />
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
                {['+63 916 611 2928', '+63 2 8700 6042', '+63 919 009 1985', '+63 2 8743 9021'].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/[\s-]/g, '')}`}
                    className="font-phone text-[#d4a53a] text-lg hover:text-[#d4a53a] transition-colors"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] p-8 lg:p-10 shadow-sm">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[#383838] text-2xl">
                    Booking Request Sent!
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-base max-w-sm leading-relaxed">
                    Thank you for your interest in JTTC. Our team will review your request
                    and get in touch with you to discuss availability and service details.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <h3 className="font-heading text-[#383838] text-xl mb-1">
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
                        Full Name <span className="text-[#d4a53a]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? inputErrorClass : inputClass}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.fullName}</p>}
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
                        Contact Number <span className="text-[#d4a53a]">*</span>
                      </label>
                      <input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        placeholder="+63 000 000 0000"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className={errors.contactNumber ? inputErrorClass : inputClass}
                      />
                      {errors.contactNumber && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.contactNumber}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-[#d4a53a]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? inputErrorClass : inputClass}
                      />
                      {errors.email && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceNeeded" className={labelClass}>
                        Service Needed <span className="text-[#d4a53a]">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className={errors.serviceNeeded ? inputErrorClass : inputClass}
                      >
                        <option value="">Select a service</option>
                        {serviceNames.map((name) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                        <option value="Other Transport Requirements">Other Transport Requirements</option>
                      </select>
                      {errors.serviceNeeded && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.serviceNeeded}</p>}
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
                    className="w-full flex items-center justify-center gap-2.5 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:bg-[#d4a53a]/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#d4a53a]/30 mt-1"
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
