import React from 'react'
import { Button, GradualBlur } from './ui'
import { HeroBg, HeroBlur } from '../assets/hero'
import { LoroIconWhite } from '../assets'
import { TbSend, TbDeviceDesktopCode, TbBulb, TbSparkles } from 'react-icons/tb'


const Hero = () => {
  return (
    <section className='h-screen p-2'>
      <div className='relative size-full h-full flex items-center justify-center border rounded-3xl overflow-hidden'>
        <img src={HeroBg} alt="Hero Background" className='size-full h-full object-cover absolute' />
        <GradualBlur
          target="parent"
          position="bottom"
          height="34rem"
          strength={2}
          divCount={4}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={20}
        />
        <div className='space-y-4 flex flex-col items-center justify-center w-full max-w-6xl z-30 pt-14'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img src={LoroIconWhite} alt="Loro Icon" className='w-12 h-auto mb-2' />
            <h1 className='text-center'>Creative Tech Studio for <br /> Innovative Solutions</h1>
            <p>Explore our app, services, and tailored solutions today!</p>
            <Button variant='outline' label='Get quote' className='mt-1.5'>
              <TbSend className='text-lg' />
            </Button>
          </div>

          <div className='grid grid-cols-3 gap-3 mt-8'>
            <div className='p-5 rounded-3xl h-70 border border-white/20'>
              <TbDeviceDesktopCode className='text-2xl text-indigo-300' />
              <h4>Web & App Development</h4>
              <p>Custom solutions for your digital needs and goals Custom solutions figital needs and goals..</p>
            </div>
            <div className='p-5 rounded-3xl h-70 border border-white/20'>
              <TbBulb className='text-2xl text-violet-300' />
              <h4>Web & App Development</h4>
              <p>Custom solutions for your digital needs and goals Custom solutions figital needs and goals..</p>
            </div>
            <div className='p-5 rounded-3xl h-70 border border-white/20'>
              <TbSparkles className='text-2xl text-rose-300' />
              <h4>Web & App Development</h4>
              <p>Custom solutions for your digital needs and goals Custom solutions figital needs and goals..</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero