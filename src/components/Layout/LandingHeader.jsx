import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '../../config'
import { LangSwitcher } from './LangSwitcher'
import { useAuth } from '../../context/AuthContext'
import { useAuthModal } from '../../context/AuthModalContext'
import { ProfileModal } from '../Profile/ProfileModal'
import './LandingHeader.css'

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { user } = useAuth()
  const { openAuthModal } = useAuthModal()

  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: '/#inicio', label: t('nav.villa') },
    { href: '/#destinos', label: t('nav.gallery') },
    { href: '/#experiencia', label: t('nav.experience') },
    { href: '/#anfitrion', label: t('nav.host') },
  ]

  return (
    <header className="landing-header">
      <a className="brand" href="/#inicio" aria-label={`${siteConfig.propertyName} inicio`} onClick={closeMenu}>
        <span className="brand-copy">
          <span className="brand-name">{siteConfig.propertyName}</span>
          <span className="brand-place">{siteConfig.location}</span>
        </span>
      </a>

      <nav className="desktop-menu" aria-label="Navegacion principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button 
          className="header-auth-btn"
          onClick={() => user ? setIsProfileModalOpen(true) : openAuthModal('login')}
          aria-label={user ? 'Mi Perfil' : 'Iniciar sesión'}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4-4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>

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
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </header>
  )
}

