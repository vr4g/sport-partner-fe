import React, { MouseEventHandler } from 'react'
import './CustomButton.scss'

interface Props {
  size?: string
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  variant?: 'primary' | 'secondary'
}

const CustomButton: React.FC<Props> = ({
  size = 'normal',
  title,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button onClick={onClick} className={`button-container button-${size} ${variant}`}>
      {title}
    </button>
  )
}

export default CustomButton
