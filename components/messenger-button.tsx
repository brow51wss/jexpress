'use client'

import { RiMessengerLine } from 'react-icons/ri'

export default function MessengerButton() {
  return (
    <a
      href="https://www.messenger.com/t/jexpressjttc"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#f58c23] hover:bg-[#d97b1a] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#f58c23]/40 transition-all duration-200 hover:scale-110 active:scale-95"
    >
      <RiMessengerLine size={26} />
    </a>
  )
}
