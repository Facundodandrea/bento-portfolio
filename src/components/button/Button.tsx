import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

interface ButtonProps {
  link: string
  icon?: React.ReactNode
  label?: string
  variant?: 'primary' | 'secondary' | 'disabled' | 'icon'
}

const Button: React.FC<ButtonProps> = ({
  link,
  icon,
  label,
  variant = 'primary',
}) => {
  const handleMouseDown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <Link
      to={link}
      className={`button ${variant}`}
      onMouseDown={handleMouseDown}
    >
      {icon && <span className='icon'>{icon}</span>}
      {label && <span className='label'>{label}</span>}
    </Link>
  )
}

export default Button
