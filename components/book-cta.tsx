import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function BookCta() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#d4a53a' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow-dash text-white/80 mb-4">
              Ready to Arrange Transport?
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Submit Your Booking Request{' '}
              <span className="text-[#383838]">Today</span>
            </h2>
            <p className="font-inter text-white/80 text-base leading-relaxed max-w-lg">
              Let JTTC help you find the right transport solution for your needs. Our team
              is ready to assist with safe, reliable, and professionally managed transport
              arrangements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <Link
              href="#booking-form"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#d4a53a]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Submit Booking Request
            </Link>
            <a
              href="tel:+639166112928"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#00193c]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Phone size={16} strokeWidth={2} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
