import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function ServicesCta() {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      {/* Top wave divider — from #f5f5f5 (ServicesWhy) into brand-blue */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div
          className="relative rounded-3xl overflow-hidden px-8 sm:px-14 py-16"
          style={{ background: 'linear-gradient(135deg, #d4a53a 0%, #d4a53a 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="eyebrow-dash text-white/80 mb-4">
                Get in Touch
              </span>
              <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
                Need Reliable Transport Support for Your Organization?
              </h2>
              <p className="font-inter text-white/80 text-base leading-relaxed">
                Partner with Jexpress Tourist Transport Cooperative for dependable service,
                professional drivers, and transport solutions tailored to your needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-[#f5f5f5] text-[#d4a53a] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
              >
                Book Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+639190091985"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#00193c]/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <PhoneCall size={16} strokeWidth={2} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave divider — from brand-blue into #2a2a2a (Footer) */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#02071c" />
      </svg>
    </section>
  )
}
