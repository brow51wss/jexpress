import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

export default function ProfileContact() {
  return (
    <section className="py-24" style={{ background: '#f9f7f4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Contact Information
          </span>
          <h2 className="font-sans font-black text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Get in Touch with <span className="text-[#f58c23]">JTTC</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-xl mx-auto">
            Reach out to our team for transport inquiries, service requests, or partnership
            opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-8 border border-[#e8e0d8] shadow-sm hover:shadow-md hover:border-[#f58c23]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#f58c23] flex items-center justify-center shadow-md shadow-[#f58c23]/30">
              <MapPin size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-bold text-[#383838] text-sm uppercase tracking-wide mb-2">
                Office Address
              </p>
              <p className="font-inter text-[#6b6b6b] text-sm leading-relaxed">
                Espasyo Learning and Recreation Hub<br />
                #6 Torres Bugallon Street<br />
                Marikina Heights, Marikina City
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#e8e0d8] shadow-sm hover:shadow-md hover:border-[#f58c23]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#f58c23] flex items-center justify-center shadow-md shadow-[#f58c23]/30">
              <Mail size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-bold text-[#383838] text-sm uppercase tracking-wide mb-2">
                Email Address
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:jexpresstouristtransport.jttsc@gmail.com"
                  className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#f58c23] transition-colors break-all"
                >
                  jexpresstouristtransport.jttsc@gmail.com
                </a>
                <a
                  href="mailto:espasyostudyandofficehub@gmail.com"
                  className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#f58c23] transition-colors break-all"
                >
                  espasyostudyandofficehub@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#e8e0d8] shadow-sm hover:shadow-md hover:border-[#f58c23]/30 transition-all duration-200 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#f58c23] flex items-center justify-center shadow-md shadow-[#f58c23]/30">
              <Phone size={22} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-bold text-[#383838] text-sm uppercase tracking-wide mb-2">
                Contact Numbers
              </p>
              <div className="flex flex-col gap-1.5">
                {['+63 916-611-2928', '+632 8700-600 42', '+63 919-009-1985'].map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/[\s-]/g, '')}`}
                    className="font-inter text-[#6b6b6b] text-sm leading-relaxed hover:text-[#f58c23] transition-colors"
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
            className="inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#f58c23]/30"
          >
            Send Us a Message
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 border-2 border-[#383838] text-[#383838] hover:bg-[#383838] hover:text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200"
          >
            Book Transport
          </Link>
        </div>
      </div>
    </section>
  )
}
