import { useTranslation } from 'react-i18next'
import './LandingFooter.css'

const MAPS_URL = 'https://www.google.com/maps/place/Cartagena,+Murcia'

export function LandingFooter() {
  const { t } = useTranslation()

  return (
    <footer className="landing-footer">
      <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
      <nav className="footer-nav" aria-label={t('footer.links')}>
        <a href="mailto:reservas@villacartagena.com">reservas@villacartagena.com</a>
        <a href="tel:+34600000000">+34 600 000 000</a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer">{t('footer.location')}</a>
      </nav>
    </footer>
  )
}
