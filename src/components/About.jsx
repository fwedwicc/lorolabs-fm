import React from 'react'
import { Button } from './ui'
import { BgCard1, BgCard2 } from '../assets/about'
import { TbSend } from 'react-icons/tb'

const About = () => {
  return (
    <section className='flex items-center justify-center py-12'>
      <div className='grid grid-cols-2 gap-6 w-full max-w-6xl'>

        <div className='relative border-5 rounded-3xl h-148 bg-white border-neutral-200 overflow-hidden'>
          <img src={BgCard1} alt="About Card Background" className='absolute inset-0 w-full h-full object-cover z-0' />
          <div className='relative z-10 p-12 w-full space-y-3'>
            <h2>Creative Tech Studio Inspired by Flight & Fueled by Imagination</h2>
            <p className='text-neutral-200 w-full max-w-xs'>At Loro, we blend creativity and technology, specializing in web/app development, consulting, and AI-generated content. Discover our unique services and innovative solutions.</p>
            <Button variant='outline' label='Learn More'>
              <TbSend className='text-lg' />
            </Button>
          </div>
        </div>

        <div className='relative flex items-end border-5 rounded-3xl h-148 bg-white border-neutral-200 overflow-hidden'>
          <img src={BgCard2} alt="About Card Background" className='absolute inset-0 w-full h-full object-cover z-0' />
          <div className='relative z-10 p-12 w-full space-y-3'>
            <h2>About Loro Labs</h2>
            <p className='w-full max-w-xs text-neutral-200'>Our creative tech studio thrives at the intersection of creativity and technology, offering exceptional services tailored to your business's needs. Let's innovate together.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About