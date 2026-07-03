import { useTranslation } from 'react-i18next'
import './HighlightsSection.css'

export function HighlightsSection() {
  const { t } = useTranslation()

  const highlights = [
    {
      eyebrow: t('highlights.items.privacy.eyebrow'),
      title: t('highlights.items.privacy.title'),
      description: t('highlights.items.privacy.description'),
    },
    {
      eyebrow: t('highlights.items.exterior.eyebrow'),
      title: t('highlights.items.exterior.title'),
      description: t('highlights.items.exterior.description'),
    },
    {
      eyebrow: t('highlights.items.comfort.eyebrow'),
      title: t('highlights.items.comfort.title'),
      description: t('highlights.items.comfort.description'),
    },
  ]

  return (
    <section id="experiencia" className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-header">
        <p className="section-kicker">{t('highlights.kicker')}</p>
        <h2 id="highlights-title">{t('highlights.title')}</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
