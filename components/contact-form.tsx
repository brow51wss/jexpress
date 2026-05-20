'use client'

import { useState, useEffect } from 'react'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'
type FormErrors = Partial<Record<'fullName' | 'email' | 'inquiryType' | 'message', string>>

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [serviceNames, setServiceNames] = useState<string[]>([])
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
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!isValidEmail(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.inquiryType) errs.inquiryType = 'Please select an inquiry type.'
    if (!formData.message.trim()) errs.message = 'Message is required.'
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
    'w-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'
  const inputErrorClass =
    'w-full bg-[#f5f5f5] border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

  const labelClass =
    'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-28">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4 border-l-4 border-[#d4a53a] pl-3">
                Send Us a Message
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
                Tell Us About Your{' '}
                <span className="text-[#d4a53a]">Transport Needs</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                Fill out the contact form and a member of our team will get back to you as
                soon as possible regarding your inquiry or transport requirements.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {serviceNames.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4a53a] flex-shrink-0" />
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
            <div className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] p-8 lg:p-10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-[#383838] text-2xl">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-base max-w-sm leading-relaxed">
                    Thank you for reaching out to JTTC. Our team will review your inquiry and
                    get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <h3 className="font-heading text-[#383838] text-xl mb-1">
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
                        Inquiry Type <span className="text-[#d4a53a]">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={errors.inquiryType ? inputErrorClass : inputClass}
                      >
                        <option value="">Select inquiry type</option>
                        {serviceNames.map((name) => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                      </select>
                      {errors.inquiryType && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.inquiryType}</p>}
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
                      Message / Details <span className="text-[#d4a53a]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your transport requirements, destination, pickup point, or any other details..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${errors.message ? inputErrorClass : inputClass} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs font-inter mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:bg-[#d4a53a]/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#d4a53a]/30 mt-1"
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
