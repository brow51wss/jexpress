import type { Metadata } from 'next'
import { Lato, Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import MessengerButton from '@/components/messenger-button'
import CookieConsent from '@/components/cookie-consent'
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
    'Safe, comfortable, and reliable tourist transport services in Marikina City, Philippines.',
  url: 'https://www.jexpresstransport.com',
  telephone: '+639166112928',
  email: 'inquire@jexpresstransport.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#6 Torres Bugallon Street, Marikina Heights',
    addressLocality: 'Marikina City',
    addressRegion: 'Metro Manila',
    addressCountry: 'PH',
  },
  sameAs: ['https://www.facebook.com/jexpressjttc'],
  serviceType: 'Tourist Transport Services',
  areaServed: 'Marikina City, Philippines',
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
        <link rel="canonical" href="https://www.jexpresstransport.com" />
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
        {/* GA Consent Mode — defaults to denied until visitor accepts cookies */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WKG78J4XKM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'G-WKG78J4XKM');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wkao0tzyb6");
            `,
          }}
        />
      </head>
      <body className={`${lato.variable} ${inter.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <MessengerButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
