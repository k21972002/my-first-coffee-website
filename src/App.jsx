import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Story from './components/Story'
import Services from './components/Services'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Visit from './components/Visit'
import FAQSection from './components/FAQSection'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Story />
        <Services />
        <Menu />
        <Gallery />
        <Testimonials />
        <Visit />
        <FAQSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
