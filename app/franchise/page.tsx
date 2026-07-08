import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FranchiseContent from '@/components/franchise-content'

export const metadata: Metadata = {
  title: 'Franchise Opportunities | Jexpress Tourist Transport Cooperative',
  description:
    'Become a Jexpress Transport franchise partner. Start your own transport business with a proven system, full support, and an established network.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.jexpresstransport.com/franchise' },
}

export default function FranchisePage() {
  return (
    <main>
      <Header />
      <FranchiseContent />
      <Footer />
    </main>
  )
}
