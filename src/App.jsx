import React, { Suspense } from 'react'
import {BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

// VIEWS
import Home from './views/Home'
import Resume from './views/Resume'
import Contact from './views/Contact'
import Current from './views/Current'
import Past from './views/Past'
import FrontEnd from './views/FrontEnd'
import BackEnd from './views/BackEnd'
import FullStack from './views/FullStack'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/current" element={<Current />} />
          <Route path="/past" element={<Past />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/backend" element={<BackEnd />} />
          <Route path="/fullstack" element={<FullStack />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
