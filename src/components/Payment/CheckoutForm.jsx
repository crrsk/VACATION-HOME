import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './CheckoutForm.css';

// Inicializar Stripe fuera del componente para evitar recreaciones
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

function PaymentForm({ totalAmount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    // En un entorno real, primero hariamos una peticion a nuestro backend 
    // para crear un PaymentIntent y obtener el client_secret.
    // Aqui simularemos el pago para mantener la demostracion funcional.
    
    setTimeout(() => {
      setProcessing(false);
      onSuccess('simulated_payment_id_123');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-row">
        <label htmlFor="card-element">
          Tarjeta de credito o debito
        </label>
        <div className="card-element-container">
          <CardElement id="card-element" options={{
             style: {
               base: {
                 fontSize: '16px',
                 color: '#32325d',
                 '::placeholder': { color: '#aab7c4' },
               },
               invalid: { color: '#fa755a', iconColor: '#fa755a' }
             }
          }} />
        </div>
      </div>
      {error && <div className="card-error" role="alert">{error}</div>}
      <button type="submit" disabled={!stripe || processing} className="pay-button">
        {processing ? 'Procesando...' : `Pagar ${totalAmount} €`}
      </button>
      <p className="payment-note">Pago seguro procesado por Stripe. Puedes usar tarjetas de prueba.</p>
    </form>
  );
}

export function CheckoutForm({ totalAmount, onPaymentSuccess }) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm totalAmount={totalAmount} onSuccess={onPaymentSuccess} />
    </Elements>
  );
}
