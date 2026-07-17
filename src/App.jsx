import React from 'react'
import { Hero, About, Services, AIContent, Note } from './components'
import { Nav, Footer } from './components/ui'
import useLenis from './hooks/useLenis.js'

const App = () => {
  useLenis()

  return (
    <main className='bg-neutral-50'>
      <Nav />
      <Hero />
      <About />
      <Services />
      <AIContent />
      <Note />
      <Footer />
    </main>
  )
}

export default App