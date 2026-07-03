import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookingCalendar } from '../components/Booking/BookingCalendar'
import { PriceCalculator } from '../components/Booking/PriceCalculator'
import { CheckoutForm } from '../components/Payment/CheckoutForm'
import { useAuth } from '../context/AuthContext'
import { useAuthModal } from '../context/AuthModalContext'
import './CheckoutPage.css'

export function CheckoutPage() {
  const [bookingData, setBookingData] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const { user, loading } = useAuth()
  const { openAuthModal } = useAuthModal()
  const navigate = useNavigate()

  const handleDatesSelected = (data) => {
    setBookingData(data)
  }

  const handlePayment = () => {
    if (!user) {
      openAuthModal('login')
      return
    }
    setShowPayment(true)
  }

  const handlePaymentSuccess = (paymentId) => {
    alert('¡Reserva confirmada! ID de pago simulado: ' + paymentId)
    // Aqui insertariamos la reserva en Supabase
    navigate('/')
  }

  if (loading) return <div>Cargando...</div>

  return (
    <div className="checkout-page">
      <button onClick={() => navigate('/')} className="checkout-back-button" aria-label="Volver al inicio">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Volver
      </button>

      <div className="checkout-header">
        <h1>Confirma tu reserva</h1>
        <p>Selecciona las fechas de tu viaje para ver el precio total y continuar.</p>
      </div>

      <div className="checkout-content">
        <div className="checkout-calendar-section">
          <BookingCalendar onDatesSelected={handleDatesSelected} />
        </div>

        <div className="checkout-summary-section">
          {bookingData?.nights > 0 ? (
            <>
              <PriceCalculator 
                range={bookingData}
                nights={bookingData.nights} 
                pricePerNight={245}
                serviceFee={32}
                totalPrice={245 * bookingData.nights + 32}
              />
              
              {!user && (
                <div className="checkout-login-prompt">
                  <p>Inicia sesion o registrate para confirmar la reserva.</p>
                  <button onClick={() => openAuthModal('login')} className="checkout-button outline">
                    Iniciar sesion
                  </button>
                </div>
              )}
              
              {user && !showPayment && (
                <button onClick={handlePayment} className="checkout-button">
                  Confirmar y pagar
                </button>
              )}
              
              {user && showPayment && (
                <CheckoutForm 
                  totalAmount={bookingData.nights * 250} 
                  onPaymentSuccess={handlePaymentSuccess} 
                />
              )}
            </>
          ) : (
            <div className="checkout-empty-state">
              <p>Selecciona tus fechas de entrada y salida para ver el desglose del precio.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
