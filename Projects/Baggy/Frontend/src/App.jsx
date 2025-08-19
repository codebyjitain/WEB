import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginAndRegisterUser from './pages/LoginAndRegisterUser'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import AdminPanel from './pages/AdminPanel'
import NewProduct from './pages/NewProduct'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import { ToastContainer } from "react-toastify"
import Logout from './components/Logout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginAndRegisterUser />} />
        <Route path='/' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/newproduct' element={<NewProduct />} />
        <Route path='/cart' element={
          <UserProtectedWrapper>
            <Cart />
          </UserProtectedWrapper>
        } />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/logout' element={<Logout />} />

      </Routes>

      <ToastContainer
        position="top-right"  // position change kar sakta hai
        autoClose={3000}      // 3 sec me close hoga
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"       // light, dark, colored
      />
    </div>
  )
}

export default App