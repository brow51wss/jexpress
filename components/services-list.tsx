import { Bus, Users, MapPin, Wrench, Truck, Shield, Clock, Package, Globe, Building, Star, Headphones } from 'lucide-react'
import { createAdminClient } from '@/lib/supabase'
import { unstable_cache } from 'next/cache'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Bus, Users, MapPin, Wrench, Truck, Shield, Clock, Package, Globe, Building, Star, Headphones,
}

interface ServiceContent {
  section_key: string
  description: string
  tags: string[]
}

interface Service {
  id: string
  slug: string
  name: string
  price: number | null
  price_label: 'flat' | 'from'
  icon: string
  is_active: boolean
  service_content: ServiceContent[]
}

const getActiveServices = unstable_cache(
  async (): Promise<Service[]> => {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('services')
      .select('id, slug, name, price, price_label, icon, is_active, service_content(section_key, description, tags)')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    return (data as Service[]) ?? []
  },
  ['services-list'],
  { tags: ['services'], revalidate: false }
)

function formatPrice(price: number | null, label: 'flat' | 'from'): string | null {
  if (price === null) return null
  const formatted = `₱${Number(price).toLocaleString()}`
  return label === 'from' ? `From ${formatted}` : formatted
}

export default async function ServicesList() {
  const services = await getActiveServices()

  return (
    <section className="py-24" style={{ background: '#fff' }} id="services-list">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Full Service Range
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            Everything We <span className="text-[#f58c23]">Offer</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Bus
            const isEven = index % 2 === 1
            const content = service.service_content.find((c) => c.section_key === 'services_page')
            const priceDisplay = formatPrice(service.price, service.price_label)
            const tags: string[] = Array.isArray(content?.tags) ? content.tags : []
            const number = String(index + 1).padStart(2, '0')

            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-[1fr_auto_1fr] gap-0 rounded-2xl overflow-hidden border border-[#e8e0d8] ${isEven ? 'bg-[#fdf8f4]' : 'bg-white'}`}
              >
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[#f58c23]/30 font-black text-5xl leading-none font-sans select-none">
                      {number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#f58c23]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#f58c23]" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-sans font-black text-[#383838] text-xl sm:text-2xl leading-tight">
                      {service.name}
                    </h3>
                    {priceDisplay && (
                      <span className="flex-shrink-0 text-[#f58c23] font-inter font-bold text-base whitespace-nowrap mt-1">
                        {priceDisplay}
                      </span>
                    )}
                  </div>
                  {content?.description && (
                    <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                      {content.description}
                    </p>
                  )}
                </div>

                <div className="hidden lg:block w-px bg-[#e8e0d8] my-8" />

                <div className="flex flex-col justify-center p-8 lg:p-10 border-t lg:border-t-0 border-[#e8e0d8]">
                  {tags.length > 0 && (
                    <>
                      <p className="font-inter text-[#383838] text-xs font-bold uppercase tracking-widest mb-5">
                        Key Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-[#f58c23]/10 text-[#c97818] font-inter font-semibold text-xs px-4 py-2 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
