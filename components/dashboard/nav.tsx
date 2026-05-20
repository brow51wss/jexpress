'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  RiFileListLine,
  RiTeamLine,
  RiLogoutBoxLine,
  RiMenuLine,
  RiCloseLine,
  RiPriceTag3Line,
} from 'react-icons/ri'

interface NavProps {
  isSuperAdmin: boolean
  isMarketing: boolean
  email: string
}

export default function DashboardNav({ isSuperAdmin, isMarketing, email }: NavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  async function handleLogout() {
    await fetch('/api/dashboard/logout', { method: 'POST' })
    router.push('/dashboard/login')
    router.refresh()
  }

  const navItems = [
    { href: '/dashboard', label: 'Submissions', icon: RiFileListLine },
    ...(isSuperAdmin || isMarketing
      ? [{ href: '/dashboard/services', label: 'Services', icon: RiPriceTag3Line }]
      : []),
    ...(isSuperAdmin
      ? [{ href: '/dashboard/users', label: 'Users & Groups', icon: RiTeamLine }]
      : []),
  ]

  const NavContent = () => (
    <>
      <div className="px-6 pt-6 pb-4 border-b border-white/10">
        <p className="text-[#d4a53a] font-inter text-xs font-semibold uppercase tracking-widest mb-1">
          JTTC Dashboard
        </p>
        <p className="text-white font-heading text-base truncate">J Express Transport</p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-inter font-medium transition-all duration-200 ${
                active
                  ? 'bg-[#d4a53a]/15 text-[#d4a53a]'
                  : 'text-white/60 hover:text-white hover:bg-[#f5f5f5]/5'
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 pb-6 border-t border-white/10 pt-4">
        <div className="px-3 py-2 mb-2">
          <p className="text-white/40 text-xs font-inter truncate">{email}</p>
          {isSuperAdmin && (
            <span className="inline-block mt-1 text-[10px] font-inter font-semibold uppercase tracking-wider text-[#d4a53a] bg-[#d4a53a]/10 px-2 py-0.5 rounded-full">
              Super Admin
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-inter font-medium text-white/50 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
        >
          <RiLogoutBoxLine size={18} />
          Log Out
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-56 bg-[#2a2a2a] min-h-screen flex-shrink-0">
        <NavContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#2a2a2a] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <p className="text-white font-heading text-sm">JTTC Dashboard</p>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white/60 hover:text-white transition-colors"
        >
          {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute left-0 top-0 bottom-0 w-64 bg-[#2a2a2a] flex flex-col pt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <NavContent />
          </div>
        </div>
      )}

      {/* Mobile top bar spacer */}
      <div className="lg:hidden h-[52px] w-full" style={{ display: 'none' }} />
    </>
  )
}
