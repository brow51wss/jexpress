'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RiCloseLine } from 'react-icons/ri'

type ConsentState = 'accepted' | 'declined' | null

const STORAGE_KEY = 'cookie_consent'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function grantConsent() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
    })
  }
}

function denyConsent() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
    })
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null
    if (stored === 'accepted') {
      grantConsent()
      setConsent('accepted')
    } else if (stored === 'declined') {
      denyConsent()
      setConsent('declined')
    } else {
      // Show banner after a short delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
    grantConsent()
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setConsent('declined')
    setVisible(false)
    denyConsent()
  }

  if (!visible || consent !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 flex justify-center"
    >
      <div
        className="w-full max-w-2xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
        style={{ background: '#2b2b2b' }}
      >
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              {/* Cookie icon */}
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-lg"
                style={{ background: '#f58c23' }}
                aria-hidden="true"
              >
                🍪
              </div>
              <h2 className="font-sans font-black text-white text-sm sm:text-base leading-snug">
                We use cookies
              </h2>
            </div>
            <button
              onClick={handleDecline}
              aria-label="Close cookie banner and decline"
              className="text-white/40 hover:text-white transition-colors flex-shrink-0 mt-0.5"
            >
              <RiCloseLine size={18} />
            </button>
          </div>

          <p className="font-inter text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
            We use cookies and similar tracking technologies (Google Analytics and Microsoft Clarity) to analyze website traffic,
            understand visitor behavior, and improve our site experience. No personal data from your form submissions is used for advertising.
            You can accept or decline non-essential cookies at any time.{' '}
            <Link href="/privacy-policy" className="text-[#f58c23] hover:underline">
              Learn more
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg font-inter font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: '#f58c23' }}
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg font-inter font-semibold text-sm text-white/70 border border-white/20 hover:bg-white/10 transition-all duration-200 active:scale-[0.98]"
            >
              Decline Non-Essential
            </button>
            <Link
              href="/privacy-policy"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg font-inter text-sm text-white/50 hover:text-white/80 transition-colors text-center"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
