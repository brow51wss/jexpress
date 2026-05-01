import { UserCheck, Star, ShieldCheck, Eye, Sliders } from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Professional & Dependable Drivers',
    description:
      'Our drivers are trained, licensed, and experienced — committed to safety, punctuality, and courteous service on every route.',
  },
  {
    icon: Star,
    title: 'Quality-Focused Transport Service',
    description:
      'We set a high bar for service quality across all our transport operations, ensuring consistent and reliable delivery every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Strong Commitment to Safety & Health',
    description:
      'From vehicle maintenance to driver wellness, we aspire to the highest standards of safety and health for all stakeholders.',
  },
  {
    icon: Eye,
    title: 'Integrity-Driven Operations',
    description:
      'We conduct all our operations with transparency, fairness, and openness — no hidden charges, no compromises on ethics.',
  },
  {
    icon: Sliders,
    title: 'Flexible Vehicle Options',
    description:
      'With a diverse fleet from vans to buses and sedans, we match the right vehicle to your specific transport requirements.',
  },
]

export default function ServicesWhy() {
  return (
    <section className="py-24" style={{ background: '#fdf8f4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Why JTTC
            </span>
            <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Why Clients{' '}
              <span className="text-[#f58c23]">Choose Us</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              We are built on a foundation of trust, professionalism, and genuine commitment
              to the safety and satisfaction of every client and passenger we serve.
            </p>
            <div className="mt-8 h-1 w-16 rounded-full" style={{ background: '#f58c23' }} />
          </div>

          <div className="flex flex-col gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="flex items-start gap-5 bg-white border border-[#e8e0d8] rounded-2xl p-7 group hover:border-[#f58c23]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f58c23]/10 group-hover:bg-[#f58c23] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Icon size={20} className="text-[#f58c23] group-hover:text-white transition-colors duration-200" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#f58c23]/40 font-black text-sm font-sans">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-sans font-bold text-[#383838] text-base leading-tight">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                      {reason.description}
                    </p>
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
