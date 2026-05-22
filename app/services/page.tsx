import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesHero from '@/components/services-hero'
import ServicesIntro from '@/components/services-intro'
import ServicesList from '@/components/services-list'
import ServicesFleet from '@/components/services-fleet'
import ServicesWhy from '@/components/services-why'
import ServicesCta from '@/components/services-cta'

export const metadata: Metadata = {
  title: 'Our Services | Jexpress Tourist Transport Cooperative',
  description:
    'Explore the full range of transport and allied services offered by Jexpress Tourist Transport Cooperative — tourist transport, shuttle services, passenger solutions, and more.',
  alternates: {
    canonical: 'https://www.jexpresstransport.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jexpresstransport.com/services',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'Our Services | Jexpress Tourist Transport Cooperative',
    description:
      'Tourist transport, shuttle services, passenger solutions, and allied transport services by JTTC.',
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
    title: 'Our Services | Jexpress Tourist Transport Cooperative',
    description:
      'Tourist transport, shuttle services, passenger solutions, and allied transport services by JTTC.',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <ServicesFleet />
      <ServicesWhy />
      <ServicesCta />
      <Footer />
    </main>
  )
}
