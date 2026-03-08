import './HostProfile.css'

export function HostProfile() {
    return (
        <section id="anfitrion" className="host-profile-section" aria-labelledby="host-title">
            <div className="section-header">
                <p className="section-kicker">Tu anfitrión</p>
                <h2 id="host-title">Conoce a Enrique</h2>
            </div>

            <div className="host-card">
                <div className="host-image-container">
                    <img
                        src="https://a0.muscache.com/im/pictures/user/User-463276709/original/82f6e9b4-3c66-4e50-a92c-567e7c9f8092.jpeg?im_w=240"
                        alt="Anfitrión"
                        className="host-avatar"
                    />
                    <div className="host-badge-icon">🛡</div>
                </div>
                <div className="host-info">
                    <h2 className="host-name">Anfitrión: Enrique</h2>
                    <p className="host-meta">Lleva 3 años como anfitrión</p>
                </div>
            </div>

            <div className="host-details-grid">
                <div className="host-detail-item">
                    <span className="detail-icon">★</span>
                    <div className="detail-text">
                        <strong>24 Reseñas</strong>
                    </div>
                </div>
                <div className="host-detail-item">
                    <span className="detail-icon">🛡</span>
                    <div className="detail-text">
                        <strong>Identidad verificada</strong>
                    </div>
                </div>
                <div className="host-detail-item">
                    <span className="detail-icon">⚡</span>
                    <div className="detail-text">
                        <strong>Respuesta rápida</strong>
                        <span>En menos de una hora</span>
                    </div>
                </div>
            </div>

            <div className="host-description">
                <p>
                    Me encanta compartir mi villa en Cartagena con viajeros de todo el mundo.
                    Mi objetivo es que te sientas como en casa y disfrutes de la tranquilidad y el sol del Mediterráneo.
                    Estoy disponible para cualquier duda o recomendación local.
                </p>
                <button className="contact-host-btn">Contactar con Enrique</button>
            </div>
        </section>
    )
}
