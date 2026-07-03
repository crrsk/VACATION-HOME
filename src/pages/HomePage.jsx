import { useEffect } from 'react'
import { HeroSection } from '../components/Hero/HeroSection'
import { GallerySection } from '../components/Gallery/GallerySection'
import { TrustHighlights } from '../components/Trust/TrustHighlights'
import { HighlightsSection } from '../components/Amenities/HighlightsSection'
import { ReviewSection } from '../components/Trust/ReviewSection'
import { HostProfile } from '../components/Trust/HostProfile'
import { BookingSteps } from '../components/Trust/BookingSteps'
import { SafetyLegal } from '../components/Trust/SafetyLegal'
import { CtaSection } from '../components/Booking/CtaSection'
import { LocationSection } from '../components/Location/LocationSection'

export function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const headers = document.querySelectorAll('.section-header h2, .cta-section h2')
    headers.forEach((h) => observer.observe(h))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSection />
      <TrustHighlights />
      <GallerySection />

      <div className="section-container">
        <HighlightsSection />
        <ReviewSection />
        <HostProfile />
        <LocationSection />
        <BookingSteps />
        <SafetyLegal />
      </div>

      <CtaSection />
    </>
  )
}
