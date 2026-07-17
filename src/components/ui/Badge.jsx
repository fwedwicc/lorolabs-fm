import React from 'react'

// Base styles
const base = 'flex items-center rounded-full leading-none'

// Sizes styles
const sizes = {
  sm: 'text-xs gap-1 md:px-2 px-1.5 md:py-[6px] py-[5px]',
  lg: 'text-sm gap-1 md:px-[11px] px-[8px] md:h-[30px] h-[26px]',
}

// Variant styles
const variants = {
  neutral: 'border border-neutral-500/90 text-neutral-400',
  accent: 'border bg-[#FBEDED] dark:bg-red-500/10 border-[#EAB9B9] dark:border-red-400/40 text-red-800 dark:text-red-200',
  ghost: 'border bg-transparent border-neutral-200/90 text-neutral-800',
  success: 'border bg-green-300/20 dark:bg-green-500/10 border-green-600/30 dark:border-green-400/40 text-green-800 dark:text-green-200',
  info: 'border bg-blue-200/30 dark:bg-blue-500/10 border-blue-200/90 dark:border-blue-400/40 text-blue-800 dark:text-blue-200',
  warning: 'border bg-yellow-200/30 dark:bg-yellow-500/10 border-yellow-200/90 dark:border-yellow-400/40 text-yellow-800 dark:text-yellow-200',
  suspicious: 'border bg-orange-200/30 dark:bg-orange-500/10 border-orange-200/90 dark:border-orange-400/40 text-orange-800 dark:text-orange-200',
  danger: 'border bg-red-200/30 dark:bg-red-500/10 border-red-200/90 dark:border-red-400/40 text-red-800 dark:text-red-200',
}

const Badge = ({ styles = '', variant, size, label, children }) => {
  const variantStyle = variants[variant] || ''
  const sizeStyle = sizes[size] || ''

  return (
    <div
      className={`
        ${base} 
        ${variantStyle} 
        ${sizeStyle}
        ${styles}
      `}
    >
      {label}
      {children}
    </div>
  )
}

export default Badge