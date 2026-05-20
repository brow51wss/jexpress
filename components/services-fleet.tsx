import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const vehicles = [
  { name: 'Toyota GL Grandia', qty: '5 Units', desc: 'Premium passenger van for small to medium groups' },
  { name: 'Toyota Commuter', qty: '10 Units', desc: 'Versatile commuter van for regular shuttle operations' },
  { name: 'Nissan Commuter NV350', qty: '13 Units', desc: 'High-capacity commuter van for larger group transport' },
  { name: 'Buses, SUVs, Coasters & Sedans', qty: 'Upon Request', desc: 'Additional fleet options available based on client requirements' },
]

export default function ServicesFleet() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: '#383838' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-7">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4">
                Our Fleet
              </span>
              <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Vehicles Ready to Support{' '}
                <span className="text-[#d4a53a]">Your Requirements</span>
              </h2>
              <p className="font-inter text-white/60 text-base leading-relaxed">
                JTTC maintains a capable fleet to accommodate a variety of transport needs depending
                on client requirements and group size. All vehicles are well-maintained and
                operated by professional, experienced drivers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="flex items-start gap-4 bg-[#f5f5f5]/5 border border-white/10 rounded-xl p-5"
                >
                  <CheckCircle size={20} className="text-[#d4a53a] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-heading text-white text-sm">
                        {vehicle.name}
                      </span>
                      <span className="inline-block bg-[#d4a53a]/20 text-[#d4a53a] font-inter font-semibold text-[11px] px-2.5 py-0.5 rounded-full">
                        {vehicle.qty}
                      </span>
                    </div>
                    <p className="font-inter text-white/50 text-sm leading-snug">
                      {vehicle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-inter text-white/40 text-sm leading-relaxed border-l-2 border-[#d4a53a]/50 pl-4">
              This allows us to support a variety of transport needs depending on client
              requirements and group size.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden col-span-2">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                alt="Jexpress fleet vehicles"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #383838 0%, transparent 50%)' }} />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
                alt="Jexpress transport vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
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
