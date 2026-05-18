'use client'

import Link from 'next/link'
import { RiMessengerLine } from 'react-icons/ri'

export default function MessengerButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Book Now + Services only on mobile/tablet */}
      <Link
        href="/services"
        className="lg:hidden bg-white text-[#383838] font-bold text-sm px-5 py-2.5 rounded-full shadow-lg border border-[#e8e0d8] transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Services
      </Link>
      <Link
        href="/book"
        className="lg:hidden bg-[#f58c23] hover:bg-[#d97b1a] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#f58c23]/30 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Book Now
      </Link>

      {/* Messenger icon — always visible */}
      <a
        href="https://www.messenger.com/t/jexpressjttc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Messenger"
        className="w-14 h-14 bg-[#f58c23] hover:bg-[#d97b1a] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#f58c23]/40 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <RiMessengerLine size={26} />
      </a>
    </div>
  )
}
