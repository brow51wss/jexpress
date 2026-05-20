import { Search, Vote, Scale, Heart } from 'lucide-react'

const committees = [
  {
    name: 'Audit Committee',
    icon: Search,
    members: ['Maricel Escobido', 'Rolem Quico'],
    description: 'Responsible for financial transparency and accountability within the cooperative.',
  },
  {
    name: 'Election Committee',
    icon: Vote,
    members: ['Alejandro Dela Cruz'],
    description: 'Oversees cooperative elections to ensure fair and proper conduct.',
  },
  {
    name: 'Ethics Committee',
    icon: Scale,
    members: ['Juan Librao'],
    description: 'Upholds the ethical standards, conduct, and integrity of cooperative members.',
  },
  {
    name: 'Gender & Development Committee',
    icon: Heart,
    members: ['Edmar Reginaldo', 'Eden Reginaldo Baga', 'Jorlan Lorenzo Gumarac'],
    description: 'Supports gender-responsive programs and inclusive cooperative development.',
  },
]

export default function LeadershipCommittees() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="lg:w-80 flex-shrink-0">
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Governance Support
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Committees &amp; <span className="text-[#d4a53a]">Governance</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              JTTC&apos;s structure includes committees that support transparency, accountability,
              ethics, elections, and development within the cooperative.
            </p>
          </div>

          <div className="flex-1 grid sm:grid-cols-2 gap-5">
            {committees.map((committee) => {
              const Icon = committee.icon
              return (
                <div
                  key={committee.name}
                  className="bg-[#f5f5f5] rounded-2xl p-7 border border-[#f5f5f5] hover:border-[#d4a53a]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#d4a53a]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-heading text-[#383838] mb-2">
                    {committee.name}
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed mb-4">
                    {committee.description}
                  </p>
                  <div className="border-t border-[#f5f5f5] pt-4">
                    <p className="font-inter text-[#383838] text-xs font-semibold uppercase tracking-widest mb-2">
                      Members
                    </p>
                    <ul className="flex flex-col gap-1">
                      {committee.members.map((member) => (
                        <li key={member} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a53a] flex-shrink-0" />
                          <span className="font-inter text-[#6b6b6b] text-sm">{member}</span>
                        </li>
                      ))}
                    </ul>
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
