'use client'

import dynamic from 'next/dynamic'

const BookForm = dynamic(() => import('@/components/book-form'), { ssr: false })

export default function BookFormClient() {
  return <BookForm />
}
