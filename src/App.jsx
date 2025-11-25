import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import About from './components/ui/About'
import Projects from './components/ui/Projects'
import Contact from './components/ui/Contact'
import Experience from './components/ui/Experience'
import Footer from './components/ui/Footer'
import Scene from './components/canvas/Scene'
import Stars from './components/canvas/Stars'
import Hero3D from './components/canvas/Hero3D'
import WaterShaderPlane from './components/canvas/WaterShaderPlane'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import { useTranslation } from './context/TranslationContext'

function App() {
  const { language } = useTranslation()

  useEffect(() => {
    // Update document direction for RTL languages
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden app-shell">
        <div className="aurora-background" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <div className="noise-layer" aria-hidden />


        <div className="relative z-10 flex flex-col gap-6">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center pb-16">
            <Navbar />
            <Hero />
          </div>
        <Scene>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Stars />
          <Hero3D />
          <WaterShaderPlane />
        </Scene>

          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
