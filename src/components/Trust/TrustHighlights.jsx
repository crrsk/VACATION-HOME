import './TrustHighlights.css'

const trustItems = [
  {
    icon: '0%',
    title: 'Reserva directa',
    subtitle: 'Sin comisiones de intermediacion',
  },
  {
    icon: 'ID',
    title: 'Anfitrion verificado',
    subtitle: 'Trato personal antes y durante la estancia',
  },
  {
    icon: 'SSL',
    title: 'Pago trazable',
    subtitle: 'Condiciones revisables antes de confirmar',
  },
]

export function TrustHighlights() {
  return (
    <section className="trust-highlights-section" aria-label="Garantias de reserva">
      <div className="trust-highlights">
        {trustItems.map((item) => (
          <div className="trust-badge" key={item.title}>
            <span className="badge-icon">{item.icon}</span>
            <div className="badge-text">
              <span className="badge-title">{item.title}</span>
              <span className="badge-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
