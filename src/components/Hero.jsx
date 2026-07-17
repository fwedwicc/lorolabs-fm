import React, { useEffect, useRef } from 'react'
import { Button, GradualBlur } from './ui'
import { HeroBg, HeroBlur, WebAppDevIllustration, ITConsultingIllustration, AIContentIllustration } from '../assets/hero'
import { LoroIconWhite } from '../assets'
import { TbSend, TbDeviceDesktopCode, TbBulb, TbSparkles, TbChevronDown } from 'react-icons/tb'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 0 },
        {
          y: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            markers: false,
            start: 'top top',
            end: 'bottom top',
            invalidateOnRefresh: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='h-screen p-2'>
      <div className='relative size-full h-full flex items-center justify-center rounded-3xl overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed'
          style={{ backgroundImage: `url(${HeroBg})` }}
          aria-hidden='true'
        />
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
        <div ref={contentRef} className='space-y-4 flex flex-col items-center justify-center w-full max-w-6xl z-30 pt-24'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <img src={LoroIconWhite} alt="Loro Icon" className='w-12 h-auto mb-2' />
            <h1 className='text-center'>Creative Tech Studio for <br /> Innovative Solutions</h1>
            <p>Explore our app, services, and tailored solutions today!</p>
            <Button variant='outline' label='Get quote' className='mt-1.5'>
              <TbSend className='text-lg' />
            </Button>
          </div>

          <div className='grid grid-cols-3 gap-3 mt-8'>
            <div className='relative p-5 space-y-2.75 rounded-3xl h-70 border border-white/20'>
              <TbDeviceDesktopCode className='text-2xl text-indigo-400 z-10' />
              <h4 className='text-white'>Web & App Development</h4>
              <p className='text-neutral-300'>Custom solutions for your digital needs and goals Custom solutions figital needs and goals.</p>
              <img src={WebAppDevIllustration} alt="Web App Development" className='absolute bottom-0 -translate-x-1/2 left-1/2 h-auto' />
            </div>
            <div className='relative p-5 space-y-2.75 rounded-3xl h-70 border border-white/20'>
              <TbBulb className='text-2xl text-indigo-400 z-10' />
              <h4 className='text-white'>IT Consulting</h4>
              <p className='text-neutral-300'>Technology guidance to help you pick the right tools and plan your roadmap without costly mistakes.</p>
              <img src={ITConsultingIllustration} alt="IT Consulting" className='absolute bottom-0 -translate-x-1/2 left-1/2 h-auto' />
            </div>
            <div className='relative p-5 space-y-2.75 rounded-3xl h-70 border border-white/20'>
              <TbSparkles className='text-2xl text-rose-400 z-10' />
              <h4 className='text-white'>AI Content</h4>
              <p className='text-neutral-300'>AI-generated photos, videos, and hero animations that give your brand a look your competitors cannot replicate.</p>
              <img src={AIContentIllustration} alt="AI Content" className='absolute bottom-0 -translate-x-1/2 left-1/2 h-auto' />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className='z-10 mt-2'
          >
            <TbChevronDown className='text-2xl text-neutral-300' />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero