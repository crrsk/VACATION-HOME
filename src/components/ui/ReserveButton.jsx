import './ReserveButton.css'
import { Link } from 'react-router-dom'

export function ReserveButton({ className = '', label = 'Entrar a reservar', to = '/reserva', href = '' }) {
  const buttonClassName = ['button-primary', 'reserve-button', className].filter(Boolean).join(' ')

  if (href) {
    const isInternalAnchor = href.startsWith('#') || href.startsWith('/#')

    if (isInternalAnchor) {
      return (
        <a className={buttonClassName} href={href}>
          {label}
        </a>
      )
    }

    const opensNewTab = href.startsWith('http')

    return (
      <a
        className={buttonClassName}
        href={href}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noreferrer' : undefined}
      >
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
