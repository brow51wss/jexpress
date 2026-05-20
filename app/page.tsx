import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import WhyUs from '@/components/why-us'
import ContactClient from '@/components/contact-client'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <ContactClient />
      <Footer />
    </main>
  )
}
