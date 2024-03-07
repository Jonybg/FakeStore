import React from 'react';
import { NavBar } from './Pages/Nav/NavBar';
import { Hero } from './Pages/Hero/Hero';
import { Info } from './Pages/Info/Info';
import { Outstanding } from './Pages/Outstanding/Outstanding';
import { Products } from './Pages/Products/Products';
import { Footer } from './Pages/Footer/Footer';
import { ContactForm } from './Pages/Contact/ContactForm';
import { ContextProduct } from './Context/ProductsContext';
import { ContextCart } from './Context/CartContext';

export const App = () => {
  return (
    <ContextProduct>
      <ContextCart>
        <NavBar />
        <Hero />
        <Info />
        <Outstanding />
        <Products />
        <ContactForm />
        <Footer />
      </ContextCart>
    </ContextProduct>
  );
}
