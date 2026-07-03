import { useTranslation } from 'react-i18next'
import './BookingSteps.css'

export function BookingSteps() {
  const { t } = useTranslation()

  const steps = [
    {
      number: '1',
      title: t('booking_steps.items.1.title'),
      description: t('booking_steps.items.1.description'),
    },
    {
      number: '2',
      title: t('booking_steps.items.2.title'),
      description: t('booking_steps.items.2.description'),
    },
    {
      number: '3',
      title: t('booking_steps.items.3.title'),
      description: t('booking_steps.items.3.description'),
    },
  ]

  return (
    <section id="proceso" className="booking-steps-section" aria-labelledby="steps-title">
      <div className="section-header">
        <p className="section-kicker">{t('booking_steps.kicker')}</p>
        <h2 id="steps-title">{t('booking_steps.title')}</h2>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-item" key={step.number}>
            <div className="step-number-pill">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
