import { Crown, UserCheck, FileText, Wallet, Briefcase } from 'lucide-react'

const officers = [
  {
    role: 'Chairperson',
    name: 'Larry N. Gnotob',
    icon: Crown,
    highlight: false,
  },
  {
    role: 'Vice Chairperson',
    name: 'Orlando D. Ostol',
    icon: Crown,
    highlight: false,
  },
  {
    role: 'Secretary',
    name: 'Araceli C. Evangelista',
    icon: FileText,
    highlight: false,
  },
  {
    role: 'Treasurer',
    name: 'Marilou S. Aniban',
    icon: Wallet,
    highlight: false,
  },
  {
    role: 'Treasurer',
    name: 'Angel Reginaldo',
    icon: Wallet,
    highlight: false,
  },
  {
    role: 'General Manager',
    name: 'Ghary Nalupa',
    icon: Briefcase,
    highlight: false,
  },
]

export default function LeadershipOfficers() {
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
            Key Personnel
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Key Cooperative <span className="text-[#d4a53a]">Officers</span>
          </h2>
          <p className="font-inter text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            The cooperative is supported by officers and personnel who oversee administration,
            finance, governance, and daily operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {officers.map((officer) => {
            const Icon = officer.icon
            return (
              <div
                key={`${officer.role}-${officer.name}`}
                className={`relative rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 ${
                  officer.highlight
                    ? 'bg-[#d4a53a] border-[#d4a53a] shadow-xl shadow-[#d4a53a]/25'
                    : 'bg-[#f5f5f5]/5 border-white/10 hover:border-[#d4a53a]/40'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    officer.highlight ? 'bg-[#f5f5f5]/20' : 'bg-[#d4a53a]/15'
                  }`}
                >
                  <Icon
                    size={22}
                    className={officer.highlight ? 'text-white' : 'text-[#d4a53a]'}
                    strokeWidth={1.8}
                  />
                </div>
                <p
                  className={`font-inter text-xs font-semibold uppercase tracking-widest mb-2 ${
                    officer.highlight ? 'text-white/70' : 'text-[#d4a53a]'
                  }`}
                >
                  {officer.role}
                </p>
                <p
                  className={`font-heading text-lg leading-tight ${
                    officer.highlight ? 'text-white' : 'text-white'
                  }`}
                >
                  {officer.name}
                </p>
              </div>
            )
          })}
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
