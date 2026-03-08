import './CtaSection.css'
import { ReserveButton } from '../ui/ReserveButton'

export function CtaSection() {
  return (
    <section id="reserva" className="cta-section" aria-labelledby="cta-title">
      <p className="section-kicker">Reserva directa</p>
      <h2 id="cta-title">Consulta disponibilidad y cierra tu estancia con total seguridad</h2>
      <p>
        Te enviaremos disponibilidad, condiciones y contrato antes del pago.
        Sin comisiones de intermediacion y con contacto directo durante todo el proceso.
      </p>
      <ReserveButton label="Solicitar reserva" to="/reserva" />
    </section>
  )
}