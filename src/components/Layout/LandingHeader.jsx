import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../config'
import { LangSwitcher } from './LangSwitcher'
import './LandingHeader.css'

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: '/#inicio', label: t('nav.villa') },
    { href: '/#destinos', label: t('nav.gallery') },
    { href: '/#experiencia', label: t('nav.experience') },
    { href: '/#anfitrion', label: t('nav.host') },
  ]

  return (
    <header className="landing-header">
      <Link className="brand" to="/" aria-label={`${siteConfig.propertyName} inicio`} onClick={closeMenu}>
        <span className="brand-copy">
          <span className="brand-name">{siteConfig.propertyName}</span>
          <span className="brand-place">{siteConfig.location}</span>
        </span>
      </Link>

      <nav className="desktop-menu" aria-label="Navegacion principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LangSwitcher />

        <a className="header-reserve-link" href="/#reserva">
          {t('nav.availability')}
        </a>

        <div className="menu-wrapper">
          {isMenuOpen ? (
            <nav id="header-menu" className="header-menu" aria-label="Navegacion principal">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <a href="/#reserva" onClick={closeMenu}>{t('nav.availability')}</a>
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

