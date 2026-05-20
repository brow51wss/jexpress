import Link from 'next/link'
import { PhoneCall, ArrowRight } from 'lucide-react'

export default function WhyUsCta() {
  return (
    <section className="py-24" style={{ background: '#d4a53a' }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-white/70 font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-5">
          Ready to Partner With Us?
        </span>
        <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-5 max-w-3xl mx-auto">
          Work With a Team That Values Safety, Integrity, and Reliable Service
        </h2>
        <p className="font-inter text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Choose Jexpress Tourist Transport Cooperative for transport solutions backed by
          professionalism, quality, and operational readiness.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#383838] hover:bg-[#2a2a2a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
          >
            Book Now
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <a
            href="tel:+639166112928"
            className="inline-flex items-center gap-2 bg-[#f5f5f5]/20 hover:bg-[#f5f5f5]/30 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 border border-white/30"
          >
            <PhoneCall size={16} strokeWidth={2} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
