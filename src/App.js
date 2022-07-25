import React from 'react';
import Home from './pages/HomePage/Home';
import Contact from './pages/ContactPage/Contact';
import Products from './Components/ProductsComponent/Products';
import Careers from './pages/CareersPage/Careers';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import About from './Components/AboutComponent/About';
import Partners from './Components/PartnersComponent/Partners';



export default function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/#about-us" element={<About />}></Route>
          <Route path="/#partners" element={<Partners />}></Route>
          <Route path="/#solutions" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
