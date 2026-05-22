import Link from 'next/link'
import { Users, Landmark, Settings, ChevronRight } from 'lucide-react'

const pillars = [
  {
    icon: Landmark,
    title: 'Board of Directors',
    desc: 'Provides direction and governance oversight for the cooperative.',
  },
  {
    icon: Users,
    title: 'Cooperative Officers',
    desc: 'Chairperson, Vice Chairperson, Secretary, Treasurer, and General Manager.',
  },
  {
    icon: Settings,
    title: 'Operational Support',
    desc: 'Committees, bookkeeper, liaison officer, and operations management team.',
  },
]

export default function ProfileLeadership() {
  return (
    <section className="relative bg-brand-blue">
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="flex flex-col gap-6">
            <span className="eyebrow-dash text-[#d4a53a]">
              Leadership
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance">
              Supported by Organized{' '}
              <span className="text-[#d4a53a]">Leadership</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed">
              JTTC is supported by a Board of Directors, cooperative officers, committees, and
              operational personnel that help guide governance, accountability, and daily service
              operations.
            </p>
            <p className="font-inter text-white/60 text-base leading-relaxed">
              Our organizational structure ensures clear accountability, responsible decision-
              making, and dependable service delivery for all clients and stakeholders.
            </p>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-fit shadow-lg shadow-[#d4a53a]/30"
            >
              View Leadership Structure
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-5 bg-[#f5f5f5]/5 border border-white/10 rounded-2xl p-6 hover:border-[#d4a53a]/40 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d4a53a]/15 border border-[#d4a53a]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#d4a53a]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-heading text-white text-sm mb-1.5">{pillar.title}</p>
                    <p className="font-inter text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
      {/* Bottom wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
