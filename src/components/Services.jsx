import React, { useEffect, useRef } from 'react'
import { DotGridLeft, DotGridRight } from '../assets'
import { TbDeviceDesktopCode, TbBulb, TbSparkles, TbArrowUpRight } from 'react-icons/tb'
import { Badge } from './ui'
import { WebAppDevIllustration, ITConsultingIllustration, AIContentIllustration } from '../assets/services'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.8,
          markers: false,
          start: 'top 92%',
          end: 'top 58%',
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(headingRef.current, { yPercent: 12 }, { yPercent: 0, ease: 'none' }, 0)
      tl.fromTo(cardsRef.current, { yPercent: 18 }, { yPercent: 0, ease: 'none' }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='relative flex items-center justify-center p-2'>
      <div className='relative size-full h-full py-12 bg-neutral-900 flex items-center justify-center rounded-3xl overflow-hidden'>

        <img src={DotGridLeft} alt="Dot Grid Left" className='absolute left-0 top-0 h-auto z-0' />
        <img src={DotGridRight} alt="Dot Grid Right" className='absolute right-0 top-0 h-auto z-0' />

        <div className='w-full max-w-6xl z-20'>

          <div ref={headingRef} className='flex flex-col items-center gap-2'>
            <Badge variant='neutral' size='sm' label='OUR SERVICES' />
            <h2>Creative Tech Services</h2>
            <p className='text-neutral-200 text-center'>Explore our innovative solutions for web, app development, <br />and AI-generated content tailored for your needs.</p>
          </div>

          <div ref={cardsRef} className='grid grid-cols-3 gap-3 mt-8'>
            <div className='relative p-6 rounded-3xl h-120 bg-white overflow-hidden'>
              <img src={WebAppDevIllustration} alt="Web App Development" className='absolute right-0 top-0 z-0 pointer-events-none' />
              <div className='relative z-10 space-y-2.75'>
                <TbDeviceDesktopCode className='text-2xl text-indigo-400 z-10' />
                <h4 className='text-neutral-900'>Web & App Development</h4>
                <p className='text-neutral-600'>Custom solutions for your digital needs and goals Custom solutions figital needs and goals.</p>
              </div>
              <button className='absolute bottom-2.5 right-2.5 bg-neutral-900 size-12 rounded-full flex items-center justify-center'>
                <TbArrowUpRight className='text-2xl text-neutral-100' />
              </button>
            </div>

            <div className='relative p-6 rounded-3xl h-120 bg-white overflow-hidden'>
              <img src={ITConsultingIllustration} alt="IT Consulting" className='absolute right-0 top-0 z-0 pointer-events-none' />
              <div className='relative z-10 space-y-2.75'>
                <TbBulb className='text-2xl text-indigo-400 z-10' />
                <h4 className='text-neutral-900'>IT Consulting</h4>
                <p className='text-neutral-600'>Technology guidance to help you pick the right tools and plan your roadmap without costly mistakes.</p>
              </div>
              <button className='absolute bottom-2.5 right-2.5 bg-neutral-900 size-12 rounded-full flex items-center justify-center'>
                <TbArrowUpRight className='text-2xl text-neutral-100' />
              </button>
            </div>

            <div className='relative p-6 rounded-3xl h-120 bg-white overflow-hidden'>
              <img src={AIContentIllustration} alt="AI Content" className='absolute right-0 top-0 z-0 pointer-events-none' />
              <div className='relative z-10 space-y-2.75'>
                <TbSparkles className='text-2xl text-rose-400 z-10' />
                <h4 className='text-neutral-900'>AI Content</h4>
                <p className='text-neutral-600'>AI-generated photos, videos, and hero animations that give your brand a look your competitors cannot replicate.</p>
              </div>
              <button className='absolute bottom-2.5 right-2.5 bg-neutral-900 size-12 rounded-full flex items-center justify-center'>
                <TbArrowUpRight className='text-2xl text-neutral-100' />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services