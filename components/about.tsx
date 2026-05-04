import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine, RiCheckboxCircleFill } from 'react-icons/ri'

const values = [
  'Professional and experienced drivers',
  'Reliable and quality transport services',
  'Strong commitment to safety and health',
  'Transparent and integrity-driven operations',
  'Flexible transport solutions for different client needs',
  'Serving tourism, hospitals, and organizations nationwide',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg"
                alt="Jexpress transport cooperative fleet"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg"
                alt="Jexpress transport vehicles"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg"
                alt="Jexpress cooperative team"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg"
                alt="Jexpress passenger service"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex flex-col gap-0.5 bg-[#f58c23] text-white rounded-lg px-4 py-2 shadow-lg shadow-[#f58c23]/40">
                <span className="text-lg font-black leading-none">JTTC</span>
                <span className="text-white/80 text-[9px] font-inter uppercase tracking-widest">
                  Bloomingdale, DC
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 order-1 lg:order-2">
            <div>
              <span className="inline-block text-[#f58c23] text-xs font-inter font-bold uppercase tracking-widest mb-4 border-l-4 border-[#f58c23] pl-3">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#383838] leading-tight mb-5 text-balance">
                A Cooperative Built on{' '}
                <span className="text-[#f58c23]">Trust & Service</span>
              </h2>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter mb-4">
                Jexpress Tourist Transport Cooperative was organized to provide public tourist
                transport services and allied transport-related solutions. JTTC also supports
                logistics, transport services, and other client service needs.
              </p>
              <p className="text-[#6b6b6b] text-base leading-relaxed font-inter">
                We aim to improve the quality of life of our members through enterprise
                development and employment, while delivering safe, reliable, and professional
                service to every passenger and organization we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <RiCheckboxCircleFill
                    size={20}
                    className="text-[#f58c23] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#383838] text-sm font-inter leading-snug">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#383838] hover:bg-[#f58c23] text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Contact Us
                <RiArrowRightLine size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-[#f58c23] font-semibold text-sm font-inter hover:underline underline-offset-4"
              >
                View Our Services
                <RiArrowRightLine size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
