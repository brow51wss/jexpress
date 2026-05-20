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
  ['service-names-about'],
  { tags: ['services'], revalidate: false }
)

export default async function AboutStory() {
  const whatWeDo = await getServiceNames()
  return (
    <section className="bg-[#f5f5f5]">

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#f5f5f5]">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Introduction
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              A Cooperative Committed to{' '}
              <span className="text-[#d4a53a]">Reliable, Quality Service</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              JTTC was organized to provide public tourist transport services primarily to members
              and the commuting public. As a cooperative, we are committed to delivering reliable
              and quality work while maintaining transparency, openness, fairness, and high
              standards of safety and health for drivers, clients, and passengers.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#f5f5f5]">
            <Image
              src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
              alt="Jexpress fleet on duty"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#f5f5f5]">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-3">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#f5f5f5] col-span-2">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
                alt="Jexpress transport vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#f5f5f5]">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                alt="Jexpress commuter transport"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#f5f5f5]">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                alt="Jexpress passenger service"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Who We Are
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              A Service-Driven Organization with a{' '}
              <span className="text-[#d4a53a]">Nationwide Focus</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              Jexpress Tourist Transport Cooperative is a service-driven organization with a
              clear focus on the growing opportunities in transport and shuttle services,
              and related support services. We aim to be a trusted source of transport solutions
              nationwide for emerging market companies, industries, hospitals,
              and tourism-related clients.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do + Our Commitment */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14">

          <div>
            <span className="eyebrow-dash text-[#00193c] mb-4">
              What We Do
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-6">
              Transport &amp; Allied{' '}
              <span className="text-[#d4a53a]">Services</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed mb-8">
              JTTC engages in transport and allied services to meet a wide range of client
              requirements across different industries and sectors.
            </p>
            <ul className="flex flex-col gap-3">
              {whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#d4a53a] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="font-inter text-[#6b6b6b] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4">
                Our Commitment
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Bound to Achieve{' '}
                <span className="text-[#d4a53a]">High Standards</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                We are bound to achieve high standards through total quality service and
                uncompromised innovation. Our commitment is not only to dependable operations,
                but also to building trust through honest business practices, service excellence,
                and a strong focus on client and passenger safety.
              </p>
            </div>

            <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl p-8">
              <p className="text-[#d4a53a] font-inter text-xs font-semibold uppercase tracking-widest mb-4">
                Our Broader Purpose
              </p>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                One of the goals of JTTC is to help improve the quality of life of its members
                while contributing to inclusive growth, enterprise development, and employment.
                As a cooperative, we value service that benefits both our clients and our community.
              </p>
            </div>

            <div className="bg-[#383838] rounded-2xl p-8">
              <p className="text-[#d4a53a] font-inter text-xs font-semibold uppercase tracking-widest mb-4">
                Regulatory Compliance
              </p>
              <p className="font-inter text-white/70 text-base leading-relaxed">
                Our vans comply with LTFRB franchising requirements — meeting the same standards
                required by government agencies such as DAR and OCD, as well as those followed
                by large companies and professional shuttle service providers nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
