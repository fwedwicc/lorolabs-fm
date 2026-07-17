import React from 'react'

const Input = ({ label, placeholder, id, type, name, value, onChange, onInput, onInvalid, styles, required, optional, inputStyles, disabled }) => {
  return (
    <fieldset className={`flex flex-col ${styles}`}>
      <div className='flex items-start'>
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} mb-1 text-sm`}>
          {label}
        </label>
        {required && <span className='text-red-500 ml-1'>*</span>}
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
        className={`flex w-full px-4 py-[11px] text-sm border-[1.3px] border-neutral-100 bg-white hover:bg-neutral-50 rounded-[12px] focus:outline-none focus:border-[#CA2840] focus:bg-white placeholder:text-neutral-400/70 text-neutral-900 transition duration-300 ease-in-out ${disabled ? 'bg-neutral-100/40 text-neutral-600' : ''} ${inputStyles}`}
      />
    </fieldset>
  )
}

export default Input