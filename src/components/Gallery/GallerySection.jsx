import './GallerySection.css'
import { useState } from 'react'

const galleryImages = [
  '/images/listing-1.jpg',
  '/images/listing-2.jpg',
  '/images/listing-3.jpg',
  '/images/listing-4.jpg',
  '/images/listing-5.jpg',
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)
  const loopedImages = [...galleryImages, galleryImages[0]]

  const currentRealIndex = activeIndex === galleryImages.length ? 0 : activeIndex
  const syncToIndexWithoutAnimation = (targetIndex) => {
    setIsTransitionEnabled(false)
    setActiveIndex(targetIndex)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true)
      })
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      syncToIndexWithoutAnimation(galleryImages.length - 1)
      return
    }

    setActiveIndex((current) => current - 1)
  }

  const nextSlide = () => {
    if (activeIndex >= galleryImages.length) {
      return
    }

    setActiveIndex((current) => current + 1)
  }

  const handleTrackTransitionEnd = () => {
    if (activeIndex === galleryImages.length) {
      syncToIndexWithoutAnimation(0)
    }
  }

  return (
    <section id="destinos" className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-header">
        <p className="section-kicker">Galeria real</p>
        <h2 id="gallery-title">Villa en Cartagena con piscina y vistas abiertas</h2>
      </div>

      <div className="gallery-carousel">
        <button
          className="carousel-control carousel-control-left"
          type="button"
          onClick={prevSlide}
          aria-label="Imagen anterior"
        >
          <span className="carousel-control-icon" aria-hidden="true">&#8249;</span>
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: isTransitionEnabled ? undefined : 'none',
          }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {loopedImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              className="carousel-main-image"
              src={image}
              alt={`Foto del alojamiento ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <button
          className="carousel-control carousel-control-right"
          type="button"
          onClick={nextSlide}
          aria-label="Imagen siguiente"
        >
          <span className="carousel-control-icon" aria-hidden="true">&#8250;</span>
        </button>
      </div>

      <div className="gallery-thumbnails" aria-label="Seleccion de imagen">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            className={`thumbnail-button ${currentRealIndex === index ? 'is-active' : ''}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver imagen ${index + 1}`}
          >
            <img src={image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  )
}