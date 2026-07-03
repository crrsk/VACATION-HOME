import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../config'
import './LocationSection.css'

export function LocationSection() {
  const { t } = useTranslation()

  // Exact coordinates from VRBO
  // Using pb embed with Base64 encoded DMS coordinates to ensure both a red marker 
  // and full UI interactivity (including Pegman) are available.
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.0!2d-0.781225!3d37.608287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM2JzI5LjgiTiAwwrA0Nic1Mi40Ilc=!5e0!3m2!1ses!2ses!4v1"
  const gmapsLink = "https://maps.google.com/?q=37.608287,-0.781225"

  return (
    <section id="ubicacion" className="location-section" aria-labelledby="location-title">
      <div className="location-header">
        <p className="section-kicker">Entorno y Ubicación</p>
        <h2 id="location-title">Descubre {siteConfig.location}</h2>
        <p>
          La villa está ubicada en una zona residencial tranquila de {siteConfig.location}, 
          perfecta para desconectar, pero lo suficientemente cerca de servicios y puntos de interés.
        </p>
      </div>

      <div className="location-map-container">
        <iframe 
          title="Mapa de ubicación"
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div className="location-details">
        <p className="location-address">Ubicación aproximada: {siteConfig.location}</p>
        <a 
          href={gmapsLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="location-link"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  )
}
