'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/company-profile' },
      { label: 'Leadership', href: '/leadership' },
    ],
  },
  { label: 'Why Us', href: '/why-us' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fafafa] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/branding/JExpress-Icon.webp"
            alt="JExpress Icon"
            width={100}
            height={100}
            className={`h-7 w-auto lg:h-9 transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
            priority
          />
          <div className="relative h-10 w-28 sm:w-44 flex-shrink-0">
            <Image
              src="/branding/JExpress-Wordmark.webp"
              alt="JExpress Tourist Transport Cooperative"
              fill
              className={`object-contain object-left transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
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
                      scrolled
                        ? isAboutActive ? 'text-[#383838]' : 'text-[#383838]/70 group-hover:text-[#383838]'
                        : isAboutActive ? 'text-[#fed16c]' : 'text-white/80 group-hover:text-[#fed16c]'
                    }`}
                  >
                    {link.label}
                    <RiArrowDownSLine
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#f58c23] transition-all duration-300 ${
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
                                ? 'text-[#fed16c] bg-white/5'
                                : 'text-white/70 hover:text-[#fed16c] hover:bg-white/5'
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
                  scrolled
                    ? isActive ? 'text-[#383838]' : 'text-[#383838]/70 hover:text-[#383838]'
                    : isActive ? 'text-[#fed16c]' : 'text-white/80 hover:text-[#fed16c]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#f58c23] transition-all duration-300 ${
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
            className="hidden lg:inline-flex items-center gap-2 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#f58c23]/30"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#383838] hover:bg-black/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#383838]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            if (link.children) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className={`w-full flex items-center justify-between font-inter text-base font-medium py-3 border-b border-white/10 transition-colors ${
                      isAboutActive ? 'text-[#fed16c]' : 'text-white/80'
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
                          pathname === link.href ? 'text-[#fed16c]' : 'text-white/60 hover:text-[#fed16c]'
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
                            pathname === child.href ? 'text-[#fed16c]' : 'text-white/60 hover:text-[#fed16c]'
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
                  isActive ? 'text-[#fed16c]' : 'text-white/80 hover:text-[#fed16c]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-6 py-3 rounded-full text-center transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
