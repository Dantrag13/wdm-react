import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './ContactUs';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<div>root</div>} />
        <Route path="/expenses" element={<div>expenses</div>} />
        <Route path="/lalala" element={<div>lalalal</div>} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
  )
}
