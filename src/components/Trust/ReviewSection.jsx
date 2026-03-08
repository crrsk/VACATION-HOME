import './ReviewSection.css'

const reviews = [
    {
        author: 'Marta y familia',
        text: 'Casa impecable, zona exterior espectacular y gestión muy transparente desde el primer mensaje.',
        rating: 5,
        date: 'Junio 2025',
        avatar: 'https://i.pravatar.cc/150?u=marta'
    },
    {
        author: 'Carlos, viaje en grupo',
        text: 'Proceso de reserva claro, contrato bien explicado y check-in sin sorpresas. Muy profesional.',
        rating: 5,
        date: 'Agosto 2025',
        avatar: 'https://i.pravatar.cc/150?u=carlos'
    },
    {
        author: 'Ana y Diego',
        text: 'Nos dio mucha confianza recibir toda la información por adelantado y contacto directo en todo momento.',
        rating: 5,
        date: 'Septiembre 2025',
        avatar: 'https://i.pravatar.cc/150?u=ana'
    },
]

export function ReviewSection() {
    return (
        <section id="resenas" className="review-section" aria-labelledby="review-title">
            <div className="section-header">
                <p className="section-kicker">Experiencias reales</p>
                <h2 id="review-title">Lo que dicen los huéspedes</h2>
                <div className="overall-rating">
                    <span className="rating-score">★ 4.98</span>
                    <span className="rating-count">· 24 reseñas</span>
                </div>
            </div>

            <div className="reviews-grid">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-user">
                            <img src={review.avatar} alt={review.author} className="review-avatar" />
                            <div className="review-user-info">
                                <strong>{review.author}</strong>
                                <span>{review.date}</span>
                            </div>
                        </div>
                        <div className="review-stars">{"★".repeat(review.rating)}</div>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </div>
            <button className="show-more-reviews">Mostrar las 24 reseñas</button>
        </section>
    )
}
