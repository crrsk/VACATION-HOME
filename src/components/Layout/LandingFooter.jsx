export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <p>© {new Date().getFullYear()} Vacation Home. Todos los derechos reservados.</p>
      <nav className="footer-nav" aria-label="Enlaces legales">
        <a href="#politica">Política de privacidad</a>
        <a href="#terminos">Términos y condiciones</a>
      </nav>
    </footer>
  )
}
