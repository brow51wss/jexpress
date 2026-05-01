import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bus } from 'lucide-react'

const fleet = [
  { label: 'Toyota GL Grandia', count: '5 units' },
  { label: 'Toyota Commuter', count: '10 units' },
  { label: 'Nissan Commuter NV350', count: '13 units' },
  { label: 'Buses, SUVs, Closed Vans & Sedans', count: 'Upon request' },
]

export default function AboutTeam() {
  return (
    <section className="bg-[#383838]">

      {/* Leadership Intro */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Leadership
            </span>
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Supported by an{' '}
              <span className="text-[#fed16c]">Organized Leadership Structure</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed mb-8">
              JTTC is backed by a board of directors, key cooperative personnel, and an
              organizational structure that supports responsible operations, administration,
              finance, and service delivery. Our leadership is committed to ensuring quality,
              accountability, and integrity across all areas of our operations.
            </p>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#f58c23]/30"
            >
              View Leadership Structure
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
              alt="Jexpress cooperative leadership and operations"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, #38383860 0%, transparent 60%)' }}
            />
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl col-span-2">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                alt="Jexpress fleet vehicles"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
                alt="Jexpress commuter vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
                alt="Jexpress transport service"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Our Fleet
            </span>
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Ready to Serve With the{' '}
              <span className="text-[#fed16c]">Right Vehicle Options</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed mb-8">
              Our equipment resources allow us to support a variety of transport needs
              depending on client requirements and group size.
            </p>
            <ul className="flex flex-col gap-4">
              {fleet.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Bus size={18} className="text-[#f58c23] flex-shrink-0" strokeWidth={1.8} />
                    <span className="font-inter text-white/80 text-sm">{item.label}</span>
                  </div>
                  <span className="font-inter text-[#fed16c] text-xs font-semibold uppercase tracking-wide flex-shrink-0">
                    {item.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
