import { Users } from 'lucide-react'

const board = [
  { name: 'Larry N. Gnotob', role: 'Board Chairperson', initial: 'LG' },
  { name: 'Orlando D. Ostol', role: 'Vice Chairperson', initial: 'OO' },
  { name: 'Anthony Forones Guzon', role: 'Board Member', initial: 'AG' },
  { name: 'Edmar Reginaldo', role: 'Board Member', initial: 'ER' },
  { name: 'Kernell Sumait', role: 'Board Member', initial: 'KS' },
]

export default function LeadershipBoard() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="lg:w-80 flex-shrink-0">
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              Governance
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Board of <span className="text-[#d4a53a]">Directors</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              JTTC is guided by its Board of Directors, who provide direction and oversight
              for the cooperative&apos;s operations and long-term growth.
            </p>
          </div>

          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {board.map((member, index) => (
              <div
                key={member.name}
                className="flex items-center gap-4 bg-[#f5f5f5] rounded-2xl px-5 py-4 border border-[#f5f5f5] shadow-sm hover:border-[#d4a53a]/40 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-heading text-white text-sm"
                  style={{ background: index === 0 ? '#d4a53a' : '#00193c' }}
                >
                  {member.initial}
                </div>
                <div>
                  <p className="font-heading text-[#383838] text-sm leading-tight">
                    {member.name}
                  </p>
                  <p className="font-inter text-[#6b6b6b] text-xs mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 bg-[#d4a53a]/8 rounded-2xl px-5 py-4 border border-[#d4a53a]/20 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 rounded-full bg-[#d4a53a]/20 flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-[#d4a53a]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-heading text-[#383838] text-sm leading-tight">
                  5 Board Members
                </p>
                <p className="font-inter text-[#6b6b6b] text-xs mt-0.5">
                  Providing governance &amp; direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
