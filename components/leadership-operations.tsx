import { BookOpen, Banknote, Link2, Settings } from 'lucide-react'

const roles = [
  {
    icon: BookOpen,
    role: 'Bookkeeper / Accountant',
    description: 'Manages financial records, accounting entries, and cooperative financial reporting.',
  },
  {
    icon: Banknote,
    role: 'Cashier',
    description: 'Handles cash flow, payments, and financial transactions for day-to-day operations.',
  },
  {
    icon: Link2,
    role: 'Liaison Officer',
    description: 'Coordinates communications and coordination between the cooperative and external parties.',
  },
  {
    icon: Settings,
    role: 'Operation Manager',
    description: 'Oversees operational activities, service coordination, and transport management.',
  },
]

export default function LeadershipOperations() {
  return (
    <section className="py-24" style={{ background: '#f9f7f4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Operational Support
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Administrative &amp; <span className="text-[#f58c23]">Operations Team</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-xl mx-auto">
            In addition to leadership and board oversight, JTTC&apos;s structure includes support
            roles that help manage records, accounting, coordination, cash handling, and operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.role}
                className="bg-white rounded-2xl p-6 border border-[#e8e3dc] shadow-sm hover:border-[#f58c23]/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#383838] flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#f58c23]" strokeWidth={1.8} />
                </div>
                <h3 className="font-sans font-black text-[#383838] text-sm mb-3">{item.role}</h3>
                <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
