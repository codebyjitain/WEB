import React from 'react'
import { Route,Routes} from 'react-router-dom'
import LoginAndRegisterUser from './pages/LoginAndRegisterUser'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AdminPanel from './pages/AdminPanel'
import NewProduct from './pages/NewProduct'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginAndRegisterUser/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/newproduct' element={<NewProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/account' element={<AdminPanel/>}/>
      </Routes>
    </div>
  )
}

export default App