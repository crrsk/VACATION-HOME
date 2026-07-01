import { useTranslation } from 'react-i18next'
import './HeroSection.css'
import { ReserveButton } from '../ui/ReserveButton'
import { siteConfig } from '../../config'
import { HeroMetric } from './HeroMetric'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="section-kicker">{t('hero.kicker')}</p>
        <h1 id="hero-title">{t('hero.title')}</h1>
        <p className="hero-copy">
          {t('hero.description')}
        </p>

        <div className="hero-actions">
          <ReserveButton label={t('hero.reserve')} href="/#reserva" />
          <a className="button-secondary" href="/#destinos">{t('hero.view_gallery')}</a>
        </div>
      </div>

      <div className="hero-metrics" aria-label="Datos del alojamiento">
        {siteConfig.metrics.map((metric, index) => (
          <HeroMetric key={index} value={metric.value} label={t(`metrics.${metric.key}`)} />
        ))}
      </div>
    </section>
  )
}
