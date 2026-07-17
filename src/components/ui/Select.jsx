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
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} mb-1.5`}>
          {label}
        </label>
        {required && <span className='text-red-500 ml-1'>*</span>}
      </div>
      {/* Select */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${inputStyles} w-full flex justify-between items-center md:gap-2 gap-1.5 md:px-3 px-2.5 md:py-2 py-1.5 text-sm border border-neutral-200 dark:border-neutral-700 bg-neutral-100/40 dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/60 rounded-[11px] focus:outline-none focus:ring-[3px] focus:ring-red-200/50 dark:focus:ring-red-300/20 focus:border-red-300/70 dark:focus:border-red-400 focus:bg-white dark:focus:bg-neutral-800 placeholder:text-neutral-400/70 dark:text-neutral-300 transition duration-300 ease-in-out cursor-pointer`}
      >
        <div className='flex-center gap-2'>
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
            className={`${label ? 'mt-18' : 'mt-11.5'} ${scrollable ? 'overflow-y-auto max-h-[11rem]' : ''} space-y-0.5 absolute w-full bg-white dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700 rounded-[12px] p-1 shadow-xl shadow-neutral-400/10 dark:shadow-neutral-900/20 z-50 drawer-custom-scrollbar`}
          >
            {!noChoose && (
              <button
                type="button"
                disabled
                className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 dark:text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Choose
              </button>
            )}
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 dark:text-neutral-300
              ${value === option ? "bg-neutral-200/50 dark:bg-neutral-700/70" : "hover:bg-neutral-200/50 dark:hover:bg-neutral-700/70"}`}
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