import Image from 'next/image'
import {
  RiShieldCheckLine,
  RiHandHeartLine,
  RiUserSmileLine,
  RiTimeLine,
  RiAwardLine,
  RiMapPinUserLine,
} from 'react-icons/ri'

const features = [
  {
    icon: RiUserSmileLine,
    title: 'Professional & Experienced Drivers',
    description:
      'Our drivers are trained, licensed, and experienced professionals who prioritize your safety and comfort on every route.',
  },
  {
    icon: RiAwardLine,
    title: 'Reliable & Quality Transport',
    description:
      'We are committed to being the best source of transport services — consistent, punctual, and quality-driven on every engagement.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Safety & Health Commitment',
    description:
      'We aspire to the highest standards of safety and health for both our drivers and passengers on every journey.',
  },
  {
    icon: RiHandHeartLine,
    title: 'Transparent & Integrity-Driven',
    description:
      'We conduct all our operations with full transparency, openness, and fairness — no hidden charges, no compromises.',
  },
  {
    icon: RiMapPinUserLine,
    title: 'Flexible Transport Solutions',
    description:
      'Whether for tourism, logistics, hospitals, or organizations — we tailor our transport solutions to fit the exact needs of each client.',
  },
  {
    icon: RiTimeLine,
    title: 'Nationwide Dependability',
    description:
      'From Marikina City to destinations nationwide, JTTC delivers dependable transport you can count on every single time.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-[#383838] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top right, #f58c23 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at bottom left, #fed16c 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#fed16c] text-xs font-inter font-bold uppercase tracking-widest mb-4 border border-[#fed16c]/30 bg-[#fed16c]/10 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 text-balance">
            The Jexpress{' '}
            <span className="text-[#f58c23]">Difference</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto font-inter">
            We go beyond just getting you from point A to point B. Every journey with
            Jexpress is backed by our commitment to excellence and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#f58c23]/40 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f58c23]/15 border border-[#f58c23]/20 flex items-center justify-center group-hover:bg-[#f58c23] group-hover:border-[#f58c23] transition-all duration-300">
                <feature.icon
                  size={22}
                  className="text-[#f58c23] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-white font-bold text-lg">{feature.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          <div className="relative rounded-2xl overflow-hidden min-h-72 sm:min-h-80 lg:min-h-64">
            <Image
              src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
              alt="Jexpress fleet"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, #1a1a1a 0%, transparent 65%)' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-10">
              <p className="text-[#fed16c] text-xs font-inter font-bold uppercase tracking-widest mb-3">
                Our Fleet
              </p>
              <h3 className="text-white text-2xl font-black leading-tight mb-5">
                Well-Maintained Vehicles
                <br />for Every Journey
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  '5 Toyota GL Grandia units',
                  '10 Toyota Commuter units',
                  '13 Nissan Commuter NV350 units',
                  'Buses, SUVs, Coasters & sedans available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f58c23] flex-shrink-0" />
                    <span className="text-white/80 text-sm font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#f58c23] rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="text-white/80 text-xs font-inter font-bold uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <blockquote className="text-white text-xl lg:text-2xl font-bold leading-snug mb-6">
                &ldquo;To transport passengers safely and comfortably to their destinations
                with reliable, professional, and courteous service.&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Araceli Dumlao</p>
                <p className="text-white/70 font-inter text-xs">
                  Owner, Jexpress Tourist Transport Cooperative
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <span className="inline-block text-[#fed16c] text-xs font-inter font-bold uppercase tracking-widest mb-2 border border-[#fed16c]/30 bg-[#fed16c]/10 px-4 py-1.5 rounded-full">
                Registered &amp; Compliant
              </span>
              <h3 className="text-white text-2xl font-black leading-tight mt-3">
                Fully Accredited &amp;{' '}
                <span className="text-[#f58c23]">Government-Verified</span>
              </h3>
            </div>
            <div className="w-px h-16 bg-white/10 hidden lg:block flex-shrink-0" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 flex-1">
              {[
                'Cooperative Development Authority',
                'Office of Transportation Cooperative',
                'BIR Certificate of Registration',
                'Municipal Business Permit',
                'PhilGEPS Registration',
                'Land Bank — Bank Reference',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <RiShieldCheckLine size={16} className="text-[#f58c23] flex-shrink-0" />
                  <span className="text-white/70 text-sm font-inter">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
