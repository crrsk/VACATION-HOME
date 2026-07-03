import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../config'
import './HostProfile.css'

export function HostProfile() {
  const { t } = useTranslation()

  return (
    <section id="anfitrion" className="host-profile-section" aria-labelledby="host-title">
      <div className="section-header">
        <p className="section-kicker">{t('host.kicker')}</p>
        <h2 id="host-title">{t('host.title')}</h2>
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
          <span className="host-verified-label">{t('host.verified')}</span>
          <h2 className="host-name">{siteConfig.host.name}</h2>
          <p className="host-meta">{t('host.experience')}</p>
        </div>
      </div>

      <div className="host-details-grid">
        <div className="host-detail-item">
          <span className="detail-icon">5.0</span>
          <div className="detail-text">
            <strong>{t('host.reviews')}</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">ID</span>
          <div className="detail-text">
            <strong>{t('host.verified')}</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">1h</span>
          <div className="detail-text">
            <strong>{t('host.response_time_title')}</strong>
            <span>{t('host.response_time')}</span>
          </div>
        </div>
      </div>

      <div className="host-description">
        <p>{t('host.description')}</p>
        <button className="contact-host-btn">{t('host.contact')}</button>
      </div>
    </section>
  )
}
