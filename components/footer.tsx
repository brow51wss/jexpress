import Link from 'next/link'
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiFacebookCircleLine } from 'react-icons/ri'
import { createAdminClient } from '@/lib/supabase'
import { unstable_cache } from 'next/cache'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Company Profile', href: '/company-profile' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
]

const getServiceNames = unstable_cache(
  async (): Promise<string[]> => {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from('services')
      .select('name')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    return data?.map((s: { name: string }) => s.name) ?? []
  },
  ['service-names-footer'],
  { tags: ['services'], revalidate: false }
)

export default async function Footer() {
  const year = new Date().getFullYear()
  const services = await getServiceNames()

  return (
    <footer className="bg-[#2a2a2a] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="#home" className="flex w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/branding/JExpress-Wordmark.webp"
                alt="JExpress Tourist Transport Cooperative"
                width={176}
                height={40}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-white/50 text-sm font-inter leading-relaxed">
              Dependable transport services for tourism, hospitals, companies,
              and the commuting public. Committed to safety, integrity, and quality service.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/jexpressjttc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f58c23] flex items-center justify-center transition-colors duration-200"
                aria-label="Follow Jexpress on Facebook"
              >
                <RiFacebookCircleLine size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <RiMapPinLine
                  size={16}
                  className="text-[#f58c23] mt-0.5 flex-shrink-0"
                />
                <span className="text-white/50 font-inter text-sm leading-relaxed">
                  Espasyo Learning and Recreation Hub,<br />
                  #6 Torres Bugallon Street,<br />
                  Marikina Heights, Marikina City
                </span>
              </div>
              <div className="flex items-start gap-3">
                <RiPhoneLine
                  size={16}
                  className="text-[#f58c23] mt-0.5 flex-shrink-0"
                />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+639166112928" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +63 916 611 2928
                  </a>
                  <a href="tel:+63287006042" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +63 2 8700 6042
                  </a>
                  <a href="tel:+639190091985" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +63 919 009 1985
                  </a>
                  <a href="tel:+63287439021" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +63 2 8743 9021
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RiMailLine
                  size={16}
                  className="text-[#f58c23] mt-0.5 flex-shrink-0"
                />
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-white/30 font-inter text-xs uppercase tracking-wide mb-0.5">Bookings</p>
                    <a
                      href="mailto:booking@jexpresstransport.com"
                      className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors"
                    >
                      booking@jexpresstransport.com
                    </a>
                  </div>
                  <div>
                    <p className="text-white/30 font-inter text-xs uppercase tracking-wide mb-0.5">General Inquiries</p>
                    <a
                      href="mailto:inquire@jexpresstransport.com"
                      className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors"
                    >
                      inquire@jexpresstransport.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/book"
              className="mt-2 inline-flex items-center justify-center bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 text-center"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-inter text-center sm:text-left">
            &copy; {year} Jexpress Tourist Transport Cooperative. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/privacy-policy"
              className="text-white/30 hover:text-[#f58c23] text-xs font-inter transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">·</span>
            <Link
              href="/terms"
              className="text-white/30 hover:text-[#f58c23] text-xs font-inter transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-white/20 text-xs hidden sm:inline">·</span>
            <p className="text-white/30 text-xs font-inter">
              Designed &amp; Developed by{' '}
              <a
                href="https://www.dumlaoandco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f58c23]/60 hover:text-[#f58c23] transition-colors"
              >
                Dumlao &amp; Co.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
