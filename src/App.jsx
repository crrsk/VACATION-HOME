import './index.css'
import './App.css'
import { LandingHeader } from './components/Layout/LandingHeader'
import { HeroSection } from './components/Hero/HeroSection'
import { GallerySection } from './components/Gallery/GallerySection'
import { HighlightsSection } from './components/Amenities/HighlightsSection'
import { CtaSection } from './components/Booking/CtaSection'

function App() {
  return (
    <div className="page-shell">
      <LandingHeader />
      <main>
        <HeroSection />
        <GallerySection />
        <HighlightsSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default App
