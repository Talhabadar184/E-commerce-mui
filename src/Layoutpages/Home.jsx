import React from 'react';
import Home1 from './Home1'
import Navbar from '../components/navbar';
import Products from './Products';
import About from './About'
import Contact from '../components/contact';

function Home() {
  return (  
    <>
   <Navbar/>
   <Home1/>
   <Products />
   <About/>
   <Contact/>
  
    </>
  )
}

export default Home
