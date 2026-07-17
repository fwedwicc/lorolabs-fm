import React from 'react'
import { Button, Input, Select, Checkbox, Badge } from './ui'
import { BgCard1 } from '../assets/about'
import { TbSend, TbMapPin, TbClock, TbMail, TbPhone, TbBrandTelegram } from 'react-icons/tb'
import { DotGridLeft, DotGridRight, LoroOffice } from '../assets'

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
      <img src={DotGridLeft} alt="Dot Grid Left" className='pointer-events-none absolute -translate-x-1/2 left-1/2 -bottom-24 z-0 h-auto' />
      <div className='relative flex items-start gap-8 w-full max-w-6xl overflow-hidden'>

        <div className='relative z-10 w-full max-w-[44%] flex-col'>
          <div className='space-y-4'>
            <Badge variant='neutral' size='sm' label='CONTACT' styles='inline-block opacity-70' />
            <h2 className='max-w-lg text-neutral-900'>Let&apos;s build something <br /> amazing together.</h2>
            <p className='mt-4 max-w-xl text-neutral-600'>
              We&apos;re here to help with your creative tech needs. Reach out for inquiries about our services, app showcase, or pricing details.
            </p>
          </div>
          <div className='mt-8 grid grid-cols-3 gap-2'>
            {contactCards.map(({ icon: Icon, label, value }) => (
              <div key={label} className='rounded-xl border border-neutral-200/70 bg-neutral-50 backdrop-blur-2xl p-4'>
                <div className='flex items-center gap-2'>
                  <Icon className='text-2xl text-neutral-400 stroke-[1.5px]' />
                  <p className='text-sm text-neutral-500'>{label}</p>
                </div>
                <p className='mt-6 text-sm font-medium text-[#CA2840]'>{value}</p>
              </div>
            ))}
          </div>
          <div className='mt-4 overflow-hidden rounded-2xl w-full border-[4px] border-neutral-200'>
            <img src={LoroOffice} alt="Office interior" className='h-50 w-full object-cover' />
          </div>
          <div className='mt-6 flex items-center justify-center gap-12 w-full'>
            <div className='flex items-center gap-3 text-sm text-neutral-500'>
              <TbMapPin className='size-8 stroke-[1.2px]' />
              <div>
                <p className='!text-sm font-medium !text-neutral-500'>Quezon City</p>
                <p className='!text-sm text-neutral-500'>Philippines</p>
              </div>
            </div>
            <div className='flex items-center gap-3 text-sm text-neutral-500'>
              <TbClock className='size-8 stroke-[1.2px]' />
              <div>
                <p className='!text-sm font-medium !text-neutral-500'>Monday to Friday</p>
                <p className='!text-sm text-neutral-500'>9 - 5 PHT</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full w-full max-w-[56%]'>
          <div className='relative z-10 rounded-3xl bg-[#FDFDFD] border border-[#F0F0F0] p-6'>
            <h4 className='text-neutral-900'>Tell us about your project</h4>

            <form className='mt-6 space-y-4'>
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
                <label htmlFor='message' className='mb-1 text-sm'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  placeholder='Tell us about your project goals, timeline, any specific requirements'
                  className='flex w-full px-4 py-[11px] text-sm border-[1.3px] border-neutral-100 bg-white hover:bg-neutral-50 rounded-[12px] focus:outline-none focus:border-[#CA2840] focus:bg-white placeholder:text-neutral-400/70 text-neutral-900 transition duration-300 ease-in-out'
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
              <Button variant='primary' label='Submit Inquiry' className='w-full'>
                <TbSend className='text-lg' />
              </Button>
            </form>
          </div>
          <div className='flex items-center justify-center mt-5'>
            <span className='text-center text-xs text-neutral-500'>We respond within 24 hours. No spam, ever.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact