import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import './index.css'
import Workflow from './components/Workflow.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
      </div>
    </>
  )
}

export default App
