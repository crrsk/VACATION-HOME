import './HostProfile.css'

export function HostProfile() {
  return (
    <section id="anfitrion" className="host-profile-section" aria-labelledby="host-title">
      <div className="section-header">
        <p className="section-kicker">Tu anfitrion</p>
        <h2 id="host-title">Atencion directa, sin intermediarios</h2>
      </div>

      <div className="host-card">
        <div className="host-image-container">
          <img
            src="/images/huesped.png"
            alt="Anfitrion"
            className="host-avatar"
          />
        </div>
        <div className="host-info">
          <span className="host-verified-label">Identidad verificada</span>
          <h2 className="host-name">Enrique</h2>
          <p className="host-meta">Anfitrion local con 3 anos de experiencia</p>
        </div>
      </div>

      <div className="host-details-grid">
        <div className="host-detail-item">
          <span className="detail-icon">5.0</span>
          <div className="detail-text">
            <strong>24 resenas verificadas</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">ID</span>
          <div className="detail-text">
            <strong>Identidad verificada</strong>
          </div>
        </div>
        <div className="host-detail-item">
          <span className="detail-icon">1h</span>
          <div className="detail-text">
            <strong>Respuesta rapida</strong>
            <span>Suele responder en menos de una hora</span>
          </div>
        </div>
      </div>

      <div className="host-description">
        <p>
          Enrique gestiona personalmente esta villa en Cartagena y mantiene contacto directo con cada huesped.
          Antes de confirmar, comparte toda la informacion de la estancia, normas y condiciones para que reserves con total claridad.
        </p>
        <button className="contact-host-btn">Contactar con Enrique</button>
      </div>
    </section>
  )
}
