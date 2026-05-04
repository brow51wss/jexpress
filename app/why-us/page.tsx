import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhyUsHero from '@/components/whyus-hero'
import WhyUsIntro from '@/components/whyus-intro'
import WhyUsReasons from '@/components/whyus-reasons'
import WhyUsValues from '@/components/whyus-values'
import WhyUsTrust from '@/components/whyus-trust'
import WhyUsCta from '@/components/whyus-cta'

export const metadata: Metadata = {
  title: 'Why Choose JTTC | Jexpress Tourist Transport Cooperative',
  description:
    'Discover why Jexpress Tourist Transport Cooperative is the trusted transport partner for tourism, hospitals, and organizations. Professional drivers, safety-first operations, and integrity-driven service.',
  openGraph: {
    title: 'Why Choose JTTC | Jexpress Tourist Transport Cooperative',
    description:
      'Professional drivers, safety-first operations, and integrity-driven transport service. Learn why JTTC is the right partner for your organization.',
    url: 'https://www.jexpresstransport.com/why-us',
    siteName: 'Jexpress Tourist Transport Cooperative',
    type: 'website',
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
    title: 'Why Choose JTTC | Jexpress Tourist Transport Cooperative',
    description:
      'Professional drivers, safety-first operations, and integrity-driven transport service.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.jexpresstransport.com/why-us' },
}

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main>
        <WhyUsHero />
        <WhyUsIntro />
        <WhyUsReasons />
        <WhyUsValues />
        <WhyUsTrust />
        <WhyUsCta />
      </main>
      <Footer />
    </>
  )
}
