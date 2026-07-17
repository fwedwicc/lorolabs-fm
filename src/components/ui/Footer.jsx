import React from 'react'
import { DotGridLeft, DotGridRight } from '../../assets'
import { LorolabsLogo, LoroIconWhite } from '../../assets'
import { Button } from './'
import { TbBrandFacebook, TbBrandInstagram, TbBrandTiktok, TbBrandLinkedin, TbBrandGithub, TbMapPin, TbPhone, TbMail, TbSend } from 'react-icons/tb'

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Portfolio', 'Contact']
  const services = ['Web & App Development', 'IT Consulting', 'AI Content Creation']
  const socialLinks = [TbBrandFacebook, TbBrandInstagram, TbBrandTiktok, TbBrandLinkedin, TbBrandGithub]

  return (
    <section className='relative flex items-center justify-center p-2'>
      <div className='relative size-full overflow-hidden rounded-3xl bg-neutral-900 pt-12 pb-9'>

        <img src={DotGridLeft} alt="Dot Grid Left" className='pointer-events-none absolute left-0 top-0 z-0 h-auto' />
        <img src={DotGridRight} alt="Dot Grid Right" className='pointer-events-none absolute right-0 top-0 z-0 h-auto' />

        <div className='relative z-20 mx-auto w-full max-w-6xl flex flex-col'>

          {/*  */}
          <div className='flex items-start justify-between'>
            <div className='max-w-md space-y-4'>
              <div className='flex items-center gap-4'>
                <img src={LorolabsLogo} alt='Loro Labs' className='size-10 shrink-0' />
                <img src={LoroIconWhite} alt='Loro Labs' className='w-14 h-auto shrink-0' />
              </div>
              <p className='text-neutral-300'>
                We build websites that convert, <br /> apps that scale, and brands <br /> people remember.
              </p>
              <div className='flex items-center gap-4 text-neutral-300'>
                {socialLinks.map((Icon, index) => (
                  <a key={index} href='#' aria-label='Social link' className='transition hover:text-white/60'>
                    <Icon className='text-xl' />
                  </a>
                ))}
              </div>
            </div>
            <div className='flex gap-8'>
              <div>
                <h5 className='text-white'>Quick Links</h5>
                <ul className='mt-6 space-y-1.5 text-neutral-300'>
                  {quickLinks.map((item) => (
                    <li key={item}>
                      <a href='#' className='transition hover:text-white text-sm'>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className='text-white'>Services</h5>
                <ul className='mt-6 space-y-1.5 text-neutral-300'>
                  {services.map((item) => (
                    <li key={item}>
                      <a href='#' className='transition hover:text-white text-sm'>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='max-w-xs'>
                <h5 className='text-white'>Studio</h5>
                <div className='mt-6 space-y-4 text-neutral-300'>
                  <div className='flex items-start gap-3'>
                    <TbMapPin className='mt-0.5 text-xl text-white/75 shrink-0' />
                    <p>Unit 111 Spark Place, P. Tuazon Avenue cor. 10th Avenue, Araneta City, Cubao, Quezon City 1109, Philippines</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <TbPhone className='text-xl text-white/75' />
                    <p>+63 960 277 8783</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <TbMail className='text-xl text-white/75' />
                    <p>info@lorolabs.ai</p>
                  </div>
                </div>
                <Button variant='primary' label='Get quote' className='mt-6' />
              </div>
            </div>
          </div>

          <div className='my-10 h-px w-full bg-white/10' />

          <div className='relative flex items-center justify-between pt-14'>
            <p className='relative z-10 text-xs text-neutral-300'>
              © 2026 Loro Labs. All rights reserved.
            </p>
            <div className='relative z-10 flex items-center gap-6 text-xs text-neutral-300'>
              <a href='#' className='transition hover:text-white'>Privacy Policy</a>
              <a href='#' className='transition hover:text-white'>Terms &amp; Conditions</a>
            </div>
            <img src={LoroIconWhite} alt="Loro Labs" className='absolute bottom-[-2.4rem] left-1/2 w-80 h-auto -translate-x-1/2 opacity-10 z-40' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer