import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function LeadershipCta() {
  return (
    <section className="py-24" style={{ background: '#d4a53a' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="inline-block text-white/70 font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
              Want to Learn More About JTTC and Our Services?
            </h2>
            <p className="font-inter text-white/80 text-base leading-relaxed">
              Explore our company profile, transport services, and contact page to learn how
              our team can support your transport requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#f5f5f5] text-[#d4a53a] font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              Our Services
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-[#f5f5f5]/10"
            >
              <Phone size={16} strokeWidth={2.5} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
