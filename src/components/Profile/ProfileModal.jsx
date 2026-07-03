import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import './ProfileModal.css';

export function ProfileModal({ isOpen, onClose }) {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState({ type: '', text: '' });

  useEffect(() => {
    if (isOpen && user) {
      fetchBookings();
    }
  }, [isOpen, user]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onClose();
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordMsg({ type: '', text: '' });
    
    if (newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'La contraseña debe tener al menos 6 caracteres' });
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });
      
      if (error) throw error;
      setPasswordMsg({ type: 'success', text: 'Contraseña actualizada correctamente' });
      setNewPassword('');
      setTimeout(() => setIsChangingPassword(false), 2000);
    } catch (error) {
      setPasswordMsg({ type: 'error', text: error.message });
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="profile-modal-close" onClick={onClose} aria-label="Cerrar perfil">
          ✕
        </button>

        <div className="profile-header">
          <div className="profile-avatar">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <h2>Mi Perfil</h2>
          <p className="profile-email">{user?.email}</p>
        </div>

        <div className="profile-content">
          {/* Cambiar contraseña section */}
          <div className="profile-section">
            {!isChangingPassword ? (
              <button 
                className="profile-btn outline" 
                onClick={() => setIsChangingPassword(true)}
              >
                Cambiar Contraseña
              </button>
            ) : (
              <form onSubmit={handlePasswordChange} className="password-form">
                <input
                  type="password"
                  placeholder="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <div className="password-actions">
                  <button type="button" className="profile-btn ghost" onClick={() => setIsChangingPassword(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="profile-btn primary">
                    Guardar
                  </button>
                </div>
                {passwordMsg.text && (
                  <p className={`password-msg ${passwordMsg.type}`}>{passwordMsg.text}</p>
                )}
              </form>
            )}
          </div>

          {/* Reservas section */}
          <div className="profile-section">
            <h3>Mis Reservas</h3>
            {loading ? (
              <p className="loading-text">Cargando reservas...</p>
            ) : bookings.length > 0 ? (
              <ul className="bookings-list">
                {bookings.map((booking) => (
                  <li key={booking.id} className="booking-card">
                    <div className="booking-dates">
                      <span>Entrada: {new Date(booking.check_in).toLocaleDateString()}</span>
                      <span>Salida: {new Date(booking.check_out).toLocaleDateString()}</span>
                    </div>
                    <div className="booking-details">
                      <span className={`booking-status status-${booking.status}`}>
                        {booking.status === 'pending' ? 'Pendiente'
                          : booking.status === 'confirmed' ? 'Confirmada'
                          : 'Cancelada'}
                      </span>
                      <span className="booking-price">{booking.total_price}€</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-bookings">
                <p>Aún no tienes ninguna reserva.</p>
              </div>
            )}
          </div>
        </div>

        <div className="profile-footer">
          <button className="profile-btn danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
