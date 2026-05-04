'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightLine, RiShieldCheckLine, RiStarLine } from 'react-icons/ri'

const heroImages = [
  'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309772-472204893_122131383956396609_7606689391204038066_n.jpg',
  'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472257212_122131383326396609_1045635834548108228_n.jpg',
  'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472318464_122131383872396609_3251099583690664541_n.jpg',
  'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/photos/Jexpress%20Tourist%20Transport%20Cooperative/1775101309773-472336187_122131206134396609_331734107237458708_n.jpg',
]

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    const speed = 0.4
    const step = () => {
      pos -= speed
      const totalWidth = track.scrollWidth / 2
      if (Math.abs(pos) >= totalWidth) pos = 0
      track.style.transform = `translateX(${pos}px)`
      requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#383838] flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #383838 0%, #2a2a2a 40%, #1a1a1a 100%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at top right, #f58c23 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, #fed16c 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#f58c23]/15 border border-[#f58c23]/30 text-[#fed16c] text-xs font-inter font-semibold uppercase tracking-widest px-4 py-2 rounded-full w-fit">
              <RiShieldCheckLine size={14} />
              Trusted Cooperative Since Day One
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight text-balance">
              Reliable Tourist &amp;{' '}
              <span className="text-[#f58c23] relative">
                Transport
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C50 2 100 2 198 6"
                    stroke="#fed16c"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Services You Can Count On
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Jexpress Tourist Transport Cooperative (JTTC) provides dependable transport
              solutions for tourism, hospitals, companies, and other organizations.
              We are committed to safety, integrity, quality service, and dependable
              operations nationwide.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-[#f58c23]/40"
              >
                Book Now
                <RiArrowRightLine size={18} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#f58c23] text-white hover:text-[#f58c23] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#f58c23]">100%</span>
                <span className="text-white/60 text-xs font-inter uppercase tracking-wider">
                  Safety Record
                </span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#f58c23]">Gov.</span>
                <span className="text-white/60 text-xs font-inter uppercase tracking-wider">
                  Accredited
                </span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <RiStarLine key={s} size={14} className="text-[#fed16c] fill-[#fed16c]" />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-inter uppercase tracking-wider">
                  5-Star Service
                </span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#f58c23]/30 shadow-2xl shadow-[#f58c23]/20">
              <Image
                src={heroImages[0]}
                alt="Jexpress transport fleet"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom right, transparent 60%, #383838 100%)',
                }}
              />
            </div>

            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-2 border-[#fed16c]/50 shadow-xl rotate-3">
              <Image
                src={heroImages[1]}
                alt="Transport service"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden border-2 border-[#f58c23]/50 shadow-xl -rotate-2">
              <Image
                src={heroImages[2]}
                alt="Comfortable transport"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-3 lg:bottom-8 lg:right-4 bg-[#383838]/90 backdrop-blur-sm border border-[#f58c23]/30 rounded-xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-inter font-semibold">
                  Available for Booking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden py-6 border-t border-white/10 bg-[#2a2a2a]/60">
        <p className="text-center text-[#f58c23]/60 text-xs font-inter uppercase tracking-widest mb-4">
          Trusted By Government Agencies
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-3 px-8">
          {['Department of Agrarian Reform', 'Office of Civil Defense', 'Gov. Accredited Cooperative', 'Bloomingdale DC Transport', 'Professional & Courteous'].map(
            (item) => (
              <span
                key={item}
                className="text-white/40 text-sm font-inter whitespace-nowrap tracking-wide"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
