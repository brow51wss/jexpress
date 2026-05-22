import { ShieldCheck, ClipboardList, Users } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Responsible Governance',
    description:
      'Our board and officers ensure that all cooperative decisions are made with accountability, integrity, and the interests of members and clients in mind.',
  },
  {
    icon: ClipboardList,
    title: 'Structured Operations',
    description:
      'Clear roles across administration, finance, and service delivery help JTTC maintain consistency and professionalism in every engagement.',
  },
  {
    icon: Users,
    title: 'Committee Oversight',
    description:
      'Dedicated committees for audit, ethics, elections, and development provide additional layers of transparency and organizational health.',
  },
]

export default function LeadershipTrust() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Trust &amp; Accountability
          </span>
          <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Organized Leadership.{' '}
            <span className="text-[#d4a53a]">Responsible Operations.</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-2xl mx-auto">
            Our leadership and organizational framework reflects JTTC&apos;s commitment to
            accountability, structure, and dependable service management. With dedicated officers,
            committees, and operational support roles, we work together to serve clients and
            stakeholders with professionalism and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="text-center bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] hover:border-[#d4a53a]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d4a53a]/20 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-[#d4a53a]" strokeWidth={1.8} />
                </div>
                <h3 className="font-heading text-[#383838] mb-3">
                  {pillar.title}
                </h3>
                <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
