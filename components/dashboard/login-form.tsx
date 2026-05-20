'use client'

import { useState, useRef } from 'react'
import { RiMailLine, RiArrowRightLine, RiLoader4Line, RiShieldCheckLine } from 'react-icons/ri'

type Step = 'email' | 'otp'

export default function DashboardLoginForm() {
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resendCooldown, setResendCooldown] = useState(0)
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const inputClass =
    'w-full bg-[#f5f5f5]/10 border border-white/20 focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200'

  function startCooldown() {
    setResendCooldown(60)
    cooldownRef.current = setInterval(() => {
      setResendCooldown((v) => {
        if (v <= 1) {
          clearInterval(cooldownRef.current!)
          return 0
        }
        return v - 1
      })
    }, 1000)
  }

  async function handleRequestOtp(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) { setError('Email is required.'); return }
    setLoading(true)
    setError('')
    try {
      await fetch('/api/dashboard/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setStep('otp')
      startCooldown()
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault()
    if (otp.length !== 6) { setError('Please enter the 6-digit code.'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/dashboard/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Invalid code. Please try again.')
        return
      }
      window.location.href = '/dashboard'
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleResend() {
    if (resendCooldown > 0) return
    setLoading(true)
    setError('')
    try {
      await fetch('/api/dashboard/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      startCooldown()
    } catch {
      setError('Failed to resend. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#2a2a2a] border border-white/10 rounded-2xl p-8">
      {step === 'email' ? (
        <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
          <div>
            <label className="text-white/60 text-xs font-inter font-semibold uppercase tracking-wide block mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                placeholder="your@email.com"
                className={`${inputClass} pl-10`}
                autoFocus
              />
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-xs font-inter">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 mt-1"
          >
            {loading ? (
              <RiLoader4Line size={16} className="animate-spin" />
            ) : (
              <>
                Send Login Code
                <RiArrowRightLine size={16} />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
          <div className="flex items-center gap-3 bg-[#d4a53a]/10 border border-[#d4a53a]/30 rounded-xl px-4 py-3">
            <RiShieldCheckLine className="text-[#d4a53a] flex-shrink-0" size={18} />
            <p className="text-white/70 text-xs font-inter leading-relaxed">
              A 6-digit code was sent to <strong className="text-white">{email}</strong>
            </p>
          </div>

          <div>
            <label className="text-white/60 text-xs font-inter font-semibold uppercase tracking-wide block mb-1.5">
              6-Digit Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '')); setError('') }}
              placeholder="000000"
              className={`${inputClass} text-center font-stat text-2xl tracking-[0.4em]`}
              autoFocus
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs font-inter">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className="w-full flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:opacity-60 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
          >
            {loading ? (
              <RiLoader4Line size={16} className="animate-spin" />
            ) : (
              <>
                Log In
                <RiArrowRightLine size={16} />
              </>
            )}
          </button>

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => { setStep('email'); setOtp(''); setError('') }}
              className="text-white/40 hover:text-white/70 text-xs font-inter transition-colors"
            >
              ← Use a different email
            </button>
            <button
              type="button"
              onClick={handleResend}
              disabled={resendCooldown > 0 || loading}
              className="text-[#d4a53a]/70 hover:text-[#d4a53a] disabled:text-white/30 text-xs font-inter transition-colors"
            >
              {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend code'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
