import Link from 'next/link'
import { PhoneCall, ArrowRight } from 'lucide-react'

export default function ContactCta() {
  return (
    <section className="relative bg-brand-blue">
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative z-10" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow-dash text-[#d4a53a] mb-5">
              Need Reliable Transport Support?
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-5">
              Contact{' '}
              <span className="text-[#d4a53a]">Jexpress</span>{' '}
              Today
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed max-w-lg">
              Contact Jexpress Tourist Transport Cooperative and let us help you find the
              right transport solution for your needs. Our team is ready to assist with
              professional, safe, and reliable service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4">
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <div className="bg-[#f5f5f5]/5 border border-white/10 rounded-2xl px-7 py-5 flex flex-col gap-1">
                <span className="text-white/50 font-inter text-xs uppercase tracking-widest">
                  Booking
                </span>
                <a
                  href="tel:+639190091985"
                  className="text-white font-phone text-xl hover:text-[#d4a53a] transition-colors"
                >
                  +63 919 009 1985
                </a>
              </div>
              <div className="bg-[#f5f5f5]/5 border border-white/10 rounded-2xl px-7 py-5 flex flex-col gap-1">
                <span className="text-white/50 font-inter text-xs uppercase tracking-widest">
                  Office / Marketing
                </span>
                <a
                  href="tel:+63287439021"
                  className="text-white font-phone text-xl hover:text-[#d4a53a] transition-colors"
                >
                  +63 2 8743 9021
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href="mailto:inquire@jexpresstransport.com"
                className="inline-flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40 whitespace-nowrap"
              >
                <ArrowRight size={16} strokeWidth={2} />
                Email Us Now
              </a>
              <a
                href="tel:+639190091985"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#00193c]/40 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                <PhoneCall size={16} strokeWidth={2} />
                Call Us Now
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white font-inter text-sm py-2 transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative z-10" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
