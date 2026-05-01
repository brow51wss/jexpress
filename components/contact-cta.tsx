import Link from 'next/link'
import { PhoneCall, ArrowRight } from 'lucide-react'

export default function ContactCta() {
  return (
    <section className="py-24" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#fed16c] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Need Reliable Transport Support?
            </span>
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-5">
              Contact{' '}
              <span className="text-[#f58c23]">Jexpress</span>{' '}
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
              <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-5 flex flex-col gap-1">
                <span className="text-white/50 font-inter text-xs uppercase tracking-widest">
                  Primary
                </span>
                <a
                  href="tel:+639166112928"
                  className="text-white font-black text-xl hover:text-[#f58c23] transition-colors"
                >
                  +63 916-611-2928
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-5 flex flex-col gap-1">
                <span className="text-white/50 font-inter text-xs uppercase tracking-widest">
                  Office Line
                </span>
                <a
                  href="tel:+63287006042"
                  className="text-white font-black text-xl hover:text-[#f58c23] transition-colors"
                >
                  +632 8700-600 42
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href="mailto:jexpresstouristtransport.jttsc@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#f58c23]/30 whitespace-nowrap"
              >
                <ArrowRight size={16} strokeWidth={2} />
                Email Us Now
              </a>
              <a
                href="tel:+639166112928"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 border border-white/20 whitespace-nowrap"
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
    </section>
  )
}
