import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
