import { Users, ShieldCheck, Handshake, Star } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Professionalism',
    description: 'We bring skilled drivers and a service-oriented team to every engagement.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description: 'We prioritize the safety and health of our drivers and every passenger.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'We operate with honesty, sincerity, fairness, and trustworthiness.',
  },
  {
    icon: Star,
    title: 'Reliability',
    description: 'We are committed to reliable, quality transport solutions, every time.',
  },
]

export default function WhyUsValues() {
  return (
    <section className="py-20" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="eyebrow-dash text-[#00193c] mb-4">
            What We Stand For
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance">
            Our Core <span className="text-[#d4a53a]">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <div
                key={i}
                className="group flex flex-col items-center text-center gap-4 bg-[#f5f5f5]/5 hover:bg-[#f5f5f5]/10 border border-white/10 hover:border-[#d4a53a]/40 rounded-2xl p-8 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d4a53a]/15 group-hover:bg-[#d4a53a] flex items-center justify-center transition-colors duration-200">
                  <Icon
                    size={26}
                    className="text-[#d4a53a] group-hover:text-white transition-colors duration-200"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">
                    {value.description}
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
