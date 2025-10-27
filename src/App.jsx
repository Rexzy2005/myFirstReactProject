import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import { customFunction } from './utils/customFunction'

const App = () => {
  const result = customFunction('Pererat', 40, 2028, 20, 30);
  console.log(result);
  


  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App