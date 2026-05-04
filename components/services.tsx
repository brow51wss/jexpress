'use client'

import {
  RiBusLine,
  RiMapPinLine,
  RiGroupLine,
  RiArrowRightLine,
  RiShipLine,
} from 'react-icons/ri'
import Link from 'next/link'

const services = [
  {
    icon: RiBusLine,
    title: 'Tourist Transport Services',
    description:
      'Land and sea tourist transport for organized tours, delegations, and groups. Air-conditioned, spacious, and well-maintained vehicles for every journey.',
    serviceValue: 'Tourist Transport Services',
  },
  {
    icon: RiGroupLine,
    title: 'Shuttle Services',
    description:
      'Reliable shuttle operations for companies, hospitals, schools, and government agencies. Consistent, punctual, and professionally managed.',
    serviceValue: 'Shuttle Services',
  },
  {
    icon: RiMapPinLine,
    title: 'Passenger Transport Solutions',
    description:
      'Tailored passenger transport packages for recurring government operations, corporate travel, and institutional use nationwide.',
    serviceValue: 'Passenger Transport',
  },
  {
    icon: RiShipLine,
    title: 'Allied Transport Services',
    description:
      'Additional allied transport-related services including spare parts distribution, vehicle and driver insurance marketing, and transport coordination.',
    serviceValue: 'Other Transport Requirements',
  },
]

function bookService(serviceValue: string) {
  window.dispatchEvent(new CustomEvent('selectService', { detail: serviceValue }))
  const form = document.getElementById('contact')
  if (form) form.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-[#f58c23] text-xs font-inter font-bold uppercase tracking-widest mb-4 border-l-4 border-[#f58c23] pl-3">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#383838] leading-tight text-balance">
              Transport Services
              <br />
              <span className="text-[#f58c23]">Built for You</span>
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-base leading-relaxed max-w-md lg:text-right font-inter">
            We specialize in government and institutional transport, ensuring every journey
            meets the highest standards of safety and professionalism.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 border border-[#e8e0d8] hover:border-[#f58c23] hover:shadow-xl hover:shadow-[#f58c23]/10 transition-all duration-300 flex flex-col gap-5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#f58c23]/10 flex items-center justify-center group-hover:bg-[#f58c23] transition-colors duration-300">
                <service.icon
                  size={26}
                  className="text-[#f58c23] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#383838] font-bold text-lg leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed font-inter">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => bookService(service.serviceValue)}
                  className="inline-flex items-center gap-1.5 text-[#f58c23] font-semibold text-sm font-inter group-hover:gap-3 transition-all duration-200"
                >
                  Book This Service
                  <RiArrowRightLine size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#383838] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h3 className="text-white text-2xl lg:text-3xl font-black">
              Need a Custom Transport Solution?
            </h3>
            <p className="text-white/60 font-inter text-base">
              Contact us today and we will tailor a transport plan for your agency or
              organization.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#f58c23]/30"
          >
            Get a Quote
            <RiArrowRightLine size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
