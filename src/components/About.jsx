import React, { useEffect, useRef } from 'react'
import { Button } from './ui'
import { BgCard1, BgCard2 } from '../assets/about'
import { TbSend } from 'react-icons/tb'
import { DotGridLeft, DotGridRight } from '../assets'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const firstImageRef = useRef(null)
  const secondImageRef = useRef(null)

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

      tl.fromTo(firstImageRef.current, { scale: 0.82 }, { scale: 1, ease: 'none' }, 0)
      tl.fromTo(secondImageRef.current, { scale: 1.14 }, { scale: 1, ease: 'none' }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='about' ref={sectionRef} className='relative flex items-center justify-center py-12 scroll-mt-28'>
      <img src={DotGridLeft} alt="Dot Grid Left" className='absolute left-0 top-0 h-auto z-0' />
      <img src={DotGridRight} alt="Dot Grid Right" className='absolute right-0 top-0 h-auto z-0' />

      <div className='grid grid-cols-2 gap-6 w-full max-w-6xl'>

        <div className='relative border-5 rounded-3xl h-148 bg-white border-neutral-200 overflow-hidden'>
          <img ref={firstImageRef} src={BgCard1} alt="About Card Background" className='absolute inset-0 w-full h-full object-cover z-0 rounded-2xl' />
          <div className='relative z-10 p-12 w-full space-y-3'>
            <h2>Creative Tech Studio Inspired by Flight & Fueled by Imagination</h2>
            <p className='text-neutral-200 w-full max-w-xs'>At Loro, we blend creativity and technology, specializing in web/app development, consulting, and AI-generated content. Discover our unique services and innovative solutions.</p>
            <Button variant='outline' label='Learn More'>
              <TbSend className='text-lg' />
            </Button>
          </div>
        </div>

        <div className='relative flex items-end border-5 rounded-3xl h-148 bg-white border-neutral-200 overflow-hidden'>
          <img ref={secondImageRef} src={BgCard2} alt="About Card Background" className='absolute inset-0 w-full h-full object-cover z-0' />
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