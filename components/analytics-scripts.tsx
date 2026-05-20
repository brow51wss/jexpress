'use client'

import Script from 'next/script'

export default function AnalyticsScripts() {
  return (
    <>
      {/* 1. Define gtag stub + consent defaults inline — must run before GA loads */}
      <Script
        id="ga-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500,
            });
          `,
        }}
      />

      {/* 2. Load the GA library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WKG78J4XKM"
        strategy="afterInteractive"
      />

      {/* 3. Initialize GA — runs after library is loaded */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('js', new Date());
            gtag('config', 'G-WKG78J4XKM');
          `,
        }}
      />

      {/* 4. Microsoft Clarity */}
      <Script src="/scripts/clarity.js" strategy="afterInteractive" />
    </>
  )
}
