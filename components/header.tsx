'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Franchise', href: '/franchise' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/company-profile' },
      { label: 'Leadership', href: '/leadership' },
    ],
  },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Travel Guides', href: '/travel-guides' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isAboutActive =
    pathname === '/about' ||
    pathname === '/company-profile' ||
    pathname === '/leadership'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fefefe] transition-all duration-300 ${
        scrolled ? 'shadow-lg py-3' : 'shadow-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/branding/JExpress-Icon.webp"
            alt=""
            width={100}
            height={100}
            className="h-7 w-auto lg:h-9 shrink-0 transition-all duration-300"
            priority
            aria-hidden
          />
          <div className="flex flex-col gap-0.5 min-w-0">
            <Image
              src="/branding/JExpress-Wordmark.webp"
              alt="Jexpress"
              width={120}
              height={28}
              className="h-3.5 sm:h-4 lg:h-4 w-auto max-w-[88px] sm:max-w-[100px] lg:max-w-[112px] object-contain object-left"
              priority
            />
            <span
              className="font-inter text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.12em] leading-tight text-[#383838] transition-colors duration-300"
            >
              Tourist Transport Cooperative
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            if (link.children) {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 font-inter text-sm tracking-wide font-medium transition-colors duration-200 relative ${
                      isAboutActive ? 'text-[#00193c]' : 'text-[#383838] group-hover:text-[#00193c]'
                    }`}
                  >
                    {link.label}
                    <RiArrowDownSLine
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4a53a] transition-all duration-300 ${
                        isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>

                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-[#2a2a2a] border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-[200px]">
                      {link.children.map((child) => {
                        const isChildActive = pathname === child.href
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-3 font-inter text-sm font-medium transition-colors duration-150 border-b border-white/5 last:border-0 ${
                              isChildActive
                                ? 'text-[#d4a53a] bg-[#f5f5f5]/5'
                                : 'text-white/70 hover:text-[#d4a53a] hover:bg-[#f5f5f5]/5'
                            }`}
                          >
                            {child.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm tracking-wide font-medium relative group transition-colors duration-200 ${
                  isActive ? 'text-[#00193c]' : 'text-[#383838] hover:text-[#00193c]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4a53a] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/book"
            className="hidden lg:inline-flex items-center gap-2 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#d4a53a]/30"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#383838] hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-blue backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            if (link.children) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className={`w-full flex items-center justify-between font-inter text-base font-medium py-3 border-b border-white/10 transition-colors ${
                      isAboutActive ? 'text-[#d4a53a]' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                    <RiArrowDownSLine
                      size={18}
                      className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {aboutOpen && (
                    <div className="flex flex-col pl-4 border-b border-white/10">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-inter text-sm font-medium py-2.5 border-b border-white/5 transition-colors ${
                          pathname === link.href ? 'text-[#d4a53a]' : 'text-white/60 hover:text-[#d4a53a]'
                        }`}
                      >
                        About Us
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className={`font-inter text-sm font-medium py-2.5 border-b border-white/5 last:border-0 transition-colors ${
                            pathname === child.href ? 'text-[#d4a53a]' : 'text-white/60 hover:text-[#d4a53a]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-inter text-base font-medium py-3 border-b border-white/10 transition-colors ${
                  isActive ? 'text-[#d4a53a]' : 'text-white/80 hover:text-[#d4a53a]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#d4a53a] hover:bg-[#d4a53a] text-white font-bold text-sm px-6 py-3 rounded-full text-center transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
