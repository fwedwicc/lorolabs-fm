import React from 'react'

const Input = ({ label, placeholder, id, type, name, value, onChange, onInput, onInvalid, styles, required, optional, inputStyles, disabled }) => {
  return (
    <fieldset className={`flex flex-col ${styles}`}>
      <div className='flex items-start'>
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} md:mb-1.5 mb-1`}>
          {label}
        </label>
        {required && <span className='text-red-500 dark:text-red-400 ml-1'>*</span>}
        {optional && <span className='text-neutral-400 ml-1 font-normal text-sm'> (Optional)</span>}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onInput={onInput}
        onInvalid={onInvalid}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex w-full px-3 py-[7px] text-sm border border-neutral-200 dark:border-neutral-700 bg-neutral-100/40 dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/60 rounded-[11px] focus:outline-none focus:ring-[3px] focus:ring-red-200/50 dark:focus:ring-red-300/20 focus:border-red-300/70 dark:focus:border-red-400 focus:bg-white dark:focus:bg-neutral-800 placeholder:text-neutral-400/70 dark:text-neutral-300 transition duration-300 ease-in-out ${disabled ? 'bg-neutral-100/40 text-neutral-600' : ''} ${inputStyles}`}
      />
    </fieldset>
  )
}

export default Input