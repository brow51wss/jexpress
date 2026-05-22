import { ShieldCheck, Building2, FileText, Landmark, Globe, CreditCard } from 'lucide-react'

const certifications = [
  {
    icon: Building2,
    title: 'Cooperative Development Authority',
    desc: 'Officially registered cooperative under the CDA.',
  },
  {
    icon: ShieldCheck,
    title: 'Office of Transportation Cooperative',
    desc: 'Recognized transport cooperative with OTC compliance.',
  },
  {
    icon: FileText,
    title: 'BIR Certificate of Registration',
    desc: 'Registered with the Bureau of Internal Revenue.',
  },
  {
    icon: Landmark,
    title: 'Municipal Business Permit',
    desc: 'Authorized to operate with a valid local government permit.',
  },
  {
    icon: Globe,
    title: 'PhilGEPS Registration',
    desc: 'Registered with the Philippine Government Electronic Procurement System.',
  },
  {
    icon: CreditCard,
    title: 'Bank Reference — Land Bank',
    desc: 'Financial credibility supported by Land Bank of the Philippines.',
  },
]

export default function ProfileCompliance() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="eyebrow-dash text-[#d4a53a] mb-4">
            Registrations &amp; Certifications
          </span>
          <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-4">
            Registered, Licensed &amp;{' '}
            <span className="text-[#d4a53a]">Compliant</span>
          </h2>
          <p className="font-inter text-[#6b6b6b] text-base leading-relaxed max-w-2xl mx-auto">
            JTTC maintains the necessary registrations, licenses, certifications, and permits to
            operate with full accountability and transparency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="bg-[#f5f5f5] rounded-2xl p-7 border border-[#f5f5f5] shadow-sm hover:shadow-md hover:border-[#d4a53a]/40 transition-all duration-200 flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a53a] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#d4a53a]/30">
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="font-heading text-[#383838] text-sm leading-snug">
                    {cert.title}
                  </p>
                  <p className="font-inter text-[#6b6b6b] text-xs leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
