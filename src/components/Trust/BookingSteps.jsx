import './BookingSteps.css'

const steps = [
    {
        number: '1',
        title: 'Solicitud de fechas',
        description: 'Nos envias tus fechas y numero de huespedes. Respondemos con confirmacion de disponibilidad en menos de 24 horas.'
    },
    {
        number: '2',
        title: 'Validacion y contrato',
        description: 'Recibes resumen de estancia, politica de cancelacion y contrato de alquiler temporal para revisar antes del pago.'
    },
    {
        number: '3',
        title: 'Pago protegido y acceso',
        description: 'El pago se realiza por pasarela segura con justificante automático. Tras el pago confirmamos check-in y datos de llegada.'
    }
]

export function BookingSteps() {
    return (
        <section id="proceso" className="booking-steps-section" aria-labelledby="steps-title">
            <div className="section-header">
                <p className="section-kicker">Transparencia total</p>
                <h2 id="steps-title">Cómo funciona la reserva</h2>
            </div>

            <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step-item" key={index}>
                        <div className="step-number-pill">{step.number}</div>
                        <div className="step-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
