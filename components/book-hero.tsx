export default function BookHero() {
  return (
    <section
      className="relative min-h-[550px] flex items-center justify-center overflow-hidden pt-24 pb-24"
      style={{ background: '#00193c' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Transport Reservations
          </span>
          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            Book Your Transport{' '}
            <span className="text-[#d4a53a]">With JTTC</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed mx-auto">
            Reserve dependable transport services with Jexpress Tourist Transport Cooperative.
            We assist clients with tourist transport, shuttle services,
            and other transport requirements through reliable service, professional drivers,
            and flexible vehicle options.
          </p>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
          <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
          <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
        </svg>
      </div>
    </section>
  )
}
