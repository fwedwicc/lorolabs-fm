import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <div className='flex flex-col items-center fixed w-full top-0 z-50 py-6'>
      <nav className='flex items-center justify-between rounded-full p-1 bg-white border w-full max-w-6xl'>
        <img src="https://placehold.co/30x30" alt="" className='size-10' />

        <div className='flex items-center gap-1'>
          <Button variant='secondary' label='Get Started' />
          <Button variant='secondary' label='Get Started' />
          <Button variant='secondary' label='Get Started' />
          <Button variant='secondary' label='Get Started' />
        </div>

        <Button variant='primary' label='Get Started' />
      </nav>
    </div>
  )
}

export default Nav