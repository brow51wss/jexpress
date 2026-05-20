'use client'

import dynamic from 'next/dynamic'

const Contact = dynamic(() => import('@/components/contact'), { ssr: false })

export default function ContactClient() {
  return <Contact />
}
