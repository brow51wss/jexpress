'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { RiLockLine, RiArrowRightLine, RiEyeLine, RiEyeOffLine, RiLoader4Line } from 'react-icons/ri'

export default function FranchiseLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/franchise-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        const from = searchParams.get('from') || '/franchise'
        router.push(from)
        router.refresh()
      } else {
        setError('Incorrect password. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">

        <div className="flex justify-center mb-8">
          <div className="relative h-10 w-44">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/x9MbHBI5X4YWvsyZwm77e-qoL4yUphEjQNGVYcsOcxtf4gQ938pf.png"
              alt="Jexpress Tourist Transport Cooperative"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] shadow-sm p-8 lg:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center mb-5">
              <RiLockLine size={26} className="text-[#d4a53a]" />
            </div>
            <span className="eyebrow-dash text-[#00193c] mb-3">
              Restricted Access
            </span>
            <h1 className="font-heading text-[#383838] text-2xl leading-tight mb-2">
              Franchise Portal
            </h1>
            <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed max-w-xs">
              This page is for authorized franchise inquiries only. Enter your access password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-inter text-center">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="password"
                className="text-[#383838] text-xs font-bold font-inter uppercase tracking-wide mb-1.5 block"
              >
                Access Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-[#f5f5f5] border border-[#f5f5f5] focus:border-[#d4a53a] focus:ring-2 focus:ring-[#d4a53a]/20 text-[#383838] placeholder:text-[#f5f5f5] rounded-xl px-4 py-3.5 text-sm font-inter outline-none transition-all duration-200 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#383838] transition-colors p-0.5"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] disabled:bg-[#d4a53a]/60 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#d4a53a]/30 mt-1"
            >
              {loading ? (
                <>
                  <RiLoader4Line size={18} className="animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Access Franchise Portal
                  <RiArrowRightLine size={18} />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[#aaa] font-inter text-xs mt-6 leading-relaxed">
          Need access? Contact us at{' '}
          <a
            href="mailto:inquire@jexpresstransport.com"
            className="text-[#d4a53a] hover:underline underline-offset-2"
          >
            inquire@jexpresstransport.com
          </a>
        </p>

      </div>
    </div>
  )
}
