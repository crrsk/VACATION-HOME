import './HeroSection.css'
import { Link } from 'react-router-dom'
import { ReserveButton } from '../ui/ReserveButton'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <p className="section-kicker">Villa completa en Cartagena (Murcia)</p>
      <h1 id="hero-title">Reserva directa para 6 huespedes con piscina privada</h1>
      <p className="hero-copy">
        Alojamiento entero con 3 dormitorios, 3 camas y 2 banos. Gestion directa con el anfitrion,
        sin comisiones de terceros y con informacion transparente antes del pago.
      </p>

      <div className="hero-actions">
        <ReserveButton label="Iniciar reserva segura" to="/reserva" />
        <Link className="button-secondary" to="/destinos">Ver fotos de la casa</Link>
      </div>

      <div className="hero-metrics" aria-label="Datos del alojamiento">
        <article>
          <strong>6</strong>
          <span>Huespedes maximos</span>
        </article>
        <article>
          <strong>3 / 2</strong>
          <span>Dormitorios y banos</span>
        </article>
        <article>
          <strong>Directo</strong>
          <span>Sin comision de plataforma</span>
        </article>
      </div>
    </section>
  )
}