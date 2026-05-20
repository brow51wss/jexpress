export default function WhyUsIntro() {
  return (
    <section className="py-20" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <span className="eyebrow-dash text-[#00193c] mb-4">
              The Right Choice
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance">
              Choosing a Partner You Can{' '}
              <span className="text-[#d4a53a]">Count On</span>
            </h2>
            <div className="mt-6 h-1 w-14 rounded-full" style={{ background: '#d4a53a' }} />
          </div>
          <div>
            <p className="font-inter text-[#6b6b6b] text-base sm:text-lg leading-relaxed">
              Choosing the right transport partner means choosing a team you can rely on for
              safety, quality service, and operational consistency. At JTTC, we combine
              experienced drivers, a capable fleet, and a commitment to honest business
              practices to support a wide range of client transport requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
