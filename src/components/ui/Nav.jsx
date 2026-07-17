import React from 'react'
import Button from './Button'
import { LoroLogo } from '../../assets'

const Nav = () => {
  return (
    <div className='flex flex-col items-center fixed w-full top-0 z-50 py-6'>
      <nav className='flex items-center justify-between rounded-full p-1.5 bg-white border border-neutral-200/30 w-full shadow-xl shadow-neutral-400/5 max-w-3xl overflow-hidden'>
        <img src={LoroLogo} alt="Loro Labs Logo" className='w-12 h-auto shrink-0 ms-2' />

        <div className='flex items-center gap-1'>
          <Button variant='ghost' label='Home' />
          <Button variant='ghost' label='About' />
          <Button variant='ghost' label='Services' />
          <Button variant='ghost' label='Contact' />
        </div>

        <Button variant='primary' label='Get Started' />
      </nav>
    </div>
  )
}

export default Nav