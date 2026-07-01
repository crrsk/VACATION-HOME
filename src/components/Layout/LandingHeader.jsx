import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './LandingHeader.css'

const navLinks = [
  { to: '/', label: 'La villa' },
  { to: '/destinos', label: 'Galeria' },
  { to: '/reserva', label: 'Reservar' },
]

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="landing-header">
      <Link className="brand" to="/" aria-label="Villa Mirador inicio" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">VM</span>
        <span className="brand-copy">
          <span className="brand-name">Villa Mirador</span>
          <span className="brand-place">Cartagena, Murcia</span>
        </span>
      </Link>

      <div className="header-actions">
        <nav className="desktop-menu" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="header-reserve-link" to="/reserva">
          Disponibilidad
        </NavLink>

        <div className="menu-wrapper">
          {isMenuOpen ? (
            <nav id="header-menu" className="header-menu" aria-label="Navegacion principal">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          ) : null}

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
        </div>
      </div>
    </header>
  )
}
