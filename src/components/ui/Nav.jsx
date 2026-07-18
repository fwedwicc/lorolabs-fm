import React from 'react'
import Button from './Button'
import { LoroLogo } from '../../assets'

const Nav = () => {
  const handleScrollTo = (targetId) => {
    const target = document.getElementById(targetId)

    if (!target) return

    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(target, {
        offset: -40,
      })
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='flex flex-col items-center fixed w-full top-0 z-50 py-6'>
      <nav className='flex items-center justify-between rounded-full p-1.5 bg-white border border-neutral-200/30 w-full shadow-xl shadow-neutral-400/5 max-w-3xl overflow-hidden'>
        <img src={LoroLogo} alt="Loro Labs Logo" className='w-12 h-auto shrink-0 ms-2' />

        <div className='flex items-center gap-1'>
          <Button variant='ghost' className='hover:bg-neutral-100' type='button' label='Home' onClick={() => handleScrollTo('hero')} />
          <Button variant='ghost' className='hover:bg-neutral-100' type='button' label='About' onClick={() => handleScrollTo('about')} />
          <Button variant='ghost' className='hover:bg-neutral-100' type='button' label='Services' onClick={() => handleScrollTo('services')} />
          <Button variant='ghost' className='hover:bg-neutral-100' type='button' label='Contact' onClick={() => handleScrollTo('contact')} />
        </div>

        <Button variant='primary' type='button' label='Get Started' onClick={() => handleScrollTo('contact')} />
      </nav>
    </div>
  )
}

export default Nav