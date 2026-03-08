import './TrustHighlights.css'

export function TrustHighlights() {
  return (
    <section className="trust-highlights-section">
      <div className="section-header">
        <p className="section-kicker">Garantias de reserva</p>
      </div>
      <div className="trust-highlights">
        <div className="trust-badge">
          <span className="badge-icon">?</span>
          <div className="badge-text">
            <span className="badge-title">Reserva Directa</span>
            <span className="badge-subtitle">Sin comisiones</span>
          </div>
        </div>
        <div className="trust-badge">
          <span className="badge-icon">?</span>
          <div className="badge-text">
            <span className="badge-title">Anfitrion Verificado</span>
            <span className="badge-subtitle">Identidad confirmada</span>
          </div>
        </div>
        <div className="trust-badge">
          <span className="badge-icon">??</span>
          <div className="badge-text">
            <span className="badge-title">Pago Seguro</span>
            <span className="badge-subtitle">Proteccion SSL</span>
          </div>
        </div>
      </div>
    </section>
  )
}