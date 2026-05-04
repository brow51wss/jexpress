export default function BookIntro() {
  return (
    <section className="py-16 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            How It Works
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
            Safe and Dependable{' '}
            <span className="text-[#f58c23]">Transport Support</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base sm:text-lg leading-relaxed mb-8">
            Looking for safe and dependable transport support for your trip, organization, or
            operational needs? JTTC is ready to assist with transport solutions designed for
            tourism, companies, hospitals, and other client requirements. Send us your
            booking inquiry and our team will get in touch with you to discuss availability and
            service details.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Submit Your Request', desc: 'Fill out the booking form with your trip details and transport requirements.' },
              { step: '02', title: 'Our Team Reviews', desc: 'A member of our team will review your inquiry and reach out to discuss availability.' },
              { step: '03', title: 'We Arrange Your Transport', desc: 'Once confirmed, our professional drivers and capable fleet will be ready for your trip.' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-7 border border-[#e8e0d8] flex flex-col gap-4 text-left shadow-sm"
              >
                <span className="text-[#f58c23] font-black font-sans text-4xl leading-none opacity-80">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-sans font-black text-[#383838] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
