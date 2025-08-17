import React from 'react';
import Home1 from './Home1'
import Products from './Products';
import About from './About'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

function Home() {
  return (  
    <>
      <Navbar />
      <Home1 />
      <Products />
      <About />
      <Contact />

    </>
  )
}

export default Home
