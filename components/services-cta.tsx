import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function ServicesCta() {
  return (
    <section className="py-24" style={{ background: '#2e2e2e' }}>
      <div className="max-w-7xl mx-auto px-6">
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
              <span className="inline-block text-white/70 font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
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
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f5f5f5] text-[#d4a53a] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
              >
                Book Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a
                href="tel:+639166112928"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#f5f5f5]/10"
              >
                <PhoneCall size={16} strokeWidth={2} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
