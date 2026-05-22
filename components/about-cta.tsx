import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutCta() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden px-8 sm:px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, #d4a53a 0%, #d4a53a 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-3">
              Looking for a Reliable Transport Partner?
            </h2>
            <p className="font-inter text-white/80 text-base leading-relaxed max-w-xl">
              JTTC is ready to support your transport needs with professionalism, safety, and
              dependable service. Connect with our team to learn more about our services.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f5f5f5] text-[#d4a53a] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
            >
              Book Now
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#00193c]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
