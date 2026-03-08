import { HeroSection } from '../components/Hero/HeroSection'
import { GallerySection } from '../components/Gallery/GallerySection'
import { TrustHighlights } from '../components/Trust/TrustHighlights'
import { HighlightsSection } from '../components/Amenities/HighlightsSection'
import { ReviewSection } from '../components/Trust/ReviewSection'
import { HostProfile } from '../components/Trust/HostProfile'
import { BookingSteps } from '../components/Trust/BookingSteps'
import { SafetyLegal } from '../components/Trust/SafetyLegal'
import { CtaSection } from '../components/Booking/CtaSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />

      <div className="section-container">
        <TrustHighlights />
        <HighlightsSection />
        <ReviewSection />
        <HostProfile />
        <BookingSteps />
        <SafetyLegal />
      </div>

      <CtaSection />
    </>
  )
}