import Link from 'next/link'
import { Phone } from 'lucide-react'

export default function BookCta() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: '#f58c23' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-white/70 font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Ready to Arrange Transport?
            </span>
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
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
              className="inline-flex items-center justify-center gap-2 bg-[#383838] hover:bg-[#2a2a2a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#383838]/40"
            >
              Submit Booking Request
            </Link>
            <a
              href="tel:+639166112928"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
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
