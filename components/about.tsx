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
    <section id="about" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-7">
            <div>
              <span className="inline-block text-[#d4a53a] text-xs font-inter font-bold uppercase tracking-widest mb-4 border-l-4 border-[#d4a53a] pl-3">
                Our Story
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl text-[#383838] leading-tight mb-5 text-balance">
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
                className="inline-flex items-center gap-2 bg-[#383838] hover:bg-[#d4a53a] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Contact Us
                <RiArrowRightLine size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-[#d4a53a] font-semibold text-sm font-inter hover:underline underline-offset-4"
              >
                View Our Services
                <RiArrowRightLine size={16} />
              </Link>
            </div>
          </div>

          {/* Right column — placeholder for upcoming content */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
