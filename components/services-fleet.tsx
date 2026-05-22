import { CheckCircle } from 'lucide-react'

const vehicles = [
  { name: 'Toyota GL Grandia', qty: '5 Units', desc: 'Premium passenger van for small to medium groups' },
  { name: 'Toyota Commuter', qty: '10 Units', desc: 'Versatile commuter van for regular shuttle operations' },
  { name: 'Nissan Commuter NV350', qty: '13 Units', desc: 'High-capacity commuter van for larger group transport' },
  { name: 'Buses, SUVs, Coasters & Sedans', qty: 'Upon Request', desc: 'Additional fleet options available based on client requirements' },
]

export default function ServicesFleet() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/branding/van1.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundColor: '#00193c',
      }}
    >
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl flex flex-col gap-7">
            <div>
              <span className="eyebrow-dash text-[#d4a53a] mb-4">
                Our Fleet
              </span>
              <h2 className="font-heading text-brand-blue text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Vehicles Ready to Support{' '}
                <span className="text-[#d4a53a]">Your Requirements</span>
              </h2>
              <p className="font-inter text-brand-blue/60 text-base leading-relaxed">
                JTTC maintains a capable fleet to accommodate a variety of transport needs depending
                on client requirements and group size. All vehicles are well-maintained and
                operated by professional, experienced drivers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="flex items-start gap-4 bg-brand-blue/70 backdrop-blur-sm border border-white/30 rounded-xl p-5"
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

            <p className="font-inter text-white/80 text-sm leading-relaxed border-l-2 border-[#d4a53a]/70 pl-4">
              This allows us to support a variety of transport needs depending on client
              requirements and group size.
            </p>
        </div>
      </div>
      {/* Bottom wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
