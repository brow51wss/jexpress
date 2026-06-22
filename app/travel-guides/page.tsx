import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import GuidesHero from '@/components/guides-hero'
import GuidesGrid from '@/components/guides-grid'
import GuidesCta from '@/components/guides-cta'

export const metadata: Metadata = {
  title: 'Travel Guides | Jexpress Tourist Transport Cooperative',
  description:
    'Discover top Philippine destinations, travel tips, and itineraries curated by the Jexpress team. Let us be your trusted transport partner on every adventure.',
  alternates: {
    canonical: 'https://www.jexpresstransport.com/travel-guides',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jexpresstransport.com/travel-guides',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'Travel Guides | Jexpress Tourist Transport Cooperative',
    description:
      'Top Philippine destinations, travel tips, and itineraries from the Jexpress team.',
    images: [
      {
        url: 'https://www.jexpresstransport.com/og-image2.png',
        width: 1200,
        height: 630,
        alt: 'Jexpress Tourist Transport Cooperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Guides | Jexpress Tourist Transport Cooperative',
    description:
      'Top Philippine destinations, travel tips, and itineraries from the Jexpress team.',
  },
}

export default function TravelGuidesPage() {
  return (
    <main>
      <Header />
      <GuidesHero />
      <GuidesGrid />
      <GuidesCta />
      <Footer />
    </main>
  )
}
