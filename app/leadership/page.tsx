import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import LeadershipHero from '@/components/leadership-hero'
import LeadershipIntro from '@/components/leadership-intro'
import LeadershipBoard from '@/components/leadership-board'
import LeadershipOfficers from '@/components/leadership-officers'
import LeadershipCommittees from '@/components/leadership-committees'
import LeadershipOperations from '@/components/leadership-operations'
import LeadershipOrgChart from '@/components/leadership-orgchart'
import LeadershipTrust from '@/components/leadership-trust'
import LeadershipCta from '@/components/leadership-cta'

export const metadata: Metadata = {
  title: 'Leadership & Organizational Structure | Jexpress Tourist Transport Cooperative',
  description:
    'Meet the board of directors, key officers, committees, and operational team behind Jexpress Tourist Transport Cooperative (JTTC) — organized leadership for dependable transport services.',
  alternates: {
    canonical: 'https://jexpresstransport.com/leadership',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jexpresstransport.com/leadership',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'Leadership & Organizational Structure | Jexpress Tourist Transport Cooperative',
    description:
      'Board of directors, key officers, committees, and operational structure of JTTC.',
    images: [
      {
        url: 'https://fwndqprdqitzrprauvqy.supabase.co/storage/v1/object/public/brand-assets/logos/Jexpress%20Tourist%20Transport%20Cooperative/1775101248882-logo_no_bg.png',
        width: 1200,
        height: 630,
        alt: 'Jexpress Tourist Transport Cooperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership & Organizational Structure | Jexpress Tourist Transport Cooperative',
    description: 'Board of directors, key officers, committees, and operational structure of JTTC.',
  },
}

export default function LeadershipPage() {
  return (
    <main>
      <Header />
      <LeadershipHero />
      <LeadershipIntro />
      <LeadershipBoard />
      <LeadershipOfficers />
      <LeadershipCommittees />
      <LeadershipOperations />
      <LeadershipOrgChart />
      <LeadershipTrust />
      <LeadershipCta />
      <Footer />
    </main>
  )
}
