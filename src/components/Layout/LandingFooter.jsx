import './LandingFooter.css'

const MAPS_URL = 'https://www.google.com/maps/place/Cartagena,+Murcia'

export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <p>© {new Date().getFullYear()} Villa en Cartagena. Reserva directa.</p>
      <nav className="footer-nav" aria-label="Enlaces utiles">
        <a href="mailto:reservas@villacartagena.com">reservas@villacartagena.com</a>
        <a href="tel:+34600000000">+34 600 000 000</a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer">Ubicacion en Cartagena</a>
      </nav>
    </footer>
  )
}