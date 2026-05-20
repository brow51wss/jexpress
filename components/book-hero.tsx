export default function BookHero() {
  return (
    <section
      className="relative min-h-[62vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#383838' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-dash text-[#00193c] mb-4">
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

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #d4a53a, transparent)' }}
      />
    </section>
  )
}
