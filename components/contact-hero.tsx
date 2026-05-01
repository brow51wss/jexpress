export default function ContactHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#383838' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Reach Out to Us
          </span>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            Contact <span className="text-[#f58c23]">JTTC</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed mx-auto">
            Get in touch with Jexpress Tourist Transport Cooperative for transport inquiries,
            service requests, and partnership opportunities. Our team is ready to assist you
            with dependable transport solutions and client support.
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
