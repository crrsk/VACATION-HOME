import { useTranslation } from 'react-i18next'
import './SafetyLegal.css'

export function SafetyLegal() {
  const { t } = useTranslation()

  const faqs = [
    {
      question: t('safety_legal.faqs.1.question'),
      answer: t('safety_legal.faqs.1.answer'),
    },
    {
      question: t('safety_legal.faqs.2.question'),
      answer: t('safety_legal.faqs.2.answer'),
    },
    {
      question: t('safety_legal.faqs.3.question'),
      answer: t('safety_legal.faqs.3.answer'),
    },
  ]

  return (
    <section id="seguridad" className="safety-legal-section" aria-labelledby="safety-title">
      <div className="section-header">
        <p className="section-kicker">{t('safety_legal.kicker')}</p>
        <h2 id="safety-title">{t('safety_legal.title')}</h2>
      </div>
      <div className="safety-grid">
        <div className="safety-block">
          <h3>{t('safety_legal.house_rules')}</h3>
          <ul className="safety-list">
            <li>{t('safety_legal.rules.arrival')}</li>
            <li>{t('safety_legal.rules.departure')}</li>
            <li>{t('safety_legal.rules.max_guests')}</li>
            <li>{t('safety_legal.rules.no_parties')}</li>
          </ul>
        </div>

        <div className="safety-block">
          <h3>{t('safety_legal.security')}</h3>
          <ul className="safety-list">
            <li>{t('safety_legal.security_items.smoke_detector')}</li>
            <li>{t('safety_legal.security_items.first_aid')}</li>
            <li>{t('safety_legal.security_items.medical')}</li>
            <li>{t('safety_legal.security_items.neighborhood')}</li>
          </ul>
        </div>

        <div className="safety-block">
          <h3>{t('safety_legal.cancellation')}</h3>
          <p className="cancel-text">
            {t('safety_legal.cancellation_text')}
          </p>
        </div>
      </div>

      <div className="faq-container">
        <h3>{t('safety_legal.faq')}</h3>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div className="faq-item" key={item.question}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
