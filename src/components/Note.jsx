import React, { useEffect, useRef } from 'react'
import { NoteBg } from '../assets/note'
import { LorolabsLogo } from '../assets'
import { TbQuoteFilled } from 'react-icons/tb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Note = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { width: '86%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 1,
            markers: false,
            start: 'top 80%',
            end: 'bottom 40%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='h-screen flex items-center justify-center p-2'>
      <div ref={containerRef} className='relative size-full h-full flex items-center justify-center rounded-3xl overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed'
          style={{ backgroundImage: `url(${NoteBg})` }}
          aria-hidden='true'
        />
        <div className='space-y-2 gap-2 flex flex-col items-center justify-center w-full max-w-6xl z-30'>
          <TbQuoteFilled className='size-14 text-white' />
          <h2 className='text-center'>A Note From the Founders</h2>
          <span className='w-full max-w-xl text-center text-neutral-200 leading-tight italic'>Loro Labs began with a simple goal: to make tech feel less like a barrier and more like a bridge. Whether it's learning a language or launching an idea, the right tools can make all the difference. We build with empathy, creativity, and purpose—to help you move forward.
            <br />
            <br />
            Lets build something great together.
          </span>
          <div className='relative size-18 rounded-full mt-4'>
            <img src={LorolabsLogo} alt="Loro Labs Logo" className='size-full absolute inset-0 m-auto' />
          </div>
          <p className='text-center'>Yours, <br />The Loro Labs Team</p>
        </div>
      </div>
    </section>
  )
}

export default Note