import { Shield, Users, Star, CheckCircle, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Professional and Dependable Drivers',
    desc: 'Our drivers are experienced, licensed professionals committed to responsible and dependable service on every trip.',
  },
  {
    icon: Shield,
    title: 'Commitment to Safety and Health',
    desc: 'We maintain high standards of safety and health for both our drivers and passengers across all transport operations.',
  },
  {
    icon: Star,
    title: 'Reliable and Quality Transport Service',
    desc: 'JTTC is committed to delivering quality service and reliable transport you can count on for every engagement.',
  },
  {
    icon: CheckCircle,
    title: 'Flexible Vehicle Options',
    desc: 'With multiple vehicle types in our fleet, we can support different trip sizes and transport requirements for varied client needs.',
  },
  {
    icon: Handshake,
    title: 'Integrity, Transparency, and Professionalism',
    desc: 'We operate with honesty and openness in every client relationship, delivering professional service from inquiry to completion.',
  },
]

export default function BookWhy() {
  return (
    <section className="py-20 bg-[#383838]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Our Commitment
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Why Book <span className="text-[#d4a53a]">With JTTC</span>
          </h2>
          <p className="font-inter text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            When you book with JTTC, you are partnering with a cooperative that values safety,
            service quality, and integrity in every transport engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            const isLast = i === reasons.length - 1
            const isSecondToLast = i === reasons.length - 2
            return (
              <div
                key={r.title}
                className={`bg-[#f5f5f5]/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 hover:bg-[#f5f5f5]/10 hover:border-[#d4a53a]/40 transition-all duration-200 ${
                  isLast && reasons.length % 3 !== 0
                    ? 'sm:col-span-2 lg:col-span-1'
                    : ''
                } ${
                  isSecondToLast && reasons.length % 3 === 2
                    ? ''
                    : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center shadow-lg shadow-[#d4a53a]/30 flex-shrink-0">
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">
                    {r.desc}
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
