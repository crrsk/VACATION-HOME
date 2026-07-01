import './ReviewSection.css'

const reviews = [
  {
    author: 'Marta y familia',
    text: 'Casa impecable, zona exterior espectacular y gestion muy transparente desde el primer mensaje.',
    rating: 'Excelente',
    date: 'Junio 2025',
    initials: 'MF',
  },
  {
    author: 'Carlos, viaje en grupo',
    text: 'Proceso de reserva claro, contrato bien explicado y check-in sin sorpresas. Muy profesional.',
    rating: 'Excelente',
    date: 'Agosto 2025',
    initials: 'CG',
  },
  {
    author: 'Ana y Diego',
    text: 'Nos dio mucha confianza recibir toda la informacion por adelantado y contacto directo en todo momento.',
    rating: 'Excelente',
    date: 'Septiembre 2025',
    initials: 'AD',
  },
]

export function ReviewSection() {
  return (
    <section id="resenas" className="review-section" aria-labelledby="review-title">
      <div className="section-header">
        <p className="section-kicker">Experiencias reales</p>
        <h2 id="review-title">Lo que recuerdan los huespedes</h2>
        <div className="overall-rating">
          <span className="rating-score">5.0</span>
          <span className="rating-count">24 resenas verificadas</span>
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
      <button className="show-more-reviews">Mostrar las 24 resenas</button>
    </section>
  )
}
