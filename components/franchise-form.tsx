'use client'

import { useState } from 'react'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

const inputErrorClass =
  'w-full bg-[#f5f5f5] border border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

const labelClass =
  'text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block'

export default function FranchiseForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<{ fullName?: string; contactNumber?: string; email?: string }>({})
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    preferredLocation: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setFormState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Submission failed. Please try again.')

      setFormState('success')
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        preferredLocation: '',
        message: '',
      })
    } catch (err: unknown) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <section id="franchise-form" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-4">
              Interested? <span className="text-[#d4a53a]">Let&apos;s Talk.</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              Fill out the form below and our team will contact you to discuss franchise opportunities and next steps.
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] p-8 lg:p-10">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={40} className="text-green-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-[#383838] text-2xl">
                  Inquiry Sent!
                </h3>
                <p className="font-inter text-[#6b6b6b] text-base max-w-sm leading-relaxed">
                  Thank you for your interest in becoming a J Express Transport franchise partner. Our team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

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
                    {errors.fullName && (
                      <p className="text-red-500 text-xs font-inter mt-1.5">{errors.fullName}</p>
                    )}
                  </div>
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
                    {errors.contactNumber && (
                      <p className="text-red-500 text-xs font-inter mt-1.5">{errors.contactNumber}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                    {errors.email && (
                      <p className="text-red-500 text-xs font-inter mt-1.5">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="preferredLocation" className={labelClass}>
                      Preferred Location
                    </label>
                    <input
                      id="preferredLocation"
                      name="preferredLocation"
                      type="text"
                      placeholder="e.g. Marikina, Metro Manila"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your background, interest in the franchise, or any questions you may have..."
                    value={formData.message}
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} strokeWidth={2} />
                      Send Franchise Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
