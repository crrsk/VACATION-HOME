import { ReserveButton } from '../ui/ReserveButton'

export function CtaSection() {
  return (
    <section id="reserva" className="cta-section" aria-labelledby="cta-title">
      <p className="section-kicker">Reserva tu estancia</p>
      <h2 id="cta-title">Entra ahora para reservar la casa en tus fechas</h2>
      <p>
        Consulta disponibilidad en tiempo real, confirma el precio final y completa
        tu reserva en pocos pasos con atencion personalizada.
      </p>
      <ReserveButton />
    </section>
  )
}