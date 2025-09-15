import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='bg-color1 w-screen min-h-screen'>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App  