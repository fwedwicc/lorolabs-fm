import React from 'react'
import { TbCheck } from "react-icons/tb"

const Checkbox = ({ variant, name, value, id, label, styles, checkboxStyles, icon, children, onChange }) => {
  return (
    <>
      {/* Default Checkbox */}
      {variant === 'default' ? (
        <label htmlFor={id} className={`${styles} flex items-center gap-2 cursor-pointer select-none`}>
          <input
            id={id}
            type="checkbox"
            name={name}
            onChange={onChange}
            value={value}
            className="peer sr-only"
          />
          <div className="size-5 rounded-md border border-neutral-300 bg-neutral-50 flex items-center justify-center peer-checked:bg-red-800 peer-checked:border-red-800 transition-colors duration-200 z-10">
            <TbCheck className="stroke-4 size-3.5 text-neutral-50 opacity-100" />
          </div>
          {children}
        </label>
        // Grouped Checkbox
      ) : variant === 'group-checkbox' ? (
        <label htmlFor={id} className={`${styles} flex justify-between gap-4 border border-neutral-200 bg-neutral-100/40 transition-all duration-300 ease-in-out hover:bg-neutral-200/40 cursor-pointer has-checked:border-red-800 has-checked:ring-1 has-checked:ring-red-800`}>
          {children}
          <input
            id={id}
            type="checkbox"
            name={name}
            onChange={onChange}
            value={value}
            className="peer sr-only"
          />
          <div className={`${checkboxStyles} size-5 rounded-md border border-neutral-300 bg-neutral-50 flex items-center justify-center peer-checked:bg-red-800 peer-checked:border-red-800 transition-colors duration-200 z-10`}>
            <TbCheck className="stroke-4 size-3.5 text-neutral-50 opacity-100" />
          </div>
        </label>
        // Custom Checkbox
      ) : variant === 'custom-checkbox' ? (
        <label htmlFor={id} className={`${styles} flex justify-between gap-4 border border-neutral-200 bg-neutral-100/40 transition-all duration-300 ease-in-out hover:bg-neutral-200/40 cursor-pointer has-checked:border-red-800 has-checked:ring-1 has-checked:ring-red-800`} >
          <input
            id={id}
            type="checkbox"
            name={name}
            onChange={onChange}
            value={value}
            className="peer sr-only"
          />
          {children}
          <div className='opacity-0 peer-checked:opacity-100 transition duration-300 ease-in-out'>
            {icon}
          </div>
        </label>
      ) : null}
    </>
  )
}

export default Checkbox