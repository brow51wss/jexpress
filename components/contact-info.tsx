import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const infoItems = [
  {
    icon: MapPin,
    label: 'Office Address',
    lines: [
      'Espasyo Learning and Recreation Hub',
      '#6 Torres Bugallon Street',
      'Marikina Heights, Marikina City',
    ],
    type: 'text',
  },
  {
    icon: Mail,
    label: 'Email Address',
    lines: [
      'booking@jexpresstransport.com',
      'inquire@jexpresstransport.com',
    ],
    sublabels: ['Bookings', 'General Inquiries'],
    type: 'email',
  },
  {
    icon: Phone,
    label: 'Contact Numbers',
    lines: ['+63 916 611 2928', '+63 2 8700 6042', '+63 919 009 1985', '+63 2 8743 9021'],
    type: 'phone',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    lines: [],
    type: 'hours',
    hours: [
      { sublabel: 'Weekdays', day: 'Monday – Friday', time: '8:00 AM – 5:00 PM' },
      { sublabel: 'Weekend', day: 'Saturday', time: '8:00 AM – 12:00 PM' },
    ],
  },
]

function href(type: string, value: string) {
  if (type === 'email') return `mailto:${value}`
  if (type === 'phone') return `tel:${value.replace(/[\s-]/g, '')}`
  return undefined
}

export default function ContactInfo() {
  return (
    <section className="py-20 bg-[#fff8f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Our Contact <span className="text-[#f58c23]">Information</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-2xl mx-auto">
            Whether you need tourist transport services, shuttle support, logistics transport,
            or additional vehicle arrangements, JTTC is here to help.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-7 border border-[#e8e0d8] shadow-sm hover:shadow-md hover:border-[#f58c23]/30 transition-all duration-200 flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f58c23] flex items-center justify-center shadow-lg shadow-[#f58c23]/30 flex-shrink-0">
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-sans font-bold text-[#383838] text-sm uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.type === 'hours' ? (
                    <div className="flex flex-col gap-4">
                      {item.hours?.map((entry) => (
                        <div key={entry.sublabel}>
                          <p className="font-inter text-[#f58c23]/70 text-xs uppercase tracking-wide mb-0.5">
                            {entry.sublabel}
                          </p>
                          <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">{entry.day}</p>
                          <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">{entry.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {item.lines.map((line, i) => {
                        const link = href(item.type, line)
                        const sublabel = item.sublabels?.[i]
                        return (
                          <div key={line}>
                            {sublabel && (
                              <p className="font-inter text-[#f58c23]/70 text-xs uppercase tracking-wide mb-0.5">
                                {sublabel}
                              </p>
                            )}
                            {link ? (
                              <a
                                href={link}
                                className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#f58c23] transition-colors break-all"
                              >
                                {line}
                              </a>
                            ) : (
                              <span className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                                {line}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
