import { MapPin, Phone, Mail } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    items: [
      { text: 'Espasyo Learning and Recreation Hub', href: undefined },
      { text: '#6 Torres Bugallon Street', href: undefined },
      { text: 'Marikina Heights, Marikina City', href: undefined },
    ],
  },
  {
    icon: Mail,
    label: 'Email Address',
    items: [
      { text: 'inquire@jexpresstransport.com', href: 'mailto:inquire@jexpresstransport.com' },
      { text: 'booking@jexpresstransport.com', href: 'mailto:booking@jexpresstransport.com' },
    ],
  },
  {
    icon: Phone,
    label: 'Contact Numbers',
    items: [
      { text: '+63 916 611 2928', href: 'tel:+639166112928' },
      { text: '+63 2 8700 6042', href: 'tel:+63287006042' },
      { text: '+63 919 009 1985', href: 'tel:+639190091985' },
      { text: '+63 2 8743 9021', href: 'tel:+63287439021' },
    ],
  },
]

export default function BookContact() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Direct Contact
          </span>
          <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Need Help With{' '}
            <span className="text-[#d4a53a]">Your Booking?</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-2xl mx-auto">
            You may also contact JTTC directly for transport inquiries and reservation requests.
            Our team is ready to assist you with the right transport solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactDetails.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] flex flex-col gap-5 hover:border-[#d4a53a]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center shadow-lg shadow-[#d4a53a]/30 flex-shrink-0">
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="font-heading text-[#383838] text-sm uppercase tracking-wide mb-3">
                    {item.label}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {item.items.map((i) =>
                      i.href ? (
                        <a
                          key={i.text}
                          href={i.href}
                          className={`${item.icon === Phone ? 'font-phone text-lg' : 'font-inter text-sm'} text-[#6b6b6b] leading-relaxed hover:text-[#d4a53a] transition-colors break-all`}
                        >
                          {i.text}
                        </a>
                      ) : (
                        <span
                          key={i.text}
                          className="font-inter text-[#6b6b6b] text-sm leading-relaxed"
                        >
                          {i.text}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
