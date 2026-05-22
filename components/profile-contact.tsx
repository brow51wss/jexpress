import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

export default function ProfileContact() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Contact Information
          </span>
          <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Get in Touch with <span className="text-[#d4a53a]">JTTC</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-xl mx-auto">
            Reach out to our team for transport inquiries, service requests, or partnership
            opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] shadow-sm hover:shadow-md hover:border-[#d4a53a]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center shadow-md shadow-[#d4a53a]/30">
              <MapPin size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-heading text-[#383838] text-sm uppercase tracking-wide mb-2">
                Office Address
              </p>
              <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                Espasyo Learning and Recreation Hub<br />
                #6 Torres Bugallon Street<br />
                Marikina Heights, Marikina City
              </p>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] shadow-sm hover:shadow-md hover:border-[#d4a53a]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center shadow-md shadow-[#d4a53a]/30">
              <Mail size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-heading text-[#383838] text-sm uppercase tracking-wide mb-2">
                Email Address
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:jexpresstouristtransport.jttsc@gmail.com"
                  className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#d4a53a] transition-colors break-all"
                >
                  jexpresstouristtransport.jttsc@gmail.com
                </a>
                <a
                  href="mailto:espasyostudyandofficehub@gmail.com"
                  className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#d4a53a] transition-colors break-all"
                >
                  espasyostudyandofficehub@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl p-8 border border-[#f5f5f5] shadow-sm hover:shadow-md hover:border-[#d4a53a]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center shadow-md shadow-[#d4a53a]/30">
              <Phone size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-heading text-[#383838] text-sm uppercase tracking-wide mb-2">
                Contact Numbers
              </p>
              <div className="flex flex-col gap-1.5">
                {['+63 916 611 2928', '+63 2 8700 6042', '+63 919 009 1985', '+63 2 8743 9021'].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/[\s-]/g, '')}`}
                    className="font-phone text-[#6b6b6b] text-lg leading-relaxed hover:text-[#d4a53a] transition-colors"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#d4a53a]/30"
          >
            Send Us a Message
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#00193c]/40"
          >
            Book Transport
          </Link>
        </div>
      </div>
    </section>
  )
}
