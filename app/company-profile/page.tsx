import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProfileHero from '@/components/profile-hero'
import ProfileOverview from '@/components/profile-overview'
import ProfileFleet from '@/components/profile-fleet'
import ProfileCompliance from '@/components/profile-compliance'
import ProfileLeadership from '@/components/profile-leadership'
import ProfileContact from '@/components/profile-contact'

export const metadata: Metadata = {
  title: 'Company Profile | Jexpress Tourist Transport Cooperative',
  description:
    'Learn about Jexpress Tourist Transport Cooperative (JTTC) — our services, fleet, registrations, leadership, and contact information.',
  openGraph: {
    title: 'Company Profile | Jexpress Tourist Transport Cooperative',
    description:
      'JTTC provides dependable transport solutions for tourism, logistics, hospitals, companies, and the commuting public.',
    url: 'https://jexpressjttc.com/company-profile',
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
    title: 'Company Profile | Jexpress Tourist Transport Cooperative',
    description:
      'JTTC provides dependable transport solutions for tourism, logistics, hospitals, companies, and the commuting public.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jexpressjttc.com/company-profile' },
}

export default function CompanyProfilePage() {
  return (
    <>
      <Header />
      <main>
        <ProfileHero />
        <ProfileOverview />
        <ProfileFleet />
        <ProfileCompliance />
        <ProfileLeadership />
        <ProfileContact />
      </main>
      <Footer />
    </>
  )
}
