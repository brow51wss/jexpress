import { Users } from 'lucide-react'

const board = [
  { name: 'Larry N. Gnotob', initial: 'LG' },
  { name: 'Orlando D. Ostol', initial: 'OO' },
  { name: 'Anthony Forones Guzon', initial: 'AG' },
  { name: 'Edmar Reginaldo', initial: 'ER' },
  { name: 'Kernell Sumait', initial: 'KS' },
  { name: 'Mac Robert Sicat', initial: 'MS' },
  { name: 'Melchor Antonio', initial: 'MA' },
]

export default function LeadershipBoard() {
  return (
    <section className="py-24" style={{ background: '#f9f7f4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="lg:w-80 flex-shrink-0">
            <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Governance
            </span>
            <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Board of <span className="text-[#f58c23]">Directors</span>
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
                className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-[#e8e3dc] shadow-sm hover:border-[#f58c23]/40 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                  style={{ background: index === 0 ? '#f58c23' : '#383838' }}
                >
                  {member.initial}
                </div>
                <div>
                  <p className="font-sans font-bold text-[#383838] text-sm leading-tight">
                    {member.name}
                  </p>
                  <p className="font-inter text-[#6b6b6b] text-xs mt-0.5">
                    {index === 0 ? 'Board Chairperson' : 'Board Member'}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 bg-[#f58c23]/8 rounded-2xl px-5 py-4 border border-[#f58c23]/20 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 rounded-full bg-[#f58c23]/20 flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-[#f58c23]" strokeWidth={2} />
              </div>
              <div>
                <p className="font-sans font-bold text-[#383838] text-sm leading-tight">
                  7 Board Members
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
