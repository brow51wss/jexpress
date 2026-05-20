import {
  UserCheck,
  ShieldCheck,
  Handshake,
  Star,
  Sliders,
  Bus,
  BadgeCheck,
} from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Professional Drivers and Capable Team',
    description:
      'We have professional drivers and a team committed to delivering dependable service. Our organization is built around serving clients with care, responsibility, and professionalism in every engagement.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Commitment to Safety',
    description:
      'Safety is one of our highest priorities. JTTC is committed to maintaining high standards of safety and health for drivers, clients, and passengers in all transport operations.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Integrity in Every Engagement',
    description:
      'Integrity is at the core of how we do business. We value honesty, sincerity, trustworthiness, fairness, transparency, and openness in all of our operations and client relationships.',
  },
  {
    icon: Star,
    number: '04',
    title: 'Quality-Driven Service',
    description:
      'We are committed to delivering reliable and quality work. JTTC aims to achieve high standards through total quality service and continuous improvement in the way we support our clients.',
  },
  {
    icon: Sliders,
    number: '05',
    title: 'Flexible Transport Solutions',
    description:
      'Our services support a wide range of needs, including tourist transport, shuttle services, and additional transport requirements. With multiple vehicle types available, we are equipped to respond to different client requests.',
  },
  {
    icon: Bus,
    number: '06',
    title: 'Capable Fleet and Resources',
    description:
      'Our equipment resources include Toyota GL Grandia units, Toyota Commuter units, Nissan Commuter NV350 units, and additional buses, SUVs, Coasters, and sedans upon request. This gives us the flexibility to support different trip sizes and transport requirements.',
  },
  {
    icon: BadgeCheck,
    number: '07',
    title: 'Registered and Compliant Operations',
    description:
      'JTTC maintains important registrations, licenses, certifications, and permits — including recognition from the Cooperative Development Authority, Office of Transportation Cooperative, BIR registration, municipal permit, and PhilGEPS. Our vans also carry LTFRB franchise authorization, meeting the same compliance standards required by government agencies such as DAR and OCD, and those followed by large companies and professional shuttle service providers.',
  },
]

export default function WhyUsReasons() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="eyebrow-dash text-[#00193c] mb-4">
            Our Strengths
          </span>
          <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance">
            What Sets JTTC{' '}
            <span className="text-[#d4a53a]">Apart</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.slice(0, 6).map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.number}
                className="group flex flex-col gap-5 bg-[#f5f5f5] border border-[#f5f5f5] hover:border-[#d4a53a]/40 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#d4a53a]/10 group-hover:bg-[#d4a53a] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Icon
                      size={22}
                      className="text-[#d4a53a] group-hover:text-white transition-colors duration-200"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="font-stat text-[#d4a53a]/20 text-3xl leading-none">
                    {reason.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-[#383838] leading-snug mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6">
          {reasons.slice(6).map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.number}
                className="group flex flex-col sm:flex-row items-start gap-5 bg-[#f5f5f5] border border-[#f5f5f5] hover:border-[#d4a53a]/40 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a53a]/10 group-hover:bg-[#d4a53a] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Icon
                    size={22}
                    className="text-[#d4a53a] group-hover:text-white transition-colors duration-200"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-stat text-[#d4a53a]/30 text-sm">
                      {reason.number}
                    </span>
                    <h3 className="font-heading text-[#383838] leading-snug">
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
    </section>
  )
}
