import { useTranslation } from 'react-i18next'
import './ReviewSection.css'

export function ReviewSection() {
  const { t } = useTranslation()

  const reviews = [
    {
      author: t('reviews.items.1.author'),
      text: t('reviews.items.1.text'),
      rating: t('reviews.items.1.rating'),
      date: t('reviews.items.1.date'),
      initials: 'MF',
    },
    {
      author: t('reviews.items.2.author'),
      text: t('reviews.items.2.text'),
      rating: t('reviews.items.2.rating'),
      date: t('reviews.items.2.date'),
      initials: 'CG',
    },
    {
      author: t('reviews.items.3.author'),
      text: t('reviews.items.3.text'),
      rating: t('reviews.items.3.rating'),
      date: t('reviews.items.3.date'),
      initials: 'AD',
    },
  ]

  return (
    <section id="resenas" className="review-section" aria-labelledby="review-title">
      <div className="section-header">
        <p className="section-kicker">{t('reviews.kicker')}</p>
        <h2 id="review-title">{t('reviews.title')}</h2>
        <div className="overall-rating">
          <span className="rating-score">5.0</span>
          <span className="rating-count">{t('reviews.verified_count')}</span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.author}>
            <div className="review-user">
              <span className="review-avatar" aria-hidden="true">{review.initials}</span>
              <div className="review-user-info">
                <strong>{review.author}</strong>
                <span>{review.date}</span>
              </div>
            </div>
            <div className="review-stars">{review.rating}</div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
      <button className="show-more-reviews">{t('reviews.show_more')}</button>
    </section>
  )
}
