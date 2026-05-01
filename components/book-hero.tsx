import Image from 'next/image'

export default function BookHero() {
  return (
    <section
      className="relative min-h-[62vh] flex items-end pb-20 pt-40 overflow-hidden"
      style={{ background: '#383838' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
          alt="Jexpress transport fleet ready for booking"
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
            Transport Reservations
          </span>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            Book Your Transport{' '}
            <span className="text-[#f58c23]">With JTTC</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
            Reserve dependable transport services with Jexpress Tourist Transport Cooperative.
            We assist clients with tourist transport, shuttle services, logistics transport,
            and other transport requirements through reliable service, professional drivers,
            and flexible vehicle options.
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
