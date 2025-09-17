import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Home from './pages/Home'
import Skills from './pages/Skills'


const App = () => {
  return (
    <div className="bg-color5 w-screen min-h-screen scroll-smooth">
      <div className='fixed z-10'>
        
      <Navbar />
      </div>

      <section id="/">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App  