import { useTranslation } from 'react-i18next'
import './TrustHighlights.css'

export function TrustHighlights() {
  const { t } = useTranslation()

  const trustItems = [
    {
      icon: '0%',
      title: t('trust_highlights.direct_booking'),
      subtitle: t('trust_highlights.direct_booking_sub'),
    },
    {
      icon: 'ID',
      title: t('trust_highlights.verified_host'),
      subtitle: t('trust_highlights.verified_host_sub'),
    },
    {
      icon: 'SSL',
      title: t('trust_highlights.traceable_payment'),
      subtitle: t('trust_highlights.traceable_payment_sub'),
    },
  ]

  return (
    <section className="trust-highlights-section" aria-label="Garantias de reserva">
      <div className="trust-highlights">
        {trustItems.map((item) => (
          <div className="trust-badge" key={item.title}>
            <span className="badge-icon">{item.icon}</span>
            <div className="badge-text">
              <span className="badge-title">{item.title}</span>
              <span className="badge-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
