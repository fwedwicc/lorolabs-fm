import React from 'react'
import { Hero, About } from './components'
import { Nav, Footer } from './components/ui'
import useLenis from './hooks/useLenis.js'

const App = () => {
  useLenis()

  return (
    <main className='bg-neutral-50'>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </main>
  )
}

export default App