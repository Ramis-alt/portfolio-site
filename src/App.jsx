import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Info from './components/Info'


function App() {

  return (
    <>
      <div className="container">
        <Info />
        <Footer />
      </div>
    </>
  )
}

export default App
