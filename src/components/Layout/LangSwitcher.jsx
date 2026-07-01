import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './LangSwitcher.css'

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w20/es.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' }
]

export function LangSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const activeLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectLanguage = (code) => {
    i18n.changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="custom-lang-switcher" ref={dropdownRef}>
      <button 
        className="lang-switcher-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        type="button"
      >
        <img src={activeLang.flag} alt={activeLang.label} className="lang-flag" />
        <span className="lang-label">{activeLang.label}</span>
        <span className="lang-chevron">▼</span>
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button 
                type="button"
                className={`lang-option ${activeLang.code === lang.code ? 'active' : ''}`}
                onClick={() => selectLanguage(lang.code)}
              >
                <img src={lang.flag} alt={lang.label} className="lang-flag" />
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
