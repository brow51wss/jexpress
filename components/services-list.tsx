import { Bus, Users, Truck, MapPin, Wrench, ShoppingBasket } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Bus,
    title: 'Tourist Transport Services',
    description:
      'We provide public tourist transport services for clients who require safe, dependable, and organized passenger transportation. Our team is committed to delivering quality service while maintaining high standards of safety, transparency, and professionalism.',
    tags: ['Organized Tours', 'Group Transport', 'Land & Sea'],
  },
  {
    number: '02',
    icon: Users,
    title: 'Shuttle Transport Services',
    description:
      'JTTC offers shuttle transport solutions for organizations and groups that need reliable point-to-point transportation. We are focused on providing transport shuttle services nationwide for emerging market companies, industries, hospitals, logistics, and tourism-related operations.',
    tags: ['Point-to-Point', 'Nationwide', 'Hospitals & Companies'],
  },
  {
    number: '03',
    icon: Truck,
    title: 'Logistic Transport Services',
    description:
      'We provide logistic transport services to support operational and delivery needs. This service is suited for businesses and institutions that require dependable transport coordination and movement of goods or operational support.',
    tags: ['Cargo Movement', 'Supply Chain', 'Delivery Coordination'],
  },
  {
    number: '04',
    icon: MapPin,
    title: 'Passenger Transport Solutions',
    description:
      'Our cooperative serves both members and the commuting public through land transport services focused on safe conveyance, service quality, and client satisfaction. JTTC works to ensure every trip is handled with care, efficiency, and professionalism.',
    tags: ['Land Transport', 'Commuting Public', 'Members & Clients'],
  },
  {
    number: '05',
    icon: Wrench,
    title: 'Transport Support & Allied Services',
    description:
      'In addition to transport operations, JTTC engages in allied transport-related services such as transportation service center operations, spare parts and supplies support, and vehicle and driver insurance-related services.',
    tags: ['Service Centers', 'Spare Parts', 'Insurance Support'],
  },
  {
    number: '06',
    icon: ShoppingBasket,
    title: 'Food Supply & Delivery Support',
    description:
      'JTTC also provides supply and delivery support for food products to clients, helping meet operational and service requirements through dependable coordination and delivery.',
    tags: ['Food Delivery', 'Supply Coordination', 'Operational Support'],
  },
]

export default function ServicesList() {
  return (
    <section className="py-24" style={{ background: '#fff' }} id="services-list">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Full Service Range
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
            Everything We <span className="text-[#f58c23]">Offer</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 1
            return (
              <div
                key={service.number}
                className={`grid lg:grid-cols-[1fr_auto_1fr] gap-0 rounded-2xl overflow-hidden border border-[#e8e0d8] ${isEven ? 'bg-[#fdf8f4]' : 'bg-white'}`}
              >
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[#f58c23]/30 font-black text-5xl leading-none font-sans select-none">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#f58c23]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#f58c23]" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="font-sans font-black text-[#383838] text-xl sm:text-2xl leading-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="hidden lg:block w-px bg-[#e8e0d8] my-8" />

                <div className="flex flex-col justify-center p-8 lg:p-10 border-t lg:border-t-0 border-[#e8e0d8]">
                  <p className="font-inter text-[#383838] text-xs font-bold uppercase tracking-widest mb-5">
                    Key Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-[#f58c23]/10 text-[#c97818] font-inter font-semibold text-xs px-4 py-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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
