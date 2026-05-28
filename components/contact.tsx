'use client'

import { useState, useEffect } from 'react'
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiSendPlaneLine,
  RiCheckLine,
  RiCloseLine,
} from 'react-icons/ri'
import FormField from '@/components/form-field'
import { extensionSafeFormProps, extensionSafeInputProps } from '@/lib/form-extension-guard'

type FormState = 'idle' | 'loading' | 'success' | 'error'
type FormErrors = Partial<Record<'fullName' | 'contactNumber' | 'email' | 'serviceNeeded', string>>

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
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
          .filter((s: { is_active: boolean }) => s.is_active)
          .map((s: { name: string }) => s.name)
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

  const inputClass =
    'w-full bg-white border border-[#d1d5db] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#9ca3af] rounded-xl px-4 py-3 text-sm font-inter outline-none transition-all duration-200'
  const inputErrorClass =
    'w-full bg-white border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 text-[#383838] placeholder:text-[#9ca3af] rounded-xl px-4 py-3 text-sm font-inter outline-none transition-all duration-200'
  const labelClass = 'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide'

  return (
    <section id="contact" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <span className="eyebrow-dash text-[#d4a53a] mb-4">
                Get In Touch
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl text-brand-blue leading-tight mb-5 text-balance">
                Book a Trip or <span className="text-[#d4a53a]">Request a Quote</span>
              </h2>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter">
                Ready to experience safe, reliable transport? Fill in the form and our team
                will get back to you promptly.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d4a53a] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#d4a53a]/30">
                  <RiMapPinLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#383838] font-bold text-sm">Office Address</p>
                  <p className="text-[#6b6b6b] text-sm font-inter leading-relaxed">
                    Espasyo Learning and Recreation Hub,<br />
                    #6 Torres Bugallon Street,<br />
                    Marikina Heights, Marikina City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d4a53a] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#d4a53a]/30">
                  <RiPhoneLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#383838] font-bold text-sm">Phone</p>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#9ca3af] text-xs font-inter uppercase tracking-wider">Booking</span>
                      <a href="tel:+639190091985" className="font-phone text-[#6b6b6b] text-lg hover:text-[#d4a53a] transition-colors">
                        +63 919 009 1985
                      </a>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#9ca3af] text-xs font-inter uppercase tracking-wider">Office / Marketing</span>
                      <a href="tel:+63287439021" className="font-phone text-[#6b6b6b] text-lg hover:text-[#d4a53a] transition-colors">
                        +63 2 8743 9021
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#d4a53a] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#d4a53a]/30">
                  <RiMailLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#383838] font-bold text-sm">Email</p>
                  <a
                    href="mailto:inquire@jexpresstransport.com"
                    className="text-[#6b6b6b] text-sm font-inter hover:text-[#d4a53a] transition-colors break-all"
                  >
                    inquire@jexpresstransport.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-bold text-sm">
                  Available for Booking
                </span>
              </div>
              <p className="text-white/60 text-xs font-inter leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent bookings, please
                call us directly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl shadow-[#383838]/8 border border-[#e5e7eb] p-8 lg:p-10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <RiCheckLine size={40} className="text-green-600" />
                  </div>
                  <h3 className="font-heading text-[#383838] text-2xl">
                    Booking Request Sent!
                  </h3>
                  <p className="text-[#6b6b6b] text-base font-inter max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will review your request and
                    contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-7 py-3 rounded-full transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                  {...extensionSafeFormProps}
                >
                  <h3 className="font-heading text-[#383838] mb-1">
                    Transport Booking Form
                  </h3>

                  {formState === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-inter">
                      <RiCloseLine size={18} className="flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4" suppressHydrationWarning>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs font-inter mt-1">{errors.fullName}</p>}
                    </FormField>
                    <FormField>
                      <label htmlFor="companyName" className={labelClass}>
                        Company / Organization
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="e.g. Government Agency, Hospital, University"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={inputClass}
                        {...extensionSafeInputProps}
                      />
                    </FormField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4" suppressHydrationWarning>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                      {errors.contactNumber && <p className="text-red-500 text-xs font-inter mt-1">{errors.contactNumber}</p>}
                    </FormField>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                      {errors.email && <p className="text-red-500 text-xs font-inter mt-1">{errors.email}</p>}
                    </FormField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4" suppressHydrationWarning>
                    <FormField>
                      <label htmlFor="serviceNeeded" className={labelClass}>
                        Service Needed <span className="text-[#d4a53a]">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className={errors.serviceNeeded ? inputErrorClass : inputClass}
                        {...extensionSafeInputProps}
                      >
                        <option value="">Select a service</option>
                        {serviceNames.map((name) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                        <option value="Other Transport Requirements">Other Transport Requirements</option>
                      </select>
                      {errors.serviceNeeded && <p className="text-red-500 text-xs font-inter mt-1">{errors.serviceNeeded}</p>}
                    </FormField>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                    </FormField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4" suppressHydrationWarning>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                    </FormField>
                    <FormField>
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
                        {...extensionSafeInputProps}
                      />
                    </FormField>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4" suppressHydrationWarning>
                    <FormField>
                      <label htmlFor="numberOfPassengers" className={labelClass}>
                        Number of Passengers
                      </label>
                      <input
                        id="numberOfPassengers"
                        name="numberOfPassengers"
                        type="number"
                        min="1"
                        placeholder="e.g. 30"
                        value={formData.numberOfPassengers}
                        onChange={handleChange}
                        className={inputClass}
                        {...extensionSafeInputProps}
                      />
                    </FormField>
                    <FormField>
                      <label htmlFor="preferredVehicle" className={labelClass}>
                        Preferred Vehicle Type
                      </label>
                      <select
                        id="preferredVehicle"
                        name="preferredVehicle"
                        value={formData.preferredVehicle}
                        onChange={handleChange}
                        className={inputClass}
                        {...extensionSafeInputProps}
                      >
                        <option value="">Select vehicle type</option>
                        <option value="Toyota GL Grandia">Toyota GL Grandia (5 Units)</option>
                        <option value="Toyota GL Grandia Tourer">Toyota GL Grandia Tourer (1 Unit)</option>
                        <option value="Foton">Foton (1 Unit)</option>
                        <option value="Toyota Commuter">Toyota Commuter (10 Units)</option>
                        <option value="Nissan Commuter NV350">Nissan Commuter NV350 (13 Units)</option>
                        <option value="Buses, SUVs, Coasters & Sedans">Buses, SUVs, Coasters &amp; Sedans (Upon Request)</option>
                      </select>
                    </FormField>
                  </div>

                  <FormField>
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
                      {...extensionSafeInputProps}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:bg-[#d4a53a]/60 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40 mt-2"
                  >
                    {formState === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <RiSendPlaneLine size={18} />
                        Send Booking Request
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
