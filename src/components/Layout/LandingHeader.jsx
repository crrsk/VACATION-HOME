import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="landing-header">
      <Link className="brand" to="/" aria-label="Vacation Home inicio" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">VH</span>
        <span>Vacation Home</span>
      </Link>

      <div className="header-actions">
        <Link className="header-button" to="/reserva">Ver disponibilidad</Link>

        <div className="menu-wrapper">
          <button
            className="menu-toggle"
            type="button"
            aria-label="Abrir menu de navegacion"
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((prevValue) => !prevValue)}
          >
            <span className="menu-line" aria-hidden="true" />
            <span className="menu-line" aria-hidden="true" />
            <span className="menu-line" aria-hidden="true" />
          </button>

          {isMenuOpen ? (
            <nav id="header-menu" className="header-menu" aria-label="Navegacion principal">
              <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
              <NavLink to="/destinos" onClick={closeMenu}>Destinos</NavLink>
              <NavLink to="/reserva" onClick={closeMenu}>Reserva</NavLink>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}