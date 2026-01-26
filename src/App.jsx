import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/works/Works'
import About from './components/about/About'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Services from './components/services/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
 
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path='*' element={<About />} />
      </Routes>
      <Works />
      <Services />
      <Contact />
      <Footer />

    </>
  )
}

export default App
