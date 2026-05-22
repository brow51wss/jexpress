import Link from 'next/link'
import { ArrowRight, Bus } from 'lucide-react'

const fleet = [
  { label: 'Toyota GL Grandia', count: '5 units' },
  { label: 'Toyota Commuter', count: '10 units' },
  { label: 'Nissan Commuter NV350', count: '13 units' },
  { label: 'Buses, SUVs, Coasters & Sedans', count: 'Upon request' },
]

export default function AboutTeam() {
  return (
    <section className="bg-brand-blue relative">
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative z-10" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>

      {/* Leadership + Fleet side by side */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Leadership */}
          <div>
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              Leadership
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Supported by an{' '}
              <span className="text-[#d4a53a]">Organized Leadership Structure</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed mb-8">
              JTTC is backed by a board of directors, key cooperative personnel, and an
              organizational structure that supports responsible operations, administration,
              finance, and service delivery. Our leadership is committed to ensuring quality,
              accountability, and integrity across all areas of our operations.
            </p>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#d4a53a]/30"
            >
              View Leadership Structure
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Our Fleet */}
          <div>
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              Our Fleet
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Ready to Serve With the{' '}
              <span className="text-[#d4a53a]">Right Vehicle Options</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed mb-8">
              Our equipment resources allow us to support a variety of transport needs
              depending on client requirements and group size.
            </p>
            <ul className="flex flex-col gap-4">
              {fleet.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 bg-[#f5f5f5]/5 border border-white/10 rounded-xl px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Bus size={18} className="text-[#d4a53a] flex-shrink-0" strokeWidth={1.8} />
                    <span className="font-inter text-white/80 text-sm">{item.label}</span>
                  </div>
                  <span className="font-inter text-[#d4a53a] text-xs font-semibold uppercase tracking-wide flex-shrink-0">
                    {item.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block relative z-10" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
