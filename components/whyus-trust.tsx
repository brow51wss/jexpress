import Image from 'next/image'

const clients = [
  'Tourism Operations',
  'BPO Companies',
  'Hospitals & Medical Institutions',
  'Emerging Market Companies',
  'Government Organizations',
  'Corporate Groups',
]

export default function WhyUsTrust() {
  return (
    <section className="py-24" style={{ background: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl col-span-2">
                <Image
                  src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
                  alt="Jexpress fleet ready for clients"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, #383838 0%, transparent 60%)' }}
                />
                <div className="absolute bottom-5 left-5 flex flex-col gap-0.5 bg-[#d4a53a] text-white rounded-xl px-5 py-3 shadow-lg shadow-[#d4a53a]/40">
                  <span className="font-wordmark text-xl leading-none">JTTC</span>
                  <span className="text-white/80 text-[10px] font-inter uppercase tracking-widest">
                    Trusted Transport Partner
                  </span>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                  alt="JTTC vehicle on route"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                  alt="JTTC passengers and service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div>
              <span className="eyebrow-dash text-[#00193c] mb-4">
                A Partner You Can Depend On
              </span>
              <h2 className="font-heading text-[#383838] text-3xl sm:text-4xl leading-tight text-balance mb-5">
                Built for Organizations That Need{' '}
                <span className="text-[#d4a53a]">Trusted Transport</span>
              </h2>
              <p className="font-inter text-[#6b6b6b] text-base leading-relaxed">
                JTTC has a clear focus on providing transport shuttle services to BPO
                companies, hospitals, emerging market companies, industries, and tourism-related
                clients. We are committed to dependable operations, uncompromised service
                quality, and building trust through responsible transport service.
              </p>
            </div>

            <div>
              <p className="font-inter text-[#383838] text-sm font-bold uppercase tracking-widest mb-4">
                Who We Serve
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clients.map((client) => (
                  <li key={client} className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: '#d4a53a' }}
                    />
                    <span className="font-inter text-[#6b6b6b] text-sm">{client}</span>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote className="border-l-4 border-[#d4a53a] pl-5 mt-2">
              <p className="font-heading text-[#383838] text-base sm:text-lg leading-snug text-balance">
                &ldquo;To transport passengers safely and comfortably to their destinations
                with reliable, professional, and courteous service.&rdquo;
              </p>
              <footer className="mt-3 font-inter text-[#6b6b6b] text-xs">
                — JTTC Mission Statement
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
