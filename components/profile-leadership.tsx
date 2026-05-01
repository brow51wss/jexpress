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
    <section className="py-24" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="flex flex-col gap-6">
            <span className="inline-block text-[#fed16c] font-inter text-xs font-semibold uppercase tracking-[0.2em]">
              Leadership
            </span>
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance">
              Supported by Organized{' '}
              <span className="text-[#f58c23]">Leadership</span>
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
              className="inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-fit shadow-lg shadow-[#f58c23]/30"
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
                  className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f58c23]/40 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f58c23]/15 border border-[#f58c23]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#f58c23]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white text-sm mb-1.5">{pillar.title}</p>
                    <p className="font-inter text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
