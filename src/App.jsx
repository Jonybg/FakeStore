import React from 'react'
import { NavBar } from './Pages/Nav/NavBar'
import { Hero } from './Pages/Hero/Hero'
import { Info } from './Pages/Info/Info'
import { Outstanding } from './Pages/Outstanding/Outstanding'
import { Products } from './Pages/Products/Products'
import { Footer } from './Pages/Footer/Footer'
import { ContactForm } from './Pages/Contact/ContactForm'






export const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Info />
      <Outstanding />
      <Products />
      <ContactForm />
      <Footer />
    </>

  )
}
