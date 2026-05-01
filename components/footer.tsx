import Image from 'next/image'
import Link from 'next/link'
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiFacebookCircleLine } from 'react-icons/ri'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Company Profile', href: '/company-profile' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Why Choose Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  'Tourist Transport Services',
  'Shuttle Services',
  'Logistic Transport Services',
  'Passenger Transport Solutions',
  'Food Supply & Delivery Support',
  'Allied Transport Services',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2a2a2a] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="#home" className="flex flex-col gap-1 w-fit">
              <div className="relative h-10 w-44 flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/api-attachments/x9MbHBI5X4YWvsyZwm77e-qoL4yUphEjQNGVYcsOcxtf4gQ938pf.png"
                  alt="Jexpress Tourist Transport Cooperative"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-white/50 text-xs font-inter tracking-wider">
                Tourist Transport Coop
              </p>
            </Link>
            <p className="text-white/50 text-sm font-inter leading-relaxed">
              Dependable transport services for tourism, logistics, hospitals, companies,
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
                    +63 916-611-2928
                  </a>
                  <a href="tel:+63287006042" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +632 8700-600 42
                  </a>
                  <a href="tel:+639190091985" className="text-white/50 hover:text-[#f58c23] font-inter text-sm transition-colors">
                    +63 919-009-1985
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

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-inter text-center sm:text-left">
            &copy; {year} Jexpress Tourist Transport Cooperative. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-inter">
            Designed &amp; Developed by{' '}
            <a
              href="https://varakit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f58c23]/60 hover:text-[#f58c23] transition-colors"
            >
              varakit.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
