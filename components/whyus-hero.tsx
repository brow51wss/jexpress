import Image from 'next/image'

export default function WhyUsHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden"
      style={{ background: '#383838' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
          alt="Jexpress transport fleet ready for deployment"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #38383880 0%, #383838 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Why Choose JTTC
          </span>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            A Transport Partner You Can{' '}
            <span className="text-[#f58c23]">Truly Rely On</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
            Jexpress Tourist Transport Cooperative (JTTC) is committed to delivering dependable
            transport services with professionalism, integrity, and a strong focus on safety.
            Our goal is to provide reliable solutions for tourism, logistics, hospitals,
            companies, and other organizations that need trusted transport support.
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #f58c23, transparent)' }}
      />
    </section>
  )
}
