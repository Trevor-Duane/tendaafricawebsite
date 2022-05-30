import React from 'react';
import Home from './pages/HomePage/Home';
import Contact from './pages/ContactPage/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
