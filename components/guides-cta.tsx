import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

export default function GuidesCta() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden px-8 sm:px-14 py-16 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: '#00193c' }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #d4a53a 0, #d4a53a 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-3">
              Ready to Start Your Journey?
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed max-w-xl">
              Let Jexpress handle your transport so you can focus on the adventure.
              Book a comfortable, safe, and reliable ride to your next destination.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
            >
              Book a Ride
              <RiArrowRightLine size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#d4a53a] text-white hover:text-[#d4a53a] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
