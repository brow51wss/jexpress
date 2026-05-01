import { Crown, UserCheck, FileText, Wallet, Briefcase } from 'lucide-react'

const officers = [
  {
    role: 'Chairperson',
    name: 'Larry N. Gnotob',
    icon: Crown,
    highlight: true,
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
    highlight: true,
  },
]

export default function LeadershipOfficers() {
  return (
    <section className="py-24" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Key Personnel
          </span>
          <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Key Cooperative <span className="text-[#fed16c]">Officers</span>
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
                    ? 'bg-[#f58c23] border-[#f58c23] shadow-xl shadow-[#f58c23]/25'
                    : 'bg-white/5 border-white/10 hover:border-[#f58c23]/40'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    officer.highlight ? 'bg-white/20' : 'bg-[#f58c23]/15'
                  }`}
                >
                  <Icon
                    size={22}
                    className={officer.highlight ? 'text-white' : 'text-[#f58c23]'}
                    strokeWidth={1.8}
                  />
                </div>
                <p
                  className={`font-inter text-xs font-semibold uppercase tracking-widest mb-2 ${
                    officer.highlight ? 'text-white/70' : 'text-[#f58c23]'
                  }`}
                >
                  {officer.role}
                </p>
                <p
                  className={`font-sans font-black text-lg leading-tight ${
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
    </section>
  )
}
