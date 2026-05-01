import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BookHero from '@/components/book-hero'
import BookIntro from '@/components/book-intro'
import BookForm from '@/components/book-form'
import BookFleet from '@/components/book-fleet'
import BookWhy from '@/components/book-why'
import BookContact from '@/components/book-contact'
import BookCta from '@/components/book-cta'

export const metadata: Metadata = {
  title: 'Book Now | Jexpress Tourist Transport Cooperative',
  description:
    'Submit a booking request with Jexpress Tourist Transport Cooperative (JTTC) for tourist transport, shuttle services, logistics transport, and other transport requirements.',
  openGraph: {
    title: 'Book Now | Jexpress Tourist Transport Cooperative',
    description:
      'Reserve dependable transport services with JTTC. Professional drivers, flexible vehicle options, and reliable service for tourism, logistics, hospitals, and organizations.',
    url: 'https://jexpress.com/book',
    siteName: 'Jexpress Tourist Transport Cooperative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Now | Jexpress Tourist Transport Cooperative',
    description:
      'Submit a booking request with JTTC for dependable transport services across the Philippines.',
  },
  alternates: { canonical: 'https://jexpress.com/book' },
  robots: 'index, follow',
}

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        <BookHero />
        <BookIntro />
        <BookForm />
        <BookFleet />
        <BookWhy />
        <BookContact />
        <BookCta />
      </main>
      <Footer />
    </>
  )
}
