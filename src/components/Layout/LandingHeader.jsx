export function LandingHeader() {
  return (
    <header className="landing-header">
      <a className="brand" href="#inicio" aria-label="Vacation Home inicio">
        <span className="brand-mark" aria-hidden="true">VH</span>
        <span>Vacation Home</span>
      </a>

      <nav className="header-nav" aria-label="Navegación principal">
        <a href="#experiencia">Experiencia</a>
        <a href="#destinos">Destinos</a>
        <a href="#reserva">Reserva</a>
      </nav>

      <button className="header-button" type="button">Ver disponibilidad</button>
    </header>
  )
}
