import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const vehicles = [
  { name: 'Toyota GL Grandia', qty: '5 Units' },
  { name: 'Toyota Commuter', qty: '10 Units' },
  { name: 'Nissan Commuter NV350', qty: '13 Units' },
  { name: 'Buses, SUVs, Coasters & Sedans', qty: 'Upon Request' },
]

export default function ProfileFleet() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-7">
            <div>
              <span className="inline-block text-[#fed16c] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Fleet &amp; Equipment
              </span>
              <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Fleet and Equipment <span className="text-[#f58c23]">Resources</span>
              </h2>
              <p className="font-inter text-white/60 text-base leading-relaxed">
                JTTC maintains a capable fleet to support a variety of transport requirements
                depending on client needs and group size. All vehicles are well-maintained and
                operated by professional, experienced drivers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {vehicles.map((v) => (
                <div
                  key={v.name}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-[#f58c23]/40 transition-colors duration-200"
                >
                  <CheckCircle size={20} className="text-[#f58c23] flex-shrink-0" strokeWidth={2} />
                  <span className="font-sans font-bold text-white text-sm flex-1">{v.name}</span>
                  <span className="inline-block bg-[#f58c23]/20 text-[#fed16c] font-inter font-semibold text-[11px] px-3 py-1 rounded-full flex-shrink-0">
                    {v.qty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                alt="Jexpress fleet vehicles"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, #383838 0%, transparent 50%)' }}
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                alt="Jexpress transport vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
                alt="Jexpress commuter service"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
