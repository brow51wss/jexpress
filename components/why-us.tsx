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
      'Whether for tourism, hospitals, or organizations — we tailor our transport solutions to fit the exact needs of each client.',
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
    <section id="why-us" className="relative bg-brand-blue overflow-hidden">
      {/* Top wave divider — thick on left, tapers thin on right */}
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block relative z-10"
        style={{ height: 56 }}
        aria-hidden="true"
      >
        <path d="M0,0 L1440,0 L1440,22 C720,24 720,24 0,28 Z" fill="#f5f5f5" />
        <path d="M0,28 C720,24 720,24 1440,22 L1440,26 C720,44 720,44 0,48 Z" fill="#d4a53a" />
      </svg>
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top right, #d4a53a 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5"
        style={{
          background: 'radial-gradient(ellipse at bottom left, #d4a53a 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl text-white leading-tight mb-5 text-balance">
            The Jexpress{' '}
            <span className="text-[#d4a53a]">Difference</span>
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
              className="group bg-[#f5f5f5]/5 hover:bg-[#f5f5f5]/10 border border-white/10 hover:border-[#d4a53a]/40 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4a53a]/15 border border-[#d4a53a]/20 flex items-center justify-center group-hover:bg-[#d4a53a] group-hover:border-[#d4a53a] transition-all duration-300">
                <feature.icon
                  size={22}
                  className="text-[#d4a53a] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-heading text-white">{feature.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          <div className="relative rounded-2xl overflow-hidden min-h-72 sm:min-h-80 lg:min-h-64 bg-[#fefefe] flex flex-col justify-center p-8 lg:p-10">
              <p className="eyebrow-dash text-[#d4a53a] mb-3">
                Our Fleet
              </p>
              <h3 className="font-heading text-[#00193c] text-2xl leading-tight mb-5">
                Well-Maintained Vehicles
                <br />for Every Journey
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  '5 Toyota GL Grandia units',
                  '1 Toyota GL Grandia Tourer',
                  '1 Foton',
                  '10 Toyota Commuter units',
                  '13 Nissan Commuter NV350 units',
                  'Buses, SUVs, Coasters & sedans available (available upon request)',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a53a] flex-shrink-0" />
                    <span className="text-[#383838] text-sm font-inter">{item}</span>
                  </li>
                ))}
              </ul>
          </div>

          <div className="bg-[#d4a53a] rounded-2xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <p className="eyebrow-dash text-white/80 mb-4 [&::before]:bg-white">
                Our Mission
              </p>
              <blockquote className="font-heading text-white text-xl lg:text-2xl leading-snug mb-6">
                &ldquo;To transport passengers safely and comfortably to their destinations
                with reliable, professional, and courteous service.&rdquo;
              </blockquote>
            </div>
           
          </div>
        </div>

        <div className="bg-[#f5f5f5]/5 border border-white/10 rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <span className="eyebrow-dash text-[#d4a53a] mb-2">
                Registered &amp; Compliant
              </span>
              <h3 className="font-heading text-white text-2xl leading-tight mt-3">
                Fully Accredited &amp;{' '}
                <span className="text-[#d4a53a]">Government-Verified</span>
              </h3>
            </div>
            <div className="w-px h-16 bg-[#f5f5f5]/10 hidden lg:block flex-shrink-0" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 flex-1">
              {[
                'Cooperative Development Authority',
                'Office of Transportation Cooperative',
                'LTFRB Franchise Authorization',
                'BIR Certificate of Registration',
                'Municipal Business Permit',
                'PhilGEPS Registration',
                'Land Bank — Bank Reference',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <RiShieldCheckLine size={16} className="text-[#d4a53a] flex-shrink-0" />
                  <span className="text-white/70 text-sm font-inter">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider — thin on left, tapers thick on right */}
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block relative z-10"
        style={{ height: 56 }}
        aria-hidden="true"
      >
        <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
        <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}
