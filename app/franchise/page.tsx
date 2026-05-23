import type { Metadata } from 'next'
import FranchiseContent from '@/components/franchise-content'

export const metadata: Metadata = {
  title: 'Franchise Opportunities | Jexpress Transport',
  description:
    'Become a Jexpress Transport franchise partner. Start your own transport business with a proven system, full support, and an established network.',
  robots: 'noindex, nofollow',
}

export default function FranchisePage() {
  return <FranchiseContent />
}
