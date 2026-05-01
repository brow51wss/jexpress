import Image from 'next/image'

const vehicles = [
  { name: 'Toyota GL Grandia', capacity: 'Up to 10 passengers', tag: '5 units available' },
  { name: 'Toyota Commuter', capacity: 'Up to 12 passengers', tag: '10 units available' },
  { name: 'Nissan Commuter NV350', capacity: 'Up to 14 passengers', tag: '13 units available' },
  { name: 'Bus', capacity: 'Large group transport', tag: 'Available upon request' },
  { name: 'SUV', capacity: 'Small group or executive', tag: 'Available upon request' },
  { name: 'Closed Van / Sedan', capacity: 'Logistics or compact needs', tag: 'Available upon request' },
]

export default function BookFleet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4 border-l-4 border-[#f58c23] pl-3">
              Our Fleet
            </span>
            <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Vehicles Ready to Support{' '}
              <span className="text-[#f58c23]">Your Requirements</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed mb-8">
              JTTC maintains equipment resources that include Toyota GL Grandia units, Toyota
              Commuter units, Nissan Commuter NV350 units, and additional buses, SUVs, closed
              vans, and sedans upon request. This allows us to support different transport
              requirements and group sizes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {vehicles.map((v) => (
                <div
                  key={v.name}
                  className="flex items-start gap-4 p-4 rounded-xl border border-[#e8e0d8] bg-[#fff8f0] hover:border-[#f58c23]/40 hover:shadow-sm transition-all duration-200"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f58c23] flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="font-sans font-bold text-[#383838] text-sm">{v.name}</p>
                    <p className="font-inter text-[#6b6b6b] text-xs mt-0.5">{v.capacity}</p>
                    <span className="inline-block mt-1.5 text-[10px] font-bold font-inter uppercase tracking-wide text-[#f58c23] bg-[#f58c23]/10 px-2.5 py-0.5 rounded-full">
                      {v.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg col-span-2">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                alt="Jexpress fleet parked and ready"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                alt="Jexpress transport vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
                alt="Jexpress commuter unit"
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
