import { ChevronDown } from 'lucide-react'

const orgLevels = [
  {
    label: 'General Assembly',
    description: 'All cooperative members',
    color: '#f58c23',
    textColor: '#ffffff',
  },
  {
    label: 'Chairperson / Vice Chairperson',
    description: 'Executive leadership',
    color: '#fff8f0',
    textColor: '#383838',
  },
  {
    label: 'Board of Directors',
    description: '7 board members providing governance and oversight',
    color: '#4a4a4a',
    textColor: '#ffffff',
  },
  {
    label: 'Secretary · Treasurer · General Manager',
    description: 'Core cooperative officers',
    color: '#5c5c5c',
    textColor: '#ffffff',
  },
  {
    label: 'Committees & Operational Support Team',
    description: 'Audit · Election · Ethics · Gender & Development · Operations',
    color: '#fed16c',
    textColor: '#383838',
  },
]

export default function LeadershipOrgChart() {
  return (
    <section className="py-24" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#fed16c] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Structure
          </span>
          <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
            How Our <span className="text-[#f58c23]">Organization Works</span>
          </h2>
          <p className="font-inter text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            JTTC&apos;s structure begins with the General Assembly and is supported by committees,
            officers, the Board of Directors, and management roles that work together to guide the
            cooperative and support service delivery.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center gap-0">
          {orgLevels.map((level, index) => (
            <div key={level.label} className="flex flex-col items-center w-full">
              <div
                className="w-full rounded-2xl px-7 py-5 text-center shadow-lg"
                style={{ background: level.color }}
              >
                <p
                  className="font-sans font-black text-base sm:text-lg leading-tight"
                  style={{ color: level.textColor }}
                >
                  {level.label}
                </p>
                <p
                  className="font-inter text-xs mt-1.5 leading-relaxed"
                  style={{ color: level.textColor, opacity: 0.75 }}
                >
                  {level.description}
                </p>
              </div>
              {index < orgLevels.length - 1 && (
                <div className="flex flex-col items-center py-2">
                  <div className="w-px h-4 bg-white/20" />
                  <ChevronDown size={16} className="text-[#f58c23]" strokeWidth={2.5} />
                  <div className="w-px h-4 bg-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
