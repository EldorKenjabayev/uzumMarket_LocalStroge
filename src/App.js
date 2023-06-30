import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/NavComp/Navigation';
import Product from './Components/ProductComp/Product';
import Izbrann from './Components/IzbranniyComp/Izbrann';
import Backet from './Components/BacketComp/Backet';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<Product />} />
        <Route path='izbrann' element={<Izbrann/>}/>
        <Route path='Backet' element={<Backet/>}/>
      </Routes>
    </div>
  );
}

