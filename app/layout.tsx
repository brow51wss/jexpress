import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import MessengerButton from '@/components/messenger-button'
import CookieConsent from '@/components/cookie-consent'
import AnalyticsScripts from '@/components/analytics-scripts'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
  description:
    'Jexpress Tourist Transport Cooperative provides safe, comfortable, and reliable tourist transport services in Marikina City, Philippines. Serving government agencies and organizations with professional, courteous service.',
  keywords: [
    'tourist transport',
    'cooperative transport',
    'Marikina transport',
    'government agency transport',
    'airport transfer Philippines',
    'reliable transport services',
    'Jexpress',
  ],
  authors: [{ name: 'Jexpress Tourist Transport Cooperative' }],
  creator: 'Jexpress Tourist Transport Cooperative',
  metadataBase: new URL('https://www.jexpresstransport.com'),
  alternates: {
    canonical: 'https://www.jexpresstransport.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jexpresstransport.com',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
    description:
      'Safe, comfortable, and reliable tourist transport services in Marikina City, Philippines. Professional and courteous service for government agencies and organizations.',
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
    title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
    description:
      'Safe, comfortable, and reliable tourist transport services in Bloomingdale, DC.',
    images: ['https://www.jexpresstransport.com/og-image2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/branding/JExpress-Icon.webp',
    shortcut: '/branding/JExpress-Icon.webp',
    apple: '/branding/JExpress-Icon.webp',
  },
    generator: 'v0.app'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jexpress Tourist Transport Cooperative',
  description:
    'Safe, comfortable, and reliable tourist transport services in Marikina City, Philippines.',
  url: 'https://www.jexpresstransport.com',
  telephone: '+639190091985',
  email: 'inquire@jexpresstransport.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#6 Torres Bugallon Street, Marikina Heights',
    addressLocality: 'Marikina City',
    addressRegion: 'Metro Manila',
    addressCountry: 'PH',
  },
  sameAs: ['https://www.facebook.com/jexpresstransport'],
  serviceType: 'Tourist Transport Services',
  areaServed: 'Marikina City, Philippines',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#d4a53a" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.jexpresstransport.com" />
        <link rel="icon" href="/branding/JExpress-Icon.webp" />
        <title>Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services</title>
        <meta
          name="description"
          content="Jexpress Tourist Transport Cooperative provides safe, comfortable, and reliable tourist transport services in Marikina City, Philippines. Serving government agencies and organizations with professional, courteous service."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <AnalyticsScripts />
        <ScrollToTop />
        {children}
        <MessengerButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
