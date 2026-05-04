import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Jexpress Tourist Transport Cooperative',
  description: 'Privacy Policy for Jexpress Tourist Transport Cooperative (JTTC). Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://www.jexpresstransport.com/privacy-policy' },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'May 1, 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24"
          style={{ background: '#383838' }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-[#f58c23] font-inter text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Legal
              </span>
              <h1 className="font-sans font-black text-white text-4xl sm:text-5xl leading-tight text-balance mb-4">
                Privacy <span className="text-[#f58c23]">Policy</span>
              </h1>
              <p className="font-inter text-white/60 text-sm">
                Effective Date: {EFFECTIVE_DATE}
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, #f58c23, transparent)' }}
          />
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-sm max-w-none font-inter text-[#383838]" style={{ lineHeight: '1.8' }}>

              <p className="text-[#6b6b6b] text-base leading-relaxed mb-10">
                Jexpress Tourist Transport Cooperative (<strong>"JTTC"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>) operates the website{' '}
                <a href="https://www.jexpresstransport.com" className="text-[#f58c23]">www.jexpresstransport.com</a>{' '}
                (the <strong>"Site"</strong>). This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
                By using our Site, you agree to the practices described in this policy.
              </p>

              {[
                {
                  title: '1. Information We Collect',
                  content: (
                    <>
                      <p>We collect information you voluntarily provide through our contact and booking forms, including:</p>
                      <ul>
                        <li><strong>Identity data:</strong> Full name</li>
                        <li><strong>Contact data:</strong> Email address, phone number</li>
                        <li><strong>Organization data:</strong> Company, agency, or organization name</li>
                        <li><strong>Service data:</strong> Service type requested, travel or preferred date, pickup and drop-off locations, number of passengers, preferred vehicle type</li>
                        <li><strong>Message content:</strong> Any additional notes, special requests, or inquiry details you include</li>
                      </ul>
                      <p>We also automatically collect certain technical data when you visit the Site:</p>
                      <ul>
                        <li>IP address and general geographic location</li>
                        <li>Browser type and version</li>
                        <li>Pages visited, time on site, referral source</li>
                        <li>Device and operating system information</li>
                        <li>Session recordings and heatmaps (via Microsoft Clarity)</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: '2. How We Use Your Information',
                  content: (
                    <>
                      <p>We use the information we collect to:</p>
                      <ul>
                        <li>Respond to transport booking requests and general inquiries</li>
                        <li>Send confirmation emails to verify we received your submission</li>
                        <li>Coordinate transport arrangements and communicate service details</li>
                        <li>Improve our website content, user experience, and service offerings</li>
                        <li>Analyze website traffic and visitor behavior to understand how our Site is used</li>
                        <li>Comply with applicable legal obligations</li>
                      </ul>
                      <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
                    </>
                  ),
                },
                {
                  title: '3. Third-Party Services We Use',
                  content: (
                    <>
                      <p>We use the following third-party services that may collect or process data on our behalf:</p>
                      <ul>
                        <li>
                          <strong>Resend</strong> — Email delivery service used to send and receive form submission emails.
                          Your submitted form data is transmitted through Resend's infrastructure.
                          See <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Resend's Privacy Policy</a>.
                        </li>
                        <li>
                          <strong>Google Analytics (GA4)</strong> — We use Google Analytics to track website traffic and usage patterns.
                          Google Analytics uses cookies to collect anonymized data.
                          See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Google's Privacy Policy</a>.
                        </li>
                        <li>
                          <strong>Microsoft Clarity</strong> — We use Microsoft Clarity for session recordings and behavioral analytics to improve our website.
                          Clarity may record mouse movements, clicks, and scrolling.
                          See <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Microsoft's Privacy Statement</a>.
                        </li>
                        <li>
                          <strong>Vercel Analytics</strong> — Our hosting provider, Vercel, provides privacy-focused analytics on web performance and traffic.
                          See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Vercel's Privacy Policy</a>.
                        </li>
                        <li>
                          <strong>Google Maps</strong> — Our Contact page embeds a Google Maps iframe to display our office location.
                          See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Google's Privacy Policy</a>.
                        </li>
                        <li>
                          <strong>Facebook / Meta</strong> — We have a floating Messenger chat button that links to our Facebook page.
                          Clicking it redirects you to Facebook's platform, which is governed by <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#f58c23]">Meta's Privacy Policy</a>.
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: '4. Cookies',
                  content: (
                    <>
                      <p>Our Site uses cookies — small text files stored on your device — to enhance your experience and enable analytics. The cookies we use include:</p>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '12px' }}>
                        <thead>
                          <tr style={{ background: '#f9f4ef' }}>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e8e0d8' }}>Cookie</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e8e0d8' }}>Provider</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e8e0d8' }}>Purpose</th>
                            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e8e0d8' }}>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ['_ga', 'Google Analytics', 'Distinguishes unique users', '2 years'],
                            ['_ga_*', 'Google Analytics', 'Maintains session state', '2 years'],
                            ['_gid', 'Google Analytics', 'Distinguishes users', '24 hours'],
                            ['_clck', 'Microsoft Clarity', 'Identifies user across pages', '1 year'],
                            ['_clsk', 'Microsoft Clarity', 'Connects multiple page views', '1 day'],
                            ['cookie_consent', 'jexpresstransport.com', 'Stores your cookie preference', '1 year'],
                          ].map(([name, provider, purpose, duration]) => (
                            <tr key={name} style={{ borderBottom: '1px solid #e8e0d8' }}>
                              <td style={{ padding: '10px', fontFamily: 'monospace', fontSize: '12px' }}>{name}</td>
                              <td style={{ padding: '10px' }}>{provider}</td>
                              <td style={{ padding: '10px' }}>{purpose}</td>
                              <td style={{ padding: '10px' }}>{duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p>
                        You can control cookies through your browser settings or our cookie consent banner.
                        Note that disabling analytics cookies does not affect your ability to use the Site.
                      </p>
                    </>
                  ),
                },
                {
                  title: '5. Data Retention',
                  content: (
                    <p>
                      Form submission data sent to us via email is retained for as long as necessary to fulfill your service request or respond to your inquiry,
                      and in accordance with our operational and legal requirements. Analytics data is retained per the policies of the respective analytics providers.
                      We do not store form submissions in a database on our servers beyond the email transmission.
                    </p>
                  ),
                },
                {
                  title: '6. Your Rights',
                  content: (
                    <>
                      <p>Depending on your location, you may have the right to:</p>
                      <ul>
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to or restrict the processing of your data</li>
                        <li>Withdraw consent to cookie-based tracking at any time</li>
                      </ul>
                      <p>
                        To exercise any of these rights, please contact us at{' '}
                        <a href="mailto:inquire@jexpresstransport.com" className="text-[#f58c23]">inquire@jexpresstransport.com</a>.
                      </p>
                    </>
                  ),
                },
                {
                  title: '7. Data Security',
                  content: (
                    <p>
                      We take reasonable technical and organizational measures to protect the information transmitted through our Site.
                      Our Site is served over HTTPS. Form submissions are transmitted securely via Resend's encrypted infrastructure.
                      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  ),
                },
                {
                  title: '8. Children\'s Privacy',
                  content: (
                    <p>
                      Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children.
                      If you believe a child has submitted information through our Site, please contact us so we can remove it.
                    </p>
                  ),
                },
                {
                  title: '9. Changes to This Policy',
                  content: (
                    <p>
                      We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                      We encourage you to review this policy periodically. Continued use of the Site after changes constitutes acceptance of the updated policy.
                    </p>
                  ),
                },
                {
                  title: '10. Contact Us',
                  content: (
                    <>
                      <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                      <ul>
                        <li><strong>Email:</strong> <a href="mailto:inquire@jexpresstransport.com" className="text-[#f58c23]">inquire@jexpresstransport.com</a></li>
                        <li><strong>Phone:</strong> +63 916 611 2928 / +63 919 009 1985 / +63 2 8743 9021</li>
                        <li><strong>Address:</strong> Espasyo Learning and Recreation Hub, #6 Torres Bugallon Street, Marikina Heights, Marikina City, Philippines</li>
                      </ul>
                    </>
                  ),
                },
              ].map((section) => (
                <div key={section.title} className="mb-10">
                  <h2 className="font-sans font-black text-[#383838] text-xl mb-4 pb-2 border-b border-[#e8e0d8]">
                    {section.title}
                  </h2>
                  <div className="text-[#6b6b6b] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_p]:mb-3 [&_a]:text-[#f58c23] [&_strong]:text-[#383838]">
                    {section.content}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
