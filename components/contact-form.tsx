'use client'

import { useState } from 'react'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    passengers: '',
    preferredDate: '',
    message: '',
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
      const response = await fetch('/api/inquiry', {
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
        organization: '',
        inquiryType: '',
        passengers: '',
        preferredDate: '',
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
    'w-full bg-white border border-[#e8e0d8] focus:border-[#f58c23] focus:ring-2 focus:ring-[#f58c23]/20 text-[#383838] placeholder:text-[#bbb] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

  const labelClass =
    'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-l-4 border-[#f58c23] pl-3">
                Send Us a Message
              </span>
              <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
                Tell Us About Your{' '}
                <span className="text-[#f58c23]">Transport Needs</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                Fill out the contact form and a member of our team will get back to you as
                soon as possible regarding your inquiry or transport requirements.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                'Tourist transport inquiries',
                'Shuttle service requests',
                'Vehicle availability inquiries',
                'General service and partnership inquiries',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f58c23] flex-shrink-0" />
                  <span className="font-inter text-[#6b6b6b] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#383838] rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-bold text-sm">Available for Inquiries</span>
              </div>
              <p className="text-white/60 text-xs font-inter leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent matters, please
                call us directly at +63 916 611 2928.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#fff8f0] rounded-2xl border border-[#e8e0d8] p-8 lg:p-10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans font-black text-[#383838] text-2xl">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-base max-w-sm leading-relaxed">
                    Thank you for reaching out to JTTC. Our team will review your inquiry and
                    get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <h3 className="font-sans font-black text-[#383838] text-xl mb-1">
                    Contact Form
                  </h3>

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
                      <label htmlFor="phone" className={labelClass}>
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
                    <div>
                      <label htmlFor="organization" className={labelClass}>
                        Organization / Agency
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="e.g. DAR, OCD, Hospital"
                        value={formData.organization}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiryType" className={labelClass}>
                        Inquiry Type <span className="text-[#f58c23]">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Tourist Transport">Tourist Transport Services</option>
                        <option value="Shuttle Services">Shuttle Services</option>
                        <option value="Passenger Transport">Passenger Transport</option>
                        <option value="Allied Services">Allied Transport Services</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="passengers" className={labelClass}>
                        Number of Passengers
                      </label>
                      <input
                        id="passengers"
                        name="passengers"
                        type="number"
                        min="1"
                        placeholder="e.g. 20"
                        value={formData.passengers}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className={labelClass}>
                      Preferred Date of Service
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message / Details <span className="text-[#f58c23]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your transport requirements, destination, pickup point, or any other details..."
                      value={formData.message}
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} strokeWidth={2} />
                        Send Message
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
