import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Oferta from './Oferta';
import Header from './components/Header';
import Produtos from './Produtos'
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Oferta" element={<Oferta/>}/>
      <Route path="/components"element={<Header/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)



