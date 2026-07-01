import { Link } from 'react-router-dom'
import { useState } from 'react'
import './LandingHeader.css'

const navLinks = [
  { href: '/#inicio', label: 'La villa' },
  { href: '/#destinos', label: 'Galeria' },
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/#anfitrion', label: 'Anfitrion' },
]

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="landing-header">
      <Link className="brand" to="/" aria-label="Villa Mirador inicio" onClick={closeMenu}>
        <span className="brand-copy">
          <span className="brand-name">Villa Mirador</span>
          <span className="brand-place">Cartagena, Murcia</span>
        </span>
      </Link>

      <div className="header-actions">
        <nav className="desktop-menu" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-reserve-link" href="/#reserva">
          Disponibilidad
        </a>

        <div className="menu-wrapper">
          {isMenuOpen ? (
            <nav id="header-menu" className="header-menu" aria-label="Navegacion principal">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a href="/#reserva" onClick={closeMenu}>Disponibilidad</a>
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
