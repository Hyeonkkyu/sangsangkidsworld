import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import FloatingBtn from './components/FloatingBtn.js';
import Home from './pages/Home.js';
import Faq from './pages/FN_faqList';
import FaqContent from './pages/FN_faqListContent';
import Notice from './pages/FN_noticeList';
import NoticeContent from './pages/FN_noticeListContent';
import Bexco from './pages/Bexco';
import Exco from './pages/Exco';
import Footer from './components/Footer.js';
import './css/main.scss';

const App = () => {
  return (
    <>
      <FloatingBtn />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/faqContent/:contNum' element={<FaqContent />} />
        <Route path='/noticeContent/:contNum' element={<NoticeContent />} />
        <Route path='/bexco' element={<Bexco />} />
        <Route path='/exco' element={<Exco />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App