import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../config'
import { supabase } from '../../lib/supabaseClient'
import './HostProfile.css'

export function HostProfile() {
  const { t } = useTranslation()
  const [averageRating, setAverageRating] = useState('-')
  const [reviewCount, setReviewCount] = useState(0)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('rating')
        
        if (error) throw error
        
        if (data && data.length > 0) {
          const avg = data.reduce((acc, curr) => acc + curr.rating, 0) / data.length
          setAverageRating(avg.toFixed(1))
          setReviewCount(data.length)
        }
      } catch (error) {
        console.error('Error al obtener reseñas para perfil de anfitrión:', error.message)
      }
    }
    
    fetchReviews()
  }, [])

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
          <span className="detail-icon">{averageRating}</span>
          <div className="detail-text">
            <strong>{reviewCount === 1 ? '1 reseña' : `${reviewCount} reseñas`}</strong>
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

