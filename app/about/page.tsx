import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutHero from '@/components/about-hero'
import AboutStory from '@/components/about-story'
import AboutMission from '@/components/about-mission'
import AboutTeam from '@/components/about-team'
import AboutCta from '@/components/about-cta'

export const metadata: Metadata = {
  title: 'About Us | Jexpress Tourist Transport Cooperative',
  description:
    'Learn about Jexpress Tourist Transport Cooperative — our story, mission, values, and the team behind safe, reliable, and professional transport services in Bloomingdale, DC.',
  alternates: {
    canonical: 'https://www.jexpresstransport.com/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jexpresstransport.com/about',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'About Us | Jexpress Tourist Transport Cooperative',
    description:
      'Our story, mission, values, and team behind safe and reliable tourist transport in Bloomingdale, DC.',
    images: [
      {
        url: 'https://www.jexpresstransport.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jexpress Tourist Transport Cooperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Jexpress Tourist Transport Cooperative',
    description:
      'Our story, mission, values, and team behind safe and reliable tourist transport in Bloomingdale, DC.',
  },
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutTeam />
      <AboutCta />
      <Footer />
    </main>
  )
}
