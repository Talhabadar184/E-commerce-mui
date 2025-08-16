// App.js
import React,{ useState } from 'react';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import GlobalState from './Context/Index.jsx';

import Signup from './Layoutpages/Signup';
import Home from './Layoutpages/Home';
import Cart from './Layoutpages/Cart';
import Producttile from './Layoutpages/Producttile';
import Login from './Layoutpages/Login';

function App() {
 
  
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/Signup" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/producttile/:productId" element={<Producttile />} />
        <Route path="/Home/Layoutpages/Cart" element={<Cart  />} />
        <Route path="/Home/producttile/:productId/Layoutpages/Cart" element={<Cart  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
