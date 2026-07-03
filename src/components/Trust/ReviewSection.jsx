import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'
import { useAuthModal } from '../../context/AuthModalContext'
import { ReviewModal } from './ReviewModal'
import './ReviewSection.css'

export function ReviewSection() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const { openAuthModal } = useAuthModal()
  
  const [reviews, setReviews] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    fetchReviews()
  }, [])

  const fetchReviews = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setReviews(data || [])
    } catch (error) {
      console.error('Error al obtener reseñas:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleWriteReviewClick = async () => {
    if (!user) {
      openAuthModal('login')
      return
    }

    // Comprobar si tiene reserva
    const { data, error } = await supabase
      .from('bookings')
      .select('id')
      .eq('user_id', user.id)
      .limit(1)

    if (error) {
      console.error('Error comprobando reservas:', error.message)
      return
    }

    if (!data || data.length === 0) {
      setErrorMsg('Solo los clientes con una reserva confirmada pueden escribir reseñas.')
      setTimeout(() => setErrorMsg(''), 6000)
      return
    }

    setIsModalOpen(true)
  }

  const getInitials = (name) => {
    if (!name) return 'U'
    const words = name.split(' ')
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  // Calculamos la nota media
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : '5.0'

  return (
    <section id="resenas" className="review-section" aria-labelledby="review-title">
      <div className="section-header">
        <p className="section-kicker">{t('reviews.kicker')}</p>
        <h2 id="review-title">Experiencias reales</h2>
        <div className="overall-rating">
          <span className="rating-score">{averageRating}</span>
          <span className="rating-count">
            {reviews.length} {reviews.length === 1 ? 'reseña verificada' : 'reseñas verificadas'}
          </span>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.length > 0 ? reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-user">
              <span className="review-avatar" aria-hidden="true">{getInitials(review.alias)}</span>
              <div className="review-user-info">
                <strong>{review.alias}</strong>
                <span>{new Date(review.created_at).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="review-stars">{renderStars(review.rating)}</div>
            <p className="review-text">{review.comment}</p>
          </div>
        )) : (
          !loading && (
            <div className="no-reviews-msg" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: 'var(--color-surface-container-low)', borderRadius: '12px' }}>
              <p>Aún no hay reseñas publicadas. ¡Sé el primero en compartir tu experiencia!</p>
            </div>
          )
        )}
      </div>
      
      <div className="review-actions" style={{ textAlign: 'center', marginTop: '3rem' }}>
        {errorMsg && (
          <p className="review-error-inline" style={{ color: '#ba1a1a', background: '#ffdad6', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            {errorMsg}
          </p>
        )}
        <br />
        <button className="show-more-reviews" onClick={handleWriteReviewClick}>
          Escribir una reseña
        </button>
      </div>

      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onReviewSubmitted={fetchReviews} 
      />
    </section>
  )
}
