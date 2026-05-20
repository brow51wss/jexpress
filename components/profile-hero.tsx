export default function ProfileHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24"
      style={{ background: '#383838' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-dash text-[#00193c] mb-4">
            Company Profile
          </span>
          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance mb-6">
            Jexpress Tourist{' '}
            <span className="text-[#d4a53a]">Transport Cooperative</span>
          </h1>
          <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed mx-auto">
            Jexpress Tourist Transport Cooperative (JTTC) is a transport service cooperative
            committed to providing dependable, safe, and quality transport solutions for tourism,
            hospitals, companies, and the commuting public.
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
