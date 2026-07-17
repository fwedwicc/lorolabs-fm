import React from 'react'

const Button = ({ variant = 'primary', href, children, label, onClick, type, disabled, className, style }) => {
  const primary = 'h-10 px-4 bg-[#CA2840] text-white'
  const secondary = 'h-10 px-4 bg-transparent border border-[#FF6254] text-[#FF6254]'
  const ghost = 'h-10 px-4 bg-transparent text-[#FF6254] hover:bg-neutral-500'
  const outline = 'h-10 px-4 border border-white text-white bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border-white/80'
  const text = 'h-10 px-4 bg-transparent'

  const variantClasses = variant === 'primary' ? primary : variant === 'secondary' ? secondary : variant === 'outline' ? outline : text

  const sharedClasses = `cursor-pointer gap-2 inline-flex items-center justify-center rounded-full text-sm font-regular transition-all duration-300 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : ''
    } ${variantClasses} ${className}`

  if (href) {
    return (
      <a href={href} className={sharedClasses} style={style}>
        {label}
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={sharedClasses}
      style={style}
    >
      {label}
      {children}
    </button>
  )
}

export default Button