import React, { useEffect, useRef } from 'react'
import { Badge, GradualBlur } from './ui'
import { Image1, Image2, Image3, Image4, Image5, Image6 } from '../assets/ai-content'
import { DotGridLeft, DotGridRight } from '../assets'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AIContent = () => {
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
    <section ref={sectionRef} className='relative flex items-center justify-center py-12 overflow-hidden'>
      <img src={DotGridLeft} alt="Dot Grid Left" className='absolute left-0 top-0 h-auto z-0' />
      <img src={DotGridRight} alt="Dot Grid Right" className='absolute right-0 top-0 h-auto z-0' />

      <GradualBlur
        target="parent"
        position="bottom"
        height="13rem"
        strength={2}
        divCount={4}
        curve="bezier"
        exponential
        opacity={1}
        zIndex={30}
      />
      <div className='w-full left-0 -bottom-12 z-30 bg-neutral-50/70 h-36 blur-xl absolute' />

      <div className='w-full max-w-6xl z-20'>

        <div ref={headingRef} className='flex flex-col items-center gap-2'>
          <Badge variant='neutral' size='sm' label='AI GENERATED' styles='opacity-70' />
          <h2 className='text-neutral-900'>AI Content Creation</h2>
          <p className='text-neutral-600 text-center'>Explore our creative tech projects and innovative app designs.</p>
        </div>

        <div ref={cardsRef} className='grid grid-cols-3 gap-3 mt-8'>
          <div className='flex flex-col gap-3'>
            <div className='h-52 relative overflow-hidden rounded-2xl'>
              <img src={Image1} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
            <div className='h-58 relative overflow-hidden rounded-2xl'>
              <img src={Image2} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='h-64 relative overflow-hidden rounded-2xl'>
              <img src={Image3} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
            <div className='h-46 relative overflow-hidden rounded-2xl'>
              <img src={Image4} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='h-44 relative overflow-hidden rounded-2xl'>
              <img src={Image5} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
            <div className='h-66 relative overflow-hidden rounded-2xl'>
              <img src={Image6} alt="AI Illustration" className='absolute inset-0 w-full h-full object-cover z-0' />
            </div>
          </div>

        </div>
      </div>




    </section>
  )
}

export default AIContent