// src/components/Button.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

interface ButtonProps {
  link: string
  icon?: React.ReactNode
  label?: string
  variant?: 'primary' | 'secondary' | 'disabled' | 'icon'
  size?: number // Agrega propiedad para tamaño
}

const Button: React.FC<ButtonProps> = ({
  link,
  icon,
  label,
  variant = 'primary',
  size = 24, // Valor por defecto
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
      {icon &&
        React.cloneElement(icon as React.ReactElement<any>, {
          width: size,
          height: size,
        })}
      {label && <span className='label'>{label}</span>}
    </Link>
  )
}

export default Button
