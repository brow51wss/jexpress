import {
  RiCheckboxCircleFill,
  RiArrowRightLine,
  RiTruckLine,
  RiTimeLine,
  RiStore2Line,
  RiGlobalLine,
  RiUserSmileLine,
  RiBuilding2Line,
  RiMapPinLine,
  RiBriefcaseLine,
} from 'react-icons/ri'
import { TrendingUp } from 'lucide-react'
import FranchiseForm from '@/components/franchise-form'

const benefits = [
  'Established brand and business model',
  'Step-by-step training and onboarding',
  'Operations and fleet support',
  'Marketing and customer acquisition guidance',
  'Ongoing partnership and network support',
]

const services = [
  {
    icon: RiTruckLine,
    title: 'Freight & Cargo Transport',
    description: 'Move goods reliably across regions with a proven transport network.',
  },
  {
    icon: RiTimeLine,
    title: 'Express & Scheduled Deliveries',
    description: 'Time-sensitive and recurring delivery solutions for businesses of all sizes.',
  },
  {
    icon: RiStore2Line,
    title: 'Warehousing & Distribution',
    description: 'Scalable storage and distribution support to streamline your supply chain.',
  },
  {
    icon: RiGlobalLine,
    title: 'Business & E-Commerce Transport',
    description: 'Last-mile and fulfillment solutions built for online sellers and growing enterprises.',
  },
]

const audience = [
  { icon: RiBriefcaseLine, label: 'Entrepreneurs and investors' },
  { icon: RiTruckLine, label: 'Transport operators' },
  { icon: RiBuilding2Line, label: 'Business owners seeking expansion' },
  { icon: RiMapPinLine, label: 'Individuals with strong local market knowledge' },
]

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description: 'Fill out the form below and tell us about your interest, background, and preferred location.',
  },
  {
    number: '02',
    title: 'Get Qualified',
    description: 'Our team will review your application, reach out to discuss opportunities, and guide you through the process.',
  },
  {
    number: '03',
    title: 'Launch Your Franchise',
    description: 'Receive hands-on training, full operational support, and start serving clients under the J Express Transport brand.',
  },
]

export default function FranchiseContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#383838] overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #d4a53a 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, #d4a53a 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow-dash text-[#d4a53a] mb-6">
              Franchise Opportunity
            </span>
            <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance mb-6">
              We are inviting{' '}
              <span className="text-[#d4a53a]">Driver-Vehicle Owners</span>{' '}
              to Partner with Us.
            </h1>
            <p className="font-inter text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              Become a franchise partner and grow with a fast-rising transport and delivery network backed by years of operational experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#franchise-form"
                className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
              >
                Apply Now
                <RiArrowRightLine size={18} />
              </a>
              <a
                href="#franchise-form"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#d4a53a] text-white hover:text-[#d4a53a] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Inquire Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose J Express */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4">
                Why Partner With Us
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6">
                Why Choose{' '}
                <span className="text-[#d4a53a]">J Express Transport?</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed mb-4">
                The transport industry continues to grow rapidly — and J Express Transport is positioned to meet that demand with reliable, efficient, and scalable solutions.
              </p>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                As a franchise partner, you gain access to a proven system designed to help you launch and grow your own transport business with confidence, operational support, and a recognized brand behind you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Proven System', 'A business model built from years of real transport operations.'],
                ['Growing Demand', 'Transport and delivery are among the fastest-growing sectors nationwide.'],
                ['Full Support', 'Training, onboarding, and ongoing operational assistance.'],
                ['Scalable Model', 'Start at your own pace and grow as your market expands.'],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#d4a53a]" />
                  <p className="font-heading text-[#383838] text-sm leading-snug">{title}</p>
                  <p className="font-inter text-[#6b6b6b] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Partner Benefits
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              What You Get as a{' '}
              <span className="text-[#d4a53a]">Franchise Partner</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-5 bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl px-7 py-5"
              >
                <RiCheckboxCircleFill size={24} className="text-[#d4a53a] flex-shrink-0" />
                <span className="font-inter text-[#383838] text-base font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services You Can Offer */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="eyebrow-dash text-[#00193c] mb-4">
              Revenue Streams
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-4">
              Services You Can{' '}
              <span className="text-[#d4a53a]">Offer</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-xl mx-auto">
              Expand your earning potential with multiple service offerings under one franchise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-[#f5f5f5] rounded-2xl border border-[#f5f5f5] p-7 flex flex-col gap-4 hover:border-[#d4a53a] hover:shadow-xl hover:shadow-[#d4a53a]/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center group-hover:bg-[#d4a53a] transition-colors duration-300">
                    <Icon size={22} className="text-[#d4a53a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-[#383838] leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4">
                Who Can Apply
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6">
                Is This{' '}
                <span className="text-[#d4a53a]">Right for You?</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                We are looking for driven individuals and businesses who are ready to grow. If you have the ambition and the local market presence, we have the system and support to help you succeed.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {audience.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl px-7 py-5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#d4a53a]" />
                    </div>
                    <span className="font-inter text-[#383838] text-base font-medium">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#383838] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #d4a53a 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              Simple Process
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              How It{' '}
              <span className="text-[#d4a53a]">Works</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col gap-5 relative">
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(100%_-_1.5rem)] w-12 h-px bg-[#f5f5f5]/10" aria-hidden="true" />
                )}
                <div className="flex items-center gap-4">
                  <span className="font-stat text-[#d4a53a]/30 text-5xl leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-white leading-snug">
                  {step.title}
                </h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-[#d4a53a]/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={26} className="text-[#d4a53a]" strokeWidth={1.75} />
            </div>
            <span className="eyebrow-dash text-[#00193c] mb-4">
              The Opportunity
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6">
              Why Now Is the{' '}
              <span className="text-[#d4a53a]">Right Time</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed mb-4">
              The demand for delivery and transport services continues to rise with the growth of online businesses and regional trade. E-commerce, local distribution, and last-mile delivery are among the fastest-growing segments in the Philippine economy.
            </p>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              This is your opportunity to enter a high-demand industry with the backing of an established transport network — before the window of early entry closes.
            </p>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-24 bg-[#383838] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #d4a53a 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="eyebrow-dash text-[#d4a53a] mb-6">
            Take the First Step
          </span>
          <h2 className="font-heading text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6 max-w-3xl mx-auto">
            Ready to Own Your{' '}
            <span className="text-[#d4a53a]">Transport Business?</span>
          </h2>
          <p className="font-inter text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Apply now and become a J Express Transport franchise partner today. Our team is ready to walk you through every step.
          </p>
          <a
            href="#franchise-form"
            className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#d4a53a]/40"
          >
            Get Started
            <RiArrowRightLine size={18} />
          </a>
        </div>
      </section>

      {/* Lead Form */}
      <FranchiseForm />
    </>
  )
}
