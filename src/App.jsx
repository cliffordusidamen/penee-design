import React from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Calculator />
      <Footer />
    </div>
  )
}

export default App
