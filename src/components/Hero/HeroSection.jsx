import './HeroSection.css'
import { ReserveButton } from '../ui/ReserveButton'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="section-kicker">Villa privada en Cartagena</p>
        <h1 id="hero-title">Villa Mirador de Cartagena</h1>
        <p className="hero-copy">
          Una casa vacacional completa para 6 huespedes, con piscina privada, vistas abiertas
          y reserva directa con el anfitrion.
        </p>

        <div className="hero-actions">
          <ReserveButton label="Consultar disponibilidad" href="/#reserva" />
          <a className="button-secondary" href="/#destinos">Ver galeria</a>
        </div>
      </div>

      <div className="hero-metrics" aria-label="Datos del alojamiento">
        <article>
          <strong>6</strong>
          <span>Huespedes</span>
        </article>
        <article>
          <strong>3</strong>
          <span>Dormitorios</span>
        </article>
        <article>
          <strong>2</strong>
          <span>Banos</span>
        </article>
        <article>
          <strong>0%</strong>
          <span>Comision de plataforma</span>
        </article>
      </div>
    </section>
  )
}
