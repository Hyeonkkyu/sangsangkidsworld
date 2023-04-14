import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import './css/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App