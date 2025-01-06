import React, { Suspense } from 'react'
import {BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
