import { HeroSection } from '../components/Hero/HeroSection'
import { GallerySection } from '../components/Gallery/GallerySection'
import { HighlightsSection } from '../components/Amenities/HighlightsSection'
import { CtaSection } from '../components/Booking/CtaSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <HighlightsSection />
      <CtaSection />
    </>
  )
}
