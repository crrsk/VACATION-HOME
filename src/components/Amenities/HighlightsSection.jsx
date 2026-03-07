const highlights = [
  {
    title: 'Selección curada',
    description: 'Cada propiedad cumple un estándar de diseño, ubicación y confort.',
  },
  {
    title: 'Check-in fluido',
    description: 'Proceso digital con instrucciones claras para llegar sin fricciones.',
  },
  {
    title: 'Experiencias locales',
    description: 'Recomendaciones exclusivas para vivir cada destino como residente.',
  },
]

export function HighlightsSection() {
  return (
    <section id="experiencia" className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-header">
        <p className="section-kicker">Por qué elegirnos</p>
        <h2 id="highlights-title">Componentes clave de una estancia impecable</h2>
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
