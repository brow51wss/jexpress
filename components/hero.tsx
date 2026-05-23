import Link from 'next/link'
import { RiArrowRightLine, RiStarLine } from 'react-icons/ri'
import { createAdminClient } from '@/lib/supabase'
import { ServiceIcon } from '@/lib/service-icons'

async function getServices() {
  const supabase = createAdminClient()
  const { data } = await supabase
    .from('services')
    .select('id, name, icon')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
  return data ?? []
}

export default async function Hero() {
  const services = await getServices()

  return (
    <>
      <section
        id="home"
        className="relative pt-[100px] pb-[0px] lg:py-[75px] h-auto bg-[#fefefe] flex flex-col overflow-hidden"
      >
        {/* Two-column row: left = content, right = stats + services + image */}
        <div className="flex-1 flex flex-col lg:flex-row">

          {/* Left column — text content */}
          <div className="relative z-20 w-full lg:w-2/5 flex flex-col justify-center px-6 py-8 lg:pt-28 lg:pb-0 lg:ml-[max(1.5rem,calc((100vw-80rem)/2))]">
            <div className="flex flex-col gap-6 lg:max-w-[30vw] items-center lg:items-start">
              <span className="eyebrow-dash text-[#00193c]">
                Trusted Cooperative Since Day One
              </span>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-blue leading-tight tracking-tight text-balance text-center lg:text-left">
                YOUR JOURNEY.{' '}
                <span className="text-[#d4a53a]">OUR PRIORITY.</span>
              </h1>

              <p className="text-[#383838] text-lg leading-relaxed max-w-xl text-center lg:text-left">
                JExpress delivers safe, reliable and comfortable transport solutions with speed and professionalism. We drive journeys that connect people to destinations and experiences that matter.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
                >
                  Book Now
                  <RiArrowRightLine size={18} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#00193c] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#00193c]/40"
                >
                  Our Services
                  <RiArrowRightLine size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column — stats, services, group cars */}
          <div className="relative z-10 w-full lg:w-3/5 flex flex-col items-center lg:items-start justify-end px-6 pb-8 lg:pb-0 animate-slide-in-from-right pointer-events-none">
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4 lg:pl-[5vw]  mb-[50px] lg:mb-0">
              <div className="flex flex-col items-start">
                <span className="font-stat text-3xl text-[#d4a53a]">100%</span>
                <span className="text-[#6b6b6b] text-xs font-inter uppercase tracking-wider">Safety Record</span>
              </div>
              <div className="w-px h-10 bg-[#383838]/10" />
              <div className="flex flex-col items-start">
                <span className="font-stat text-3xl text-[#d4a53a]">Gov.</span>
                <span className="text-[#6b6b6b] text-xs font-inter uppercase tracking-wider">Accredited</span>
              </div>
              <div className="w-px h-10 bg-[#383838]/10" />
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <RiStarLine key={s} size={14} className="text-[#d4a53a] fill-[#d4a53a]" />
                  ))}
                </div>
                <span className="text-[#6b6b6b] text-xs font-inter uppercase tracking-wider">5-Star Service</span>
              </div>
            </div>

            {/* Service titles + icons pulled from dashboard */}
            <div className="hidden relative z-20 lg:flex lg:flex-row justify-center lg:flex-wrap gap-4 px-4 lg:pl-[5vw]">
              {services.map((service) => (
                <div key={service.id} className="flex flex-col items-center justify-center gap-2 p-4 w-[150px] h-[200px] overflow-hidden shrink-0 grow-0">
                  <div className="w-8 h-8 rounded-lg bg-[#d4a53a]/10 flex items-center justify-center shrink-0">
                    <ServiceIcon name={service.icon ?? ''} size={24} className="text-[#d4a53a]" />
                  </div>
                  <h3 className="text-brand-blue font-semibold uppercase tracking-wide text-center leading-tight break-words w-full min-h-0 overflow-hidden">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/branding/group-cars-trnsprnt.webp"
              alt=""
              aria-hidden="true"
              className="relative z-10 w-[full] h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  )
}
