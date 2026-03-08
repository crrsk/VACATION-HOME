import { useEffect, useState } from 'react'

const galleryImages = [
  '/images/house-1.png',
  '/images/house-2.png',
  '/images/house-3.png',
  '/images/house-4.png',
  '/images/house-5.png',
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const autoplayId = window.setInterval(() => {
      setActiveIndex((current) =>
        current === galleryImages.length - 1 ? 0 : current + 1,
      )
    }, 5500)

    return () => window.clearInterval(autoplayId)
  }, [])

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    )
  }

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section id="destinos" className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-header">
        <p className="section-kicker">Galeria</p>
        <h2 id="gallery-title">Descubre las casas destacadas</h2>
      </div>

      <div className="gallery-carousel">
        <button
          className="carousel-control carousel-control-left"
          type="button"
          onClick={prevSlide}
          aria-label="Imagen anterior"
        >
          &#8249;
        </button>

        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {galleryImages.map((image, index) => (
            <img
              key={image}
              className="carousel-main-image"
              src={image}
              alt={`Casa destacada ${index + 1}`}
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
          &#8250;
        </button>
      </div>

      <div className="gallery-thumbnails" aria-label="Seleccion de imagen">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            className={`thumbnail-button ${activeIndex === index ? 'is-active' : ''}`}
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
