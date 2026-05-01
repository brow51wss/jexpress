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
    'Discover why Jexpress Tourist Transport Cooperative is the trusted transport partner for tourism, logistics, hospitals, and organizations. Professional drivers, safety-first operations, and integrity-driven service.',
  openGraph: {
    title: 'Why Choose JTTC | Jexpress Tourist Transport Cooperative',
    description:
      'Professional drivers, safety-first operations, and integrity-driven transport service. Learn why JTTC is the right partner for your organization.',
    url: 'https://jexpresstransport.com/why-us',
    siteName: 'Jexpress Tourist Transport Cooperative',
    type: 'website',
    images: [
      {
        url: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Jexpress%20Tourist%20Transport%20Cooperative/1775101248882-logo_no_bg.png',
        width: 800,
        height: 600,
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
  alternates: { canonical: 'https://jexpresstransport.com/why-us' },
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
