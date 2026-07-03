import { useTranslation } from 'react-i18next'
import './CtaSection.css'
import { ReserveButton } from '../ui/ReserveButton'

export function CtaSection() {
  const { t } = useTranslation()

  return (
    <section id="reserva" className="cta-section" aria-labelledby="cta-title">
      <div>
        <p className="section-kicker">{t('cta.kicker')}</p>
        <h2 id="cta-title">{t('cta.title')}</h2>
        <p>{t('cta.description')}</p>
      </div>
      <ReserveButton label={t('cta.button')} to="/checkout" />
    </section>
  )
}
