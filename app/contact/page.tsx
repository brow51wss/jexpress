import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactHero from '@/components/contact-hero'
import ContactInfo from '@/components/contact-info'
import ContactForm from '@/components/contact-form'
import ContactMap from '@/components/contact-map'
import ContactCta from '@/components/contact-cta'

export const metadata: Metadata = {
  title: 'Contact Us | Jexpress Tourist Transport Cooperative',
  description:
    'Get in touch with Jexpress Tourist Transport Cooperative (JTTC) for transport inquiries, service requests, and partnership opportunities. Call, email, or visit our office in Marikina City.',
  openGraph: {
    title: 'Contact Us | Jexpress Tourist Transport Cooperative',
    description:
      'Reach out to JTTC for dependable tourist transport, shuttle services, and logistics support. We are ready to assist with your transport requirements.',
    url: 'https://jexpress.varakit.com/contact',
    siteName: 'Jexpress Tourist Transport Cooperative',
    images: [
      {
        url: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Jexpress%20Tourist%20Transport%20Cooperative/1775101248882-logo_no_bg.png',
        width: 1200,
        height: 630,
        alt: 'Jexpress Tourist Transport Cooperative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Jexpress Tourist Transport Cooperative',
    description:
      'Get in touch with JTTC for reliable tourist transport services and transport solutions.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jexpress.varakit.com/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactCta />
      <Footer />
    </main>
  )
}
