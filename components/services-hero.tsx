export default function ServicesHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden"
      style={{ background: '#383838' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </span>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            Our <span className="text-[#f58c23]">Services</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            Jexpress Tourist Transport Cooperative (JTTC) provides dependable transport and allied
            support services for businesses, hospitals, logistics operations, tourism, and the
            commuting public. We are committed to reliable service, safety, professionalism, and
            operational integrity in every engagement.
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
