import { Shield, Star, Users, Clock, ThumbsUp, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Safety',
    description:
      'We aspire to the highest standards of safety and health for our drivers and passengers. Every vehicle is maintained and every driver trained to ensure safe trips.',
  },
  {
    icon: Star,
    title: 'Reliability',
    description:
      'JTTC is committed to being a dependable source of transport solutions nationwide — consistent, punctual, and quality-driven on every engagement.',
  },
  {
    icon: Users,
    title: 'Professionalism',
    description:
      'From management to drivers, we conduct business with integrity and fairness, maintaining the highest level of professional conduct on every engagement.',
  },
  {
    icon: ThumbsUp,
    title: 'Honesty & Transparency',
    description:
      'We maintain transparency, sincerity, and openness in all operations — fair practices, clear communication, and no compromises on ethical standards.',
  },
  {
    icon: Heart,
    title: 'Courtesy',
    description:
      'Every passenger is treated with genuine respect and warmth. Courtesy is practiced by every member of the JTTC team on every trip.',
  },
  {
    icon: Clock,
    title: 'Innovation',
    description:
      'We ensure the viability of our cooperative through continuous improvement and new technologies, meeting the evolving needs of clients and the market.',
  },
]

export default function AboutMission() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Driven by Service */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20 pb-20 border-b border-[#f5f5f5]">
          <div>
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              What Drives Us
            </span>
            <h2 className="font-heading text-brand-blue text-3xl sm:text-4xl leading-tight text-balance mb-5">
              Driven by Service,{' '}
              <span className="text-[#d4a53a]">Built on Integrity</span>
            </h2>
            <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
              At JTTC, we believe transport services should be dependable, safe, and
              professionally managed. We are committed to supporting our clients with reliable
              solutions while promoting transparency, trustworthiness, and fairness in every
              engagement.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:pt-2">
            <blockquote className="relative border-l-4 border-[#d4a53a] pl-6">
              <p className="font-heading text-[#383838] text-lg sm:text-xl leading-snug text-balance">
                &ldquo;To transport passengers safely and comfortably to their destinations with
                reliable, professional, and courteous service.&rdquo;
              </p>
            </blockquote>
            <div className="bg-[#f5f5f5] border border-[#f5f5f5] rounded-2xl p-7">
              <p className="text-[#d4a53a] font-inter text-xs font-semibold uppercase tracking-widest mb-3">
                Our Broader Purpose
              </p>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                One of the goals of JTTC is to help improve the quality of life of its members
                while contributing to inclusive growth, enterprise development, and employment.
                As a cooperative, we value service that benefits both our clients and our
                community.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <span className="eyebrow-dash text-[#d4a53a] mb-4">
              Our Core Values
            </span>
            <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance">
              The Principles {' '}
              <span className="text-[#d4a53a]">That Guide Us</span> 
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 bg-brand-blue border rounded-2xl p-7 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center flex-shrink-0">
                  <value.icon size={22} className="text-[#fefefe]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-heading text-[#d4a53a] mb-2">{value.title}</h3>
                  <p className="font-inter text-[#fefefe] text-sm leading-relaxed">
                    {value.description}
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
