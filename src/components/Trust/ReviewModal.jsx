import { useState } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import './ReviewModal.css';

export function ReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const { user } = useAuth();
  const [alias, setAlias] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    if (!user) {
      setErrorMsg('Debes iniciar sesión para publicar una reseña.');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          user_id: user.id,
          alias,
          rating,
          comment,
        }
      ]);

      if (error) {
        // Manejar el error específico de RLS si el usuario no tiene reserva
        if (error.code === '42501' || error.message.includes('row-level security')) {
          throw new Error('Solo los huéspedes con una reserva confirmada pueden dejar reseñas.');
        }
        throw error;
      }

      // Éxito
      if (onReviewSubmitted) onReviewSubmitted();
      onClose();
      // Limpiar formulario
      setAlias('');
      setRating(5);
      setComment('');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="review-modal-overlay" onClick={onClose}>
      <div className="review-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="review-modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="review-header">
          <h2>Escribe tu reseña</h2>
          <p>Comparte tu experiencia con otros viajeros.</p>
        </div>

        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="alias">Alias o Nombre</label>
            <input
              id="alias"
              type="text"
              placeholder="Ej: Ana y Diego"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              required
              maxLength={50}
            />
          </div>

          <div className="form-group">
            <label>Puntuación</label>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${rating >= star ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  aria-label={`${star} estrellas`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comentario</label>
            <textarea
              id="comment"
              rows="4"
              placeholder="¿Qué tal fue tu estancia? ¿Qué fue lo que más te gustó?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              maxLength={1000}
            ></textarea>
          </div>

          {errorMsg && <div className="review-error">{errorMsg}</div>}

          <button type="submit" className="submit-review-btn" disabled={loading}>
            {loading ? 'Publicando...' : 'Publicar reseña'}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
