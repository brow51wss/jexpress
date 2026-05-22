import { ChevronDown } from 'lucide-react'

const orgLevels = [
  {
    label: 'General Assembly',
    description: 'All cooperative members',
    color: '#d4a53a',
    textColor: '#f5f5f5',
  },
  {
    label: 'Chairperson / Vice Chairperson',
    description: 'Executive leadership',
    color: '#f5f5f5',
    textColor: '#383838',
  },
  {
    label: 'Board of Directors',
    description: '7 board members providing governance and oversight',
    color: '#4a4a4a',
    textColor: '#f5f5f5',
  },
  {
    label: 'Secretary · Treasurer · General Manager',
    description: 'Core cooperative officers',
    color: '#5c5c5c',
    textColor: '#f5f5f5',
  },
  {
    label: 'Committees & Operational Support Team',
    description: 'Audit · Election · Ethics · Gender & Development · Operations',
    color: '#d4a53a',
    textColor: '#383838',
  },
]

export default function LeadershipOrgChart() {
  return (
    <section className="relative bg-brand-blue">
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Structure
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
            How Our <span className="text-[#d4a53a]">Organization Works</span>
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
                  className="font-heading text-base sm:text-lg leading-tight"
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
                  <div className="w-px h-4 bg-[#f5f5f5]/20" />
                  <ChevronDown size={16} className="text-[#d4a53a]" strokeWidth={2.5} />
                  <div className="w-px h-4 bg-[#f5f5f5]/20" />
                </div>
              )}
            </div>
          ))}
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
