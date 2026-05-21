'use client'

import { useEffect, useState } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import Link from 'next/link'
import { ServiceIcon } from '@/lib/service-icons'

interface ServiceContent {
  section_key: string
  description: string
}

interface Service {
  id: string
  slug: string
  name: string
  price: number | null
  price_label: 'flat' | 'from'
  icon: string
  is_active: boolean
  service_content: ServiceContent[]
}

function formatPrice(price: number | null, label: 'flat' | 'from'): string | null {
  if (price === null) return null
  const formatted = `₱${Number(price).toLocaleString()}`
  return label === 'from' ? `From ${formatted}` : formatted
}

function bookService(serviceValue: string) {
  window.dispatchEvent(new CustomEvent('selectService', { detail: serviceValue }))
  const form = document.getElementById('contact')
  if (form) form.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch('/api/services')
      .then((r) => r.json())
      .then((d) => setServices((d.services ?? []).filter((s: Service) => s.is_active)))
      .catch(() => {})
  }, [])

  return (
    <section id="services" className="relative bg-[#010717] overflow-hidden">
      {/* Top wave divider — thick on left (~20 px), tapers to thin on right (~4 px) */}
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{ height: 56 }}
        aria-hidden="true"
      >
        {/* Fill above the wave with the hero background */}
        <path
          d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z"
          fill="#fefefe"
        />
        {/* Gold wave band */}
        <path
          d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z"
          fill="#d4a53a"
        />
      </svg>

      <div className="relative z-10 w-full overflow-hidden py-6">
        <h3 className="text-center uppercase tracking-widest mb-4 text-[#d4a53a]">
          Trusted By Government Agencies
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-3 px-8">
          {['Department of Agrarian Reform', 'Office of Civil Defense', 'Gov. Accredited Cooperative', 'Bloomingdale DC Transport', 'Professional & Courteous'].map(
            (item) => (
              <span key={item} className="text-[#fefefe] text-sm font-inter whitespace-nowrap tracking-wide border border-white/20 rounded-full px-4 py-1">
                {item}
              </span>
            )
          )}
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              What We Offer
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#fefefe] leading-tight text-balance">
              Transport Services
              <br />
              <span className="text-[#d4a53a]">Built for You</span>
            </h2>
          </div>
          <p className="text-[#fefefe] text-base leading-relaxed max-w-md lg:text-right font-inter">
            We specialize in government and institutional transport, ensuring every journey
            meets the highest standards of safety and professionalism.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const content = service.service_content.find((c) => c.section_key === 'homepage')
            const priceDisplay = formatPrice(service.price, service.price_label)

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 border border-[#e8e8e8] hover:border-[#d4a53a] hover:shadow-xl hover:shadow-[#d4a53a]/10 transition-all duration-300 flex flex-col gap-5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center group-hover:bg-[#d4a53a] transition-colors duration-300">
                  <ServiceIcon
                    name={service.icon}
                    size={26}
                    strokeWidth={1.75}
                    className="text-[#d4a53a] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-[#383838] leading-tight">
                      {service.name}
                    </h3>
                    {priceDisplay && (
                      <span className="flex-shrink-0 text-[#d4a53a] font-inter font-bold text-sm whitespace-nowrap mt-0.5">
                        {priceDisplay}
                      </span>
                    )}
                  </div>
                  {content?.description && (
                    <p className="text-[#6b6b6b] text-sm leading-relaxed font-inter">
                      {content.description}
                    </p>
                  )}
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => bookService(service.name)}
                    className="inline-flex items-center gap-1.5 text-[#d4a53a] font-semibold text-sm font-inter group-hover:gap-3 transition-all duration-200"
                  >
                    Book This Service
                    <RiArrowRightLine size={16} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-[#d4a53a] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h3 className="font-heading text-white text-2xl lg:text-3xl">
              Need a Custom Transport Solution?
            </h3>
            <p className="text-white font-inter text-base">
              Contact us today and we will tailor a transport plan for your agency or
              organization.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-blue text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#d4a53a]/30"
          >
            Get a Quote
            <RiArrowRightLine size={18} />
          </Link>
        </div>
      </div>

      {/* Road background — placed before bottom wave so wave renders on top */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/branding/road1.webp"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-auto h-[320px] object-contain pointer-events-none select-none z-0"
      />

      {/* Bottom wave divider — thin on left (~4 px), tapers to thick on right (~20 px) */}
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block relative z-10"
        style={{ height: 56 }}
        aria-hidden="true"
      >
        {/* Gold wave band */}
        <path
          d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z"
          fill="#d4a53a"
        />
        {/* Fill below the wave with the about-section background */}
        <path
          d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z"
          fill="#f5f5f5"
        />
      </svg>
    </section>
  )
}
