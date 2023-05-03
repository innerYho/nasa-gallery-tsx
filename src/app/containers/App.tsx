import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Galaxies } from '../pages/Galaxies';
import { GlobalStyles } from '../GLobalStyle/GlobalStyle';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { Home } from '../pages/Home';


export const App = (props) => {
  return (
    // <BrowserRouter>
    <>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/galaxias' element={<Galaxies />} />
        <Route path='/apollo' element={<Galaxies />} />
      </Routes>
      <Footer />
    </>
    // </BrowserRouter>
  );
}

export default App;
