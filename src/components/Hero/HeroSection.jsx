import { ReserveButton } from '../ui/ReserveButton'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <p className="section-kicker">Escapadas privadas de alto nivel</p>
      <h1 id="hero-title">Tu hogar vacacional premium, listo para reservar hoy</h1>
      <p className="hero-copy">
        Villas y apartamentos seleccionados para viajeros que valoran diseno, comodidad
        y experiencias memorables en cada detalle.
      </p>

      <div className="hero-actions">
        <ReserveButton />
        <button className="button-secondary" type="button">Hablar con asesor</button>
      </div>

      <div className="hero-metrics" aria-label="Metricas de confianza">
        <article>
          <strong>4.9/5</strong>
          <span>Valoracion promedio</span>
        </article>
        <article>
          <strong>120+</strong>
          <span>Propiedades verificadas</span>
        </article>
        <article>
          <strong>24/7</strong>
          <span>Soporte personalizado</span>
        </article>
      </div>
    </section>
  )
}