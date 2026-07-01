import './CtaSection.css'
import { ReserveButton } from '../ui/ReserveButton'

export function CtaSection() {
  return (
    <section id="reserva" className="cta-section" aria-labelledby="cta-title">
      <div>
        <p className="section-kicker">Reserva directa</p>
        <h2 id="cta-title">Tu estancia privada en Cartagena empieza con una consulta clara.</h2>
        <p>
          Te enviaremos disponibilidad, condiciones y contrato antes del pago.
          Sin comisiones de intermediacion y con contacto directo durante todo el proceso.
        </p>
      </div>
      <ReserveButton label="Escribir para reservar" href="mailto:reservas@villacartagena.com" />
    </section>
  )
}
