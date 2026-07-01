import { siteConfig } from '../../config'
import './HostProfile.css'

export function HostProfile() {
  return (
    <section id="anfitrion" className="host-profile-section" aria-labelledby="host-title">
      <div className="section-header">
        <p className="section-kicker">Tu anfitrion</p>
        <h2 id="host-title">Atencion directa, sin intermediarios</h2>
      </div>

      <div className="host-card">
        <div className="host-image-container">
          <img
            src="/images/huesped.png"
            alt={`Anfitrion ${siteConfig.host.name}`}
            className="host-avatar"
          />
        </div>
        <div className="host-info">
          <span className="host-verified-label">Identidad verificada</span>
          <h2 className="host-name">{siteConfig.host.name}</h2>
          <p className="host-meta">{siteConfig.host.experience}</p>
        </div>
      </div>

      <div className="host-details-grid">
        <div className="host-detail-item">
          <span className="detail-icon">5.0</span>
          <div className="detail-text">
            <strong>{siteConfig.host.reviews}</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">ID</span>
          <div className="detail-text">
            <strong>Identidad verificada</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">1h</span>
          <div className="detail-text">
            <strong>Respuesta rapida</strong>
            <span>{siteConfig.host.responseTime}</span>
          </div>
        </div>
      </div>

      <div className="host-description">
        <p>{siteConfig.host.description}</p>
        <button className="contact-host-btn">Contactar con {siteConfig.host.name}</button>
      </div>
    </section>
  )
}
