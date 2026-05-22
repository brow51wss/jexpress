import { CheckCircle } from 'lucide-react'

const vehicles = [
  { name: 'Toyota GL Grandia', qty: '5 Units' },
  { name: 'Toyota Commuter', qty: '10 Units' },
  { name: 'Nissan Commuter NV350', qty: '13 Units' },
  { name: 'Buses, SUVs, Coasters & Sedans', qty: 'Upon Request' },
]

export default function ProfileFleet() {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      {/* Top wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-7">
            <div>
              <span className="eyebrow-dash text-[#d4a53a] mb-4">
                Fleet &amp; Equipment
              </span>
              <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Fleet and Equipment <span className="text-[#d4a53a]">Resources</span>
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
                  className="flex items-center gap-4 bg-[#f5f5f5]/5 border border-white/10 rounded-xl px-5 py-4 hover:border-[#d4a53a]/40 transition-colors duration-200"
                >
                  <CheckCircle size={20} className="text-[#d4a53a] flex-shrink-0" strokeWidth={2} />
                  <span className="font-heading text-white text-sm flex-1">{v.name}</span>
                  <span className="inline-block bg-[#d4a53a]/20 text-[#d4a53a] font-inter font-semibold text-[11px] px-3 py-1 rounded-full flex-shrink-0">
                    {v.qty}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/branding/NAIA.webp"
              alt="NAIA airport transport operations"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
      {/* Bottom wave divider */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
