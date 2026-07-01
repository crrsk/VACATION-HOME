import './HighlightsSection.css'

const highlights = [
  {
    eyebrow: 'Privacidad',
    title: 'Villa completa solo para tu grupo',
    description: 'Sin zonas compartidas: piscina, exterior y estancias quedan reservadas para tus acompanantes.',
  },
  {
    eyebrow: 'Exterior',
    title: 'Piscina con vistas abiertas',
    description: 'Un espacio protagonista para desayunos lentos, tardes de sol y noches tranquilas al aire libre.',
  },
  {
    eyebrow: 'Confort',
    title: 'Distribucion comoda para 6',
    description: '3 dormitorios, 3 camas y 2 banos para que cada estancia funcione con amplitud.',
  },
]

export function HighlightsSection() {
  return (
    <section id="experiencia" className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-header">
        <p className="section-kicker">La experiencia</p>
        <h2 id="highlights-title">Una estancia privada con sensacion de hotel boutique</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.title}>
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
