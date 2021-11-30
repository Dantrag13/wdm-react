import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Advertisment from './components/Advertisment/Advertisment';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Advertisment />
      <Form />
      <Footer />
    </div>
  )
}
