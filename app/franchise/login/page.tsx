import { Suspense } from 'react'
import type { Metadata } from 'next'
import FranchiseLogin from '@/components/franchise-login'

export const metadata: Metadata = {
  title: 'Franchise Portal | Jexpress Tourist Transport Cooperative',
  robots: 'noindex, nofollow',
}

export default function FranchiseLoginPage() {
  return (
    <Suspense>
      <FranchiseLogin />
    </Suspense>
  )
}
