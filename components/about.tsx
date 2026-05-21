import Link from 'next/link'
import { RiArrowRightLine, RiCheckboxCircleFill } from 'react-icons/ri'

const values = [
  'Professional and experienced drivers',
  'Reliable and quality transport services',
  'Strong commitment to safety and health',
  'Transparent and integrity-driven operations',
  'Flexible transport solutions for different client needs',
  'Serving tourism, hospitals, and organizations nationwide',
  'LTFRB-franchised vans meeting DAR, OCD, and industry standards',
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#fdfdfd] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/branding/scene-mask1.webp"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 h-full w-auto object-cover pointer-events-none select-none z-0"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 flex flex-col gap-7">
            <div>
              <span className="eyebrow-dash text-[#d4a53a] mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl text-brand-blue leading-tight mb-5 text-balance">
                A Cooperative Built on{' '}
                <span className="text-[#d4a53a]">Trust & Service</span>
              </h2>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter mb-4">
                Jexpress Tourist Transport Cooperative was organized to provide public tourist
                transport services and allied transport-related solutions. JTTC also supports
                transport services and other client service needs.
              </p>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter">
                We aim to improve the quality of life of our members through enterprise
                development and employment, while delivering safe, reliable, and professional
                service to every passenger and organization we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <RiCheckboxCircleFill
                    size={20}
                    className="text-[#d4a53a] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#383838] text-sm font-inter leading-snug">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
              >
                Contact Us
                <RiArrowRightLine size={18} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#00193c] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#00193c]/40"
              >
                View Our Services
                <RiArrowRightLine size={18} />
              </Link>
            </div>
          </div>

          {/* Right column — decorative image */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
