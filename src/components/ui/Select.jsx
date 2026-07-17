import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TbChevronDown } from "react-icons/tb"

const Select = ({ id, label, required, styles, inputStyles, children, options = [], placeholder = "Choose", value, onChange, noChoose = false, scrollable = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const handleSelect = (option) => {
    onChange?.(option)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <fieldset className={`relative flex flex-col ${styles}`} ref={selectRef}>
      {/* Label */}
      <div className='flex items-start'>
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} mb-1 text-sm`}>
          {label}
        </label>
        {required && <span className='text-red-500 ml-1'>*</span>}
      </div>
      {/* Select */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputStyles} flex w-full items-center justify-between px-4 py-[11px] text-sm border-[1.3px] border-neutral-100 bg-white hover:bg-neutral-50 rounded-[12px] focus:outline-none focus:border-[#CA2840] focus:bg-white text-neutral-900 transition duration-300 ease-in-out cursor-pointer`}
      >
        <div className='flex items-center gap-2'>
          {children}
          <p>{value || placeholder}</p>
        </div>
        <TbChevronDown className={`transition-smooth ${isOpen ? "rotate-180" : ''}`} />
      </button>
      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            // transition={{
            //   enter: { type: 'spring', stiffness: 270, damping: 14, bounce: 0.45 },
            //   exit: { duration: 0.2, ease: 'easeIn' }
            // }}
            // transition={{ duration: 0.2, ease: 'easeIn' }}
            transition={{ duration: 0.4, ease: [0.68, -0.4, 0.265, 1.4] }}
            className={`${label ? 'mt-18' : 'mt-11.5'} ${scrollable ? 'overflow-y-auto max-h-[11rem]' : ''} space-y-0.5 absolute w-full bg-white border border-neutral-200/50 rounded-[12px] p-1 shadow-xl shadow-neutral-300/10 z-50 drawer-custom-scrollbar`}
          >
            {!noChoose && (
              <button
                type="button"
                disabled
                className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Choose
              </button>
            )}
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800
              ${value === option ? "bg-neutral-200/50" : "hover:bg-neutral-200/50"}`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  )
}

export default Select