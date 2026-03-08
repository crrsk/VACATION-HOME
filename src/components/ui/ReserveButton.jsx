import './ReserveButton.css'
import { Link } from 'react-router-dom'

export function ReserveButton({ className = '', label = 'Entrar a reservar', to = '/reserva', href = '' }) {
  const buttonClassName = ['button-primary', 'reserve-button', className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={buttonClassName} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    )
  }

  return (
    <Link className={buttonClassName} to={to}>
      {label}
    </Link>
  )
}