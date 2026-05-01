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

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    agency: '',
    serviceType: '',
    travelDate: '',
    passengers: '',
    message: '',
  })

  useEffect(() => {
    const handler = (e: Event) => {
      const service = (e as CustomEvent<string>).detail
      setFormData((prev) => ({ ...prev, serviceType: service }))
    }
    window.addEventListener('selectService', handler)
    return () => window.removeEventListener('selectService', handler)
  }, [])

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Submission failed. Please try again.')

      setFormState('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        agency: '',
        serviceType: '',
        travelDate: '',
        passengers: '',
        message: '',
      })
    } catch (err: unknown) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const inputClass =
    'w-full bg-white border border-[#e8e0d8] focus:border-[#f58c23] focus:ring-2 focus:ring-[#f58c23]/20 text-[#383838] placeholder:text-[#aaa] rounded-xl px-4 py-3 text-sm font-inter outline-none transition-all duration-200'

  return (
    <section id="contact" className="py-24 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <span className="inline-block text-[#f58c23] text-xs font-inter font-bold uppercase tracking-widest mb-4 border-l-4 border-[#f58c23] pl-3">
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#383838] leading-tight mb-5 text-balance">
                Book a Trip or <span className="text-[#f58c23]">Request a Quote</span>
              </h2>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter">
                Ready to experience safe, reliable transport? Fill in the form and our team
                will get back to you promptly.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f58c23] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f58c23]/30">
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
                <div className="w-11 h-11 rounded-xl bg-[#f58c23] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f58c23]/30">
                  <RiPhoneLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#383838] font-bold text-sm">Phone</p>
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+639166112928" className="text-[#6b6b6b] text-sm font-inter hover:text-[#f58c23] transition-colors">
                      +63 916-611-2928
                    </a>
                    <a href="tel:+63287006042" className="text-[#6b6b6b] text-sm font-inter hover:text-[#f58c23] transition-colors">
                      +632 8700-600 42
                    </a>
                    <a href="tel:+639190091985" className="text-[#6b6b6b] text-sm font-inter hover:text-[#f58c23] transition-colors">
                      +63 919-009-1985
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f58c23] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f58c23]/30">
                  <RiMailLine size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#383838] font-bold text-sm">Email</p>
                  <a
                    href="mailto:jexpresstouristtransport.jttsc@gmail.com"
                    className="text-[#6b6b6b] text-sm font-inter hover:text-[#f58c23] transition-colors break-all"
                  >
                    jexpresstouristtransport.jttsc@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#383838] rounded-2xl p-6 flex flex-col gap-3">
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
            <div className="bg-white rounded-2xl shadow-xl shadow-[#383838]/5 border border-[#e8e0d8] p-8 lg:p-10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <RiCheckLine size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-[#383838] text-2xl font-black">
                    Booking Request Sent!
                  </h3>
                  <p className="text-[#6b6b6b] text-base font-inter max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will review your request and
                    contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-7 py-3 rounded-full transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <h3 className="text-[#383838] text-xl font-black mb-1">
                    Transport Booking Form
                  </h3>

                  {formState === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-inter">
                      <RiCloseLine size={18} className="flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="fullName"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
                        Full Name <span className="text-[#f58c23]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
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
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+63 000 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="agency"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
                        Agency / Organization
                      </label>
                      <input
                        id="agency"
                        name="agency"
                        type="text"
                        placeholder="e.g. DAR, OCD"
                        value={formData.agency}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="serviceType"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
                        Service Type <span className="text-[#f58c23]">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
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
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="passengers"
                        className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                      >
                        Number of Passengers
                      </label>
                      <input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min="1"
                        placeholder="e.g. 30"
                        value={formData.passengers}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="travelDate"
                      className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                    >
                      Preferred Travel Date
                    </label>
                    <input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide"
                    >
                      Message / Special Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your transport needs, destination, or any special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] disabled:bg-[#f58c23]/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#f58c23]/30 mt-2"
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
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
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
