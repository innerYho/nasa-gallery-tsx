import React from 'react';
import
// ReactDOM, 
{ hydrateRoot } from 'react-dom/client';
// import './assets/favicon.ico'
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

// El error es porque react lo identifica como un error de hidratación pero no genera conflictos
const initialProps = window.__INITIAL_PROPS__

// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<App />);

const container = document.getElementById('app')
console.log(initialProps)

//renderizado en reactDomServer
hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps} />
  </BrowserRouter>
)




