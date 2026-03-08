import './SafetyLegal.css'

const faqs = [
    {
        question: '¿Como se realiza el pago de forma segura?',
        answer: 'Trabajamos con transferencia bancaria verificada o pasarela con confirmacion. Nunca solicitamos pagos por canales no trazables.'
    },
    {
        question: '¿Que documentacion recibo antes de pagar?',
        answer: 'Recibiras datos completos de la reserva, condiciones, politica de cancelacion y contrato de alquiler temporal.'
    },
    {
        question: '¿Como puedo evitar intentos de fraude?',
        answer: 'Confirma siempre que hablas por nuestros canales oficiales y revisa que la cuenta de cobro coincida con la indicada en el contrato.'
    }
]

export function SafetyLegal() {
    return (
        <section id="seguridad" className="safety-legal-section" aria-labelledby="safety-title">
            <div className="section-header">
                <p className="section-kicker">Tu tranquilidad es lo primero</p>
                <h2 id="safety-title">Seguridad y normas</h2>
            </div>
            <div className="safety-grid">
                <div className="safety-block">
                    <h3>Normas de la casa</h3>
                    <ul className="safety-list">
                        <li>Llegada: 15:00 - 20:00</li>
                        <li>Salida: 11:00</li>
                        <li>Máximo 6 huéspedes</li>
                        <li>No se permiten fiestas ni eventos</li>
                    </ul>
                </div>

                <div className="safety-block">
                    <h3>Seguridad y entorno</h3>
                    <ul className="safety-list">
                        <li>Detector de humo instalado</li>
                        <li>Botiquín de primeros auxilios</li>
                        <li>Cerca de servicios médicos</li>
                        <li>Entorno residencial vigilado</li>
                    </ul>
                </div>

                <div className="safety-block">
                    <h3>Cancelación</h3>
                    <p className="cancel-text">
                        Cancelación gratuita hasta 14 días antes de la llegada.
                        Consulta los detalles en el contrato de reserva.
                    </p>
                </div>
            </div>

            <div className="faq-container">
                <h3>Preguntas frecuentes</h3>
                <div className="faq-grid">
                    {faqs.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <strong>{item.question}</strong>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
