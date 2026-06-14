import Header from './components/Header'
import FloatingCTA from './components/FloatingCTA'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import CasesSection from './components/sections/CasesSection'
import ReviewsSection from './components/sections/ReviewsSection'
import ServicesSection from './components/sections/ServicesSection'
import PremiumSection from './components/sections/PremiumSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <HeroSection />
      <AboutSection />
      <CasesSection />
      <ReviewsSection />
      <ServicesSection />
      <PremiumSection />
      <ContactSection />
      <Footer />
    </>
  )
}
