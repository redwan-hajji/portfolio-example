import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
