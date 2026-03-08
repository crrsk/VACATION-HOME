import { Link } from 'react-router-dom'

export function ReserveButton({ className = '', label = 'Entrar a reservar', to = '/reserva' }) {
  const buttonClassName = ['button-primary', 'reserve-button', className].filter(Boolean).join(' ')

  return (
    <Link className={buttonClassName} to={to}>
      {label}
    </Link>
  )
}