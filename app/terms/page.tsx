import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Jexpress Tourist Transport Cooperative',
  description: 'Terms of Use for Jexpress Tourist Transport Cooperative (JTTC). Read our terms and conditions before using our website and services.',
  alternates: { canonical: 'https://www.jexpresstransport.com/terms' },
  robots: { index: true, follow: true },
}

const EFFECTIVE_DATE = 'May 1, 2026'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden pt-24 bg-brand-blue">
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow-dash text-[#d4a53a] mb-4">
                Legal
              </span>
              <h1 className="font-heading text-white text-4xl sm:text-5xl leading-tight text-balance mb-4">
                Terms of <span className="text-[#d4a53a]">Use</span>
              </h1>
              <p className="font-inter text-white/60 text-sm">
                Effective Date: {EFFECTIVE_DATE}
              </p>
            </div>
          </div>
          {/* Bottom wave divider */}
          <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: 56 }} aria-hidden="true">
              <path d="M0,22 C720,24 720,24 1440,28 L1440,48 C720,44 720,44 0,26 Z" fill="#d4a53a" />
              <path d="M0,26 C720,44 720,44 1440,48 L1440,56 L0,56 Z" fill="#f5f5f5" />
            </svg>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="font-inter text-[#383838]" style={{ lineHeight: '1.8' }}>

              <p className="text-[#6b6b6b] text-base leading-relaxed mb-10">
                These Terms of Use (<strong>"Terms"</strong>) govern your access to and use of the website{' '}
                <a href="https://www.jexpresstransport.com" className="text-[#d4a53a]">www.jexpresstransport.com</a>{' '}
                (the <strong>"Site"</strong>) operated by Jexpress Tourist Transport Cooperative (<strong>"JTTC"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>).
                By accessing or using our Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
              </p>

              {[
                {
                  title: '1. Use of the Site',
                  content: (
                    <>
                      <p>
                        The Site is provided for informational purposes and to allow you to submit service inquiries and booking requests to JTTC.
                        You agree to use the Site only for lawful purposes and in a manner consistent with these Terms.
                      </p>
                      <p>You must not:</p>
                      <ul>
                        <li>Use the Site for any unlawful or fraudulent purpose</li>
                        <li>Submit false or misleading information through our forms</li>
                        <li>Attempt to gain unauthorized access to any part of our systems</li>
                        <li>Interfere with the proper functioning of the Site</li>
                        <li>Scrape, crawl, or reproduce content from the Site without our written permission</li>
                      </ul>
                    </>
                  ),
                },
                {
                  title: '2. Booking Requests and Service Inquiries',
                  content: (
                    <>
                      <p>
                        Submitting a booking request or inquiry through this Site does <strong>not</strong> constitute a confirmed reservation or binding service agreement.
                        All submissions are treated as requests pending review by our team.
                      </p>
                      <p>
                        A service engagement is only confirmed upon written agreement between JTTC and the client, which may include a service contract, confirmation letter, or similar documentation.
                        JTTC reserves the right to accept or decline any service request at its sole discretion.
                      </p>
                      <p>
                        All transport services provided by JTTC are subject to vehicle availability, operational capacity, applicable permits, and regulatory compliance.
                      </p>
                    </>
                  ),
                },
                {
                  title: '3. Accuracy of Information',
                  content: (
                    <p>
                      We strive to ensure that all information on this Site is accurate and up to date. However, we make no warranties or representations regarding the completeness,
                      accuracy, or timeliness of any content on the Site. Service details, pricing, vehicle availability, and operational information are subject to change without notice.
                      Please contact us directly to confirm any service-specific information before making decisions based on Site content.
                    </p>
                  ),
                },
                {
                  title: '4. Intellectual Property',
                  content: (
                    <p>
                      All content on this Site — including text, images, logos, graphics, and design — is the property of Jexpress Tourist Transport Cooperative or its licensors and is protected by applicable intellectual property laws.
                      You may not copy, reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent.
                    </p>
                  ),
                },
                {
                  title: '5. Third-Party Links and Services',
                  content: (
                    <p>
                      The Site may contain links to third-party websites or services, including Facebook, Google Maps, and Facebook Messenger.
                      These links are provided for your convenience only. JTTC does not control and is not responsible for the content, privacy practices,
                      or terms of any third-party sites. Your use of third-party services is governed by their respective terms and policies.
                    </p>
                  ),
                },
                {
                  title: '6. Limitation of Liability',
                  content: (
                    <>
                      <p>
                        To the fullest extent permitted by applicable law, JTTC shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                        arising from your access to or use of (or inability to access or use) this Site, including reliance on any information provided herein.
                      </p>
                      <p>
                        Our total liability for any claim arising out of your use of the Site shall not exceed the amount, if any, paid by you to JTTC in connection with the specific service at issue.
                      </p>
                    </>
                  ),
                },
                {
                  title: '7. Disclaimers',
                  content: (
                    <p>
                      This Site is provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis without warranties of any kind, either express or implied,
                      including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                      JTTC does not warrant that the Site will be uninterrupted, error-free, or free of harmful components.
                    </p>
                  ),
                },
                {
                  title: '8. Privacy',
                  content: (
                    <p>
                      Your use of the Site is also governed by our{' '}
                      <a href="/privacy-policy" className="text-[#d4a53a]">Privacy Policy</a>,
                      which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your information.
                    </p>
                  ),
                },
                {
                  title: '9. Governing Law',
                  content: (
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines.
                      Any disputes arising from or relating to these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the appropriate courts in Marikina City, Philippines.
                    </p>
                  ),
                },
                {
                  title: '10. Changes to These Terms',
                  content: (
                    <p>
                      We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date.
                      Your continued use of the Site after any such changes constitutes your acceptance of the revised Terms.
                      We encourage you to review these Terms periodically.
                    </p>
                  ),
                },
                {
                  title: '11. Contact Us',
                  content: (
                    <>
                      <p>If you have any questions about these Terms, please contact us:</p>
                      <ul>
                        <li><strong>Email:</strong> <a href="mailto:inquire@jexpresstransport.com" className="text-[#d4a53a]">inquire@jexpresstransport.com</a></li>
                        <li><strong>Phone:</strong> +63 919 009 1985 (Booking) / +63 2 8743 9021 (Office)</li>
                        <li><strong>Address:</strong> Espasyo Learning and Recreation Hub, #6 Torres Bugallon Street, Marikina Heights, Marikina City, Philippines</li>
                      </ul>
                    </>
                  ),
                },
              ].map((section) => (
                <div key={section.title} className="mb-10">
                  <h2 className="font-heading text-[#383838] text-xl mb-4 pb-2 border-b border-[#f5f5f5]">
                    {section.title}
                  </h2>
                  <div className="text-[#6b6b6b] text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_p]:mb-3 [&_a]:text-[#d4a53a] [&_strong]:text-[#383838]">
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
