import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Galaxies } from '../pages/Galaxies';
import { GlobalStyles } from '../GLobalStyle/GlobalStyle';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';


export const App = (props) => {
  return (
    // <BrowserRouter>
    <>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path='/' />
        <Route path='/galaxias' element={<Galaxies />} />
      </Routes>
      <Footer />
    </>
    // </BrowserRouter>
  );
}

export default App;
