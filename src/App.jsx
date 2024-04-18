import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import './index.css'
import Workflow from './components/Workflow.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
