import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { createAdminClient } from '@/lib/supabase'
import { unstable_cache } from 'next/cache'

const getServiceNames = unstable_cache(
  async (): Promise<string[]> => {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('services')
      .select('name')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    return data?.map((s: { name: string }) => s.name) ?? []
  },
  ['service-names'],
  { tags: ['services'], revalidate: false }
)

export default async function ProfileOverview() {
  const services = await getServiceNames()
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="flex flex-col gap-6">
            <span className="eyebrow-dash text-[#00193c]">
              Company Overview
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance">
              Who We Are &amp; What{' '}
              <span className="text-[#d4a53a]">We Do</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              JTTC was organized to provide public tourist transport services primarily to members
              and the commuting public. The cooperative is committed to delivering reliable and
              quality work while maintaining transparency, openness, fairness, and high standards
              of safety and health for drivers, clients, and passengers.
            </p>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              JTTC has a clear focus on serving the growing needs of companies, industries,
              hospitals, tourism-related clients, and other emerging markets
              that require reliable transport shuttle services nationwide.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] shadow-sm">
              <h3 className="font-heading text-[#383838] uppercase tracking-wider mb-5">
                Areas of Service
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#d4a53a] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-inter text-[#6b6b6b] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#383838] rounded-3xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="eyebrow-dash text-[#00193c]">
                Our Focus
              </span>
              <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance">
                Why We Are <span className="text-[#d4a53a]">Trusted</span>
              </h2>
              <p className="font-inter text-white/70 text-base leading-relaxed">
                Our organization is built on professionalism, integrity, sincerity,
                trustworthiness, quality service, and a strong commitment to safety. We aim to
                provide dependable transport support backed by capable personnel, professional
                drivers, and service-driven operations.
              </p>
              <p className="font-inter text-white/70 text-base leading-relaxed">
                One of the goals of JTTC is to help improve the quality of life of its members
                and contribute to inclusive growth, enterprise development, and employment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ['Professionalism', 'Skilled drivers and a service-oriented team'],
                ['Integrity', 'Honesty, sincerity, and trustworthiness in all dealings'],
                ['Safety', 'Highest standards of safety for drivers and passengers'],
                ['Reliability', 'Dependable, quality transport solutions nationwide'],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-[#f5f5f5]/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4a53a]/40 transition-colors duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-[#d4a53a] mb-4" />
                  <p className="font-heading text-white text-sm mb-2">{title}</p>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
