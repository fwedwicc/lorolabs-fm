import React from 'react'
import { Button, Input, Select, Checkbox, Badge } from './ui'
import { BgCard1 } from '../assets/about'
import { TbSend, TbMapPin, TbClock, TbMail, TbPhone, TbBrandTelegram } from 'react-icons/tb'
import { DotGridLeft, DotGridRight } from '../assets'

const Contact = () => {
  const contactCards = [
    {
      icon: TbPhone,
      label: 'Phone',
      value: '+63 927 128 1292',
    },
    {
      icon: TbMail,
      label: 'Email',
      value: 'info@lorolabs.ai',
    },
    {
      icon: TbBrandTelegram,
      label: 'Telegram',
      value: 'loro labs',
    },
  ]

  return (
    <section className='relative flex items-center justify-center p-2 py-12'>
      <div className='relative flex items-start gap-8 w-full max-w-6xl overflow-hidden'>
        <img src={DotGridLeft} alt="Dot Grid Left" className='pointer-events-none absolute left-0 top-0 z-0 h-auto' />
        <img src={DotGridRight} alt="Dot Grid Right" className='pointer-events-none absolute right-0 top-0 z-0 h-auto' />

        <div className='relative z-10 flex items-start w-full max-w-[44%] flex-col'>
          <Badge variant='neutral' size='sm' label='CONTACT US' />

          <h2 className='max-w-lg text-neutral-900'>Let&apos;s build something <br /> amazing together.</h2>
          <p className='mt-4 max-w-xl text-neutral-600'>
            We&apos;re here to help with your creative tech needs. Reach out for inquiries about our services, app showcase, or pricing details.
          </p>

          <div className='mt-10 grid grid-cols-3 gap-3'>
            {contactCards.map(({ icon: Icon, label, value }) => (
              <div key={label} className='rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm'>
                <Icon className='text-2xl text-neutral-400' />
                <p className='mt-3 text-sm text-neutral-500'>{label}</p>
                <p className='mt-6 text-sm font-medium text-rose-500'>{value}</p>
              </div>
            ))}
          </div>

          <div className='mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950 shadow-2xl w-full'>
            <img src={BgCard1} alt="Office interior" className='h-60 w-full object-cover' />
          </div>

          <div className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div className='flex items-center gap-3 text-sm text-white/70'>
              <TbMapPin className='text-xl text-white/80' />
              <div>
                <p className='font-medium text-white'>Quezon City</p>
                <p>Philippines</p>
              </div>
            </div>
            <div className='flex items-center gap-3 text-sm text-white/70'>
              <TbClock className='text-xl text-white/80' />
              <div>
                <p className='font-medium text-white'>Monday to Friday</p>
                <p>9 - 5 PHT</p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative z-10 w-full max-w-[56%] rounded-3xl bg-[#FDFDFD] border border-[#F0F0F0] p-6'>
          <h4 className='text-neutral-900'>Tell us about your project</h4>

          <form className='mt-6 space-y-5'>
            <div className='grid gap-4 md:grid-cols-2'>
              <Input id='name' name='name' label='Name' placeholder='E.g. John Doe' required />
              <Input id='company' name='company' label='Company' placeholder='E.g. IBM' />
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <Input id='email' name='email' type='email' label='Email' placeholder='E.g. you@company.com' required />
              <Input id='phone' name='phone' type='tel' label='Phone' placeholder='E.g. +63 951 432 8201' required />
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <Select id='projectType' label='Project type' required placeholder='Select type' options={['Web & App Development', 'IT Consulting', 'AI Content']} noChoose />
              <Select id='budgetRange' label='Budget range' placeholder='Select range' options={['Below $5k', '$5k - $15k', '$15k+']} noChoose />
            </div>

            <fieldset className='flex flex-col'>
              <label htmlFor='message' className='mb-1.5 text-sm text-neutral-700'>Message</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                placeholder='Tell us about your project goals, timeline, any specific requirements'
                className='w-full rounded-[11px] border border-neutral-200 bg-neutral-100/40 px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-400/80 focus:outline-none focus:ring-[3px] focus:ring-red-200/50 focus:border-red-300/70 focus:bg-white transition duration-300 ease-in-out'
              />
            </fieldset>

            <Checkbox variant='default' id='terms' name='terms' styles='text-sm text-neutral-600'>
              <span>
                I agree to the{' '}
                <a href='#' className='underline underline-offset-2'>terms &amp; conditions</a>{' '}
                and{' '}
                <a href='#' className='underline underline-offset-2'>privacy policy</a>.
              </span>
            </Checkbox>

            <div className='pt-2'>
              <Button variant='primary' label='Submit Inquiry' className='w-full'>
                <TbSend className='text-lg' />
              </Button>
              <p className='mt-4 text-center text-xs text-neutral-500'>We respond within 24 hours. No spam, ever.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact