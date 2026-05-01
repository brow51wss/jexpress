import type { Metadata } from 'next'
import { Lato, Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
  description:
    'Jexpress Tourist Transport Cooperative provides safe, comfortable, and reliable tourist transport services in Bloomingdale, DC. Serving DAR and OCD with professional, courteous service.',
  keywords: [
    'tourist transport',
    'cooperative transport',
    'Bloomingdale DC transport',
    'DAR transport',
    'OCD transport',
    'reliable transport services',
    'Jexpress',
  ],
  authors: [{ name: 'Jexpress Tourist Transport Cooperative' }],
  creator: 'Jexpress Tourist Transport Cooperative',
  metadataBase: new URL('https://jexpresstransport.com'),
  alternates: {
    canonical: 'https://jexpresstransport.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jexpresstransport.com',
    siteName: 'Jexpress Tourist Transport Cooperative',
    title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
    description:
      'Safe, comfortable, and reliable tourist transport services in Bloomingdale, DC. Professional and courteous service for DAR and OCD.',
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
    title: 'Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services',
    description:
      'Safe, comfortable, and reliable tourist transport services in Bloomingdale, DC.',
    images: ['https://www.jexpresstransport.com/og-image.png'],
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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
    generator: 'v0.app'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jexpress Tourist Transport Cooperative',
  description:
    'Safe, comfortable, and reliable tourist transport services in Bloomingdale, DC.',
  url: 'https://jexpresstransport.com',
  telephone: '+6309190091985',
  email: 'brow5187+jexpress@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bloomingdale',
    addressRegion: 'DC',
    addressCountry: 'US',
  },
  sameAs: ['https://www.facebook.com/jexpressjttc'],
  serviceType: 'Tourist Transport Services',
  areaServed: 'Bloomingdale, DC, US',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <meta name="theme-color" content="#f58c23" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jexpresstransport.com" />
        <link rel="icon" href="/favicon.png" />
        <title>Jexpress Tourist Transport Cooperative | Safe & Reliable Transport Services</title>
        <meta
          name="description"
          content="Jexpress Tourist Transport Cooperative provides safe, comfortable, and reliable tourist transport services in Bloomingdale, DC. Serving DAR and OCD with professional, courteous service."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lato.variable} ${inter.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
