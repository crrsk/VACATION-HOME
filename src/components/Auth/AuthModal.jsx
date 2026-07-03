import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuthModal } from '../../context/AuthModalContext';
import './AuthModal.css';

export function AuthModal() {
  const { isOpen, view, closeAuthModal, toggleView } = useAuthModal();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Reset form when view changes
  useEffect(() => {
    setError(null);
    setEmail('');
    setPassword('');
    setFullName('');
  }, [view, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (view === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        closeAuthModal();
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        // Supabase auto-logins after sign up if email confirm is disabled
        closeAuthModal();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isLogin = view === 'login';

  return (
    <div className="auth-modal-overlay" onClick={closeAuthModal}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={closeAuthModal} aria-label="Cerrar modal">
          ✕
        </button>

        <div className="auth-modal-header">
          <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
          <p>
            {isLogin
              ? 'Accede a tu cuenta para continuar con la reserva'
              : 'Regístrate para reservar y gestionar tu estancia'}
          </p>
        </div>

        <div className="auth-modal-content">
          <form onSubmit={handleSubmit} className="auth-modal-form">
            {!isLogin && (
              <div className="auth-input-group">
                <label htmlFor="auth-fullname">Nombre completo</label>
                <input
                  id="auth-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="Ej: Ana García"
                />
              </div>
            )}
            
            <div className="auth-input-group">
              <label htmlFor="auth-email">Correo electrónico</label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="auth-input-group">
              <label htmlFor="auth-password">Contraseña</label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Mínimo 6 caracteres"
                minLength={6}
              />
            </div>

            {error && <div className="auth-error-message">{error}</div>}

            <button type="submit" disabled={loading} className="auth-submit-btn">
              {loading
                ? 'Cargando...'
                : isLogin
                ? 'Entrar a mi cuenta'
                : 'Crear cuenta'}
            </button>
          </form>

          <div className="auth-modal-footer">
            <span>
              {isLogin ? '¿No tienes cuenta aún?' : '¿Ya tienes una cuenta?'}
            </span>
            <button type="button" onClick={toggleView}>
              {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
