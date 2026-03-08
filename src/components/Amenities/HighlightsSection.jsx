import './HighlightsSection.css'

const highlights = [
  {
    title: 'Alojamiento entero',
    description: 'Villa completa en Cartagena para disfrutar privacidad durante toda la estancia.',
  },
  {
    title: 'Piscina y exterior',
    description: 'Zona de piscina con tumbonas y espacios abiertos para relajarse al aire libre.',
  },
  {
    title: 'Capacidad para grupos',
    description: 'Distribucion para hasta 6 huespedes con 3 dormitorios, 3 camas y 2 banos.',
  },
]

export function HighlightsSection() {
  return (
    <section id="experiencia" className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-header">
        <p className="section-kicker">Resumen del alojamiento</p>
        <h2 id="highlights-title">Lo mas importante de esta villa en Cartagena</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}